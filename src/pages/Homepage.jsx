import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, Clock, Users, Award } from "lucide-react";


const Homepage = () => {
  const navigate = useNavigate();

  const AdBanner = ({ className, label }) => (
    <div className={`bg-muted border border-border rounded-lg flex items-center justify-center text-muted-foreground font-medium ${className}`}>
      {label}
    </div>
  );

  const features = [
    {
      icon: Shield,
      title: "Trusted Care",
      description: "Complete patient confidentiality with professional medical expertise"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Lightning-fast response times to all patient inquiries"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified medical professionals with years of combined experience"
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Highest quality care standards with thorough attention to detail"
    }
  ];

  return (
    <div className="min-h-screen bg-subtle-gradient">
      {/* Top Banner Ad */}
      <div className="w-full p-4">
        <AdBanner className="h-20 md:h-24" label="Advertisement Banner - 728x90" />
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src= "https://res.cloudinary.com/drq4idzdj/image/upload/v1750191909/pexels-cottonbro-7579831_zf7blw.jpg"
                alt="Medical consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-medical-gradient opacity-85"></div>
            </div>
            
            <div className="relative container mx-auto px-4 py-24 lg:py-32">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Professional Medical Consultation at Your Fingertips
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  Connect with certified medical professionals for expert healthcare guidance. 
                  Fast, confidential, and comprehensive medical consultations.
                </p>
                <Button 
                  variant="medical" 
                  size="xl" 
                  onClick={() => navigate("/doctor-discovery")}
                  className="shadow-elevated"
                >
                  Find Your Doctor
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Our Medical Team?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Experience healthcare excellence with our commitment to professional, 
                  confidential, and thorough medical care.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-medical transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-light-blue rounded-full mb-6">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-medical-light-blue">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Start Your Medical Consultation?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of patients who trust our medical expertise. 
                Get professional healthcare guidance today.
              </p>
              <Button 
                variant="medical" 
                size="xl" 
                onClick={() => navigate("/doctors")}
              >
                Get Started Now
              </Button>
            </div>
          </section>
        </div>

        {/* Right Sidebar Ad - Hidden on mobile */}
        <div className="hidden xl:block w-80 2xl:w-96 p-4 sticky top-4 h-fit">
          <AdBanner className="h-[600px] w-full" label="Right Ad 320x600" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
