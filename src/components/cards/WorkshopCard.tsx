import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

interface WorkshopCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  duration: string;
  participants: number;
  onLearnMore: () => void;
}

export function WorkshopCard({ 
  title, 
  description, 
  image, 
  date, 
  duration, 
  participants, 
  onLearnMore 
}: WorkshopCardProps) {
  return (
    <div className="science-card min-w-72 sm:min-w-80 flex-shrink-0 glow-effect">
      <div className="aspect-video mb-3 sm:mb-4 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        <h3 className="font-bold text-base sm:text-lg text-foreground line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">{description}</p>
        
        <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span className="hidden xs:inline">{date}</span>
            <span className="xs:hidden">{date.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{participants}</span>
          </div>
        </div>
        
        <Button 
          onClick={onLearnMore}
          className="w-full bg-gradient-science text-primary-foreground font-medium text-sm"
          size="sm"
        >
          Saiba Mais
        </Button>
      </div>
    </div>
  );
}