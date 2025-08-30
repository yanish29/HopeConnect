#DONOR-NGO/ORPHANGE RECOMMENDATION SYSTEM - CONTENT BASED RECOMMENDATION(COSINE SIMILARITY)

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from surprise import SVD, Dataset, Reader
import numpy as np


path = r"C:\Users\kanis\OneDrive\Desktop\KANISHKA\PROJECT\orphange\data\dataset1"

donors = pd.read_csv(f"{path}\\donors_profiles.csv")
ngos = pd.read_csv(f"{path}\\ngos_profiles.csv")
orphanages = pd.read_csv(f"{path}\\orphanages_profiles.csv")
interactions = pd.read_csv(f"{path}\\donor_item_interactions.csv")

# 1. Content-Based Filtering
def content_based_recommender(donors, ngos, orphanages):
    # merge NGOs + Orphanages into single "items" table
    ngos["item_id"] = ngos["ngo_id"]
    orphanages["item_id"] = orphanages["orphanage_id"]
    items = pd.concat([
        ngos[["item_id", "need_categories", "location"]],
        orphanages[["item_id" , "need_categories",  "location"]]])
    # text representation
    items["text"] = items["need_categories"]  + " " + items["location"]
    donors["text"] = donors["preferred_category"] + " " + donors["location"]
    # TF-IDF + cosine
    vectorizer = TfidfVectorizer()
    item_vecs = vectorizer.fit_transform(items["text"])
    donor_vecs = vectorizer.transform(donors["text"])
    cosine_scores = cosine_similarity(donor_vecs, item_vecs)
    return cosine_scores, items

# 2. Collaborative Filtering (SVD)
def collaborative_filtering(interactions, donors, items):
    reader = Reader(rating_scale=(0, 3))
    data = Dataset.load_from_df(interactions[["donor_id", "item_id", "interaction"]], reader)
    trainset = data.build_full_trainset()
    svd = SVD()
    svd.fit(trainset)
    # predict scores donor-item
    cf_scores = np.zeros((len(donors), len(items)))
    for i, donor in enumerate(donors["donor_id"]):
        for j, item in enumerate(items["item_id"]):
            cf_scores[i, j] = svd.predict(donor, item).est
    return cf_scores

# 3. Hybrid Recommender
def hybrid_recommender(donors, ngos, orphanages, interactions, alpha=0.5, beta=0.5, top_k=5):
    cosine_scores, items = content_based_recommender(donors, ngos, orphanages)
    cf_scores = collaborative_filtering(interactions, donors, items)
    hybrid_scores = alpha * cosine_scores + beta * cf_scores
    recommendations = {}
    for i, donor in enumerate(donors["donor_id"]):
        top_idx = np.argsort(hybrid_scores[i])[::-1][:top_k]
        recs = []
        for idx in top_idx:
           item_id = items.iloc[idx]["item_id"]
           score = hybrid_scores[i, idx]
           recs.append((item_id, score))
        recommendations[donor] = recs
    return recommendations


recs = hybrid_recommender(donors, ngos, orphanages, interactions, alpha=0.6, beta=0.4, top_k=3)

# 4. Display Recommendations
for donor, rec_list in recs.items():
    print(f"\nRecommendations for Donor {donor}:")
    for item, score in rec_list:
        print(f" - Item {item} | Score: {score:.2f}")