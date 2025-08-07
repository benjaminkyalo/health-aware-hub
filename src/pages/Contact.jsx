import { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_fz50xlv",       // ✅ Service ID
        "template_j2j4jdh",      // ✅ Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "6P2qmhquDmkM_eRv8"      // ✅ Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send ❌. Please try again.");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "How can I suggest a health topic for an article?",
      answer: "We welcome topic suggestions! Please use the contact form above to share your ideas. We review all suggestions and prioritize topics based on public health importance and reader interest."
    },
    {
      question: "Can I request a correction to an article?",
      answer: "Yes, if you notice any inaccuracies in our content, please contact us immediately. We take content accuracy seriously and will investigate and correct any errors promptly."
    },
    {
      question: "Do you provide personal medical advice?",
      answer: "No, we do not provide personal medical advice through our contact form or any other means. For medical concerns, please consult with qualified healthcare professionals."
    },
    {
      question: "How can I partner with Health Aware Hub?",
      answer: "We're open to partnerships with healthcare organizations, medical professionals, and health-focused companies. Please use the contact form to describe your partnership proposal."
    },
    {
      question: "How often do you publish new content?",
      answer: "We publish new health articles regularly, typically 2-3 times per week. You can subscribe to our newsletter to stay updated on the latest content."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions, suggestions, or need to report an issue? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use this form to get in touch with us for questions, corrections, or partnerships. 
              We aim to respond to all inquiries within 24-48 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  placeholder="Please describe your question, suggestion, or concern..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors duration-200"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="bg-medical-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Editorial Team
                </h3>
                <p className="text-muted-foreground mb-4">
                  For content suggestions, corrections, or editorial inquiries.
                </p>
                <a href="mailto:healthawarehuborg@gmail.com" className="medical-link font-medium">
                  healthawarehuborg@gmail.com
                </a>
              </div>

              <div className="bg-medical-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  General Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  For general questions, technical support, or website feedback.
                </p>
                <a href="mailto:healthawarehuborg@gmail.com" className="medical-link font-medium">
                  healthawarehuborg@gmail.com
                </a>
              </div>

              <div className="bg-medical-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Business Address
                </h3>
                <address className="text-muted-foreground not-italic leading-relaxed">
                  Health Aware Hub<br />
                  123 Wellness Street<br />
                  Medical District<br />
                  Healthcare City, HC 12345<br />
                  United States
                </address>
              </div>

              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Medical Emergency
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  This website does not provide emergency medical services. 
                  If you are experiencing a medical emergency, please call 911 
                  or go to your nearest emergency room immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-primary border-b border-muted pb-4 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-muted pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="mt-12 bg-medical-blue-light p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Response Time
          </h3>
          <p className="text-muted-foreground">
            We typically respond to all inquiries within 24-48 hours during business days. 
            For urgent corrections to medical content, we prioritize faster response times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
