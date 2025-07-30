const HealthScreening = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Health Screening</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Comprehensive Health Assessments</h2>
              <p className="text-muted-foreground">
                Our health screening services provide comprehensive assessments to help identify 
                potential health risks and maintain optimal wellness. Regular screenings are 
                essential for early detection and prevention of various health conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Available Screenings</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Cardiovascular Screening</h3>
                  <p className="text-muted-foreground">Blood pressure, cholesterol levels, and heart function assessment.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Cancer Screening</h3>
                  <p className="text-muted-foreground">Early detection programs for various types of cancer.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Diabetes Screening</h3>
                  <p className="text-muted-foreground">Blood glucose testing and diabetes risk assessment.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">General Wellness</h3>
                  <p className="text-muted-foreground">Comprehensive physical examination and health evaluation.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Schedule Your Screening</h2>
              <p className="text-muted-foreground mb-4">
                Contact us to schedule your health screening appointment. Our healthcare 
                professionals will guide you through the process and help you understand your results.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-foreground font-medium">
                  Visit our contact page to book your appointment.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthScreening;