import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="glass-card p-8 relative">
      <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
      <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{quote}"</p>
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        {role && <div className="text-sm text-muted-foreground">{role}</div>}
      </div>
    </div>
  );
}
