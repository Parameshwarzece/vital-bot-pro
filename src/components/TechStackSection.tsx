import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    category: "AI & ML",
    items: ["OpenAI API", "Langchain/Langgraph", "RAG Systems", "LLM Integration"]
  },
  {
    category: "Backend",
    items: ["FastAPI", "MongoDB", "Edge Functions", "File Processing"]
  },
  {
    category: "Frontend", 
    items: ["React", "TypeScript", "Tailwind CSS", "Real-time UI"]
  },
  {
    category: "Data Processing",
    items: ["Multimodal AI", "OCR Processing", "Speech Recognition", "Translation"]
  }
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge AI and cloud technologies for reliable healthcare solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-4 text-primary">{tech.category}</h3>
              <div className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <Badge key={itemIndex} variant="secondary" className="block w-fit">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;