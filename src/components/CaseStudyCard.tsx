import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image?: string;
}

export function CaseStudyCard({ title, challenge, solution, result, image }: CaseStudyCardProps) {
  return (
    <div className="glass-card-hover overflow-hidden group">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
        <div className="space-y-4 text-sm">
          <div>
            <span className="text-primary font-medium">Challenge:</span>
            <span className="text-muted-foreground ml-2">{challenge}</span>
          </div>
          <div>
            <span className="text-primary font-medium">Solution:</span>
            <span className="text-muted-foreground ml-2">{solution}</span>
          </div>
          <div>
            <span className="text-primary font-medium">Result:</span>
            <span className="text-foreground ml-2 font-medium">{result}</span>
          </div>
        </div>
        <button className="mt-6 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          Read full case study <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
