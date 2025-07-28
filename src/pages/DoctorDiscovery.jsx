import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Star, Award, Users, Clock, Shield } from "lucide-react";


const DoctorDiscovery = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      credentials: "MD, Internal Medicine",
      specialization: "General Practice & Preventive Care",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      experience: "12+ years",
      rating: 4.9
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      credentials: "MD, Cardiology",
      specialization: "Heart Health & Cardiovascular Care",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      experience: "15+ years",
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Robert Williams",
      credentials: "MD, PhD, Family Medicine",
      specialization: "Family Medicine & Geriatric Care",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      experience: "25+ years",
      rating: 5.0
    }
  ];

  const practiceHighlights = [
    {
      icon: Award,
      title: "Excellence in Care",
      description: "Our practice philosophy centers on delivering comprehensive, patient-centered care with the highest medical standards."
    },
    {
      icon: Users,
      title: "52+ Years Combined Experience",
      description: "Our medical team brings together decades of clinical expertise across multiple specializations."
    },
    {
      icon: Star,
      title: "Specialized Care",
      description: "From general practice to specialized cardiac care, our team covers a wide range of medical expertise."
    },
    {
      icon: Clock,
      title: "Quality Standards",
      description: "We maintain rigorous quality standards with thorough attention to every patient concern and medical inquiry."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Medical Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with certified medical professionals who are committed to providing 
            exceptional healthcare guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Practice Information */}
          <div className="space-y-8">
            <Card className="bg-blue-50 border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">
                  Our Medical Excellence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {practiceHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-100 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Free Initial Consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  No upfront service fees. Start your healthcare journey with a complimentary 
                  consultation to discuss your medical concerns.
                </p>
                <div className="inline-flex items-center text-green-700 font-semibold">
                  <Shield className="w-5 h-5 mr-2" />
                  100% Confidential & Secure
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Doctor Profiles */}
          <div className="space-y-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-xl transition-all duration-300 bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {doctor.name}
                        </h3>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium text-gray-900">
                            {doctor.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-blue-600 font-medium mb-1">
                        {doctor.credentials}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {doctor.specialization}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {doctor.experience} experience
                      </p>
                      <Button 
                        variant="medical" 
                        size="lg"
                        onClick={() => navigate(`/booking/${doctor.id}`)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Book {doctor.name.split(' ')[1]}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDiscovery;