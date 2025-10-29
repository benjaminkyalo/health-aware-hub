import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Ischaemic Heart Disease: Understanding the World's Leading Killer",
      excerpt: "Discover how coronary artery disease develops, recognize warning signs of heart attacks, and learn evidence-based strategies to reduce your cardiovascular risk through lifestyle modifications.",
      category: "Cardiovascular",
      readTime: "10 min read",
      author: "Dr. Sarah Johnson",
      date: "25th October 2025",
      content: `
        <h3>What is Ischaemic Heart Disease?</h3>
        <p>Ischaemic heart disease (IHD), also called coronary artery disease, occurs when plaque builds up in the arteries supplying blood to the heart. This is the leading cause of death globally, responsible for over 9 million deaths annually.</p>
        
        <h3>Warning Signs and Symptoms</h3>
        <p><strong>Angina (Chest Pain):</strong> Pressure, squeezing, or fullness in the chest that may spread to arms, neck, jaw, or back. Often triggered by physical activity or stress.</p>
        
        <p><strong>Heart Attack Symptoms:</strong> Sudden, severe chest pain lasting more than a few minutes, shortness of breath, cold sweats, nausea, and lightheadedness require immediate emergency care.</p>
        
        <p><strong>Silent Ischemia:</strong> Some people, especially those with diabetes, may have reduced blood flow without obvious symptoms, making regular screenings crucial.</p>
        
        <h3>Risk Factors</h3>
        <p>High blood pressure, high cholesterol, smoking, diabetes, obesity, physical inactivity, and family history significantly increase risk. Many risk factors are modifiable through lifestyle changes.</p>
        
        <h3>Prevention and Management</h3>
        <p><strong>Heart-Healthy Diet:</strong> Mediterranean diet rich in fruits, vegetables, whole grains, fish, and olive oil. Limit saturated fats, trans fats, and sodium.</p>
        
        <p><strong>Regular Exercise:</strong> At least 150 minutes of moderate aerobic activity weekly strengthens the heart and improves circulation.</p>
        
        <p><strong>Medications:</strong> Statins, blood pressure medications, aspirin, and other drugs may be prescribed to manage risk factors and prevent complications.</p>
        
        <p><em>Important: Call emergency services immediately if you experience chest pain or heart attack symptoms. Time is critical for preserving heart muscle.</em></p>
      `
    },
    {
      id: 2,
      title: "Stroke: Recognizing Signs and Acting FAST Saves Lives",
      excerpt: "Learn to identify stroke symptoms within minutes of onset. Rapid treatment can prevent permanent brain damage and save lives. Understanding risk factors helps with prevention.",
      category: "Neurological",
      readTime: "8 min read",
      author: "Dr. Michael Chen",
      date: "22nd October 2025",
      content: `
        <h3>Understanding Stroke</h3>
        <p>A stroke occurs when blood supply to part of the brain is interrupted or reduced, depriving brain tissue of oxygen and nutrients. Every minute counts—brain cells begin dying within minutes.</p>
        
        <h3>FAST Recognition</h3>
        <p><strong>F - Face Drooping:</strong> Does one side of the face droop or feel numb? Ask the person to smile.</p>
        
        <p><strong>A - Arm Weakness:</strong> Is one arm weak or numb? Ask the person to raise both arms.</p>
        
        <p><strong>S - Speech Difficulty:</strong> Is speech slurred or hard to understand? Ask the person to repeat a simple sentence.</p>
        
        <p><strong>T - Time to Call 911:</strong> If any symptoms are present, call emergency services immediately, even if symptoms disappear.</p>
        
        <h3>Types of Stroke</h3>
        <p><strong>Ischemic Stroke (87%):</strong> Blood clot blocks an artery to the brain. Clot-busting drugs must be given within 4.5 hours of symptom onset.</p>
        
        <p><strong>Hemorrhagic Stroke (13%):</strong> Blood vessel ruptures in the brain, causing bleeding. Often related to high blood pressure or aneurysms.</p>
        
        <h3>Prevention Strategies</h3>
        <p>Control blood pressure and cholesterol, manage diabetes, don't smoke, maintain healthy weight, exercise regularly, and limit alcohol. Treating atrial fibrillation with blood thinners significantly reduces stroke risk.</p>
        
        <p>Stroke survivors require rehabilitation including physical, occupational, and speech therapy to regain function and independence.</p>
      `
    },
    {
      id: 3,
      title: "Chronic Obstructive Pulmonary Disease (COPD): Living with Limited Airflow",
      excerpt: "Explore this progressive lung disease affecting millions worldwide. Early diagnosis and treatment can slow progression and improve quality of life for those living with COPD.",
      category: "Respiratory",
      readTime: "9 min read",
      author: "Dr. Emily Roberts",
      date: "20th October 2025",
      content: `
        <h3>What is COPD?</h3>
        <p>COPD is a group of progressive lung diseases including emphysema and chronic bronchitis that block airflow and make breathing difficult. It's the third leading cause of death worldwide, affecting over 300 million people.</p>
        
        <h3>Symptoms and Progression</h3>
        <p><strong>Early Signs:</strong> Chronic cough with mucus production, shortness of breath during activities, wheezing, and chest tightness. Many dismiss early symptoms as normal aging or lack of fitness.</p>
        
        <p><strong>Advanced Disease:</strong> Breathing difficulties during rest, frequent respiratory infections, unintended weight loss, and swelling in ankles or legs indicate disease progression.</p>
        
        <p><strong>Exacerbations:</strong> Sudden worsening of symptoms requiring emergency care and hospitalization. These episodes can cause permanent lung damage.</p>
        
        <h3>Primary Cause</h3>
        <p><strong>Smoking:</strong> Tobacco smoke is responsible for 85-90% of COPD cases. Secondhand smoke, air pollution, and occupational exposures also contribute to risk.</p>
        
        <h3>Treatment and Management</h3>
        <p><strong>Quit Smoking:</strong> Most important step to slow disease progression. Smoking cessation programs improve success rates.</p>
        
        <p><strong>Medications:</strong> Bronchodilators, inhaled steroids, and combination inhalers help open airways and reduce inflammation.</p>
        
        <p><strong>Pulmonary Rehabilitation:</strong> Exercise training, breathing techniques, and education programs significantly improve symptoms and quality of life.</p>
        
        <p><strong>Oxygen Therapy:</strong> Supplemental oxygen for advanced disease improves survival and allows greater activity levels.</p>
        
        <p>While COPD cannot be cured, proper management helps people live active lives and reduces hospitalization risk.</p>
      `
    },
    {
      id: 4,
      title: "Lower Respiratory Infections: Pneumonia and Bronchitis Awareness",
      excerpt: "Understand these common yet potentially serious infections affecting millions annually. Recognize symptoms early and learn when medical attention is crucial for recovery.",
      category: "Infectious Diseases",
      readTime: "7 min read",
      author: "Dr. James Wilson",
      date: "18th October 2025",
      content: `
        <h3>Types of Lower Respiratory Infections</h3>
        <p>Lower respiratory infections affect the lungs and airways below the voice box. Pneumonia and bronchitis are most common, causing over 2.5 million deaths annually worldwide, particularly in children under 5 and adults over 65.</p>
        
        <h3>Pneumonia</h3>
        <p><strong>Symptoms:</strong> High fever, chills, cough with mucus, chest pain when breathing or coughing, rapid breathing, and fatigue. Confusion is common in older adults.</p>
        
        <p><strong>Causes:</strong> Bacteria (most common), viruses, or fungi. Community-acquired pneumonia differs from hospital-acquired infections in causative organisms and treatment.</p>
        
        <p><strong>Severity:</strong> Can range from mild "walking pneumonia" to severe illness requiring hospitalization and mechanical ventilation.</p>
        
        <h3>Acute Bronchitis</h3>
        <p><strong>Symptoms:</strong> Persistent cough lasting weeks, mucus production, mild fever, chest discomfort, and fatigue. Usually viral and self-limiting.</p>
        
        <p><strong>Duration:</strong> Cough may persist for several weeks even after other symptoms resolve.</p>
        
        <h3>When to Seek Medical Care</h3>
        <p>High fever over 102°F (39°C), difficulty breathing, chest pain, coughing up blood, symptoms worsening after initial improvement, or symptoms lasting beyond two weeks require evaluation.</p>
        
        <h3>Prevention</h3>
        <p><strong>Vaccination:</strong> Pneumococcal and influenza vaccines significantly reduce infection risk in high-risk groups.</p>
        
        <p><strong>Hygiene:</strong> Hand washing, covering coughs, and avoiding sick contacts prevent transmission.</p>
        
        <p><strong>Healthy Habits:</strong> Not smoking, managing chronic conditions, and maintaining good nutrition support immune function.</p>
      `
    },
    {
      id: 5,
      title: "Lung Cancer: Early Detection and Treatment Advances",
      excerpt: "Learn about the leading cancer killer worldwide, including risk factors, screening recommendations, and breakthrough treatments improving survival rates for patients.",
      category: "Cancer",  
      readTime: "11 min read",
      author: "Dr. Lisa Martinez",
      date: "15th October 2025",
      content: `
        <h3>Global Impact</h3>
        <p>Lung cancer causes more deaths than breast, colon, and prostate cancers combined, with approximately 1.8 million deaths annually worldwide. Early detection dramatically improves survival rates.</p>
        
        <h3>Types and Symptoms</h3>
        <p><strong>Non-Small Cell Lung Cancer (85%):</strong> Includes adenocarcinoma, squamous cell carcinoma, and large cell carcinoma. Generally grows more slowly than small cell type.</p>
        
        <p><strong>Small Cell Lung Cancer (15%):</strong> More aggressive, spreads quickly, but responds better to chemotherapy and radiation initially.</p>
        
        <p><strong>Warning Signs:</strong> Persistent cough, coughing up blood, chest pain, shortness of breath, hoarseness, unexplained weight loss, and bone pain. Many symptoms don't appear until advanced stages.</p>
        
        <h3>Risk Factors</h3>
        <p><strong>Smoking:</strong> Causes 85% of lung cancers. Risk increases with duration and number of cigarettes. Quitting at any age reduces risk.</p>
        
        <p><strong>Other Risks:</strong> Radon exposure, secondhand smoke, asbestos, air pollution, and family history contribute to lung cancer development.</p>
        
        <h3>Screening Recommendations</h3>
        <p>Annual low-dose CT scans recommended for adults 50-80 with 20 pack-year smoking history who currently smoke or quit within past 15 years. Screening detects cancer at earlier, more treatable stages.</p>
        
        <h3>Treatment Advances</h3>
        <p><strong>Targeted Therapy:</strong> Drugs targeting specific genetic mutations in tumors improve outcomes with fewer side effects than traditional chemotherapy.</p>
        
        <p><strong>Immunotherapy:</strong> Helps immune system recognize and attack cancer cells, producing dramatic responses in some patients.</p>
        
        <p><strong>Minimally Invasive Surgery:</strong> Video-assisted and robotic surgery reduce recovery time and complications.</p>
        
        <p>Multidisciplinary care teams including oncologists, surgeons, radiation oncologists, and support services provide comprehensive treatment.</p>
      `
    },
    {
      id: 6,
      title: "Alzheimer's Disease and Dementias: Memory Loss and Cognitive Decline",
      excerpt: "Understand the most common form of dementia affecting millions globally. Recognize early warning signs and learn about emerging treatments and support resources.",
      category: "Neurological",
      readTime: "10 min read",
      author: "Dr. Robert Kim",
      date: "12th October 2025",
      content: `
        <h3>Understanding Dementia</h3>
        <p>Dementia describes symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily life. Alzheimer's disease accounts for 60-80% of dementia cases, affecting over 55 million people worldwide.</p>
        
        <h3>Early Warning Signs</h3>
        <p><strong>Memory Loss:</strong> Forgetting recently learned information, important dates, or repeatedly asking same questions goes beyond normal aging.</p>
        
        <p><strong>Planning and Problem-Solving:</strong> Difficulty following familiar recipes, managing finances, or concentrating on tasks that were previously routine.</p>
        
        <p><strong>Confusion:</strong> Losing track of dates, seasons, or passage of time. Forgetting where they are or how they got there.</p>
        
        <p><strong>Language Problems:</strong> Trouble finding right words, calling things by wrong names, or following conversations.</p>
        
        <p><strong>Mood Changes:</strong> Depression, anxiety, confusion, or suspicion, especially in unfamiliar situations.</p>
        
        <h3>Disease Progression</h3>
        <p><strong>Mild Stage:</strong> Memory lapses, getting lost in familiar places, difficulty managing finances. Person can still function independently in many areas.</p>
        
        <p><strong>Moderate Stage:</strong> Increased memory loss, confusion about personal history, changes in sleep patterns, wandering, and behavioral changes. Most lengthy stage.</p>
        
        <p><strong>Severe Stage:</strong> Loss of ability to communicate, respond to environment, control movement. Requires full-time care.</p>
        
        <h3>Treatment Approaches</h3>
        <p><strong>Medications:</strong> Cholinesterase inhibitors and memantine may temporarily improve or stabilize symptoms. New drugs like lecanemab and donanemab show promise in slowing cognitive decline in early stages.</p>
        
        <p><strong>Lifestyle Factors:</strong> Regular exercise, Mediterranean diet, social engagement, and cognitive stimulation may reduce risk and slow progression.</p>
        
        <p><strong>Support Services:</strong> Memory clinics, support groups, respite care, and adult day programs help patients and families cope with challenges.</p>
        
        <p>Early diagnosis allows better planning, access to treatments, and participation in clinical trials testing new therapies.</p>
      `
    },
    {
      id: 7,
      title: "Diabetes: Managing Blood Sugar for Long-Term Health",
      excerpt: "Learn about this metabolic disease affecting hundreds of millions worldwide. Proper management prevents serious complications and allows people with diabetes to live full, healthy lives.",
      category: "Metabolic Disorders",
      readTime: "9 min read",
      author: "Dr. Patricia Lee",
      date: "10th October 2025",
      content: `
        <h3>Types of Diabetes</h3>
        <p>Diabetes affects over 530 million adults globally. The body either doesn't produce enough insulin or can't effectively use the insulin it produces, leading to elevated blood sugar levels.</p>
        
        <p><strong>Type 1 Diabetes:</strong> Autoimmune condition where body destroys insulin-producing cells. Usually diagnosed in children and young adults. Requires lifelong insulin therapy.</p>
        
        <p><strong>Type 2 Diabetes (90-95%):</strong> Body becomes resistant to insulin or doesn't produce enough. Often linked to obesity and inactivity. Can be prevented or delayed through lifestyle changes.</p>
        
        <p><strong>Gestational Diabetes:</strong> Develops during pregnancy and usually resolves after delivery but increases risk of future type 2 diabetes.</p>
        
        <h3>Warning Signs</h3>
        <p><strong>Classic Symptoms:</strong> Increased thirst and urination, unexplained weight loss, extreme hunger, blurred vision, slow-healing sores, and frequent infections.</p>
        
        <p><strong>Type 2 Development:</strong> Often develops gradually with few symptoms initially. Many people have prediabetes for years without knowing.</p>
        
        <h3>Complications</h3>
        <p>Uncontrolled diabetes damages blood vessels and nerves throughout body, leading to heart disease, stroke, kidney failure, blindness, nerve damage, and limb amputation.</p>
        
        <h3>Management Strategies</h3>
        <p><strong>Blood Sugar Monitoring:</strong> Regular testing helps track how food, activity, and medications affect glucose levels. Continuous glucose monitors provide real-time data.</p>
        
        <p><strong>Healthy Eating:</strong> Focus on vegetables, whole grains, lean proteins, and healthy fats. Control portion sizes and limit refined carbohydrates.</p>
        
        <p><strong>Physical Activity:</strong> Exercise improves insulin sensitivity and helps control weight. Aim for 150 minutes weekly.</p>
        
        <p><strong>Medications:</strong> Type 1 requires insulin. Type 2 may need oral medications, injectable drugs like GLP-1 agonists, or insulin depending on disease progression.</p>
        
        <p>Working with healthcare team including endocrinologist, dietitian, and diabetes educator optimizes management and prevents complications.</p>
      `
    },
    {
      id: 8,
      title: "Kidney Diseases: Silent Damage to Vital Organs",
      excerpt: "Understand chronic kidney disease affecting millions, often without symptoms until advanced stages. Early detection through simple tests can slow progression and prevent kidney failure.",
      category: "Renal Health",
      readTime: "8 min read",
      author: "Dr. David Chang",
      date: "8th October 2025",
      content: `
        <h3>Understanding Kidney Disease</h3>
        <p>Chronic kidney disease (CKD) affects over 850 million people worldwide. Kidneys gradually lose ability to filter waste and excess fluid from blood, often progressing over many years without symptoms.</p>
        
        <h3>Causes and Risk Factors</h3>
        <p><strong>Diabetes:</strong> Leading cause of kidney disease, responsible for about 40% of cases. High blood sugar damages kidney's filtering units.</p>
        
        <p><strong>High Blood Pressure:</strong> Damages blood vessels in kidneys, reducing their filtering ability. Also caused by kidney disease, creating dangerous cycle.</p>
        
        <p><strong>Other Causes:</strong> Glomerulonephritis, polycystic kidney disease, recurrent kidney infections, prolonged urinary obstruction, and certain medications.</p>
        
        <h3>Stages and Symptoms</h3>
        <p><strong>Early Stages (1-3):</strong> Often no symptoms. Detected through blood tests (creatinine, eGFR) and urine tests (protein). This is when treatment is most effective.</p>
        
        <p><strong>Advanced Stages (4-5):</strong> Fatigue, nausea, poor appetite, swelling in feet and ankles, changes in urination, difficulty concentrating, and shortness of breath appear.</p>
        
        <h3>Prevention and Management</h3>
        <p><strong>Control Underlying Conditions:</strong> Managing diabetes and hypertension slows kidney disease progression significantly.</p>
        
        <p><strong>Regular Screening:</strong> People with diabetes, hypertension, heart disease, or family history should have kidney function tested regularly.</p>
        
        <p><strong>Lifestyle Changes:</strong> Heart-healthy diet low in sodium, regular exercise, maintaining healthy weight, not smoking, and limiting alcohol protect kidneys.</p>
        
        <p><strong>Medications:</strong> ACE inhibitors or ARBs protect kidneys in people with diabetes or high blood pressure. Phosphate binders and medications to treat anemia may be needed.</p>
        
        <h3>Advanced Treatment</h3>
        <p>Kidney failure (stage 5) requires dialysis or kidney transplant. Early referral to nephrologist and preparation for dialysis or transplant improves outcomes.</p>
      `
    },
    {
      id: 9,
      title: "COVID-19: Living with an Evolving Pandemic",
      excerpt: "Stay updated on the coronavirus that changed the world. Understanding current variants, vaccination strategies, and long-term effects helps protect yourself and others.",
      category: "Viral Diseases",
      readTime: "10 min read",
      author: "Dr. Rachel Foster",
      date: "5th October 2025",
      content: `
        <h3>Current Landscape</h3>
        <p>COVID-19 has caused over 7 million reported deaths globally since 2020. While no longer a global health emergency, the virus continues circulating with evolving variants requiring ongoing vigilance.</p>
        
        <h3>Symptoms and Variants</h3>
        <p><strong>Common Symptoms:</strong> Fever, cough, fatigue, loss of taste or smell, sore throat, congestion, body aches, headache, nausea, and diarrhea. Symptoms vary by variant and vaccination status.</p>
        
        <p><strong>Severe Disease:</strong> Difficulty breathing, persistent chest pain, confusion, and bluish lips require emergency medical attention.</p>
        
        <p><strong>Variant Evolution:</strong> Virus continues mutating. Current variants generally cause milder disease than original strain, especially in vaccinated individuals.</p>
        
        <h3>Long COVID</h3>
        <p>Post-acute sequelae affects 10-30% of infected individuals with persistent symptoms including fatigue, brain fog, shortness of breath, heart palpitations, and joint pain lasting months.</p>
        
        <h3>Protection Strategies</h3>
        <p><strong>Vaccination:</strong> Updated vaccines targeting current variants recommended annually, especially for high-risk groups. Vaccines significantly reduce severe disease and death.</p>
        
        <p><strong>Testing:</strong> Rapid antigen and PCR tests detect infection. Testing when symptomatic or after exposure helps prevent spread.</p>
        
        <p><strong>Treatment:</strong> Antiviral medications like Paxlovid reduce hospitalization risk when taken early. High-risk individuals should discuss treatment options with providers.</p>
        
        <p><strong>Prevention:</strong> Staying home when sick, improving indoor ventilation, and masking in crowded indoor spaces during surges reduce transmission.</p>
        
        <h3>High-Risk Groups</h3>
        <p>Older adults, immunocompromised individuals, and those with chronic conditions face higher risk of severe disease and should maintain up-to-date vaccination and discuss preventive treatments.</p>
        
        <p>While COVID-19 has become endemic, staying informed about current guidance and maintaining vaccination protects individuals and communities.</p>
      `
    },
    {
      id: 10,
      title: "Tuberculosis: Ancient Disease Remains Modern Challenge",
      excerpt: "Learn about this airborne bacterial infection affecting millions annually. Understanding transmission, symptoms, and completing treatment prevents spread and drug resistance.",
      category: "Infectious Diseases",
      readTime: "9 min read",
      author: "Dr. Ahmed Hassan",
      date: "3rd October 2025",
      content: `
        <h3>Global Burden</h3>
        <p>Tuberculosis (TB) caused 1.3 million deaths in 2022, making it one of the top infectious disease killers after COVID-19. About one-quarter of the world's population has latent TB infection.</p>
        
        <h3>Transmission and Types</h3>
        <p><strong>Airborne Spread:</strong> TB spreads through air when person with active disease coughs, sneezes, or speaks. Prolonged exposure in enclosed spaces increases risk.</p>
        
        <p><strong>Latent TB:</strong> Bacteria present but inactive. No symptoms, not contagious. About 5-10% progress to active disease, especially if immune system weakens.</p>
        
        <p><strong>Active TB:</strong> Bacteria multiply and cause illness. Highly contagious until treatment begins. Most commonly affects lungs but can spread to other organs.</p>
        
        <h3>Symptoms</h3>
        <p><strong>Pulmonary TB:</strong> Persistent cough lasting more than 3 weeks, coughing up blood, chest pain, unintentional weight loss, fever, night sweats, and fatigue.</p>
        
        <p><strong>Extrapulmonary TB:</strong> Symptoms depend on affected organs. Can involve lymph nodes, spine, brain, kidneys, or other sites.</p>
        
        <h3>Diagnosis and Testing</h3>
        <p>Tuberculin skin test or blood tests detect TB infection. Chest X-rays and sputum samples confirm active disease. GeneXpert test provides rapid diagnosis and detects drug resistance.</p>
        
        <h3>Treatment</h3>
        <p><strong>Drug-Susceptible TB:</strong> Requires 6-9 months of multiple antibiotics. Must complete full course even when feeling better to prevent relapse and resistance.</p>
        
        <p><strong>Drug-Resistant TB:</strong> Multidrug-resistant (MDR-TB) and extensively drug-resistant (XDR-TB) require 18-24 months of more toxic, expensive medications with lower cure rates.</p>
        
        <h3>Prevention</h3>
        <p>BCG vaccine provides partial protection in children. Treating latent TB infection prevents progression. Infection control measures in healthcare settings and congregate settings reduce transmission.</p>
        
        <p>High-risk groups including HIV-positive individuals, healthcare workers, and people from high-burden countries should undergo screening.</p>
      `
    },
    {
      id: 11,
      title: "HIV/AIDS: Advances in Treatment and Prevention",
      excerpt: "Understand how modern antiretroviral therapy transforms HIV from a death sentence to a manageable chronic condition. Prevention strategies can stop transmission.",
      category: "Infectious Diseases",
      readTime: "10 min read",
      author: "Dr. Maria Santos",
      date: "1st October 2025",
      content: `
        <h3>Current Status</h3>
        <p>Approximately 39 million people live with HIV globally. While 29 million receive antiretroviral therapy, 630,000 AIDS-related deaths occurred in 2022. Early diagnosis and treatment prevent progression to AIDS.</p>
        
        <h3>Transmission</h3>
        <p><strong>Sexual Contact:</strong> Most common route worldwide. Risk varies by type of sexual activity.</p>
        
        <p><strong>Blood Exposure:</strong> Sharing needles, syringes, or other drug equipment. Medical procedures with contaminated equipment in resource-limited settings.</p>
        
        <p><strong>Mother-to-Child:</strong> During pregnancy, childbirth, or breastfeeding. Treatment reduces transmission risk to less than 1%.</p>
        
        <h3>Stages and Symptoms</h3>
        <p><strong>Acute HIV Infection (2-4 weeks):</strong> Flu-like symptoms including fever, headache, rash, and swollen lymph nodes. Many people don't realize they're infected.</p>
        
        <p><strong>Chronic HIV (Years):</strong> Virus replicates but few symptoms appear. Without treatment, gradually weakens immune system.</p>
        
        <p><strong>AIDS:</strong> Most severe stage when immune system is badly damaged. Opportunistic infections and cancers occur. Preventable with treatment.</p>
        
        <h3>Treatment Revolution</h3>
        <p><strong>Antiretroviral Therapy (ART):</strong> Combination medications suppress virus to undetectable levels. "Undetectable = Untransmittable" (U=U) means people with suppressed virus cannot transmit HIV sexually.</p>
        
        <p><strong>Modern Regimens:</strong> Single daily pill combinations with minimal side effects allow normal life expectancy and quality of life.</p>
        
        <p><strong>Treatment as Prevention:</strong> Starting ART immediately after diagnosis protects individual health and prevents transmission to partners.</p>
        
        <h3>Prevention Strategies</h3>
        <p><strong>PrEP (Pre-Exposure Prophylaxis):</strong> Daily pill or long-acting injection reduces HIV acquisition risk by over 99% when taken consistently.</p>
        
        <p><strong>PEP (Post-Exposure Prophylaxis):</strong> Emergency medication started within 72 hours of potential exposure can prevent infection.</p>
        
        <p><strong>Barrier Methods:</strong> Condoms remain highly effective at preventing sexual transmission.</p>
        
        <p><strong>Testing:</strong> Regular testing enables early diagnosis and treatment. Home testing kits provide privacy and convenience.</p>
        
        <p>Ending the HIV/AIDS pandemic requires expanding access to testing, prevention, and treatment globally while combating stigma.</p>
      `
    },
    {
      id: 12,
      title: "Malaria: Fighting a Preventable Killer",
      excerpt: "Discover how this mosquito-borne parasitic disease affects millions in tropical regions. New tools including vaccines offer hope for reducing malaria's devastating toll.",
      category: "Tropical Diseases",
      readTime: "8 min read",
      author: "Dr. Kwame Mensah",
      date: "28th September 2025",
      content: `
        <h3>Global Impact</h3>
        <p>Malaria caused 608,000 deaths in 2022, with 96% occurring in Africa. Children under 5 account for 80% of malaria deaths. This preventable and treatable disease continues devastating communities.</p>
        
        <h3>Transmission and Parasites</h3>
        <p>Malaria spreads through bites of infected Anopheles mosquitoes. Five parasite species infect humans, with Plasmodium falciparum most deadly and Plasmodium vivax most widespread.</p>
        
        <h3>Symptoms</h3>
        <p><strong>Classic Presentation:</strong> Fever, chills, sweating, headache, muscle aches, nausea, and vomiting appear 10-15 days after mosquito bite.</p>
        
        <p><strong>Severe Malaria:</strong> Convulsions, confusion, severe anemia, respiratory distress, and organ failure can develop rapidly, especially in children and pregnant women.</p>
        
        <p><strong>Complications:</strong> Cerebral malaria causes brain swelling and can lead to permanent neurological damage or death without prompt treatment.</p>
        
        <h3>Diagnosis and Treatment</h3>
        <p>Rapid diagnostic tests and microscopy confirm infection. Artemisinin-based combination therapies (ACTs) are first-line treatment for falciparum malaria. Treatment must start immediately when severe malaria is suspected.</p>
        
        <h3>Prevention Tools</h3>
        <p><strong>Insecticide-Treated Bed Nets:</strong> Sleeping under treated nets reduces malaria risk by 50%. Nets should cover entire sleeping area and be retreated regularly.</p>
        
        <p><strong>Indoor Residual Spraying:</strong> Insecticide application on walls where mosquitoes rest kills them and reduces transmission.</p>
        
        <p><strong>Preventive Medications:</strong> Antimalarial drugs protect travelers to endemic areas. Seasonal malaria chemoprevention protects children during high transmission periods.</p>
        
        <p><strong>RTS,S and R21 Vaccines:</strong> New malaria vaccines recommended by WHO for children in endemic areas provide partial protection and reduce severe disease and death.</p>
        
        <h3>Traveler Precautions</h3>
        <p>Visitors to malaria-endemic areas should take prophylactic medications, use insect repellent, wear protective clothing, and sleep under bed nets. Seek immediate medical care for fever during or after travel.</p>
      `
    },
    
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="mb-6 text-green-600 hover:text-green-700 flex items-center gap-2 transition-colors duration-200"
            >
              ← Back to Blog
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {selectedArticle.category}
              </span>
              <span className="text-sm text-gray-600">{selectedArticle.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {selectedArticle.title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. Always consult with your healthcare provider before making changes to your health routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-bounce">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based health articles reviewed by medical professionals to help you make informed decisions about your health and wellness.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search health articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition-all duration-300 focus:shadow-lg transform focus:scale-105"
          />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 group"
              onClick={() => {
                setSelectedArticle(article);
                window.scrollTo(0, 0);
              }}
            >
              {/* Article Image with Green Overlay */}
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-green-600 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/drq4idzdj/image/upload/v1750191909/pexels-cottonbro-7579831_zf7blw.jpg"
                  alt={article.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-600 bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                <div className="absolute top-4 left-4 transform transition-transform duration-300 group-hover:scale-110">
                  <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 transition-all duration-300 group-hover:bg-gray-50">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight transition-colors duration-300 group-hover:text-green-600">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 transition-colors duration-300">
                  {article.excerpt}
                </p>

                {/* Author and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-600 group-hover:scale-110">
                      <span className="text-xs font-semibold text-white">
                        {article.author ? article.author.split(' ').map(name => name[0]).join('') : 'HE'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700">
                        by {article.author || 'Health Expert'}
                      </p>
                      <p className="text-xs text-gray-500 transition-colors duration-300">
                        {article.date || article.readTime}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium transition-colors duration-300 group-hover:text-green-600">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="animate-bounce mb-4">
              <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <p className="text-gray-600 text-lg">
              No articles found matching your search. Try different keywords.
            </p>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16 bg-green-600 text-white rounded-lg p-8 text-center transform transition-all duration-300 hover:bg-green-700 hover:scale-105">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Health Tips</h3>
          <p className="text-lg mb-6 opacity-90">
            Get weekly health insights and wellness updates delivered to your inbox.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-pulse">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;