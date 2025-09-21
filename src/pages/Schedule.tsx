import { Calendar, Clock, Users, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import news1 from "@/assets/news-1.jpg";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("today");

  const events = {
    today: [
      {
        id: 1,
        title: "Química Divertida",
        time: "09:00 - 11:00",
        capacity: "8/15 vagas",
        location: "Laboratório A",
        difficulty: "Iniciante",
        image: workshop1,
        available: true
      },
      {
        id: 2,
        title: "Robótica Básica",
        time: "14:00 - 17:00", 
        capacity: "12/12 vagas",
        location: "Sala Tech",
        difficulty: "Intermediário",
        image: workshop2,
        available: false
      },
      {
        id: 3,
        title: "Astronomia para Crianças",
        time: "19:00 - 20:30",
        capacity: "5/20 vagas",
        location: "Planetário",
        difficulty: "Iniciante", 
        image: news1,
        available: true
      }
    ],
    tomorrow: [
      {
        id: 4,
        title: "Experimentos Físicos",
        time: "10:00 - 12:00",
        capacity: "10/15 vagas",
        location: "Laboratório B",
        difficulty: "Intermediário",
        image: workshop1,
        available: true
      },
      {
        id: 5,
        title: "Programação Kids",
        time: "15:00 - 16:30",
        capacity: "6/10 vagas", 
        location: "Sala Informática",
        difficulty: "Iniciante",
        image: workshop2,
        available: true
      }
    ]
  };

  const currentEvents = events[selectedDay as keyof typeof events] || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Intermediário": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Avançado": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Agenda de Atividades</h1>
        <p className="text-base sm:text-xl text-muted-foreground">
          Participe das nossas oficinas e experimentos
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
        <Button
          variant={selectedDay === "today" ? "default" : "outline"}
          onClick={() => setSelectedDay("today")}
          className="text-sm sm:text-base"
        >
          Hoje
        </Button>
        <Button
          variant={selectedDay === "tomorrow" ? "default" : "outline"}
          onClick={() => setSelectedDay("tomorrow")}
          className="text-sm sm:text-base"
        >
          Amanhã
        </Button>
        <Button
          variant={selectedDay === "week" ? "default" : "outline"}
          onClick={() => setSelectedDay("week")}
          className="text-sm sm:text-base"
        >
          Esta Semana
        </Button>
      </div>

      {/* Lista de Eventos */}
      <div className="grid gap-4 sm:gap-6">
        {currentEvents.map((event) => (
          <div key={event.id} className="science-card glow-effect">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-48 h-32 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-3 sm:space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{event.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${getDifficultyColor(event.difficulty)}`}>
                    {event.difficulty}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    className="bg-gradient-science text-primary-foreground"
                    disabled={!event.available}
                    size="sm"
                  >
                    {event.available ? "Inscrever-se" : "Esgotado"}
                  </Button>
                  <Button variant="outline" size="sm">
                    Mais Informações
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Informações Adicionais */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="science-card">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Como Participar
          </h3>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>• Cadastre-se gratuitamente no sistema</li>
            <li>• Escolha a atividade desejada</li>
            <li>• Confirme sua presença até 2h antes</li>
            <li>• Chegue 15 minutos antes do horário</li>
          </ul>
        </div>

        <div className="science-card">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Localização das Salas
          </h3>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>• <strong>Laboratório A:</strong> Térreo - Ala Oeste</li>
            <li>• <strong>Laboratório B:</strong> 1º Andar - Ala Norte</li>
            <li>• <strong>Sala Tech:</strong> 1º Andar - Ala Sul</li>
            <li>• <strong>Planetário:</strong> 2º Andar - Central</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;