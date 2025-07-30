import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Managing Blood Pressure Naturally: Evidence-Based Approaches",
      excerpt: "Discover proven lifestyle changes and natural methods that can help maintain healthy blood pressure levels alongside medical treatment. Learn about dietary modifications, exercise routines, and stress management techniques.",
      category: "Heart Health",
      readTime: "8 min read",
      content: `
        <h3>Understanding Blood Pressure</h3>
        <p>Blood pressure is the force of blood pushing against artery walls. Normal blood pressure is typically below 120/80 mmHg. High blood pressure (hypertension) affects nearly half of American adults.</p>
        
        <h3>Natural Management Strategies</h3>
        <p><strong>1. Dietary Changes:</strong> Reduce sodium intake to less than 2,300mg daily. Increase potassium-rich foods like bananas, spinach, and avocados. Follow the DASH diet pattern.</p>
        
        <p><strong>2. Regular Exercise:</strong> Aim for 150 minutes of moderate aerobic activity weekly. Walking, swimming, and cycling are excellent choices.</p>
        
        <p><strong>3. Stress Management:</strong> Practice deep breathing, meditation, or yoga. Chronic stress can elevate blood pressure significantly.</p>
        
        <p><strong>4. Weight Management:</strong> Even losing 5-10 pounds can make a meaningful difference in blood pressure readings.</p>
        
        <p><em>Important: Always consult your healthcare provider before making changes to blood pressure medications.</em></p>
      `
    },
    {
      id: 2,
      title: "Early Signs of Diabetes You Shouldn't Ignore",
      excerpt: "Learn to recognize the warning signs of diabetes and understand when to seek medical evaluation for proper diagnosis. Early detection and intervention can make a significant difference in long-term health outcomes.",
      category: "Diabetes",
      readTime: "6 min read",
      content: `
        <h3>Common Early Warning Signs</h3>
        <p><strong>Increased Thirst and Urination:</strong> When blood sugar is high, kidneys work overtime to filter excess glucose, leading to frequent urination and dehydration.</p>
        
        <p><strong>Unexplained Weight Loss:</strong> Despite eating normally, you may lose weight as your body breaks down muscle and fat for energy.</p>
        
        <p><strong>Fatigue:</strong> High blood sugar prevents glucose from entering cells effectively, leaving you feeling tired and weak.</p>
        
        <p><strong>Blurred Vision:</strong> High blood sugar can cause the lens of your eye to swell, affecting vision.</p>
        
        <h3>When to See a Doctor</h3>
        <p>If you experience multiple symptoms, especially if you have risk factors like family history, obesity, or are over 45, schedule a screening test immediately.</p>
        
        <p>Early diagnosis allows for better management and can prevent serious complications like heart disease, kidney damage, and nerve problems.</p>
      `
    },
    {
      id: 3,
      title: "Mental Health and Physical Wellness: The Connection",
      excerpt: "Explore the science behind the mind-body connection and how mental health impacts physical well-being. Understanding this relationship is crucial for comprehensive healthcare.",
      category: "Mental Health",
      readTime: "10 min read",
      content: `
        <h3>The Mind-Body Connection</h3>
        <p>Research shows that mental and physical health are deeply interconnected. Poor mental health can lead to physical symptoms, and chronic physical conditions can affect mental well-being.</p>
        
        <h3>How Mental Health Affects Physical Health</h3>
        <p><strong>Immune System:</strong> Chronic stress and depression can weaken immune function, making you more susceptible to infections.</p>
        
        <p><strong>Heart Health:</strong> Anxiety and depression increase risk of heart disease by affecting blood pressure and heart rhythm.</p>
        
        <p><strong>Sleep Patterns:</strong> Mental health conditions often disrupt sleep, which impacts physical recovery and cognitive function.</p>
        
        <h3>Building Mental Resilience</h3>
        <p>Regular exercise, social connections, adequate sleep, and stress management techniques can improve both mental and physical health simultaneously.</p>
        
        <p>Consider professional help if you're experiencing persistent sadness, anxiety, or other mental health concerns.</p>
      `
    },
    {
      id: 4,
      title: "Understanding Cholesterol: Good vs Bad and Management Strategies",
      excerpt: "A comprehensive guide to understanding different types of cholesterol, their impact on heart health, and evidence-based strategies for maintaining healthy cholesterol levels.",
      category: "Heart Health",
      readTime: "7 min read",
      content: `
        <h3>Types of Cholesterol</h3>
        <p><strong>LDL (Bad) Cholesterol:</strong> Low-density lipoprotein carries cholesterol to arteries where it can build up as plaque. Target: Less than 100 mg/dL.</p>
        
        <p><strong>HDL (Good) Cholesterol:</strong> High-density lipoprotein removes cholesterol from arteries. Target: 40 mg/dL or higher for men, 50 mg/dL for women.</p>
        
        <h3>Management Strategies</h3>
        <p><strong>Diet:</strong> Reduce saturated fats, eliminate trans fats, increase fiber intake. Mediterranean diet patterns are particularly effective.</p>
        
        <p><strong>Exercise:</strong> Regular physical activity can raise HDL and lower LDL cholesterol levels.</p>
        
        <p><strong>Medications:</strong> Statins and other medications may be necessary for some individuals to reach target levels.</p>
        
        <p>Regular monitoring through blood tests helps track progress and adjust treatment plans as needed.</p>
      `
    },
    {
      id: 5,
      title: "Nutrition Guidelines for Type 2 Diabetes Management",
      excerpt: "Expert-backed nutritional guidance for managing Type 2 diabetes effectively. Learn about meal planning, carbohydrate counting, and foods that support blood sugar control.",
      category: "Diabetes",  
      readTime: "12 min read",
      content: `
        <h3>Carbohydrate Management</h3>
        <p>Carbohydrates have the most direct impact on blood sugar. Focus on complex carbs like whole grains, vegetables, and legumes rather than simple sugars.</p>
        
        <h3>Plate Method</h3>
        <p><strong>Half your plate:</strong> Non-starchy vegetables (broccoli, spinach, peppers)</p>
        <p><strong>Quarter plate:</strong> Lean protein (chicken, fish, tofu)</p>
        <p><strong>Quarter plate:</strong> Starchy foods (brown rice, quinoa, sweet potato)</p>
        
        <h3>Helpful Foods</h3>
        <p><strong>Fiber-rich foods:</strong> Help slow sugar absorption and improve blood glucose control.</p>
        <p><strong>Healthy fats:</strong> Avocados, nuts, olive oil support heart health.</p>
        
        <h3>Meal Timing</h3>
        <p>Consistent meal timing helps regulate blood sugar. Work with a registered dietitian to create a personalized meal plan.</p>
      `
    },
    {
      id: 6,
      title: "Sleep Hygiene: Essential Practices for Better Health",
      excerpt: "Discover the importance of quality sleep for overall health and learn practical strategies to improve your sleep hygiene for better physical and mental well-being.",
      category: "General Health",
      readTime: "5 min read",
      content: `
        <h3>Why Sleep Matters</h3>
        <p>Quality sleep is essential for immune function, mental clarity, emotional regulation, and physical recovery. Adults need 7-9 hours per night.</p>
        
        <h3>Sleep Hygiene Tips</h3>
        <p><strong>Consistent Schedule:</strong> Go to bed and wake up at the same time daily, even on weekends.</p>
        
        <p><strong>Environment:</strong> Keep bedroom cool (60-67°F), dark, and quiet. Invest in blackout curtains and comfortable bedding.</p>
        
        <p><strong>Pre-sleep Routine:</strong> Avoid screens for 1 hour before bed. Try reading, gentle stretching, or relaxation techniques.</p>
        
        <p><strong>Limit Stimulants:</strong> Avoid caffeine 6 hours before bedtime and limit alcohol consumption.</p>
        
        <p>If sleep problems persist despite good hygiene practices, consult a healthcare provider to rule out sleep disorders.</p>
      `
    },
    {
      id: 7,
      title: "Understanding Anxiety: Symptoms, Causes, and Treatment Options",
      excerpt: "A comprehensive overview of anxiety disorders, including symptoms to watch for, common causes, and evidence-based treatment approaches available today.",
      category: "Mental Health",
      readTime: "9 min read",
      content: `
        <h3>Common Anxiety Symptoms</h3>
        <p><strong>Physical:</strong> Rapid heartbeat, sweating, trembling, shortness of breath, muscle tension.</p>
        <p><strong>Emotional:</strong> Excessive worry, fear, restlessness, irritability.</p>
        <p><strong>Behavioral:</strong> Avoidance of situations, difficulty concentrating, sleep problems.</p>
        
        <h3>Types of Anxiety Disorders</h3>
        <p>Generalized anxiety disorder, panic disorder, social anxiety, and specific phobias each have unique characteristics but share common treatment approaches.</p>
        
        <h3>Treatment Options</h3>
        <p><strong>Therapy:</strong> Cognitive Behavioral Therapy (CBT) is highly effective for anxiety management.</p>
        <p><strong>Medications:</strong> SSRIs, SNRIs, and other medications can help when prescribed by a healthcare provider.</p>
        <p><strong>Self-care:</strong> Regular exercise, mindfulness, deep breathing, and stress management techniques.</p>
        
        <p>Anxiety is treatable. Seek professional help if symptoms interfere with daily activities.</p>
      `
    },
    {
      id: 8,
      title: "Preventing Heart Disease: Lifestyle Factors That Matter",
      excerpt: "Learn about modifiable risk factors for heart disease and practical steps you can take to reduce your risk through lifestyle changes and preventive care.",
      category: "Heart Health",
      readTime: "11 min read",
      content: `
        <h3>Major Risk Factors</h3>
        <p><strong>Modifiable:</strong> High blood pressure, high cholesterol, smoking, diabetes, obesity, physical inactivity, poor diet.</p>
        <p><strong>Non-modifiable:</strong> Age, gender, family history, ethnicity.</p>
        
        <h3>Prevention Strategies</h3>
        <p><strong>Heart-Healthy Diet:</strong> Mediterranean or DASH diet patterns rich in fruits, vegetables, whole grains, and lean proteins.</p>
        
        <p><strong>Regular Exercise:</strong> At least 150 minutes of moderate aerobic activity weekly, plus strength training twice weekly.</p>
        
        <p><strong>Smoking Cessation:</strong> Quitting smoking reduces heart disease risk within one year.</p>
        
        <p><strong>Stress Management:</strong> Chronic stress contributes to heart disease through multiple pathways.</p>
        
        <h3>Regular Monitoring</h3>
        <p>Schedule regular check-ups to monitor blood pressure, cholesterol, blood sugar, and discuss prevention strategies with your healthcare provider.</p>
      `
    }
  ];

  const recentPosts = [
    "Managing Blood Pressure Naturally: Evidence-Based Approaches",
    "Early Signs of Diabetes You Shouldn't Ignore", 
    "Mental Health and Physical Wellness: The Connection",
    "Understanding Cholesterol: Good vs Bad and Management Strategies",
    "Sleep Hygiene: Essential Practices for Better Health"
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              ← Back to Blog
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Evidence-based health articles reviewed by medical professionals to help you make informed decisions about your health and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search health articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Articles Grid */}
            <div className="space-y-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-600">{article.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200">
                    <button 
                      onClick={() => {
                        setSelectedArticle(article);
                        window.scrollTo(0, 0);
                      }}
                      className="text-left hover:underline"
                    >
                      {article.title}
                    </button>
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <button 
                    onClick={() => {
                      setSelectedArticle(article);
                      window.scrollTo(0, 0);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Full Article →
                  </button>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No articles found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Articles</h3>
              <ul className="space-y-4">
                {recentPosts.map((post, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        setSelectedArticle(articles.find(a => a.title === post));
                        window.scrollTo(0, 0);
                      }}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm leading-relaxed text-left"
                    >
                      {post}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Health Categories</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Heart Health (3 articles)
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Diabetes Care (2 articles)
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    Mental Health (2 articles)
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    General Health (1 article)
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-lg mt-8 text-center">
              <h3 className="text-lg font-semibold mb-3">Health Newsletter</h3>
              <p className="text-sm mb-4 opacity-90">
                Get weekly health tips and updates delivered to your inbox.
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors duration-200">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
