#FRAUD/FAKE NGO DETECTION - LOGISTIC REGRESSION CLASSIFIER

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
import os

# Path to your dataset
folder_path = r"/Users/srishtivashisht/HopeConnect/data/dataset3"
file_path = os.path.join(folder_path, "fraud_fake_ngo_orphanage_weighted_realistic.csv")

#load dataset
df = pd.read_csv(file_path)


# Encode categorical column "entity_type"
le = LabelEncoder()
df['entity_type'] = le.fit_transform(df['entity_type'])   # NGO=1, Orphanage=0

# Features & Target
X = df[['entity_type','years_active','doc_verified','total_donations',
        'avg_donation_amount','donor_reviews_score','success_rate']]
y = df['label']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Feature scaling (important for logistic regression)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Logistic Regression Model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluation
print("✅ Model Evaluation")
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nConfusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Feature importance (coefficients)
feature_importance = pd.DataFrame({
    "Feature": X.columns,
    "Coefficient": model.coef_[0]
}).sort_values(by="Coefficient", ascending=False)

print("\n🔹 Feature Importance:")
print(feature_importance)
