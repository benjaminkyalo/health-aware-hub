import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="min-h-screen bg-background">
			{/* Navbar component would be imported and used here */}

			<Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            About Health Aware Hub
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your trusted source for evidence-based health information and wellness guidance.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary border-b border-muted pb-4 mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Health Aware Hub is dedicated to providing accurate, up-to-date, and accessible health information 
            to help individuals make informed decisions about their health and wellness. We believe that everyone 
            deserves access to reliable health information that can improve their quality of life.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to bridge the gap between complex medical research and practical health guidance, 
            making expert-level health information understandable and actionable for everyone.
          </p>
        </section>

        {/* Editorial Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary border-b border-muted pb-4 mb-8">
            Our Editorial Process
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Medical Review & Accuracy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                All content on Health Aware Hub undergoes rigorous review by qualified healthcare professionals. 
                Our editorial team includes licensed physicians, registered nurses, and certified health educators 
                who ensure the accuracy and reliability of every article.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Evidence-Based Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We base our content on peer-reviewed medical research, clinical guidelines from reputable 
                organizations, and evidence-based medical practices. Every health claim is supported by 
                credible scientific sources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Regular Updates
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Medical knowledge constantly evolves, and we're committed to keeping our content current. 
                Our team regularly reviews and updates articles to reflect the latest medical research and 
                treatment guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Trust & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary border-b border-muted pb-4 mb-8">
            Trusted by Health Professionals
          </h2>
          <div className="bg-medical-gray p-8 rounded-lg">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl font-bold">✓</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Trusted by American Health Experts
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Our commitment to accuracy and evidence-based information has earned the trust of healthcare 
              professionals across the United States. We maintain the highest standards of medical accuracy 
              and ethical reporting.
            </p>
          </div>
        </section>

        {/* Commitment */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary border-b border-muted pb-4 mb-8">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Accurate Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing only accurate, up-to-date health information based on 
                current medical research and best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Accessibility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Complex medical information is presented in clear, understandable language that 
                empowers you to make informed health decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Independence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our editorial content is independent and free from commercial influence, ensuring 
                objective and unbiased health information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Continuous Improvement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously evaluate and improve our content quality, user experience, and 
                accessibility to better serve your health information needs.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary border-b border-muted pb-4 mb-8">
            Our Values
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="text-white text-sm font-bold">1</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Scientific Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of scientific integrity in all our content, 
                  ensuring every piece of information is backed by credible research.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="text-white text-sm font-bold">2</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Patient Empowerment</h3>
                <p className="text-muted-foreground">
                  We believe in empowering individuals with knowledge to make informed healthcare 
                  decisions in partnership with their healthcare providers.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="text-white text-sm font-bold">3</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  We approach health topics with empathy and understanding, recognizing that 
                  health challenges affect real people and their families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-medical-blue-light p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Important Medical Disclaimer
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The information provided on Health Aware Hub is for educational purposes only and should not 
            replace professional medical advice, diagnosis, or treatment. Always consult with qualified 
            healthcare professionals before making any health decisions or starting new treatments.
          </p>
        </section>
      </div>
      {/* Footer */}
			<Footer />
    </div>
  );
};

export default About;
