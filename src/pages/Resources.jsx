const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Health Resources</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Educational Materials</h2>
              <p className="text-muted-foreground">
                Access a comprehensive collection of health education materials, guides, 
                and resources to help you make informed decisions about your health and wellness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Health Topics</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">Nutrition</h3>
                  <p className="text-sm text-muted-foreground">Healthy eating guides and meal planning resources.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">Exercise</h3>
                  <p className="text-sm text-muted-foreground">Fitness programs and physical activity recommendations.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">Mental Health</h3>
                  <p className="text-sm text-muted-foreground">Stress management and mental wellness resources.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">Preventive Care</h3>
                  <p className="text-sm text-muted-foreground">Information about vaccines and health screenings.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">Chronic Conditions</h3>
                  <p className="text-sm text-muted-foreground">Managing diabetes, hypertension, and other conditions.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">Women's Health</h3>
                  <p className="text-sm text-muted-foreground">Specialized health information for women.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Emergency Resources</h2>
              <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
                <h3 className="text-xl font-semibold text-destructive mb-3">Emergency Contacts</h3>
                <ul className="space-y-2 text-foreground">
                  <li><strong>Emergency Services:</strong> 911</li>
                  <li><strong>Poison Control:</strong> 1-800-222-1222</li>
                  <li><strong>Crisis Hotline:</strong> 988</li>
                  <li><strong>Our Emergency Line:</strong> (555) 123-HELP</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Health Tools</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">BMI Calculator</h3>
                  <p className="text-muted-foreground">Calculate your Body Mass Index and understand your health status.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Symptom Checker</h3>
                  <p className="text-muted-foreground">Get information about symptoms and when to seek medical care.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Medication Reminder</h3>
                  <p className="text-muted-foreground">Track your medications and set up reminder schedules.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Health Records</h3>
                  <p className="text-muted-foreground">Organize and manage your personal health information.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Support Groups</h2>
              <p className="text-muted-foreground mb-4">
                Connect with others facing similar health challenges through our support groups 
                and community programs.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-foreground">
                  Contact our community outreach coordinator at (555) 123-4567 ext. 200 
                  to learn about available support groups in your area.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;