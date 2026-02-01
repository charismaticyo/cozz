import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
}

export function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="glass-card-hover p-6 text-center group">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-secondary">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{role}</p>
      <a
        href="#"
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
}
