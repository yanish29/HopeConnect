#DONATION IMPACT PREDICTION SYSTEM - LINEAR REGRESSION

import pandas as pd
import random
from datetime import datetime, timedelta
import os

# Parameters
num_donations = 4000
num_ngos = 1000
num_orphanages = 1000
ngo_ids = [f"N{i}" for i in range(1, num_ngos+1)]
orphanage_ids = [f"O{i}" for i in range(1, num_orphanages+1)]
campaign_types = ['Education', 'Food', 'Health', 'Shelter', 'Arts']
folder_path = r"C:\Users\kanis\OneDrive\Desktop\KANISHKA\PROJECT\orphange\data\dataset2"
os.makedirs(folder_path, exist_ok=True)
costs = {
    'Education': 150,      # per day
    'Food': 50,            # per meal
    'Health': 100,         # per day of healthcare
    'Arts': 100,           # per month per child
    'Shelter': 1000        # per square unit
}


# Initialize datasets dictionary
campaign_datasets = {c: [] for c in campaign_types}

for i in range(1, num_donations+1):
    donation_id = f"D{i}"
    donation_amount = random.randint(500, 5000)
    recipient_type = random.choice(['NGO','Orphanage'])
    recipient_id = random.choice(ngo_ids) if recipient_type == 'NGO' else random.choice(orphanage_ids)
    campaign_type = random.choice(campaign_types)
    children_supported = months_covered = 0
    timestamp = datetime.now() - timedelta(days=random.randint(0,30), hours=random.randint(0,23), minutes=random.randint(0,59))
    timestamp = timestamp.strftime("%Y-%m-%d %H:%M")
    
    # Calculate metrics depending on campaign type
    if campaign_type == 'Education':
        months_covered = random.randint(1,3)
        max_children = max(1, donation_amount // (costs['Education'] * 20 * months_covered))
        children_supported = random.randint(1, max_children)
        education_days = donation_amount // costs['Education']
        education_days_per_child = round(education_days / children_supported, 1)
        campaign_datasets['Education'].append([
            donation_id, donation_amount, recipient_id, recipient_type,
            children_supported, months_covered,
            education_days, education_days_per_child, timestamp
        ])
        
    elif campaign_type == 'Food':
        months_covered = random.randint(1,3)
        max_children = max(1, donation_amount // (costs['Food'] * 30 * months_covered))
        children_supported = random.randint(1, max_children)
        meals_provided = donation_amount // costs['Food']
        meals_per_child_per_month = round(meals_provided / (children_supported * months_covered), 1)
        campaign_datasets['Food'].append([
            donation_id, donation_amount, recipient_id, recipient_type,
            children_supported, months_covered,
            meals_provided, meals_per_child_per_month, timestamp
        ])
        
    elif campaign_type == 'Arts':
        months_covered = random.randint(1,3)
        max_children = max(1, donation_amount // (costs['Arts'] * months_covered))
        children_supported = random.randint(1, max_children)
        arts_supplies_stock = donation_amount // costs['Arts']
        arts_per_child_per_month = round(arts_supplies_stock / (children_supported * months_covered),1)
        campaign_datasets['Arts'].append([
            donation_id, donation_amount, recipient_id, recipient_type,
            children_supported, months_covered,
            arts_supplies_stock, arts_per_child_per_month, timestamp
        ])
        
    elif campaign_type == 'Health':
        max_children = max(1, donation_amount // costs['Health'])
        children_supported = random.randint(1, max_children)
        months_covered = random.randint(1,3)
        healthcare_days = donation_amount // costs['Health']
        healthcare_days_per_child = round(healthcare_days / children_supported,1)
        campaign_datasets['Health'].append([
            donation_id, donation_amount, recipient_id, recipient_type,
            children_supported, months_covered,
            healthcare_days, healthcare_days_per_child, timestamp
        ])
        
    elif campaign_type == 'Shelter':
        months_covered = random.randint(1,3)
        shelter_build = donation_amount // costs['Shelter']
        children_supported = random.randint(1,50)
        campaign_datasets['Shelter'].append([
            donation_id, donation_amount, recipient_id, recipient_type,
            children_supported, months_covered,
            shelter_build, timestamp
        ])

# Save separate CSVs per campaign type
columns_map = {
    'Education': ['donation_id','donation_amount','recipient_id','recipient_type','children_supported',
                  'months_covered','education_days','education_days_per_child','timestamp'],
    'Food': ['donation_id','donation_amount','recipient_id','recipient_type','children_supported',
             'months_covered','meals_provided','meals_per_child_per_month','timestamp'],
    'Arts': ['donation_id','donation_amount','recipient_id','recipient_type','children_supported',
             'months_covered','arts_supplies_stock','arts_per_child_per_month','timestamp'],
    'Health': ['donation_id','donation_amount','recipient_id','recipient_type','children_supported',
               'months_covered','healthcare_days','healthcare_days_per_child','timestamp'],
    'Shelter': ['donation_id','donation_amount','recipient_id','recipient_type','children_supported',
                'months_covered','shelter_build','timestamp']
}

for campaign in campaign_types:
    df = pd.DataFrame(campaign_datasets[campaign], columns=columns_map[campaign])
    df.to_csv(os.path.join(folder_path, f'donation_impact_{campaign}.csv'), index=False)
    print(f"Saved {len(df)} rows for campaign: {campaign}")
