import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  title: string;
  summary: string;
  image: string;
  publishDate: string;
  category: string;
  onReadMore: () => void;
}

export function NewsCard({ 
  title, 
  summary, 
  image, 
  publishDate, 
  category, 
  onReadMore 
}: NewsCardProps) {
  return (
    <div className="science-card min-w-64 sm:min-w-72 flex-shrink-0">
      <div className="aspect-video mb-3 sm:mb-4 rounded-xl overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <span className="bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{publishDate}</span>
        </div>
        
        <h3 className="font-bold text-sm sm:text-base text-foreground line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">{summary}</p>
        
        <Button 
          onClick={onReadMore}
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm"
          size="sm"
        >
          Ler Mais
        </Button>
      </div>
    </div>
  );
}