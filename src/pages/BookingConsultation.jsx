import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// Router functionality preserved for your app
const useParams = () => ({});
import { Shield, Clock, Users, CheckCircle, Star, Award } from "lucide-react";
// Toast hook preserved for your app
const useToast = () => ({
  toast: (options) => console.log('Toast:', options)
});

const BookingConsultation = () => {
  useParams();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    language: "",
    symptoms: ""
  });
  
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const trustFeatures = [
    {
      icon: Clock,
      title: "Lightning-Fast Response",
      description: "Our medical team responds to patient inquiries within minutes, not hours."
    },
    {
      icon: Shield,
      title: "Complete Confidentiality",
      description: "Your medical information is protected with bank-level security and strict privacy protocols."
    },
    {
      icon: Users,
      title: "Thorough Medical Attention",
      description: "Every patient concern receives careful, comprehensive evaluation from our medical experts."
    },
    {
      icon: CheckCircle,
      title: "Free Initial Consultation",
      description: "No upfront service fees. Start with a complimentary consultation to discuss your concerns."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Exceptional care and incredibly fast response. The doctor was thorough and professional."
    },
    {
      name: "John D.",
      rating: 5,
      text: "Finally found medical professionals who truly listen. Highly recommend their services."
    },
    {
      name: "Maria L.",
      rating: 5,
      text: "Outstanding medical guidance. The team's expertise and care exceeded my expectations."
    }
  ];

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      language: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.whatsapp || !formData.language || !formData.symptoms) {
      toast({
        title: "Please fill in all fields",
        description: "All form fields are required to proceed with your consultation.",
        variant: "destructive"
      });
      return;
    }

    setShowPayment(true);
  };

  const handlePayment = () => {
    setTimeout(() => {
      setShowPayment(false);
      setShowSuccess(true);
      toast({
        title: "Payment Successful!",
        description: "Thank you for describing your medical concerns. Our medical team will provide feedback within the shortest time possible.",
      });
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-green-50 border-green-100 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for describing your medical concerns. Our medical team will provide 
              feedback within the shortest time possible.
            </p>
            <p className="text-sm text-green-700 font-medium">
              You will receive a WhatsApp message shortly with further details.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Medical Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our medical experts for professional healthcare guidance. 
            Complete the form below to begin your consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <Card className="bg-blue-600 text-white border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Why Patients Trust Our Care
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {trustFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center text-gray-900">
                  What Our Patients Say
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 font-medium text-gray-900">
                        {testimonial.name}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Side */}
          <div>
            {!showPayment ? (
              <Card className="shadow-xl bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gray-900">
                    Patient Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-gray-900">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="border-gray-300 focus:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="border-gray-300 focus:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-gray-900">WhatsApp Number *</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Enter your WhatsApp number"
                        required
                        className="border-gray-300 focus:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-900">Preferred Communication Language *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger className="border-gray-300 focus:border-blue-600">
                          <SelectValue placeholder="Select your preferred language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="italian">Italian</SelectItem>
                          <SelectItem value="portuguese">Portuguese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms" className="text-gray-900">Medical Concerns *</Label>
                      <Textarea
                        id="symptoms"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        placeholder="Please describe what you're experiencing or what medical guidance you need"
                        rows={4}
                        required
                        className="border-gray-300 focus:border-blue-600"
                      />
                    </div>

                    <Button type="submit" variant="medical" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                      Continue to Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-xl bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gray-900">
                    Secure Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-gray-900 mb-2">$49.99</div>
                    <p className="text-gray-600">Professional Medical Consultation</p>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-green-700">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">256-bit SSL Encrypted Payment</span>
                  </div>

                  <Button 
                    variant="medical" 
                    size="xl" 
                    onClick={handlePayment}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Complete Payment
                  </Button>

                  <p className="text-sm text-gray-600">
                    Your payment is secure and processed through industry-standard encryption.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConsultation;