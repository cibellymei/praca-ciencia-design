import { MapPin, Navigation, Zap, Beaker, Cpu, Telescope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Map = () => {
  const floors = [
    {
      id: "terreo",
      name: "Térreo",
      areas: [
        { name: "Recepção", icon: MapPin, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400", position: "top-4 left-4" },
        { name: "Lab. Química", icon: Beaker, color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400", position: "bottom-4 left-4" },
        { name: "Cafeteria", icon: MapPin, color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400", position: "top-4 right-4" },
        { name: "Auditório", icon: MapPin, color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400", position: "bottom-4 right-4" }
      ]
    },
    {
      id: "primeiro",
      name: "1º Andar", 
      areas: [
        { name: "Lab. Física", icon: Zap, color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400", position: "top-4 left-4" },
        { name: "Sala Tech", icon: Cpu, color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400", position: "bottom-4 left-4" },
        { name: "Biblioteca", icon: MapPin, color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400", position: "top-4 right-4" },
        { name: "Sala Reuniões", icon: MapPin, color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400", position: "bottom-4 right-4" }
      ]
    },
    {
      id: "segundo",
      name: "2º Andar",
      areas: [
        { name: "Planetário", icon: Telescope, color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400", position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
        { name: "Observatório", icon: Telescope, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400", position: "top-4 right-4" },
      ]
    }
  ];

  const [selectedFloor, setSelectedFloor] = useState("terreo");

  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Navigation className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Mapa Interativo</h1>
        <p className="text-base sm:text-xl text-muted-foreground">
          Navegue pelas instalações da Praça da Ciência
        </p>
      </div>

      {/* Seletor de Andares */}
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
        {floors.map((floor) => (
          <Button
            key={floor.id}
            variant={selectedFloor === floor.id ? "default" : "outline"}
            onClick={() => setSelectedFloor(floor.id)}
            className="text-sm sm:text-base"
          >
            {floor.name}
          </Button>
        ))}
      </div>

      {/* Mapa do Andar */}
      <div className="science-card glow-effect">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {floors.find(f => f.id === selectedFloor)?.name}
          </h2>
        </div>
        
        <div className="relative bg-muted/30 rounded-xl h-64 sm:h-80 overflow-hidden border-2 border-dashed border-border">
          {/* Grid de fundo */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          {/* Áreas do andar */}
          {floors.find(f => f.id === selectedFloor)?.areas.map((area, index) => (
            <div
              key={index}
              className={`absolute ${area.position} group cursor-pointer`}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl ${area.color} flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200`}>
                <area.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-background border border-border rounded-lg px-3 py-1 text-xs sm:text-sm font-medium text-foreground shadow-lg whitespace-nowrap">
                  {area.name}
                </div>
              </div>
            </div>
          ))}
          
          {/* Indicador de escadas/elevador */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm text-muted-foreground">Elevador / Escadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="science-card">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Beaker className="h-5 w-5 text-primary" />
            Laboratórios
          </h3>
          <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <p>• <strong>Lab. Química:</strong> Experimentos seguros</p>
            <p>• <strong>Lab. Física:</strong> Fenômenos físicos</p>
          </div>
        </div>

        <div className="science-card">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" />
            Tecnologia
          </h3>
          <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <p>• <strong>Sala Tech:</strong> Robótica e programação</p>
            <p>• <strong>Planetário:</strong> Astronomia interativa</p>
          </div>
        </div>

        <div className="science-card sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Serviços
          </h3>
          <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <p>• <strong>Recepção:</strong> Informações e cadastro</p>
            <p>• <strong>Cafeteria:</strong> Lanche e descanso</p>
          </div>
        </div>
      </div>

      {/* Informações de Acessibilidade */}
      <div className="science-card bg-primary/5 border-l-4 border-primary">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          🚀 Acessibilidade
        </h3>
        <div className="text-sm sm:text-base text-muted-foreground space-y-1">
          <p>• Elevador disponível para todos os andares</p>
          <p>• Rampas de acesso em todas as entradas</p>
          <p>• Banheiros adaptados em cada andar</p>
          <p>• Sinalização em braile nos corredores</p>
        </div>
      </div>
    </div>
  );
};

export default Map;