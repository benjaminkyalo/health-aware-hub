import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "Managing Blood Pressure Naturally: Evidence-Based Approaches",
      excerpt: "Discover proven lifestyle changes and natural methods that can help maintain healthy blood pressure levels alongside medical treatment. Learn about dietary modifications, exercise routines, and stress management techniques.",
      category: "Heart Health",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Early Signs of Diabetes You Shouldn't Ignore",
      excerpt: "Learn to recognize the warning signs of diabetes and understand when to seek medical evaluation for proper diagnosis. Early detection and intervention can make a significant difference in long-term health outcomes.",
      category: "Diabetes",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Mental Health and Physical Wellness: The Connection",
      excerpt: "Explore the science behind the mind-body connection and how mental health impacts physical well-being. Understanding this relationship is crucial for comprehensive healthcare.",
      category: "Mental Health",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Understanding Cholesterol: Good vs Bad and Management Strategies",
      excerpt: "A comprehensive guide to understanding different types of cholesterol, their impact on heart health, and evidence-based strategies for maintaining healthy cholesterol levels.",
      category: "Heart Health",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Nutrition Guidelines for Type 2 Diabetes Management",
      excerpt: "Expert-backed nutritional guidance for managing Type 2 diabetes effectively. Learn about meal planning, carbohydrate counting, and foods that support blood sugar control.",
      category: "Diabetes",
      readTime: "12 min read"
    },
    {
      id: 6,
      title: "Sleep Hygiene: Essential Practices for Better Health",
      excerpt: "Discover the importance of quality sleep for overall health and learn practical strategies to improve your sleep hygiene for better physical and mental well-being.",
      category: "General Health",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Understanding Anxiety: Symptoms, Causes, and Treatment Options",
      excerpt: "A comprehensive overview of anxiety disorders, including symptoms to watch for, common causes, and evidence-based treatment approaches available today.",
      category: "Mental Health",
      readTime: "9 min read"
    },
    {
      id: 8,
      title: "Preventing Heart Disease: Lifestyle Factors That Matter",
      excerpt: "Learn about modifiable risk factors for heart disease and practical steps you can take to reduce your risk through lifestyle changes and preventive care.",
      category: "Heart Health",
      readTime: "11 min read"
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

  return (
    <div className="min-h-screen bg-background">
			{/* Navbar component would be imported and used here */}
			<Navbar />
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
                className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Articles Grid */}
            <div className="space-y-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="border-b border-muted pb-8 last:border-b-0">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-medical-blue-light text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-200">
                    <a href="#" className="medical-link">{article.title}</a>
                  </h2>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <a href="#" className="medical-link font-medium">
                    Read Full Article →
                  </a>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No articles found matching your search. Try different keywords.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-medical-gray p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-6">Recent Articles</h3>
              <ul className="space-y-4">
                {recentPosts.map((post, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm leading-relaxed">
                      {post}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-medical-gray p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">Health Categories</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Heart Health (12 articles)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Diabetes Care (8 articles)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Mental Health (15 articles)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    General Health (20 articles)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    Nutrition (10 articles)
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground p-6 rounded-lg mt-8 text-center">
              <h3 className="text-lg font-semibold mb-3">Health Newsletter</h3>
              <p className="text-sm mb-4 opacity-90">
                Get weekly health tips and updates delivered to your inbox.
              </p>
              <button className="bg-background text-primary px-4 py-2 rounded font-medium text-sm hover:bg-medical-gray transition-colors duration-200">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
		<Footer />
    </div>
  );
};

export default Blog;
