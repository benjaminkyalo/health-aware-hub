const Disclaimer = () => {
  return (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Medical Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="medical-content space-y-12">
            {/* Important Notice */}
            <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Important Notice</h2>
              <p className="text-lg leading-relaxed">
                This website does not provide medical advice. The information contained on this website is for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </section>

            {/* General Medical Disclaimer */}
            <section>
              <h2>General Medical Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Health Aware Hub and its content are provided for educational and informational purposes only. The information contained on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Never disregard professional medical advice or delay in seeking it because of something you have read on Health Aware Hub. If you think you may have a medical emergency, call your doctor or 911 immediately.
              </p>
            </section>

            {/* No Doctor-Patient Relationship */}
            <section>
              <h2>No Doctor-Patient Relationship</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The use of information on this website or materials linked from this website is at the user's own risk. The content of this website is not intended to establish a doctor-patient relationship between you and Health Aware Hub, its authors, or any healthcare professionals associated with the website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No doctor-patient relationship is created by the use of this website or by any communication with our team through the website, email, or other means.
              </p>
            </section>

            {/* Professional Medical Advice */}
            <section>
              <h2>Always Consult Healthcare Professionals</h2>
              
              <h3>Before Making Health Decisions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before making any health-related decisions, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                <li>Starting, stopping, or changing medications</li>
                <li>Beginning new dietary regimens or supplements</li>
                <li>Starting new exercise programs</li>
                <li>Making lifestyle changes for health reasons</li>
                <li>Interpreting symptoms or test results</li>
                <li>Choosing treatment options</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You should always consult with qualified healthcare professionals who can provide personalized advice based on your individual health status, medical history, and specific circumstances.
              </p>

              <h3>Emergency Situations</h3>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h4 className="text-red-800 font-semibold mb-3">Medical Emergencies</h4>
                <p className="text-red-700 leading-relaxed">
                  If you are experiencing a medical emergency, do not rely on information from this website. 
                  Call 911 (in the United States) or your local emergency services immediately. 
                  Go to the nearest emergency room or call your doctor immediately.
                </p>
              </div>
            </section>

            {/* Content Accuracy */}
            <section>
              <h2>Content Accuracy and Currency</h2>
              
              <h3>Best Efforts for Accuracy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date health information, medical knowledge is constantly evolving. We make every effort to ensure the accuracy of the information on our website, but we cannot guarantee that all information is current, complete, or accurate at all times.
              </p>

              <h3>Regular Review Process</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our content undergoes regular review by qualified healthcare professionals, but medical guidelines and best practices can change. Always verify health information with current medical literature and your healthcare provider.
              </p>

              <h3>No Warranty</h3>
              <p className="text-muted-foreground leading-relaxed">
                Health Aware Hub makes no warranty, express or implied, regarding the accuracy, adequacy, completeness, legality, reliability, or usefulness of any information contained on the website.
              </p>
            </section>

            {/* Individual Variation */}
            <section>
              <h2>Individual Medical Variation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every individual is unique, and medical conditions, treatments, and responses to treatment can vary significantly from person to person. Information provided on this website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                <li>Is general in nature and may not apply to your specific situation</li>
                <li>Cannot replace individualized medical assessment and care</li>
                <li>Should not be used to diagnose or treat any medical condition</li>
                <li>May not reflect the most current medical developments</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Your healthcare provider can provide guidance tailored to your specific health needs, medical history, and current medications.
              </p>
            </section>

            {/* FDA and Clinical Claims */}
            <section>
              <h2>FDA and Clinical Claims Disclaimer</h2>
              
              <h3>FDA Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any statements regarding dietary supplements, alternative treatments, or health products mentioned on this website have not been evaluated by the Food and Drug Administration (FDA). These products and treatments are not intended to diagnose, treat, cure, or prevent any disease.
              </p>

              <h3>Clinical Research</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we reference clinical studies and research when available, we make no claims about the effectiveness of any treatments, supplements, or health interventions for any specific individual or condition.
              </p>

              <h3>Regulatory Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users should be aware that health products and treatments may be subject to different regulatory standards in different countries. Always consult with healthcare professionals regarding the legality and safety of any health interventions in your jurisdiction.
              </p>
            </section>

            {/* Liability Limitations */}
            <section>
              <h2>Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Health Aware Hub, its owners, authors, contributors, and affiliates shall not be liable for any damages or injury resulting from your access to, or inability to access, this website, or from your reliance on any information provided on this website.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                <li>Direct, indirect, incidental, or consequential damages</li>
                <li>Loss of profits or data</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
                <li>Medical complications or adverse health outcomes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                By using this website, you assume full responsibility for any actions taken based on the information provided.
              </p>
            </section>

            {/* Third-Party Information */}
            <section>
              <h2>Third-Party Information and Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website may contain links to other websites or reference third-party information. Health Aware Hub is not responsible for the content, accuracy, or reliability of any third-party websites or information sources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The inclusion of any link or reference does not imply endorsement by Health Aware Hub. Users access third-party information at their own risk.
              </p>
            </section>

            {/* Professional Credentials */}
            <section>
              <h2>Professional Review</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While our content is reviewed by healthcare professionals, this review process does not guarantee that the information is appropriate for your specific situation or that it constitutes medical advice for your particular circumstances.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The healthcare professionals who review our content are not providing personal medical advice to website users and have no doctor-patient relationship with readers of this website.
              </p>
            </section>

            {/* Geographic Considerations */}
            <section>
              <h2>Geographic and Cultural Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Health information on this website is primarily based on medical practices and guidelines common in the United States. Medical practices, available treatments, and healthcare systems may vary significantly in other countries. Always consult with local healthcare providers who are familiar with the medical practices and regulations in your area.
              </p>
            </section>

            {/* Updates and Changes */}
            <section>
              <h2>Updates to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                This medical disclaimer may be updated from time to time to reflect changes in our practices or applicable regulations. The date of the last update is indicated at the top of this page. Your continued use of this website after any changes indicates your acceptance of the updated disclaimer.
              </p>
            </section>

            {/* Contact for Medical Emergencies */}
            <section className="bg-medical-blue-light p-8 rounded-lg">
              <h2 className="text-primary text-center mb-6">Remember: For Medical Emergencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">United States</h3>
                  <p className="text-2xl font-bold text-primary">911</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Poison Control</h3>
                  <p className="text-lg font-semibold text-primary">1-800-222-1222</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mental Health Crisis</h3>
                  <p className="text-lg font-semibold text-primary">988</p>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-2 border-primary p-8 rounded-lg text-center">
              <h2 className="text-primary mb-4">Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Health Aware Hub, you acknowledge that you have read, understood, and agree to be bound by this Medical Disclaimer. You understand that the information on this website is not medical advice and that you should consult with qualified healthcare professionals for all medical concerns.
              </p>
            </section>
          </div>
        </div>
      </div>
  );
};

export default Disclaimer;