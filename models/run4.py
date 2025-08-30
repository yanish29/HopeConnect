import matplotlib
matplotlib.use('MacOSX')   # use MacOSX backend for plots on Mac

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, export_text, plot_tree
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt

# ✅ Update this with the exact path where you found the file
file_path = "/Users/srishtivashisht/HopeConnect/data/dataset4/orphanage_children_urgency.csv"

# Load dataset
df = pd.read_csv(file_path)

# Features & Target
X = df[['need_type','amount_required','percent_funded','num_sponsors','last_updated_days']]
y = df['criticality_label']

# Convert categorical feature (need_type) to numeric
X = pd.get_dummies(X, columns=['need_type'], drop_first=True)

# Split into train-test
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Train Decision Tree
model = DecisionTreeClassifier(criterion='entropy', max_depth=4, random_state=42)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluation
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Display Decision Tree Rules
tree_rules = export_text(model, feature_names=list(X.columns))
print("\nDecision Tree Rules:\n", tree_rules)

# Plot the Decision Tree
plt.figure(figsize=(16, 8))
plot_tree(model, feature_names=X.columns, class_names=model.classes_, filled=True)
plt.show(block=True)
