import { ArrowLeft, Calendar, AlertCircle } from 'lucide-react';

const Obesity = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar component would be imported and used here */}
      <div className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-semibold">Healthcare Portal</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/" className="hover:text-blue-600 transition-colors">Weight Management</a>
            <span>/</span>
            <span className="text-gray-900">Obesity Management</span>
          </div>
        </div>
      </div>

      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Weight Management Topics
          </a>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Practical Guide to Managing Overweight and Obesity in Adults: A Comprehensive Approach
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Last updated: January 2024</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Medically reviewed</span>
              </div>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Understanding Obesity: Risks and Assessment
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Obesity is a complex, chronic disease affecting millions of adults in the United States, with the NHLBI Obesity Education Initiative providing evidence-based guidelines to help healthcare professionals and patients effectively manage overweight and obesity. With over 97 million American adults affected, obesity significantly increases the risk of hypertension, type 2 diabetes, cardiovascular disease, sleep apnea, osteoarthritis, and certain cancers.
              </p>
              <p>
                Addressing obesity is not just about weight loss—it's about improving overall health and reducing long-term complications that can significantly impact quality of life and healthcare costs. The condition represents a multifactorial disorder involving genetic, environmental, behavioral, and physiological factors that require comprehensive, individualized treatment approaches.
              </p>
              <p>
                Successful obesity management requires understanding that this is a chronic medical condition, not a lack of willpower or personal failure. Modern treatment approaches focus on sustainable lifestyle changes, behavioral modifications, and when appropriate, medical interventions that address the underlying causes of weight gain and maintenance of excess weight.
              </p>
            </div>
          </section>

          {/* Assessment Tools */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Key Assessment Tools for Obesity Management
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Body Mass Index (BMI) Classification
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Body Mass Index serves as the primary screening tool for obesity, calculated as weight in kilograms divided by height in meters squared. The classification system includes normal weight (18.5–24.9), overweight (25–29.9), obesity Class I (30–34.9), obesity Class II (35–39.9), and extreme obesity (≥40). These categories help healthcare providers assess health risks and determine appropriate treatment intensity.
              </p>
              <p>
                While BMI is a useful population-level screening tool, it has important limitations that must be considered in clinical practice. The measure doesn't distinguish between muscle and fat mass, making it less accurate for muscular individuals, athletes, or older adults with reduced muscle mass. Additionally, BMI may not accurately reflect health risks across different ethnic groups, as body composition and disease risk patterns can vary significantly.
              </p>
              
              {/* BMI Calculator Button */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-900 mb-2">Calculate Your BMI</h4>
                    <p className="text-blue-700 text-sm">
                      Use our BMI calculator to determine your current BMI category and assess your weight status.
                    </p>
                  </div>
                  <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>Calculate BMI</span>
                  </button>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Waist Circumference and Risk Assessment
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Excess abdominal fat serves as an independent risk factor for metabolic diseases, making waist circumference measurement a crucial component of obesity assessment. Men with waist circumference greater than 40 inches (102 cm) and women with measurements exceeding 35 inches (88 cm) face elevated risks for cardiovascular disease, type 2 diabetes, and metabolic syndrome, regardless of their overall BMI.
              </p>
              <p>
                Abdominal obesity, particularly visceral fat accumulation, is metabolically active and produces inflammatory substances that contribute to insulin resistance and cardiovascular disease. This measurement provides valuable information about disease risk that complements BMI assessment and helps guide treatment decisions.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comprehensive Comorbidity Screening
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Patients with BMI ≥30 or BMI 25–29.9 plus two risk factors such as hypertension, high cholesterol, or diabetes should pursue structured weight loss treatment. The presence of obesity-related comorbidities significantly increases the urgency and intensity of required interventions, as these conditions often improve dramatically with even modest weight reduction.
              </p>
              <p>
                Even a modest 5–10% weight reduction can significantly improve blood pressure control, blood sugar management, and cardiovascular risk profiles. This level of weight loss often leads to reduced medication requirements, improved sleep quality, decreased joint pain, and enhanced overall quality of life, making it a realistic and meaningful initial treatment goal.
              </p>
            </div>
          </section>

          {/* Treatment Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Comprehensive Treatment Strategies for Weight Management
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Effective obesity management requires a multifaceted approach combining dietary changes, physical activity, behavior therapy, and when appropriate, pharmacotherapy or surgical interventions. The foundation of successful treatment lies in creating sustainable lifestyle changes that can be maintained long-term, rather than pursuing quick fixes or extreme measures that are difficult to sustain.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Dietary Therapy for Sustainable Weight Loss
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Creating a caloric deficit of 500–1,000 kcal per day typically leads to safe and sustainable weight loss of 1–2 pounds per week. For most individuals, this translates to recommended daily caloric intakes of 1,000–1,200 kcal for women and 1,200–1,600 kcal for men, though individual needs may vary based on age, activity level, and metabolic factors.
              </p>
              <p>
                Successful dietary interventions focus on nutrient-dense foods including vegetables, lean proteins, whole grains, and healthy fats while limiting saturated fats, added sugars, and highly processed foods. Portion control and mindful eating practices help individuals develop better awareness of hunger and satiety cues, leading to more intuitive eating patterns that support long-term weight maintenance.
              </p>
              <p>
                Very low-calorie diets containing fewer than 800 calories per day should be avoided unless under strict medical supervision, as they can lead to nutritional deficiencies, muscle loss, and metabolic adaptations that make long-term weight maintenance more difficult. Sustainable approaches emphasize gradual changes that can be incorporated into daily life without causing excessive hunger or deprivation.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Physical Activity for Weight Loss and Maintenance
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Physical activity recommendations begin with an initial goal of 30–45 minutes of moderate-intensity activity 3–5 days per week, including activities like brisk walking, swimming, or cycling. This foundation gradually progresses to 150 or more minutes per week, incorporating both aerobic exercise for cardiovascular health and strength training to preserve muscle mass during weight loss.
              </p>
              <p>
                Lifestyle integration strategies make physical activity more sustainable by incorporating movement into daily routines. Simple changes like taking stairs instead of elevators, walking during work breaks, parking farther away, or engaging in active hobbies like gardening or dancing can significantly increase daily energy expenditure without requiring formal exercise sessions.
              </p>
              <p>
                For weight maintenance, higher levels of physical activity are typically required, often 200–300 minutes per week of moderate-intensity exercise. This increased requirement reflects the body's metabolic adaptations to weight loss and emphasizes why physical activity becomes increasingly important for long-term success.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Behavioral Strategies for Long-Term Success
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Self-monitoring through food and activity diaries increases awareness and accountability, helping individuals identify patterns, triggers, and areas for improvement. Modern technology, including smartphone apps and wearable devices, can simplify this process and provide real-time feedback about eating habits and physical activity levels.
              </p>
              <p>
                Stimulus control involves modifying environments to reduce triggers for overeating, such as keeping high-calorie snacks out of sight, using smaller plates, or creating designated eating areas. These environmental modifications work alongside cognitive restructuring techniques that help individuals replace negative thought patterns with positive, realistic goals and expectations.
              </p>
              <p>
                Stress management through techniques like mindfulness, meditation, or yoga can significantly reduce emotional eating and improve overall treatment outcomes. Social support from family, friends, or structured support groups enhances adherence to lifestyle changes and provides encouragement during challenging periods of the weight loss journey.
              </p>
            </div>
          </section>

          {/* Medical Interventions */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Medical Interventions for Weight Management
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                For patients who don't achieve sufficient weight loss through lifestyle changes alone, medical interventions may be appropriate as part of a comprehensive treatment approach. These interventions are not substitutes for lifestyle modifications but rather tools to enhance the effectiveness of dietary and behavioral changes.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Pharmacotherapy Options
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Weight loss medications are indicated for individuals with BMI ≥30 or BMI ≥27 with obesity-related conditions such as diabetes or hypertension. FDA-approved medications include appetite suppressants like sibutramine, which works on serotonin and norepinephrine pathways to reduce hunger and increase satiety, and orlistat, a fat absorption inhibitor that blocks approximately 30% of dietary fat absorption.
              </p>
              <p>
                Regular monitoring is essential for all weight loss medications, including blood pressure checks for sibutramine users and vitamin level monitoring for those taking orlistat. These medications are not appropriate for cosmetic weight loss and must be part of a comprehensive lifestyle program. If patients don't achieve significant weight loss (less than 4.4 pounds in 4 weeks), treatment should be discontinued or adjusted.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Bariatric Surgery for Severe Obesity
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Bariatric surgery is indicated for individuals with BMI ≥40 or BMI ≥35 with serious comorbidities such as diabetes or severe sleep apnea. Common procedures include restrictive operations like gastric banding or sleeve gastrectomy that limit food intake, and malabsorptive procedures like gastric bypass that reduce nutrient absorption.
              </p>
              <p>
                Pre-surgical requirements include comprehensive medical and psychological evaluation along with demonstrated commitment to lifelong dietary and lifestyle changes. The benefits include significant, sustained weight loss of often 50–70% of excess weight and improvement or remission of obesity-related conditions, particularly type 2 diabetes, which may resolve completely in many patients.
              </p>
            </div>
          </section>

          {/* Long-term Maintenance */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Special Considerations and Long-Term Maintenance
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Weight Maintenance Strategies
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Long-term weight maintenance requires ongoing vigilance and continued commitment to healthy behaviors. Regular self-weighing, ideally weekly, helps detect early weight regain when interventions are most effective. Continued dietary vigilance involves maintaining awareness of portion sizes, food choices, and eating patterns while avoiding complete reversion to previous habits.
              </p>
              <p>
                Sustained physical activity becomes increasingly important for weight maintenance, typically requiring 200–300 minutes per week of moderate-intensity exercise. Ongoing behavioral support through counseling, support groups, or structured programs significantly improves long-term adherence and success rates.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Overcoming Common Challenges
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Weight regain is a common challenge that requires early intervention when weight starts creeping back. This involves reassessing dietary intake and activity levels, identifying triggers for overeating, and implementing corrective strategies before significant regain occurs. Weight plateaus are normal during the weight loss process and may require adjustments to caloric intake or exercise intensity.
              </p>
              <p>
                Emotional eating represents a significant obstacle for many individuals, requiring development of alternative coping mechanisms such as exercise, hobbies, social activities, or stress management techniques. Social pressures around food require learning strategies to navigate dining out, social events, and family gatherings while maintaining healthy eating patterns.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Special Population Considerations
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Older adults require special attention to preserving muscle mass through strength training and adequate protein intake, as age-related muscle loss can be accelerated during weight loss. Patients with multiple comorbidities need coordinated care with specialists such as endocrinologists, cardiologists, or other relevant healthcare providers to ensure safe and effective treatment.
              </p>
              <p>
                Cultural considerations are essential for developing sustainable dietary plans that respect food preferences, traditions, and cultural practices. Successful interventions adapt evidence-based principles to individual cultural contexts rather than imposing standardized approaches that may not be culturally appropriate or sustainable.
              </p>
            </div>
          </section>

          {/* Implementation Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Key Implementation Tips for Success
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Setting SMART goals—Specific, Measurable, Achievable, Relevant, and Time-bound—provides a framework for success while maintaining realistic expectations. Focusing on health improvements rather than just weight loss helps maintain motivation when scale progress slows, celebrating victories like improved energy levels, better mobility, enhanced mood, and improved laboratory results.
              </p>
              <p>
                Non-scale victories often provide more sustainable motivation than weight measurements alone. Better sleep quality, reduced medication requirements, improved physical function, and enhanced self-confidence represent meaningful improvements that support long-term adherence to healthy lifestyle changes.
              </p>
              <p>
                Developing a relapse plan involves identifying personal triggers for overeating or sedentary behavior and creating specific strategies to get back on track when setbacks occur. Professional support from registered dietitians, certified fitness trainers, and behavioral therapists can significantly enhance treatment outcomes and provide expertise in areas where individuals may struggle independently.
              </p>
              <p>
                By following this comprehensive, evidence-based approach, healthcare providers and patients can work together to achieve sustainable weight loss, reduce obesity-related health risks, and improve long-term health outcomes while maintaining realistic expectations and sustainable lifestyle changes.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Weight Management Journey?</h3>
            <p className="mb-6 text-lg">
              Connect with qualified healthcare professionals who specialize in obesity management and can provide personalized treatment plans tailored to your needs.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 transition-colors px-6 py-2 rounded-lg font-medium">
              Find a Weight Management Specialist
            </button>
          </div>

        </div>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Healthcare Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Obesity;