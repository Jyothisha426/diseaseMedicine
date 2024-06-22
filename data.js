const diseases =[
    {
      "disease": "Influenza",
      "symptoms": ["Fever", "Chills", "Cough", "Sore throat", "Runny nose", "Muscle aches"],
      "age_of_onset": "All ages",
      "medication": ["Antiviral drugs (e.g., oseltamivir)", "Pain relievers (e.g., ibuprofen)", "Decongestants"],
      "description": "A contagious respiratory illness caused by influenza viruses."
    },
    {
      "disease": "Type 2 Diabetes",
      "symptoms": ["Increased thirst", "Frequent urination", "Unintended weight loss", "Fatigue", "Blurred vision"],
      "age_of_onset": "Typically adults over 45",
      "medication": ["Metformin", "Sulfonylureas", "Insulin therapy"],
      "description": "A chronic condition that affects the way the body processes blood sugar (glucose)."
    },
    {
      "disease": "Hypertension",
      "symptoms": ["Often asymptomatic", "Headaches", "Shortness of breath", "Nosebleeds"],
      "age_of_onset": "Adults over 40",
      "medication": ["ACE inhibitors", "Beta blockers", "Diuretics"],
      "description": "A condition in which the force of the blood against the artery walls is too high."
    },
    {
      "disease": "Asthma",
      "symptoms": ["Shortness of breath", "Chest tightness", "Wheezing", "Coughing"],
      "age_of_onset": "Typically childhood",
      "medication": ["Inhaled corticosteroids", "Bronchodilators", "Leukotriene modifiers"],
      "description": "A condition in which your airways narrow and swell and may produce extra mucus."
    },
    {
      "disease": "Alzheimer's Disease",
      "symptoms": ["Memory loss", "Confusion", "Difficulty planning", "Personality changes"],
      "age_of_onset": "Typically older adults over 65",
      "medication": ["Cholinesterase inhibitors", "Memantine"],
      "description": "A progressive disease that destroys memory and other important mental functions."
    },
    {
      "disease": "Rheumatoid Arthritis",
      "symptoms": ["Joint pain", "Swelling", "Stiffness", "Fatigue"],
      "age_of_onset": "Adults 30-60",
      "medication": ["DMARDs", "Biologic agents", "NSAIDs"],
      "description": "An autoimmune disorder that primarily affects joints."
    },
    {
      "disease": "Major Depressive Disorder",
      "symptoms": ["Persistent sadness", "Loss of interest", "Changes in appetite", "Sleep disturbances", "Fatigue"],
      "age_of_onset": "Typically late teens to mid-20s",
      "medication": ["SSRIs", "SNRIs", "Tricyclic antidepressants"],
      "description": "A mental disorder characterized by persistently depressed mood or loss of interest in activities."
    },
    {
      "disease": "Osteoporosis",
      "symptoms": ["Often asymptomatic until fracture", "Bone pain", "Loss of height", "Stooped posture"],
      "age_of_onset": "Adults over 50",
      "medication": ["Bisphosphonates", "Hormone therapy", "Calcium and vitamin D supplements"],
      "description": "A condition in which bones become weak and brittle."
    },
    {
      "disease": "Coronary Artery Disease",
      "symptoms": ["Chest pain", "Shortness of breath", "Heart attack"],
      "age_of_onset": "Adults over 40",
      "medication": ["Statins", "Beta blockers", "Aspirin"],
      "description": "A disease caused by the buildup of plaque resulting in the arteries to narrow, reducing blood flow to the heart."
    },
    {
      "disease": "Chronic Obstructive Pulmonary Disease (COPD)",
      "symptoms": ["Shortness of breath", "Wheezing", "Chronic cough"],
      "age_of_onset": "Adults over 40",
      "medication": ["Bronchodilators", "Inhaled steroids", "Oxygen therapy"],
      "description": "A group of lung diseases that block airflow and make it difficult to breathe."
    },
    {
      "disease": "Parkinson's Disease",
      "symptoms": ["Tremor", "Slow movement", "Rigid muscles", "Impaired posture and balance"],
      "age_of_onset": "Typically older adults over 60",
      "medication": ["Levodopa", "Dopamine agonists", "MAO-B inhibitors"],
      "description": "A progressive nervous system disorder that affects movement."
    },
    {
      "disease": "Epilepsy",
      "symptoms": ["Seizures", "Temporary confusion", "Loss of consciousness"],
      "age_of_onset": "All ages",
      "medication": ["Antiepileptic drugs", "Vagus nerve stimulation", "Ketogenic diet"],
      "description": "A central nervous system disorder in which brain activity becomes abnormal, causing seizures."
    },
    {
      "disease": "Chronic Kidney Disease",
      "symptoms": ["Nausea", "Fatigue", "Swelling of feet and ankles", "Shortness of breath"],
      "age_of_onset": "Adults over 50",
      "medication": ["ACE inhibitors", "Angiotensin II receptor blockers", "Diuretics"],
      "description": "A long-term condition where the kidneys do not work effectively."
    },
    {
      "disease": "Anxiety Disorders",
      "symptoms": ["Excessive worry", "Restlessness", "Fatigue", "Difficulty concentrating"],
      "age_of_onset": "Typically teens to early 20s",
      "medication": ["SSRIs", "SNRIs", "Benzodiazepines"],
      "description": "A group of mental disorders characterized by significant feelings of anxiety and fear."
    },
    {
      "disease": "Multiple Sclerosis",
      "symptoms": ["Numbness", "Fatigue", "Blurred vision", "Muscle weakness"],
      "age_of_onset": "Adults 20-40",
      "medication": ["Immunomodulators", "Corticosteroids", "Physical therapy"],
      "description": "A disease in which the immune system eats away at the protective covering of nerves."
    },
    {
      "disease": "Hyperthyroidism",
      "symptoms": ["Weight loss", "Rapid heartbeat", "Increased appetite", "Nervousness"],
      "age_of_onset": "Adults 20-50",
      "medication": ["Beta blockers", "Antithyroid medications", "Radioactive iodine"],
      "description": "A condition in which the thyroid gland is overactive and produces excessive amounts of thyroid hormone."
    },
    {
      "disease": "Hypothyroidism",
      "symptoms": ["Fatigue", "Weight gain", "Cold intolerance", "Dry skin"],
      "age_of_onset": "Adults over 50",
      "medication": ["Levothyroxine"],
      "description": "A condition in which the thyroid gland doesn't produce enough thyroid hormone."
    },
    {
      "disease": "Gastroesophageal Reflux Disease (GERD)",
      "symptoms": ["Heartburn", "Chest pain", "Difficulty swallowing", "Regurgitation"],
      "age_of_onset": "Adults over 40",
      "medication": ["Antacids", "H2 receptor blockers", "Proton pump inhibitors"],
      "description": "A digestive disorder that occurs when acidic stomach juices, or food and fluids back up from the stomach into the esophagus."
    },
    {
      "disease": "Peptic Ulcer Disease",
      "symptoms": ["Burning stomach pain", "Bloating", "Heartburn", "Nausea"],
      "age_of_onset": "Adults over 30",
      "medication": ["Antibiotics", "Proton pump inhibitors", "H2 receptor blockers"],
      "description": "Open sores that develop on the inside lining of your stomach and the upper portion of your small intestine."
    },
    {
      "disease": "Celiac Disease",
      "symptoms": ["Diarrhea", "Bloating", "Fatigue", "Weight loss"],
      "age_of_onset": "All ages",
      "medication": ["Gluten-free diet", "Vitamin and mineral supplements"],
      "description": "An immune reaction to eating gluten, a protein found in wheat, barley, and rye."
    },
    {
      "disease": "Crohn's Disease",
      "symptoms": ["Diarrhea", "Fever", "Abdominal pain", "Weight loss"],
      "age_of_onset": "Adults 15-35",
      "medication": ["Anti-inflammatory drugs", "Immune system suppressors", "Antibiotics"],
      "description": "A type of inflammatory bowel disease that may affect any part of the gastrointestinal tract."
    },
    {
      "disease": "Ulcerative Colitis",
      "symptoms": ["Diarrhea with blood", "Abdominal pain", "Weight loss", "Fatigue"],
      "age_of_onset": "Adults 15-30",
      "medication": ["Anti-inflammatory drugs", "Immune system suppressors", "Antibiotics"],
      "description": "A chronic inflammatory bowel disease that causes inflammation in the digestive tract."
    },
    {
      "disease": "Irritable Bowel Syndrome (IBS)",
      "symptoms": ["Abdominal pain", "Bloating", "Diarrhea or constipation", "Gas"],
      "age_of_onset": "Adults 20-40",
      "medication": ["Fiber supplements", "Antispasmodic agents", "Laxatives"],
      "description": "A common disorder that affects the large intestine."
    },
    {
      "disease": "Hepatitis B",
      "symptoms": ["Fatigue", "Nausea", "Abdominal pain", "Jaundice"],
      "age_of_onset": "All ages",
      "medication": ["Antiviral medications", "Interferon injections", "Liver transplant"],
      "description": "A serious liver infection caused by the hepatitis B virus."
    },
    {
      "disease": "Hepatitis C",
      "symptoms": ["Fatigue", "Nausea", "Loss of appetite", "Jaundice"],
      "age_of_onset": "Adults 20-40",
      "medication": ["Antiviral medications"],
      "description": "A liver infection caused by the hepatitis C virus."
    },
    {
      "disease": "HIV/AIDS",
      "symptoms": ["Fever", "Chills", "Rash", "Night sweats", "Muscle aches"],
      "age_of_onset": "All ages",
      "medication": ["Antiretroviral therapy"],
      "description": "A disease of the human immune system caused by infection with the human immunodeficiency virus (HIV)."
    },
    {
      "disease": "Tuberculosis",
      "symptoms": ["Cough", "Weight loss", "Night sweats", "Fever"],
      "age_of_onset": "All ages",
      "medication": ["Antibiotics (e.g., isoniazid, rifampin)"],
      "description": "A potentially serious infectious disease that mainly affects the lungs."
    },
    {
      "disease": "Malaria",
      "symptoms": ["Fever", "Chills", "Headache", "Nausea", "Vomiting"],
      "age_of_onset": "All ages",
      "medication": ["Antimalarial drugs (e.g., chloroquine, artemisinin)"],
      "description": "A disease caused by a plasmodium parasite, transmitted by the bite of infected mosquitoes."
    },
    {
      "disease": "Lyme Disease",
      "symptoms": ["Rash", "Flu-like symptoms", "Joint pain", "Neurological problems"],
      "age_of_onset": "All ages",
      "medication": ["Antibiotics (e.g., doxycycline, amoxicillin)"],
      "description": "An infectious disease caused by the Borrelia bacterium, transmitted by ticks."
    }
    ]  