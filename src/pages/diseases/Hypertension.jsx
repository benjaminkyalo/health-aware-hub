
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, AlertCircle, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hypertension = () => {
  return (
    <div className="min-h-screen bg-background">
      
      
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm medical-text-light">
            <Link to="/" className="hover:text-primary medical-transition">Home</Link>
            <span>/</span>
            <Link to="/" className="hover:text-primary medical-transition">Health Topics</Link>
            <span>/</span>
            <span className="medical-text">Hypertension</span>
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
              Hypertension: Prevention, Diagnosis, and Treatment
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

          {/* Understanding Hypertension */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Understanding Hypertension</h2>
            <div className="medical-body space-y-4">
              <p>
                Hypertension, commonly known as high blood pressure, is a widespread health issue affecting 
                over 20% of adults globally. In Iraq, the prevalence is even higher, with 40.4% of adults 
                diagnosed with elevated blood pressure. This condition is a leading contributor to severe 
                health complications, including heart disease, stroke, kidney failure, and peripheral vascular disease.
              </p>
              <p>
                Blood pressure is classified into four categories based on readings. Understanding these 
                classifications helps in early detection and appropriate management of the condition.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold medical-heading mb-4">Blood Pressure Classifications</h3>
              <div className="space-y-3 medical-text-light">
                <p><strong>Normal:</strong> Below 120/80 mmHg</p>
                <p><strong>Prehypertension:</strong> 120-139/80-89 mmHg - signals increased risk</p>
                <p><strong>Stage 1 Hypertension:</strong> 140-159/90-99 mmHg</p>
                <p><strong>Stage 2 Hypertension:</strong> 160/100 mmHg or higher</p>
              </div>
            </div>
          </section>

          {/* Types of Hypertension */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Types of Hypertension</h2>
            <div className="medical-body space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold medical-heading mb-3">Essential (Primary) Hypertension</h3>
                <p>
                  Accounts for 90% of cases and develops without a clear underlying cause. Risk factors 
                  include obesity, high salt intake, sedentary lifestyle, and genetic predisposition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-3">Secondary Hypertension</h3>
                <p>
                  Makes up about 10% of cases and results from identifiable medical conditions such as:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 medical-text-light">
                  <li>Kidney disease</li>
                  <li>Hormonal imbalances</li>
                  <li>Medication side effects</li>
                  <li>Sleep apnea</li>
                  <li>Thyroid problems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-3">Malignant Hypertension</h3>
                <p>
                  The most severe form, rare but life-threatening, characterized by extremely high blood 
                  pressure that rapidly damages organs. This condition requires immediate emergency treatment.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnosis and Risk Assessment */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Diagnosis and Risk Assessment</h2>
            <div className="medical-body space-y-4">
              <p>
                Diagnosing hypertension requires a thorough evaluation to determine its severity and 
                potential causes. A comprehensive approach includes medical history, physical examination, 
                and laboratory tests.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold medical-heading mb-4">Medical History Assessment</h3>
                  <ul className="space-y-2 medical-text-light">
                    <li>• Family history of hypertension</li>
                    <li>• Cardiovascular disease history</li>
                    <li>• Diabetes or kidney disorders</li>
                    <li>• Lifestyle habits (smoking, alcohol)</li>
                    <li>• Diet and physical activity levels</li>
                    <li>• Current medications</li>
                  </ul>
                </div>
                
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold medical-heading mb-4">Physical Examination</h3>
                  <ul className="space-y-2 medical-text-light">
                    <li>• Body mass index (BMI) measurement</li>
                    <li>• Heart sounds evaluation</li>
                    <li>• Optic fundi examination</li>
                    <li>• Renal artery bruits check</li>
                    <li>• Electrocardiogram (ECG)</li>
                    <li>• Laboratory tests (blood, urine)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Treatment Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Treatment Strategies</h2>
            <div className="medical-body space-y-6">
              <p>
                The primary goal of hypertension treatment is to reduce blood pressure to safe levels, 
                minimizing the risk of cardiovascular events. For most individuals, the target is below 
                140/90 mmHg, while those with diabetes or chronic kidney disease should aim for below 130/80 mmHg.
              </p>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Lifestyle Modifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold medical-text mb-3 flex items-center">
                      <Heart className="h-5 w-5 text-primary mr-2" />
                      DASH Diet
                    </h4>
                    <ul className="space-y-2 medical-text-light">
                      <li>• Emphasize fruits and vegetables</li>
                      <li>• Choose whole grains and low-fat dairy</li>
                      <li>• Reduce sodium intake</li>
                      <li>• Limit saturated fats</li>
                      <li>• Avoid processed foods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold medical-text mb-3 flex items-center">
                      <Activity className="h-5 w-5 text-primary mr-2" />
                      Physical Activity
                    </h4>
                    <ul className="space-y-2 medical-text-light">
                      <li>• 30 minutes aerobic exercise most days</li>
                      <li>• Brisk walking can lower BP by 4-9 mmHg</li>
                      <li>• Weight loss if overweight</li>
                      <li>• Smoking cessation</li>
                      <li>• Limit alcohol consumption</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold medical-heading mb-4">Pharmacological Treatment</h3>
                <p className="medical-text-light mb-4">
                  When lifestyle changes are insufficient, medications become necessary. First-line 
                  medications include:
                </p>
                <div className="bg-secondary rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold medical-text mb-2">First-Line Medications</h4>
                      <ul className="space-y-1 medical-text-light text-sm">
                        <li>• Thiazide diuretics</li>
                        <li>• ACE inhibitors</li>
                        <li>• Angiotensin receptor blockers (ARBs)</li>
                        <li>• Calcium channel blockers (CCBs)</li>
                        <li>• Beta-blockers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold medical-text mb-2">Combination Therapy</h4>
                      <p className="medical-text-light text-sm">
                        Many patients require combination therapy, especially those with Stage 2 
                        hypertension. Common combinations include thiazide diuretics with ACE 
                        inhibitors or CCBs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special Considerations */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Special Considerations</h2>
            <div className="medical-body space-y-6">
              <p>
                Hypertension affects different populations in unique ways, requiring tailored approaches 
                for optimal management and safety.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold medical-heading mb-3">Elderly Patients</h3>
                  <p className="medical-text-light mb-3">
                    Often experience isolated systolic hypertension. Treatment should start with low 
                    doses of thiazide diuretics or CCBs, with careful monitoring for side effects.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold medical-heading mb-3">Pregnant Women</h3>
                  <p className="medical-text-light mb-3">
                    Require special attention to avoid harm to the fetus. Methyldopa and labetalol 
                    are safe options, while ACE inhibitors and ARBs must be avoided.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold medical-heading mb-3">Diabetic Patients</h3>
                  <p className="medical-text-light mb-3">
                    Face higher risk of complications. Tight blood pressure control (below 130/80 mmHg) 
                    is essential, with ACE inhibitors or ARBs preferred for kidney protection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold medical-heading mb-3">Emergency Situations</h3>
                  <p className="medical-text-light mb-3">
                    Hypertensive emergencies (BP {'>'}180/120 mmHg with organ damage) require urgent 
                    hospitalization and IV medications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention and Monitoring */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Prevention and Monitoring</h2>
            <div className="medical-body space-y-4">
              <p>
                Preventing hypertension involves a comprehensive approach at different levels, from 
                primary prevention before the condition develops to managing complications in established cases.
              </p>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold medical-heading mb-4">Prevention Strategies</h3>
                <div className="space-y-3 medical-text-light">
                  <p><strong>Primary Prevention:</strong> Adopt healthy habits before high blood pressure develops</p>
                  <p><strong>Secondary Prevention:</strong> Early detection through regular screenings</p>
                  <p><strong>Tertiary Prevention:</strong> Manage complications in patients with established hypertension</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold medical-heading mb-4">Home Blood Pressure Monitoring</h3>
                <p className="medical-text-light mb-3">
                  Home monitoring empowers patients to track progress and detect fluctuations. Use validated 
                  digital monitors with consistent timing and keep a log for healthcare providers.
                </p>
              </div>
            </div>
          </section>

          {/* When to See a Doctor */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">When to See a Healthcare Provider</h2>
            <div className="medical-body space-y-4">
              <p>
                Regular medical care is essential for hypertension prevention, early detection, and management. 
                Recognizing warning signs of complications is crucial for timely intervention.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Seek Immediate Care</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Blood pressure over 180/120 mmHg</li>
                    <li>• Severe headaches with vision changes</li>
                    <li>• Chest pain or difficulty breathing</li>
                    <li>• Sudden weakness or confusion</li>
                    <li>• Signs of stroke or heart attack</li>
                    <li>• Severe dizziness or fainting</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-4">Schedule an Appointment</h3>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>• Consistently elevated BP readings</li>
                    <li>• Family history of hypertension</li>
                    <li>• Risk factors like obesity or diabetes</li>
                    <li>• Side effects from medications</li>
                    <li>• Need for routine BP monitoring</li>
                    <li>• Lifestyle modification guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Final Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold medical-heading mb-6">Living Well with Hypertension</h2>
            <div className="medical-body space-y-4">
              <p>
                Hypertension is a lifelong condition requiring continuous management, but with proper care, 
                people with high blood pressure can live long, healthy, and fulfilling lives. The key is 
                working closely with your healthcare team to develop and follow a comprehensive management plan.
              </p>
              <p>
                Patient education plays a vital role in successful hypertension management. Understanding 
                the importance of lifestyle changes, medication adherence, and routine check-ups is essential. 
                Dispelling myths—such as the belief that herbal remedies alone can control hypertension—ensures 
                patients follow evidence-based treatments.
              </p>
              <p>
                By taking an active role in their care, individuals with hypertension can effectively manage 
                their condition and reduce the risk of serious complications. Stay informed about the latest 
                research, but always discuss any changes to your treatment plan with your healthcare provider first.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Need Personalized Hypertension Care?</h3>
            <p className="mb-6 text-lg">
              Connect with qualified healthcare professionals who specialize in hypertension management 
              and can provide personalized treatment plans.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 medical-transition">
              Schedule Consultation
            </Button>
          </div>

        </div>
      </main>

     
    </div>
  );
};

export default Hypertension;