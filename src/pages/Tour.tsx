import { Eye, Play, Pause, RotateCcw, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Tour = () => {
  const [currentTour, setCurrentTour] = useState("entrada");
  const [isPlaying, setIsPlaying] = useState(false);

  const tours = {
    entrada: {
      title: "Entrada Principal",
      description: "Bem-vindo à Praça da Ciência! Aqui começa sua jornada de descobertas.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
      hotspots: [
        { x: "25%", y: "60%", label: "Recepção", target: "recepcao" },
        { x: "75%", y: "40%", label: "Laboratórios", target: "laboratorios" }
      ]
    },
    recepcao: {
      title: "Área de Recepção",
      description: "Local de cadastro e informações. Nossa equipe está sempre pronta para ajudar.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      hotspots: [
        { x: "20%", y: "50%", label: "Entrada", target: "entrada" },
        { x: "80%", y: "30%", label: "Cafeteria", target: "cafeteria" }
      ]
    },
    laboratorios: {
      title: "Laboratórios",
      description: "Espaços equipados para experimentos seguros e educativos.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800",
      hotspots: [
        { x: "30%", y: "70%", label: "Lab. Química", target: "quimica" },
        { x: "70%", y: "30%", label: "Lab. Física", target: "fisica" }
      ]
    },
    quimica: {
      title: "Laboratório de Química",
      description: "Descubra reações fascinantes em um ambiente controlado e seguro.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
      hotspots: [
        { x: "50%", y: "80%", label: "Voltar aos Labs", target: "laboratorios" }
      ]
    },
    fisica: {
      title: "Laboratório de Física", 
      description: "Explore fenômenos físicos através de experimentos interativos.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800",
      hotspots: [
        { x: "50%", y: "80%", label: "Voltar aos Labs", target: "laboratorios" }
      ]
    },
    cafeteria: {
      title: "Cafeteria",
      description: "Área de descanso com lanches saudáveis e bebidas.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
      hotspots: [
        { x: "50%", y: "80%", label: "Voltar à Recepção", target: "recepcao" }
      ]
    }
  };

  const currentTourData = tours[currentTour as keyof typeof tours];

  const handleHotspotClick = (target: string) => {
    setCurrentTour(target);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetTour = () => {
    setCurrentTour("entrada");
    setIsPlaying(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Eye className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Tour Virtual 360°</h1>
        <p className="text-base sm:text-xl text-muted-foreground">
          Explore nossas instalações de forma interativa
        </p>
      </div>

      {/* Controles do Tour */}
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
        <Button
          onClick={togglePlayPause}
          className="bg-gradient-science text-primary-foreground"
        >
          {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
          {isPlaying ? "Pausar" : "Iniciar"} Tour
        </Button>
        
        <Button variant="outline" onClick={resetTour}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Reiniciar
        </Button>
        
        <Button variant="outline">
          <ZoomIn className="h-4 w-4 mr-2" />
          Tela Cheia
        </Button>
      </div>

      {/* Visualizador 360° */}
      <div className="science-card glow-effect overflow-hidden">
        <div className="relative">
          <div className="aspect-video sm:aspect-[21/9] relative bg-black rounded-xl overflow-hidden">
            <img 
              src={currentTourData.image}
              alt={currentTourData.title}
              className="w-full h-full object-cover"
            />
            
            {/* Hotspots Interativos */}
            {currentTourData.hotspots.map((hotspot, index) => (
              <button
                key={index}
                className="absolute w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 animate-pulse"
                style={{ left: hotspot.x, top: hotspot.y }}
                onClick={() => handleHotspotClick(hotspot.target)}
                title={hotspot.label}
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
              </button>
            ))}
            
            {/* Overlay de Informações */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
                {currentTourData.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80">
                {currentTourData.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação Rápida */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {Object.entries(tours).map(([key, tour]) => (
          <button
            key={key}
            onClick={() => setCurrentTour(key)}
            className={`science-card text-left hover:scale-105 transition-all duration-200 ${
              currentTour === key ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className="aspect-video rounded-lg overflow-hidden mb-2 sm:mb-3">
              <img 
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xs sm:text-sm text-foreground line-clamp-2">
              {tour.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Instruções */}
      <div className="science-card bg-primary/5 border-l-4 border-primary">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          🎯 Como Navegar
        </h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base text-muted-foreground">
          <div>
            <p>• <strong>Clique nos pontos brilhantes</strong> para navegar entre ambientes</p>
            <p>• <strong>Use os controles</strong> para iniciar o tour automático</p>
          </div>
          <div>
            <p>• <strong>Navegação rápida</strong> através das miniaturas abaixo</p>
            <p>• <strong>Tela cheia</strong> para uma experiência imersiva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;