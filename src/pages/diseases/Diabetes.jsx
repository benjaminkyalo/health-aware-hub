import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, AlertCircle, Heart, Activity,  Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Diabetes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm medical-text-light">
            <Link to="/" className="hover:text-primary medical-transition">Home</Link>
            <span>/</span>
            <Link to="/" className="hover:text-primary medical-transition">Health Topics</Link>
            <span>/</span>
            <span className="medical-text">Diabetes Mellitus</span>
          </div>
        </div>
      </div>

      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 medical-transition mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Health Topics
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold medical-heading mb-4">
              Diabetes Mellitus: Complete Management Guide & Clinical Standards
            </h1>
            <div className="flex items-center space-x-4 text-sm medical-text-light">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Last updated: January 2024</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>WHO Clinical Guidelines</span>
              </div>
            </div>
          </header>

          {/* Quick Navigation */}
          <div className="bg-secondary rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold medical-heading mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <a href="#understanding" className="text-primary hover:text-primary/80 medical-transition">Understanding Diabetes</a>
              <a href="#diagnosis" className="text-primary hover:text-primary/80 medical-transition">Diagnosis & Classification</a>
              <a href="#management" className="text-primary hover:text-primary/80 medical-transition">Treatment Management</a>
              <a href="#complications" className="text-primary hover:text-primary/80 medical-transition">Complications</a>
              <a href="#type1" className="text-primary hover:text-primary/80 medical-transition">Type 1 Diabetes</a>
              <a href="#type2" className="text-primary hover:text-primary/80 medical-transition">Type 2 Diabetes</a>
              <a href="#pregnancy" className="text-primary hover:text-primary/80 medical-transition">Diabetes & Pregnancy</a>
              <a href="#prevention" className="text-primary hover:text-primary/80 medical-transition">Prevention Strategies</a>
            </div>
          </div>

          {/* Understanding Diabetes */}
          <section id="understanding" className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Understanding Diabetes Mellitus</h2>
            <div className="medical-body space-y-6">
              <p>
                Diabetes mellitus represents a group of metabolic disorders characterized by chronic hyperglycemia 
                (elevated blood glucose levels) resulting from defects in insulin secretion, insulin action, or both. 
                This condition affects how your body processes glucose, the primary source of energy for cellular functions.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold medical-heading mb-4 flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  Global Impact & Statistics
                </h3>
                <div className="space-y-3 medical-text-light">
                  <p>• Affects up to 10% of adults aged 20+ in Eastern Mediterranean regions</p>
                  <p>• Rates double when including impaired glucose tolerance (IGT) cases</p>
                  <p>• Leading cause of blindness, kidney failure, heart attacks, and strokes globally</p>
                  <p>• Major contributor to lower limb amputations and premature death</p>
                  <p>• Significant economic burden on healthcare systems worldwide</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">The Role of Insulin in Glucose Metabolism</h3>
                <p className="mb-4">
                  Insulin, a hormone produced by pancreatic beta cells, acts as a key that allows glucose to enter 
                  cells for energy production. In diabetes, this process becomes impaired through various mechanisms:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary rounded-lg p-6">
                    <h4 className="text-lg font-semibold medical-text mb-3">Insulin Deficiency</h4>
                    <p className="medical-text-light text-sm">
                      Occurs when pancreatic beta cells are destroyed (Type 1) or produce insufficient 
                      insulin relative to body needs (advanced Type 2).
                    </p>
                  </div>
                  <div className="bg-secondary rounded-lg p-6">
                    <h4 className="text-lg font-semibold medical-text mb-3">Insulin Resistance</h4>
                    <p className="medical-text-light text-sm">
                      Body tissues become less responsive to insulin action, requiring higher levels 
                      to maintain normal glucose levels (primarily Type 2).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnosis and Classification */}
          <section id="diagnosis" className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Diagnosis & Classification of Diabetes</h2>
            <div className="medical-body space-y-6">
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Critical Diagnostic Principle</h3>
                <p className="text-yellow-700">
                  Diabetes diagnosis carries significant consequences and must be made with confidence. 
                  Clinical diagnosis should never be based solely on glycosuria (glucose in urine).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">WHO Diagnostic Criteria</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="border border-gray-300 p-3 text-left medical-heading">Test Type</th>
                        <th className="border border-gray-300 p-3 text-left medical-heading">Diabetes (mg/dL)</th>
                        <th className="border border-gray-300 p-3 text-left medical-heading">Impaired Glucose Tolerance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 medical-text">Fasting Plasma Glucose</td>
                        <td className="border border-gray-300 p-3 medical-text-light">≥140 mg/dL (7.8 mmol/L)</td>
                        <td className="border border-gray-300 p-3 medical-text-light">&lt;140 mg/dL</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 medical-text">2-hour OGTT</td>
                        <td className="border border-gray-300 p-3 medical-text-light">≥200 mg/dL (11.1 mmol/L)</td>
                        <td className="border border-gray-300 p-3 medical-text-light">140-200 mg/dL</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 medical-text">Random Plasma Glucose</td>
                        <td className="border border-gray-300 p-3 medical-text-light">≥200 mg/dL with symptoms</td>
                        <td className="border border-gray-300 p-3 medical-text-light">Not applicable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Classification of Diabetes Types</h3>
                <div className="space-y-6">
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">Insulin-Dependent Diabetes Mellitus (IDDM) - Type 1</h4>
                    <div className="text-red-700 text-sm space-y-2">
                      <p><strong>Characteristics:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Acute onset with rapid symptom development</li>
                        <li>Young age of onset (typically ≤20 years)</li>
                        <li>Rapid weight loss and ketonuria</li>
                        <li>Autoimmune destruction of pancreatic beta cells</li>
                        <li>Absolute insulin deficiency requiring lifelong insulin therapy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Non-Insulin-Dependent Diabetes Mellitus (NIDDM) - Type 2</h4>
                    <div className="text-blue-700 text-sm space-y-2">
                      <p><strong>Characteristics:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Gradual onset, often asymptomatic initially</li>
                        <li>Older age of onset (typically &gt;30 years)</li>
                        <li>Strong association with obesity</li>
                        <li>Insulin resistance with relative insulin deficiency</li>
                        <li>May be managed with diet, oral medications, or insulin</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Gestational Diabetes Mellitus (GDM)</h4>
                    <div className="text-purple-700 text-sm space-y-2">
                      <p><strong>Definition:</strong> Diabetes first detected during pregnancy</p>
                      <p><strong>Risk Factors:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Previous GDM or family history of diabetes</li>
                        <li>Obesity and advanced maternal age</li>
                        <li>Previous large baby (&gt;4kg) or congenital malformations</li>
                        <li>Adverse obstetric history</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Maturity Onset Diabetes of Youth (MODY)</h4>
                    <div className="text-green-700 text-sm">
                      <p>
                        Rare autosomal dominant condition characterized by young age onset and 
                        hyperglycemia correction without insulin. Often misdiagnosed as Type 1 diabetes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive Management */}
          <section id="management" className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Comprehensive Diabetes Management</h2>
            <div className="medical-body space-y-6">
              
              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Fundamental Management Principles</h3>
                <div className="space-y-3 text-sm">
                  <p>• <strong>Team Approach:</strong> Collaboration between healthcare providers, patients, and families</p>
                  <p>• <strong>Patient Education:</strong> Cornerstone of successful diabetes management</p>
                  <p>• <strong>Self-Care Empowerment:</strong> Patients as primary resource in their care</p>
                  <p>• <strong>Individualized Targets:</strong> Treatment goals tailored to individual needs</p>
                  <p>• <strong>Comprehensive Care:</strong> Address diabetes and cardiovascular risk factors</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Treatment Targets & Goals</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="border border-gray-300 p-3 text-left medical-heading">Parameter</th>
                        <th className="border border-gray-300 p-3 text-left medical-heading">Optimal</th>
                        <th className="border border-gray-300 p-3 text-left medical-heading">Acceptable</th>
                        <th className="border border-gray-300 p-3 text-left medical-heading">Poor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 medical-text">Symptoms</td>
                        <td className="border border-gray-300 p-3 text-green-600">Absent</td>
                        <td className="border border-gray-300 p-3 text-yellow-600">Absent</td>
                        <td className="border border-gray-300 p-3 text-red-600">Present</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 medical-text">Fasting Glucose</td>
                        <td className="border border-gray-300 p-3 text-green-600">80-120 mg/dL</td>
                        <td className="border border-gray-300 p-3 text-yellow-600">&lt;160 mg/dL</td>
                        <td className="border border-gray-300 p-3 text-red-600">&gt;160 mg/dL</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 medical-text">Postprandial Glucose</td>
                        <td className="border border-gray-300 p-3 text-green-600">90-145 mg/dL</td>
                        <td className="border border-gray-300 p-3 text-yellow-600">&lt;180 mg/dL</td>
                        <td className="border border-gray-300 p-3 text-red-600">&gt;180 mg/dL</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 medical-text">HbA1c (%)</td>
                        <td className="border border-gray-300 p-3 text-green-600">&lt;110% of upper limit</td>
                        <td className="border border-gray-300 p-3 text-yellow-600">&lt;140% of upper limit</td>
                        <td className="border border-gray-300 p-3 text-red-600">&gt;140% of upper limit</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 medical-text">Blood Pressure</td>
                        <td className="border border-gray-300 p-3 text-green-600">&lt;135/85 mmHg</td>
                        <td className="border border-gray-300 p-3 text-yellow-600">&lt;140/90 mmHg</td>
                        <td className="border border-gray-300 p-3 text-red-600">&gt;160/90 mmHg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Nutritional Management</h3>
                <p className="mb-4">
                  Dietary therapy forms the foundation of diabetes management, aiming to achieve optimal 
                  metabolic control while maintaining nutritional adequacy and quality of life.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary rounded-lg p-6">
                    <h4 className="text-lg font-semibold medical-text mb-3 flex items-center">
                      <Heart className="h-5 w-5 text-primary mr-2" />
                      Macronutrient Distribution
                    </h4>
                    <ul className="space-y-2 medical-text-light text-sm">
                      <li>• <strong>Carbohydrates:</strong> 50-60% of total calories (focus on amount vs. type)</li>
                      <li>• <strong>Fats:</strong> 25-35% total calories (saturated fat &lt;10%)</li>
                      <li>• <strong>Protein:</strong> 10-15% total calories (0.8-1g/kg body weight)</li>
                      <li>• <strong>Cholesterol:</strong> Limited to ≤300mg daily</li>
                      <li>• <strong>Sodium:</strong> Restrict especially with hypertension</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-6">
                    <h4 className="text-lg font-semibold medical-text mb-3 flex items-center">
                      <Target className="h-5 w-5 text-primary mr-2" />
                      Dietary Objectives
                    </h4>
                    <ul className="space-y-2 medical-text-light text-sm">
                      <li>• Achieve and maintain optimal body weight</li>
                      <li>• Optimize blood glucose levels</li>
                      <li>• Normalize lipid profiles</li>
                      <li>• Provide adequate nutrition for growth (children)</li>
                      <li>• Prevent and treat complications</li>
                      <li>• Maintain eating pleasure and quality of life</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Special Dietary Considerations</h4>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <p>• <strong>Artificial Sweeteners:</strong> Use in moderation; limit nutritive sweeteners (sorbitol, fructose)</p>
                    <p>• <strong>Alcohol:</strong> Same precautions as general population; increases hypoglycemia risk with medications</p>
                    <p>• <strong>Ramadan Fasting:</strong> Special meal planning considerations for cultural/religious observances</p>
                    <p>• <strong>Supplements:</strong> Generally unnecessary with balanced diet except in special conditions</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Physical Activity & Exercise</h3>
                <p className="mb-4">
                  Regular physical activity improves insulin sensitivity, promotes weight loss, and provides 
                  cardiovascular benefits essential for diabetes management.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <Activity className="h-5 w-5 text-green-600 mr-2" />
                    Exercise Benefits & Guidelines
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-700 text-sm font-semibold mb-2">Benefits:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Improved insulin sensitivity</li>
                        <li>• Weight management</li>
                        <li>• Cardiovascular health</li>
                        <li>• Blood glucose control</li>
                        <li>• Mental well-being</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-green-700 text-sm font-semibold mb-2">Precautions:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Monitor for hypoglycemia</li>
                        <li>• Tailor to individual fitness</li>
                        <li>• Adjust medication/food intake</li>
                        <li>• Stay hydrated</li>
                        <li>• Progress gradually</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Type 2 Diabetes Management */}
          <section id="type2" className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Type 2 Diabetes: Non-Insulin-Dependent Management</h2>
            <div className="medical-body space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Pharmacological Treatment Algorithm</h3>
                <p className="mb-4">
                  Treatment progression follows a systematic approach, beginning with lifestyle interventions 
                  and advancing to pharmacological therapy based on glycemic control achievement.
                </p>
                
                <div className="bg-secondary rounded-lg p-6">
                  <h4 className="text-lg font-semibold medical-text mb-4">Oral Hypoglycemic Drugs (OHDs)</h4>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold medical-text mb-2">Sulfonylureas (SUs)</h5>
                      <p className="medical-text-light text-sm mb-2">
                        <strong>Mechanism:</strong> Stimulate insulin release from pancreatic beta cells and enhance peripheral insulin action.
                      </p>
                      <div className="space-y-2 text-sm medical-text-light">
                        <p>• <strong>Glibenclamide:</strong> Initial dose 1.25-2.5mg, maximum 15mg daily</p>
                        <p>• <strong>Tolbutamide:</strong> Initial dose 0.5g, maximum 1.5g daily (divided doses)</p>
                        <p>• <strong>Cautions:</strong> Hypoglycemia risk, especially in elderly and renal impairment</p>
                        <p>• <strong>Contraindications:</strong> Pregnancy, breastfeeding</p>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold medical-text mb-2">Biguanides (Metformin)</h5>
                      <p className="medical-text-light text-sm mb-2">
                        <strong>Mechanism:</strong> Decreases gluconeogenesis and increases peripheral glucose utilization.
                      </p>
                      <div className="space-y-2 text-sm medical-text-light">
                        <p>• <strong>Dosing:</strong> Start 500-850mg daily with food, increase to 500mg TDS or 850mg BD</p>
                        <p>• <strong>Primary Use:</strong> Obese patients not responding to dietary therapy</p>
                        <p>• <strong>Major Risk:</strong> Lactic acidosis (rare but serious)</p>
                        <p>• <strong>Contraindications:</strong> Renal impairment, age &gt;70 years, heart failure, hepatic impairment</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-800 mb-2">Combination Therapy</h5>
                    <p className="text-yellow-700 text-sm">
                      SUs may be combined with metformin when therapy targets are not achieved with either drug alone. 
                      This approach can improve glycemic control while potentially reducing individual drug dosages.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Glucose Monitoring Strategies</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Blood Glucose Testing</h4>
                    <div className="space-y-2 text-blue-700 text-sm">
                      <p>• More informative and safer than urine testing</p>
                      <p>• Essential for poorly controlled cases and insulin users</p>
                      <p>• Glucose meters useful but not essential</p>
                      <p>• Visual strips equally reliable with proper training</p>
                      <p>• Check technique precision every 6 months</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Urine Glucose Testing</h4>
                    <div className="space-y-2 text-green-700 text-sm">
                      <p>• Alternative when blood testing not feasible</p>
                      <p>• Use second-void specimens</p>
                      <p>• Goal: persistently negative (normal renal threshold)</p>
                      <p>• Acceptable for stable elderly patients</p>
                      <p>• Check blood glucose if urine glucose &gt;2%</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Ketone Monitoring</h4>
                  <p className="text-red-700 text-sm mb-2">Check urine ketones when:</p>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Blood glucose consistently &gt;300 mg/dL</li>
                    <li>• Urine glucose consistently &gt;2%</li>
                    <li>• During intercurrent illnesses</li>
                    <li>• Symptoms of diabetic ketoacidosis present</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Type 1 Diabetes Management */}
          <section id="type1" className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Type 1 Diabetes: Insulin-Dependent Management</h2>
            <div className="medical-body space-y-6">
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4">Specific Management Objectives</h3>
                <div className="space-y-3 text-red-700">
                  <p>• Achieve optimal metabolic control mimicking physiological insulin secretion</p>
                  <p>• Minimize hypoglycemia risk while maintaining near-normal glucose levels</p>
                  <p>• Ensure normal growth and development in children and adolescents</p>
                  <p>• Prevent acute and long-term complications</p>
                  <p>• Provide psychological support and family education</p>
                  <p>• Maintain quality of life</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Need Personalized Diabetes Care?</h3>
            <p className="mb-6 text-lg">
              Connect with qualified healthcare professionals who specialize in diabetes management 
              and can provide personalized treatment plans.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 medical-transition">
              Schedule Consultation
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Diabetes;