const Accessibility = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Accessibility Statement
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: July 15, 2025
          </p>
        </div>

        <div className="medical-content space-y-12">
          {/* Our Commitment */}
          <section>
            <h2>Our Commitment to Accessibility</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Health Aware Hub is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the user experience for everyone and apply relevant accessibility standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that health information should be accessible to all individuals, regardless of their abilities or the technologies they use to access the web.
            </p>
          </section>

          {/* Conformance Status */}
          <section>
            <h2>Conformance Status</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. Health Aware Hub strives to conform to WCAG 2.1 Level AA standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Partially conformant</strong> means that some parts of the content do not fully conform to the accessibility standard, but we are actively working to address all identified issues.
            </p>
          </section>

          {/* Accessibility Features */}
          <section>
            <h2>Accessibility Features</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website includes the following accessibility features:
            </p>
            
            <h3>Visual Accessibility</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>High contrast color scheme for better readability</li>
              <li>Scalable text that can be resized up to 200% without loss of functionality</li>
              <li>Clear, readable fonts and appropriate font sizes</li>
              <li>Meaningful color usage that doesn't rely solely on color to convey information</li>
              <li>Alt text for all informative images</li>
            </ul>

            <h3>Navigation and Structure</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Consistent navigation throughout the website</li>
              <li>Logical heading structure (H1, H2, H3, etc.)</li>
              <li>Skip links to main content</li>
              <li>Descriptive page titles and link text</li>
              <li>Keyboard-accessible navigation</li>
            </ul>

            <h3>Interactive Elements</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Focus indicators for keyboard users</li>
              <li>Form labels clearly associated with form controls</li>
              <li>Error messages that are clear and helpful</li>
              <li>Sufficient time limits for interactive content</li>
            </ul>
          </section>

          {/* Assistive Technologies */}
          <section>
            <h2>Assistive Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Voice recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Switch navigation devices</li>
              <li>Screen magnification software</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We test our website regularly with these technologies to ensure compatibility and usability.
            </p>
          </section>

          {/* Known Issues */}
          <section>
            <h2>Known Limitations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are aware of the following accessibility limitations and are working to address them:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>Certain interactive elements are being enhanced for better screen reader support</li>
              <li>Some older content is being updated to meet current accessibility standards</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to resolving these issues and improving accessibility across all areas of our website.
            </p>
          </section>

          {/* Browser and Device Support */}
          <section>
            <h2>Technical Specifications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Accessibility features on our website depend on the following technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>HTML5 semantic markup</li>
              <li>CSS3 for styling and layout</li>
              <li>JavaScript for enhanced functionality (gracefully degraded)</li>
              <li>ARIA (Accessible Rich Internet Applications) attributes</li>
            </ul>
            
            <h3>Supported Browsers</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website is tested and supported on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Chrome (latest version)</li>
              <li>Firefox (latest version)</li>
              <li>Safari (latest version)</li>
              <li>Edge (latest version)</li>
              <li>Mobile browsers on iOS and Android</li>
            </ul>
          </section>

          {/* Feedback Process */}
          <section>
            <h2>Feedback and Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We welcome your feedback on the accessibility of Health Aware Hub. Please let us know if you encounter accessibility barriers:
            </p>
            
            <div className="bg-medical-gray p-6 rounded-lg mb-6">
              <h3 className="text-foreground mb-4">Contact Methods</h3>
              <p className="text-muted-foreground mb-2"><strong>Email:</strong> accessibility@healthawarehub.com</p>
              <p className="text-muted-foreground mb-2"><strong>Phone:</strong> 1-800-HEALTH-1 (TTY available)</p>
              <p className="text-muted-foreground mb-2"><strong>Mail:</strong> Health Aware Hub, Accessibility Department</p>
              <p className="text-muted-foreground">123 Wellness Street, Medical District, Healthcare City, HC 12345</p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              When contacting us about accessibility issues, please include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>The specific page or feature you're having trouble with</li>
              <li>Your browser and operating system</li>
              <li>Any assistive technology you're using</li>
              <li>A description of the problem you encountered</li>
            </ul>
          </section>

          {/* Response Timeline */}
          <section>
            <h2>Our Response Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to responding to accessibility feedback promptly:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>We will acknowledge receipt of your feedback within 2 business days</li>
              <li>We will investigate the issue and provide an initial response within 5 business days</li>
              <li>For complex issues, we will provide regular updates on our progress</li>
              <li>We will implement fixes as quickly as possible, prioritizing critical barriers</li>
            </ul>
          </section>

          {/* Continuous Improvement */}
          <section>
            <h2>Ongoing Efforts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Health Aware Hub is committed to continuous accessibility improvement:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Regular accessibility audits and testing</li>
              <li>Staff training on accessibility best practices</li>
              <li>User testing with people who use assistive technologies</li>
              <li>Integration of accessibility considerations into our design and development process</li>
              <li>Monitoring of new accessibility guidelines and standards</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This accessibility statement will be updated regularly to reflect our ongoing improvements and any changes to our accessibility features.
            </p>
          </section>

          {/* Legal Compliance */}
          <section>
            <h2>Legal Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              This accessibility statement was created in accordance with applicable accessibility laws and regulations. We are committed to providing equal access to health information for all users and will continue to enhance our website's accessibility features.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;