import { ArrowRight, Heart, Brain, Shield, Activity, Eye, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiseasePreview = () => {
  const diseases = [
    {
      name: 'HIV & AIDS',
      path: '/diseases/hiv-aids',
      icon: Shield,
      description: 'Understanding transmission, prevention, and modern treatment approaches.',
      color: 'text-red-600'
    },
    {
      name: 'Diabetes',
      path: '/diseases/diabetes',
      icon: Droplet,
      description: 'Managing blood sugar levels and preventing complications.',
      color: 'text-blue-600'
    },
    {
      name: 'Obesity',
      path: '/diseases/obesity',
      icon: Activity,
      description: 'Healthy weight management and lifestyle interventions.',
      color: 'text-green-600'
    },
    {
      name: 'Cancer',
      path: '/diseases/cancer',
      icon: Heart,
      description: 'Early detection, treatment options, and prevention strategies.',
      color: 'text-purple-600'
    },
    {
      name: 'Depression',
      path: '/diseases/depression',
      icon: Brain,
      description: 'Mental health awareness, symptoms, and treatment approaches.',
      color: 'text-indigo-600'
    },
    {
      name: 'High Blood Pressure',
      path: '/diseases/hypertension',
      icon: Eye,
      description: 'Understanding hypertension and cardiovascular health.',
      color: 'text-orange-600'
    },
  ];

  return (
    <section id="disease-preview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Expert Health Information
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, medically-reviewed information about common health conditions. 
            Learn about symptoms, treatments, and prevention strategies from trusted healthcare experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map((disease) => {
            const IconComponent = disease.icon;
            return (
              <a
                key={disease.path}
                href={disease.path}
                className="group block"
              >
                <div className="bg-white rounded-lg p-6 border border-cyan-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-trancyan-y-1 hover:border-cyan-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-cyan-50 mr-4 group-hover:bg-cyan-50 transition-colors duration-300">
                      <IconComponent className={`h-6 w-6 ${disease.color} group-hover:text-cyan-500 transition-colors duration-300`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                      {disease.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {disease.description}
                  </p>
                  <div className="flex items-center text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:trancyan-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6 leading-relaxed">
            Need personalized medical advice? Our platform connects you with qualified healthcare professionals.
          </p>
          <a href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            
              Schedule Consultation
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiseasePreview;