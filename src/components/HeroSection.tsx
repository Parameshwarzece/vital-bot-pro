import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";
import { Heart, MessageSquare, Calendar, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                AI-Powered Healthcare Assistant
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Health, 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Simplified</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Get instant health guidance, book appointments, and stay protected with our multilingual AI health assistant. 
                Available 24/7 in your language.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-lg">
                Start Health Chat
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Book Appointment
                <Calendar className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">24/7 AI Support</p>
                  <p className="text-sm text-muted-foreground">Instant health guidance</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Secure & Private</p>
                  <p className="text-sm text-muted-foreground">HIPAA compliant</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AI Healthcare Assistant - Modern medical professionals using technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;