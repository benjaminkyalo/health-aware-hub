import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Family Medicine Physician',
      content: 'Health Aware Hub provides accurate, up-to-date health information that I regularly recommend to my patients. The content is well-researched and easy to understand.',
      rating: 5,
      initials: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Patient Advocate',
      content: 'As someone managing diabetes, I found the comprehensive guides on this platform invaluable. The prevention tips and treatment information helped me better understand my condition.',
      rating: 5,
      initials: 'MC'
    },
    {
      name: 'Dr. Lisa Rodriguez',
      role: 'Public Health Specialist',
      content: 'The evidence-based approach and clear presentation of complex medical topics makes this an excellent resource for health education and awareness.',
      rating: 5,
      initials: 'LR'
    },
    {
      name: 'Jennifer Williams',
      role: 'Wellness Coach',
      content: 'I use this platform to stay current with health trends and research. The variety of topics covered helps me provide better guidance to my clients.',
      rating: 5,
      initials: 'JW'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Cardiologist',
      content: 'The cardiovascular health section is particularly well-done. I appreciate how complex medical concepts are broken down into actionable advice for patients.',
      rating: 5,
      initials: 'RK'
    },
    {
      name: 'Amanda Foster',
      role: 'Health Educator',
      content: 'This platform has become my go-to resource for creating educational materials. The comprehensive coverage and reliable information save me countless hours of research.',
      rating: 5,
      initials: 'AF'
    }
  ];

  return (
    <section className="py-20 section-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what healthcare professionals and patients are saying about our platform.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="health-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="relative mb-6">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground italic pl-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;