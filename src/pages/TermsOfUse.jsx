const TermsOfUse = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Terms of Use
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 15, 2024
          </p>
        </div>

        <div className="medical-content space-y-12">
          {/* Introduction */}
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to Health Aware Hub. These Terms of Use govern how you may access and use the content, information, and materials available on our website at healthawarehub.com.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using any content on this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use this website.
            </p>
          </section>

          {/* Permitted Uses */}
          <section>
            <h2>Permitted Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may use the content on Health Aware Hub for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Personal, non-commercial reference and educational purposes</li>
              <li>Sharing links to specific articles with proper attribution</li>
              <li>Printing individual articles for personal use</li>
              <li>Citing our content in academic or educational work with proper attribution</li>
            </ul>
          </section>

          {/* Prohibited Uses */}
          <section>
            <h2>Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may NOT use our content for any of the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Commercial purposes without written permission</li>
              <li>Republishing, redistributing, or copying substantial portions of content</li>
              <li>Creating derivative works based on our content</li>
              <li>Removing copyright notices or attribution</li>
              <li>Using content in a way that implies endorsement by Health Aware Hub</li>
              <li>Automated scraping or systematic downloading of content</li>
              <li>Using content for training AI models or machine learning systems</li>
            </ul>
          </section>

          {/* Content Attribution */}
          <section>
            <h2>Content Attribution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When sharing or citing our content, please include proper attribution:
            </p>
            <div className="bg-medical-gray p-6 rounded-lg mb-4">
              <p className="text-foreground mb-2">
                <strong>Example Attribution:</strong>
              </p>
              <p className="text-muted-foreground italic">
                "Article Title" by Health Aware Hub, available at [URL], accessed on [Date].
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              For media inquiries or permission to use substantial portions of our content, please contact us at content@healthawarehub.com.
            </p>
          </section>

          {/* Educational Use */}
          <section>
            <h2>Educational and Academic Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We encourage the educational use of our content. Teachers, students, and researchers may:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Include excerpts in presentations with proper attribution</li>
              <li>Reference our articles in academic papers and research</li>
              <li>Share links to our content in educational settings</li>
              <li>Print articles for classroom distribution (limited quantities)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For large-scale educational use or institutional licensing, please contact our education team.
            </p>
          </section>

          {/* Content Accuracy */}
          <section>
            <h2>Content Accuracy and Updates</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While we strive to provide accurate and up-to-date health information, medical knowledge evolves rapidly. We make no warranty about the completeness, accuracy, or timeliness of the content.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Content is updated periodically, and users are encouraged to check for the most recent version when citing or referencing our materials.
            </p>
          </section>

          {/* User-Generated Content */}
          <section>
            <h2>User-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Comments, feedback, and other submissions to Health Aware Hub are subject to our review and moderation. By submitting content, you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Grant us the right to use, edit, and publish your submission</li>
              <li>Confirm that your content does not infringe on third-party rights</li>
              <li>Agree that your submission may be used for educational purposes</li>
              <li>Understand that submissions become part of our content archive</li>
            </ul>
          </section>

          {/* Copyright and Intellectual Property */}
          <section>
            <h2>Copyright and Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on Health Aware Hub, including text, images, graphics, logos, and multimedia elements, is protected by copyright and intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unauthorized use of copyrighted material may result in legal action. If you believe your intellectual property rights have been violated, please contact us immediately at legal@healthawarehub.com.
            </p>
          </section>

          {/* Enforcement */}
          <section>
            <h2>Enforcement</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Monitor usage of our content</li>
              <li>Request removal of improperly used content</li>
              <li>Pursue legal remedies for violations of these terms</li>
              <li>Block access to users who violate these terms</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2>Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms of Use periodically to reflect changes in our practices or legal requirements. Users are encouraged to review these terms regularly. Continued use of the website constitutes acceptance of any modifications.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2>Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms of Use or need permission for specific uses of our content, please contact us:
            </p>
            <div className="bg-medical-gray p-6 rounded-lg">
              <p className="text-foreground mb-2"><strong>Health Aware Hub</strong></p>
              <p className="text-muted-foreground">Email: content@healthawarehub.com</p>
              <p className="text-muted-foreground">Legal: legal@healthawarehub.com</p>
              <p className="text-muted-foreground">Address: 123 Wellness Street, Medical District, Healthcare City, HC 12345</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;