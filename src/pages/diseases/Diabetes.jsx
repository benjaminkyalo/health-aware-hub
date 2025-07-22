import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, AlertCircle, Heart, Activity } from 'lucide-react';
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
            <span className="medical-text">Diabetes</span>
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
              Diabetes: Understanding and Management
            </h1>
            <div className="flex items-center space-x-4 text-sm medical-text-light">
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

          {/* What is Diabetes? */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">What is Diabetes?</h2>
            <div className="medical-body space-y-4">
              <p>
                Diabetes is a group of metabolic disorders characterized by high blood glucose (blood sugar) levels 
                over a prolonged period. This occurs when the body either doesn't produce enough insulin or cannot 
                effectively use the insulin it produces.
              </p>
              <p>
                Insulin is a hormone produced by the pancreas that allows glucose from food to enter cells to be 
                used for energy. When this process doesn't work properly, glucose stays in the blood, leading to 
                high blood sugar levels that can cause serious health complications over time.
              </p>
              <p>
                There are several types of diabetes, with Type 1, Type 2, and gestational diabetes being the most common. 
                According to the World Health Organization, approximately 422 million people worldwide have diabetes, 
                and it's a leading cause of blindness, kidney failure, heart attacks, stroke, and lower limb amputation.
              </p>
            </div>
          </section>

          {/* Causes */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Causes of Diabetes</h2>
            <div className="medical-body space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold medical-heading mb-3">Type 1 Diabetes</h3>
                <p>
                  Type 1 diabetes is an autoimmune condition where the body's immune system attacks and destroys 
                  the insulin-producing beta cells in the pancreas. The exact cause is unknown, but it's believed 
                  to involve a combination of genetic predisposition and environmental factors such as viruses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-3">Type 2 Diabetes</h3>
                <p>
                  Type 2 diabetes develops when the body becomes resistant to insulin or when the pancreas doesn't 
                  produce enough insulin. Risk factors include:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 medical-text-light">
                  <li>Obesity and excess abdominal fat</li>
                  <li>Physical inactivity</li>
                  <li>Poor diet high in processed foods and sugars</li>
                  <li>Family history of diabetes</li>
                  <li>Age (risk increases after 45)</li>
                  <li>High blood pressure</li>
                  <li>Abnormal cholesterol levels</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-3">Gestational Diabetes</h3>
                <p>
                  This type develops during pregnancy when hormonal changes make it harder for the body to use 
                  insulin effectively. Risk factors include being overweight, having a family history of diabetes, 
                  and previous gestational diabetes.
                </p>
              </div>
            </div>
          </section>

          {/* Symptoms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Signs and Symptoms</h2>
            <div className="medical-body space-y-4">
              <p>
                Diabetes symptoms can develop gradually (Type 2) or appear suddenly (Type 1). Common symptoms include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold medical-heading mb-4">Common Symptoms</h3>
                  <ul className="space-y-2 medical-text-light">
                    <li>• Excessive thirst and urination</li>
                    <li>• Unexplained weight loss</li>
                    <li>• Increased hunger</li>
                    <li>• Fatigue and weakness</li>
                    <li>• Blurred vision</li>
                    <li>• Slow-healing wounds</li>
                    <li>• Frequent infections</li>
                  </ul>
                </div>
                
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold medical-heading mb-4">Emergency Symptoms</h3>
                  <ul className="space-y-2 medical-text-light">
                    <li>• Severe dehydration</li>
                    <li>• Difficulty breathing</li>
                    <li>• Confusion or altered consciousness</li>
                    <li>• Severe abdominal pain</li>
                    <li>• Vomiting and inability to keep fluids down</li>
                    <li>• Very high blood sugar (over 400 mg/dL)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnosis */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Diagnosis</h2>
            <div className="medical-body space-y-4">
              <p>
                Diabetes is diagnosed through several blood tests that measure blood glucose levels. 
                Healthcare providers use these tests to determine if blood sugar levels are higher than normal.
              </p>
              
              <div className="bg-secondary rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold medical-heading mb-4">Diagnostic Tests</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold medical-text mb-2">Fasting Plasma Glucose (FPG)</h4>
                    <p className="medical-text-light text-sm">Measures blood sugar after 8+ hours of fasting. Diabetes: ≥126 mg/dL</p>
                  </div>
                  <div>
                    <h4 className="font-semibold medical-text mb-2">Oral Glucose Tolerance Test (OGTT)</h4>
                    <p className="medical-text-light text-sm">Measures blood sugar before and 2 hours after drinking glucose solution. Diabetes: ≥200 mg/dL</p>
                  </div>
                  <div>
                    <h4 className="font-semibold medical-text mb-2">Hemoglobin A1C</h4>
                    <p className="medical-text-light text-sm">Shows average blood sugar over 2-3 months. Diabetes: ≥6.5%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold medical-text mb-2">Random Plasma Glucose</h4>
                    <p className="medical-text-light text-sm">Taken at any time with symptoms. Diabetes: ≥200 mg/dL</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Treatment */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Treatment and Management</h2>
            <div className="medical-body space-y-6">
              <p>
                Effective diabetes management involves a comprehensive approach that includes medication, 
                lifestyle changes, and regular monitoring. Treatment plans are individualized based on 
                the type of diabetes, overall health, and personal circumstances.
              </p>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Medication Management</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold medical-text mb-2">Type 1 Diabetes</h4>
                    <p className="medical-text-light">
                      Requires lifelong insulin therapy through injections or insulin pumps. Different types 
                      of insulin work at different speeds and durations to mimic the body's natural insulin production.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold medical-text mb-2">Type 2 Diabetes</h4>
                    <p className="medical-text-light">
                      May be managed with oral medications like metformin, insulin, or other injectable medications. 
                      Treatment often starts with lifestyle changes and progresses to medication as needed.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Lifestyle Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold medical-text mb-3 flex items-center">
                      <Heart className="h-5 w-5 text-primary mr-2" />
                      Nutrition
                    </h4>
                    <ul className="space-y-2 medical-text-light">
                      <li>• Focus on whole grains, vegetables, and lean proteins</li>
                      <li>• Monitor carbohydrate intake and timing</li>
                      <li>• Control portion sizes</li>
                      <li>• Limit processed foods and added sugars</li>
                      <li>• Stay hydrated with water</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold medical-text mb-3 flex items-center">
                      <Activity className="h-5 w-5 text-primary mr-2" />
                      Physical Activity
                    </h4>
                    <ul className="space-y-2 medical-text-light">
                      <li>• Aim for 150 minutes of moderate exercise weekly</li>
                      <li>• Include both aerobic and resistance training</li>
                      <li>• Monitor blood sugar before and after exercise</li>
                      <li>• Start slowly and increase gradually</li>
                      <li>• Consider working with a fitness professional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Prevention Strategies</h2>
            <div className="medical-body space-y-4">
              <p>
                While Type 1 diabetes cannot be prevented, Type 2 diabetes and its complications can often 
                be prevented or delayed through healthy lifestyle choices.
              </p>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold medical-heading mb-4">Prevention Strategies</h3>
                <div className="space-y-3 medical-text-light">
                  <p>• Maintain a healthy weight through balanced diet and regular exercise</p>
                  <p>• Choose whole grains over refined carbohydrates</p>
                  <p>• Limit sugary drinks and opt for water, tea, or coffee</p>
                  <p>• Get regular physical activity (at least 30 minutes most days)</p>
                  <p>• Don't smoke and limit alcohol consumption</p>
                  <p>• Get regular health screenings, especially if you have risk factors</p>
                  <p>• Manage stress through healthy coping strategies</p>
                  <p>• Get adequate sleep (7-9 hours per night)</p>
                </div>
              </div>
            </div>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">When to See a Healthcare Provider</h2>
            <div className="medical-body space-y-4">
              <p>
                Regular medical care is essential for diabetes prevention, early detection, and management. 
                Seek medical attention promptly in certain situations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Seek Immediate Care</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Blood sugar over 400 mg/dL</li>
                    <li>• Signs of diabetic ketoacidosis</li>
                    <li>• Severe dehydration or vomiting</li>
                    <li>• Confusion or loss of consciousness</li>
                    <li>• Difficulty breathing</li>
                    <li>• Chest pain or severe headache</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-4">Schedule an Appointment</h3>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• Symptoms of diabetes develop</li>
                    <li>• Family history of diabetes</li>
                    <li>• Overweight with other risk factors</li>
                    <li>• Blood pressure consistently high</li>
                    <li>• Previous gestational diabetes</li>
                    <li>• Age 45+ without recent screening</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Final Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Living Well with Diabetes</h2>
            <div className="medical-body space-y-4">
              <p>
                Diabetes is a serious condition, but with proper management, people with diabetes can live 
                long, healthy, and fulfilling lives. The key is working closely with your healthcare team 
                to develop and follow a comprehensive management plan.
              </p>
              <p>
                Remember that diabetes management is a marathon, not a sprint. Small, consistent changes 
                in diet, exercise, and medication adherence can make a significant difference in long-term 
                outcomes. Don't hesitate to reach out to healthcare professionals, diabetes educators, 
                and support groups for guidance and encouragement.
              </p>
              <p>
                Stay informed about the latest diabetes research and treatment options, but always discuss 
                any changes to your treatment plan with your healthcare provider first.
              </p>
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