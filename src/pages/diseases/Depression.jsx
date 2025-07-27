import { ArrowLeft, Calendar, AlertCircle } from 'lucide-react';

const Depression = () => {
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
            <a href="/" className="hover:text-blue-600 transition-colors">Mental Health</a>
            <span>/</span>
            <span className="text-gray-900">Depression</span>
          </div>
        </div>
      </div>

      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Mental Health Topics
          </a>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Guide to Depression: Symptoms, Causes, and Treatment Options
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
              Understanding Depression as a Medical Condition
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Depression is a serious and pervasive mental health disorder that significantly impacts an individual's emotional, cognitive, and physical well-being. Unlike transient feelings of sadness, depression is a chronic condition that interferes with daily functioning, relationships, and overall quality of life.
              </p>
              <p>
                The National Institute of Mental Health (NIMH) emphasizes that depression is not a sign of personal weakness but a medical illness requiring appropriate treatment. Many individuals suffering from depressive disorders never seek help due to stigma, lack of awareness, or misconceptions about mental health.
              </p>
              <p>
                However, research confirms that the majority of people with depression—even severe cases—can achieve substantial improvement with the right interventions, including medication, psychotherapy, and lifestyle modifications.
              </p>
            </div>
          </section>

          {/* Types of Depression */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Types of Depressive Disorders
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Major Depressive Disorder (MDD)
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-6">
              <p>
                Major Depressive Disorder is the most prevalent form of depression, characterized by persistent sadness, loss of interest in previously enjoyable activities, fatigue, and sleep disturbances that must persist for at least two weeks to meet diagnostic criteria. Individuals with MDD often experience difficulty concentrating, making decisions, and maintaining their usual level of functioning in work, social, or personal relationships.
              </p>
              <p>
                MDD can be episodic in nature, with individuals experiencing recurrent bouts throughout their lives. Between episodes, people may function normally, but the risk of future episodes remains elevated. The severity can range from mild impairment to complete inability to perform daily activities, making early recognition and treatment crucial for long-term outcomes.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Persistent Depressive Disorder (Dysthymia)
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-6">
              <p>
                Persistent Depressive Disorder, formerly known as dysthymia, involves chronic but less severe symptoms that last for two years or longer. While the symptoms may not be as debilitating as those seen in MDD, they still significantly impair functioning and quality of life. People with dysthymia often describe feeling like they've "always been this way," which can delay seeking treatment.
              </p>
              <p>
                This condition increases the risk of developing major depressive episodes, a phenomenon known as "double depression." The chronic nature of dysthymia often goes unrecognized by both patients and healthcare providers, as the persistent low mood becomes normalized over time, making professional evaluation essential for proper diagnosis.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Specialized Forms of Depression
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>Psychotic Depression</strong> represents a severe form where depression coexists with psychotic features such as delusions or hallucinations. These symptoms are typically mood-congruent, meaning they align with depressive themes like worthlessness, guilt, or persecution. This condition requires immediate professional intervention and often responds well to a combination of antidepressants and antipsychotic medications.
              </p>
              <p>
                <strong>Postpartum Depression</strong> affects 10-15% of new mothers, emerging within a month after childbirth due to dramatic hormonal fluctuations, physical exhaustion, and emotional stress of new parenthood. Unlike the "baby blues," which resolve within two weeks, postpartum depression involves persistent symptoms that interfere with mother-infant bonding and daily functioning. Early identification and treatment are crucial for both maternal and infant well-being.
              </p>
              <p>
                <strong>Seasonal Affective Disorder (SAD)</strong> is linked to reduced sunlight exposure during winter months, leading to depressive symptoms that typically resolve in spring and summer. The condition appears to be related to disruptions in circadian rhythms and decreased serotonin production. Treatment commonly includes light therapy, antidepressants, and psychotherapy, with light therapy being particularly effective for many individuals.
              </p>
              <p>
                <strong>Bipolar Disorder</strong>, while distinct from unipolar depression, involves alternating episodes of extreme highs (mania or hypomania) and debilitating lows (depression). The depressive episodes in bipolar disorder can be indistinguishable from MDD, making accurate diagnosis challenging but essential, as treatment approaches differ significantly between unipolar and bipolar depression.
              </p>
            </div>
          </section>

          {/* Symptoms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Recognizing the Symptoms of Depression
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Depression presents differently across individuals, but there are common patterns that mental health professionals use for diagnosis. Emotional symptoms typically include persistent sadness, hopelessness, irritability, and feelings of worthlessness or excessive guilt that persist most of the day, nearly every day, for at least two weeks.
              </p>
              
              <p>
                Physical symptoms often manifest as chronic pain, headaches, and digestive issues without a clear medical cause, along with sleep disturbances ranging from insomnia to excessive sleeping. Significant changes in appetite and weight are common, as are fatigue and loss of energy that make even simple tasks feel overwhelming.
              </p>

              <p>
                Cognitive symptoms include difficulty concentrating, indecisiveness, and memory lapses that can significantly impact work or academic performance. These cognitive changes often cause individuals to doubt their abilities and may contribute to feelings of worthlessness. In severe cases, individuals may experience recurrent thoughts of death or suicide, which require immediate professional attention.
              </p>

              <p>
                The presentation can vary significantly based on age, gender, and cultural background. Some people may present with predominantly physical complaints, while others experience primarily emotional or cognitive symptoms. Because symptoms vary in intensity and duration, a thorough clinical evaluation by a mental health professional is essential for accurate diagnosis and appropriate treatment planning.
              </p>
            </div>
          </section>

          {/* Comorbidities */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Co-Occurring Conditions and Comorbidities
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Depression frequently coexists with other mental and physical health disorders, creating complex clinical presentations that require comprehensive treatment approaches. This comorbidity significantly complicates both diagnosis and treatment, as symptoms may overlap or mask each other, making it challenging for healthcare providers to identify the primary condition.
              </p>

              <p>
                Among mental health comorbidities, anxiety disorders are particularly common, with conditions like Generalized Anxiety Disorder, Panic Disorder, and Social Anxiety frequently occurring alongside depression. Studies indicate that over 40% of individuals with Post-Traumatic Stress Disorder also suffer from depression following traumatic events, creating a complex interplay between trauma responses and mood disorders that requires specialized treatment approaches.
              </p>

              <p>
                Substance abuse represents another significant comorbidity, as individuals may turn to alcohol or drugs to self-medicate their depressive symptoms. Unfortunately, this often exacerbates the underlying depression while creating additional health and social problems. Eating disorders also commonly co-occur with depression, especially in adolescents and young adults, where body image issues and mood disturbances can reinforce each other.
              </p>

              <p>
                Chronic medical conditions such as cardiovascular disease, diabetes, cancer, and Parkinson's disease are associated with higher rates of depression. The relationship is bidirectional—chronic illness can trigger depression, while depression can worsen the prognosis and treatment outcomes of medical conditions. Research suggests that untreated depression can worsen the prognosis of these illnesses by affecting treatment compliance, immune function, and overall health behaviors, while effective depression treatment may improve overall health outcomes and quality of life.
              </p>
            </div>
          </section>

          {/* Causes */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Biological, Genetic, and Environmental Causes
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                The exact cause of depression remains unclear, but it is widely accepted that a combination of genetic, biochemical, and environmental factors contributes to its development.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Biological Factors:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Structural and functional brain differences in mood-regulating areas</li>
                <li>Imbalances in neurotransmitters (serotonin, norepinephrine, dopamine)</li>
                <li>Changes in the prefrontal cortex and hippocampus</li>
                <li>Hormonal fluctuations, especially in women</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Genetic Predisposition:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>No single gene responsible; multiple genes interact with environment</li>
                <li>Family history increases susceptibility</li>
                <li>Genetic factors account for approximately 40% of depression risk</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Environmental Triggers:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traumatic life events (loss of loved one, financial hardship, relationship breakdowns)</li>
                <li>Chronic stress and social isolation</li>
                <li>Childhood adversity and abuse</li>
                <li>Major life transitions and changes</li>
              </ul>

              <p className="mt-4">
                Understanding these multifaceted causes helps tailor individualized treatment strategies for each person's unique circumstances.
              </p>
            </div>
          </section>

          {/* Gender and Age Differences */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Gender and Age-Specific Manifestations
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Women and Depression
            </h3>
            <div className="text-gray-700 space-y-3 leading-relaxed mb-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Twice as likely as men to experience depression</li>
                <li>Hormonal changes during menstruation, pregnancy, and menopause contribute to risk</li>
                <li>Higher rates of trauma such as domestic violence</li>
                <li>Specific conditions: Postpartum depression and PMDD</li>
                <li>Societal pressures and role expectations increase vulnerability</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Men and Depression
            </h3>
            <div className="text-gray-700 space-y-3 leading-relaxed mb-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Often mask sadness with anger, irritability, or reckless behavior</li>
                <li>More likely to avoid seeking help due to stigma</li>
                <li>Higher suicide completion rates than women</li>
                <li>May present with substance abuse or aggressive behaviors</li>
                <li>Work-related stress and social expectations contribute to risk</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Age-Specific Considerations
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <div>
                <p><strong>Older Adults:</strong></p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Depression often results from chronic illness, disability, or social isolation</li>
                  <li>Symptoms like memory problems and fatigue often misattributed to aging</li>
                  <li>Leads to underdiagnosis and undertreatment</li>
                </ul>
              </div>
              <div>
                <p><strong>Children and Adolescents:</strong></p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>May display depression as academic decline or behavioral issues</li>
                  <li>Social withdrawal and irritability are common signs</li>
                  <li>Untreated childhood depression frequently persists into adulthood</li>
                  <li>Increases risk of severe mental health complications later in life</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Treatment */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Evidence-Based Treatment Approaches
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Effective treatment typically involves a combination of medication, psychotherapy, and lifestyle adjustments tailored to individual needs.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Medication Options:</h3>
              <div className="space-y-3">
                <div>
                  <p><strong>First-Line Antidepressants:</strong></p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>SSRIs (Prozac, Zoloft, Lexapro) - fewer side effects</li>
                    <li>SNRIs (Effexor, Cymbalta) - dual neurotransmitter action</li>
                    <li>Take 4-6 weeks to show full effects</li>
                    <li>Common side effects: nausea, insomnia, sexual dysfunction (usually temporary)</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Treatment-Resistant Cases:</strong></p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Alternative medications or augmentation strategies</li>
                    <li>Mood stabilizers may be added</li>
                    <li>Careful monitoring and medication adjustments</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Psychotherapy:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps reframe negative thought patterns</li>
                <li><strong>Interpersonal Therapy (IPT):</strong> Focuses on relationship and communication skills</li>
                <li><strong>Dialectical Behavior Therapy (DBT):</strong> Combines CBT with mindfulness techniques</li>
                <li><strong>Mindfulness-Based Therapies:</strong> Reduce rumination and increase self-awareness</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Advanced Treatment Options:</h3>
              <div className="space-y-3">
                <div>
                  <p><strong>Electroconvulsive Therapy (ECT):</strong></p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Highly effective for severe, refractory depression</li>
                    <li>Performed under anesthesia with minimal side effects</li>
                    <li>Modern techniques have improved safety significantly</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Emerging Treatments:</strong></p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Transcranial Magnetic Stimulation (TMS)</li>
                    <li>Ketamine infusion therapy for resistant cases</li>
                    <li>Deep brain stimulation (experimental)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Self-Help and Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Self-Help Strategies and Supporting Loved Ones
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Self-Management Strategies
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>Individuals with depression can benefit from structured approaches to daily life:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Establish routines:</strong> Create structured daily schedules</li>
                <li><strong>Regular physical activity:</strong> Even light exercise can improve mood</li>
                <li><strong>Social engagement:</strong> Maintain connections despite urges to isolate</li>
                <li><strong>Break tasks down:</strong> Divide overwhelming tasks into manageable steps</li>
                <li><strong>Set realistic goals:</strong> Prevent overwhelm with achievable objectives</li>
                <li><strong>Practice mindfulness:</strong> Meditation and breathing exercises</li>
                <li><strong>Maintain sleep hygiene:</strong> Regular sleep schedule and bedroom environment</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Supporting Family and Friends
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>Support networks play a crucial role in recovery:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Educate yourself:</strong> Learn about depression as a medical condition</li>
                <li><strong>Listen without judgment:</strong> Provide emotional support and validation</li>
                <li><strong>Encourage professional help:</strong> Support seeking treatment</li>
                <li><strong>Be patient:</strong> Recovery takes time and may involve setbacks</li>
                <li><strong>Watch for warning signs:</strong> Monitor for suicidal thoughts or behaviors</li>
                <li><strong>Take care of yourself:</strong> Supporting someone with depression can be emotionally draining</li>
              </ul>
              
              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500">
                <p className="font-semibold text-red-800">Crisis Intervention:</p>
                <p className="text-red-700 mt-2">
                  Vigilance for suicidal ideation is critical. Any concerning statements should prompt immediate intervention via crisis hotlines, emergency services, or mental health professionals. Never leave someone with active suicidal thoughts alone.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Need Professional Mental Health Support?</h3>
            <p className="mb-6 text-lg">
              Connect with qualified mental health professionals who specialize in depression treatment and can provide personalized care plans.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 transition-colors px-6 py-2 rounded-lg font-medium">
              Find a Mental Health Provider
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

export default Depression;