import { useState, useEffect, useRef } from 'react';
import { Users, FileText, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      number: 2500000,
      suffix: '+',
      label: 'People Helped',
      description: 'Individuals reached with health education'
    },
    {
      icon: FileText,
      number: 1200,
      suffix: '+',
      label: 'Articles Published',
      description: 'Evidence-based health content'
    },
    {
      icon: Award,
      number: 150,
      suffix: '+',
      label: 'Health Experts',
      description: 'Medical professionals contributing'
    },
    {
      icon: Heart,
      number: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'Users find our content helpful'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUp = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTime;
      const startValue = 0;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration]);

    const formatNumber = (num) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
      }
      return num.toString();
    };

    return <span>{formatNumber(count)}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Making a Difference in Public Health
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Trusted by millions for reliable health information and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
                <CardContent className="p-8">
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary-foreground" />
                  <div className="text-4xl font-bold mb-2 text-primary-foreground">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-xl font-semibold mb-2 text-primary-foreground">
                    {stat.label}
                  </div>
                  <p className="text-sm text-primary-foreground/80">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
