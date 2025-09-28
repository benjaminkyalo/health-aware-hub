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
      author: "Dr. Sarah Johnson",
      date: "16th March 2023",
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
      author: "Dr. Michael Chen",
      date: "15th March 2023",
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
      author: "Dr. Emily Roberts",
      date: "14th March 2023",
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
      author: "Dr. James Wilson",
      date: "13th March 2023",
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
      author: "Dr. Lisa Martinez",
      date: "12th March 2023",
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
      author: "Dr. Robert Kim",
      date: "11th March 2023",
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
      id: 1,
      title: "Managing Blood Pressure Naturally: Evidence-Based Approaches",
      excerpt: "Discover proven lifestyle changes and natural methods that can help maintain healthy blood pressure levels alongside medical treatment. Learn about dietary modifications, exercise routines, and stress management techniques.",
      category: "Heart Health",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      date: "16th March 2023",
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
      author: "Dr. Michael Chen",
      date: "15th March 2023",
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
      author: "Dr. Emily Roberts",
      date: "14th March 2023",
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
      author: "Dr. James Wilson",
      date: "13th March 2023",
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
      author: "Dr. Lisa Martinez",
      date: "12th March 2023",
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
      author: "Dr. Robert Kim",
      date: "11th March 2023",
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
      id: 1,
      title: "Managing Blood Pressure Naturally: Evidence-Based Approaches",
      excerpt: "Discover proven lifestyle changes and natural methods that can help maintain healthy blood pressure levels alongside medical treatment. Learn about dietary modifications, exercise routines, and stress management techniques.",
      category: "Heart Health",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      date: "16th March 2023",
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
      author: "Dr. Michael Chen",
      date: "15th March 2023",
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
      author: "Dr. Emily Roberts",
      date: "14th March 2023",
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
      author: "Dr. James Wilson",
      date: "13th March 2023",
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
      author: "Dr. Lisa Martinez",
      date: "12th March 2023",
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
      author: "Dr. Robert Kim",
      date: "11th March 2023",
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
    }
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