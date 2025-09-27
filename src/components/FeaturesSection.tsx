import { Bot, Calendar, AlertTriangle, Globe, FileText, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Health Query RAG",
    description: "Multilingual chatbot answering health queries with government database references",
    color: "primary"
  },
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    description: "Pre-consultation data collection with urgency classification and hospital slot booking",
    color: "accent"
  },
  {
    icon: AlertTriangle,
    title: "Outbreak Alerts",
    description: "Real-time outbreak tracking with proactive server-side alerts and data collection",
    color: "destructive"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Natural language processing in multiple languages with real-time translation",
    color: "secondary"
  },
  {
    icon: FileText,
    title: "Medical Records",
    description: "Secure storage and management of medical history and appointment data",
    color: "muted"
  },
  {
    icon: Mic,
    title: "Multimodal Input",
    description: "Image, audio, and video processing converted to text descriptions using AI",
    color: "primary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive Health Assistant Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge AI technology to provide accurate, multilingual health support
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-medical transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;