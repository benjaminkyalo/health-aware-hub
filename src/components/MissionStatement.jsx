import { CheckCircle, Users, Award, BookOpen } from 'lucide-react';

const MissionStatement = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Expert-Reviewed Content',
      description: 'All health information is reviewed by qualified medical professionals and updated regularly.'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'Dedicated to serving diverse communities with accessible, culturally-sensitive health education.'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'Our content is based on the latest medical research and established clinical guidelines.'
    },
    {
      icon: BookOpen,
      title: 'Educational Mission',
      description: 'Empowering individuals with knowledge to make informed decisions about their health.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Our Commitment to Your Health
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Health Aware Hub is a trusted medical education platform dedicated to creating public awareness 
              about common diseases and health conditions. We believe that informed patients make better health decisions, 
              and our mission is to provide accurate, accessible, and actionable health information to communities worldwide.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our platform bridges the gap between complex medical information and public understanding, 
              making healthcare knowledge accessible to everyone, regardless of their medical background.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <IconComponent className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default MissionStatement;