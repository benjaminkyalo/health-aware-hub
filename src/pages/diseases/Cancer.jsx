import { ArrowLeft, Calendar, AlertCircle } from 'lucide-react';

const Cancer = () => {
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
            <a href="/" className="hover:text-blue-600 transition-colors">Cancer Care</a>
            <span>/</span>
            <span className="text-gray-900">Cancer Biology & Treatment</span>
          </div>
        </div>
      </div>

      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cancer Care Topics
          </a>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Guide to Cancer Biology, Epidemiology, and Treatment in the 21st Century
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
              Understanding Cancer: A Modern Perspective
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Cancer remains one of the most complex and challenging diseases of our time, responsible for nearly 10 million deaths worldwide in 2020. Over the past century, groundbreaking research has transformed our understanding of cancer from a mysterious illness to a disease that can be dissected at the molecular level.
              </p>
              <p>
                Despite significant advances in cancer research including genomic sequencing, epigenetic discoveries, and immunotherapy breakthroughs, considerable challenges remain including treatment resistance, metastasis, and global disparities in healthcare access. Modern cancer treatment has been revolutionized by treatments like checkpoint inhibitors and CAR-T cell therapy that harness the immune system to fight cancer.
              </p>
              <p>
                The Human Genome Project completed in 2003 paved the way for large-scale cancer genome studies, identifying critical mutations that drive tumor growth. Researchers now recognize that changes in gene regulation without DNA mutations play a major role in cancer development, opening new avenues for targeted therapeutic interventions.
              </p>
            </div>
          </section>

          {/* Assessment Tools */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              The Genetic and Epigenetic Basis of Cancer
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cancer Genomics: Decoding the Tumor's Blueprint
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                The field of cancer genomics has uncovered thousands of mutations that contribute to tumor formation. Large-scale projects like The Cancer Genome Atlas (TCGA) and The International Cancer Genome Consortium (ICGC) have cataloged mutations across different cancer types, revealing that only a small number of genetic alterations (4-5 per tumor) actually initiate cancer.
              </p>
              <p>
                Driver mutations such as those in the TP53 gene, which is mutated in over 50% of cancers, represent critical targets for therapeutic intervention. However, intratumor heterogeneity means that different cells within the same tumor may have distinct genetic profiles, making treatment significantly more challenging and requiring personalized approaches.
              </p>
              
              {/* Genomic Testing Button */}
              
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Liquid Biopsies and Early Detection
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Liquid biopsies represent a revolutionary non-invasive method to detect tumor DNA in blood, enabling early diagnosis and real-time monitoring of treatment response. This technology allows clinicians to track tumor evolution and detect resistance mutations before clinical progression becomes apparent.
              </p>
              <p>
                These blood-based tests are particularly valuable for monitoring patients during treatment and detecting early signs of cancer recurrence. Liquid biopsies can identify circulating tumor DNA (ctDNA) at levels much lower than traditional imaging methods, providing critical information for treatment decisions.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Epigenetics: Beyond DNA Mutations
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Epigenetics studies how chemical modifications including DNA methylation, histone changes, and non-coding RNAs regulate gene activity without altering the DNA sequence. DNA hypermethylation can silence tumor suppressor genes, while histone modifications alter chromatin structure affecting gene expression patterns.
              </p>
              <p>
                Unlike genetic mutations, epigenetic changes can potentially be reversed with specialized drugs called epidrugs. However, tumor cells can develop resistance to these treatments, and the dynamic nature of the epigenome makes targeted therapies challenging to develop and implement effectively.
              </p>
            </div>
          </section>

          {/* Treatment Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Cancer Stem Cells and the Metastatic Process
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Cancer stem cells (CSCs) represent a rare subset of tumor cells with stem cell-like properties including self-renewal and differentiation capabilities. These cells play crucial roles in tumor initiation, therapy resistance, and metastasis, making them critical targets for effective cancer treatment.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cancer Stem Cells: The Root of Resistance and Recurrence
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                A single cancer stem cell can regenerate an entire tumor, making these cells particularly dangerous for long-term treatment outcomes. CSCs evade chemotherapy and radiation due to their slow growth patterns and enhanced DNA repair capacity, contributing significantly to treatment resistance and cancer recurrence.
              </p>
              <p>
                Current research focuses on identifying CSC-specific biomarkers for targeted therapies and disrupting the tumor microenvironment that supports CSC survival. Understanding the niche factors that maintain CSC populations is crucial for developing effective treatments that can eliminate these resistant cell populations.
              </p>
              <p>
                CSCs are often the cells responsible for metastasis, spreading to distant organs and establishing new tumor sites. Their ability to remain dormant for extended periods before reactivating makes them particularly challenging targets for conventional cancer therapies.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Understanding Metastasis: How Cancer Spreads
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Metastasis is responsible for approximately 90% of cancer-related deaths and involves a complex multi-step process. The metastatic cascade begins with local invasion where tumor cells break through surrounding tissue, followed by intravasation as cells enter blood or lymphatic vessels.
              </p>
              <p>
                During circulation, tumor cells travel through the bloodstream facing numerous challenges including immune system detection and mechanical stress. Successful metastatic cells then undergo extravasation, exiting vessels to colonize new organs where they may remain dormant for years before forming new tumors.
              </p>
              <p>
                Emerging strategies to block metastasis include targeting epithelial-mesenchymal transition (EMT), preventing immune evasion by circulating tumor cells, and disrupting pre-metastatic niches in distant organs. These approaches represent promising avenues for preventing cancer spread and improving patient outcomes.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Global Cancer Epidemiology and Prevention
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                According to 2020 data, the most commonly diagnosed cancers include breast cancer (2.26 million cases), lung cancer (2.20 million cases), and colorectal cancer (1.93 million cases). However, lung cancer remains the leading cause of cancer death (1.79 million deaths), followed by colorectal (935,000 deaths) and liver cancer (830,000 deaths).
              </p>
              <p>
                Significant survival disparities exist across regions, with high-income countries achieving improved screening and treatment outcomes such as 90% five-year survival for breast cancer in the U.S., while low-income countries experience much lower survival rates due to limited access to early detection and advanced therapies.
              </p>
              <p>
                Prevention strategies including tobacco control have been linked to 35-45% reductions in cancer deaths, while HPV vaccination prevents cervical and other HPV-related cancers. Comprehensive screening programs using mammograms, colonoscopies, and PSA tests help detect cancer early when treatment is most effective.
              </p>
            </div>
          </section>

          {/* Medical Interventions */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Cutting-Edge Cancer Treatments and Future Directions
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Modern cancer treatment has been revolutionized by innovative approaches that harness the body's own immune system and target specific molecular pathways. These advanced treatments represent a paradigm shift from traditional one-size-fits-all approaches to personalized medicine tailored to individual patient and tumor characteristics.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Immunotherapy: Unleashing the Immune System
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Checkpoint inhibitors such as anti-PD-1/PD-L1 antibodies work by unlocking the immune system's natural ability to attack tumors, while CAR-T cell therapy involves genetically engineering a patient's own immune cells to specifically target cancer cells. These treatments have achieved remarkable results in previously incurable cancers.
              </p>
              <p>
                However, immunotherapy limitations include the fact that only 20-30% of patients respond to treatment, and serious side effects like cytokine storms can occur. Ongoing research focuses on identifying biomarkers to predict response and developing combination strategies to improve efficacy while minimizing toxicity.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Targeted Therapy and Precision Medicine
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Targeted therapies including tyrosine kinase inhibitors like imatinib block specific cancer-driving proteins, while PARP inhibitors such as olaparib exploit DNA repair defects in cancer cells. These treatments offer the potential for highly effective therapy with reduced side effects compared to traditional chemotherapy.
              </p>
              <p>
                Precision medicine uses comprehensive genomic profiling to tailor treatments to individual patients based on their tumor's specific molecular characteristics. This personalized approach maximizes treatment effectiveness while minimizing unnecessary toxicity from therapies unlikely to benefit specific patients.
              </p>
            </div>
          </section>

          {/* Long-term Maintenance */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Future Challenges and Innovations in Cancer Care
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Overcoming Treatment Resistance
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                One of the greatest challenges in cancer treatment is the ability of tumors to evolve and develop resistance to therapies. This evolutionary process requires continuous monitoring and adaptive treatment strategies that can respond to changing tumor characteristics over time.
              </p>
              <p>
                Liquid biopsies enable early detection of treatment resistance and cancer relapse through monitoring of circulating tumor DNA. This technology allows clinicians to adjust treatment strategies before clinical progression becomes apparent, potentially improving outcomes and quality of life for patients.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Artificial Intelligence in Oncology
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
              <p>
                Machine learning and artificial intelligence are increasingly being used to predict treatment responses, identify optimal drug combinations, and analyze complex genomic data. These technologies can process vast amounts of information to identify patterns that would be impossible for human clinicians to detect.
              </p>
              <p>
                AI applications in oncology include image analysis for early detection, drug discovery acceleration, and personalized treatment selection. As these technologies mature, they promise to make cancer care more precise, efficient, and accessible to patients worldwide.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Global Equity in Cancer Care
            </h3>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Expanding access to life-saving cancer therapies in low-resource regions remains a critical challenge that requires innovative approaches to healthcare delivery, drug pricing, and infrastructure development. Global collaboration is essential to ensure that scientific advances benefit all patients regardless of geographic location or economic status.
              </p>
              <p>
                Telemedicine, mobile health technologies, and simplified treatment protocols offer potential solutions for bringing advanced cancer care to underserved populations. International partnerships and technology transfer initiatives can help bridge the gap between high-income and low-income countries in cancer outcomes.
              </p>
            </div>
          </section>

          {/* Implementation Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              The Future of Cancer Research and Treatment
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Cancer research has made extraordinary progress over the past decades, transforming many previously fatal diagnoses into manageable chronic conditions. The integration of genomics, immunology, and advanced technologies continues to accelerate the pace of discovery and clinical translation.
              </p>
              <p>
                Yet significant challenges persist including metastasis, drug resistance, and healthcare disparities that require sustained research investment and global cooperation. The future of oncology lies in personalized medicine approaches that consider not only tumor characteristics but also patient genetics, lifestyle factors, and social determinants of health.
              </p>
              <p>
                Early detection through improved screening technologies, prevention strategies targeting modifiable risk factors, and global collaboration to ensure equitable access represent key priorities for reducing the global cancer burden. Continued investment in basic research, clinical trials, and healthcare infrastructure is essential for translating scientific discoveries into improved patient outcomes.
              </p>
              <p>
                By fostering collaboration between researchers, clinicians, patients, and policymakers, the cancer community can work together to achieve the ultimate goal of preventing, treating, and curing cancer while ensuring that all patients benefit from scientific advancements regardless of their geographic location or socioeconomic status.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Connect with Cancer Care Specialists</h3>
            <p className="mb-6 text-lg">
              Access cutting-edge cancer treatments and personalized care from leading oncologists who specialize in the latest therapeutic approaches and clinical trials.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 transition-colors px-6 py-2 rounded-lg font-medium">
              Find an Oncology Specialist
            </button>
          </div>

        </div>
      </main>

      
    </div>
  );
};

export default Cancer;