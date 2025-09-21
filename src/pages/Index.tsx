import { useState } from "react";
import { CarouselSection } from "@/components/ui/carousel-section";
import { WorkshopCard } from "@/components/cards/WorkshopCard";
import { NewsCard } from "@/components/cards/NewsCard";
import heroImage1 from "@/assets/hero-1.jpg";
import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import news1 from "@/assets/news-1.jpg";

const Index = () => {
  const heroImages = [
    {
      id: 1,
      src: heroImage1,
      alt: "Praça da Ciência - Explorando o futuro"
    }
  ];

  const workshops = [
    {
      id: 1,
      title: "Laboratório de Química Divertida",
      description: "Descubra os segredos da química através de experimentos seguros e fascinantes que vão despertar sua curiosidade científica.",
      image: workshop1,
      date: "15 Jan 2024",
      duration: "2h",
      participants: 15
    },
    {
      id: 2,
      title: "Robótica para Iniciantes",
      description: "Construa e programe seus próprios robôs enquanto aprende os fundamentos da tecnologia e automação.",
      image: workshop2,
      date: "18 Jan 2024", 
      duration: "3h",
      participants: 12
    },
    {
      id: 3,
      title: "Astronomia e Exploração Espacial",
      description: "Explore o universo e descubra os mistérios do cosmos através de telescópios e simulações interativas.",
      image: news1,
      date: "22 Jan 2024",
      duration: "2.5h", 
      participants: 20
    }
  ];

  const news = [
    {
      id: 1,
      title: "Nova Exposição: Viagem ao Centro da Terra",
      summary: "Embarque numa jornada fascinante pelos diferentes camadas do nosso planeta e descubra os segredos geológicos da Terra.",
      image: news1,
      publishDate: "10 Jan 2024",
      category: "Exposições"
    },
    {
      id: 2,
      title: "Oficina Especial de Energia Renovável",
      summary: "Aprenda sobre fontes sustentáveis de energia e construa seu próprio painel solar miniatura nesta oficina prática.",
      image: workshop1,
      publishDate: "8 Jan 2024",
      category: "Oficinas"
    },
    {
      id: 3,
      title: "Feira de Ciências Jovens Inventores",
      summary: "Estudantes locais apresentarão seus projetos inovadores em uma feira que celebra a criatividade e o conhecimento científico.",
      image: workshop2,
      publishDate: "5 Jan 2024",
      category: "Eventos"
    }
  ];

  const handleWorkshopLearnMore = (workshopId: number) => {
    console.log(`Learn more about workshop ${workshopId}`);
    // TODO: Navigate to workshop details or open modal
  };

  const handleNewsReadMore = (newsId: number) => {
    console.log(`Read more about news ${newsId}`);
    // TODO: Navigate to news article or open modal
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Carousel */}
      <CarouselSection title="Destaques" autoScroll>
        {heroImages.map((image) => (
          <div
            key={image.id}
            className="min-w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden relative glow-effect"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4 sm:p-6 text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                  Bem-vindo à Praça da Ciência
                </h2>
                <p className="text-sm sm:text-lg opacity-90">
                  Um mundo de descobertas espera por você
                </p>
              </div>
            </div>
          </div>
        ))}
      </CarouselSection>

      {/* Workshops Carousel */}
      <CarouselSection title="Oficinas em Destaque">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            title={workshop.title}
            description={workshop.description}
            image={workshop.image}
            date={workshop.date}
            duration={workshop.duration}
            participants={workshop.participants}
            onLearnMore={() => handleWorkshopLearnMore(workshop.id)}
          />
        ))}
      </CarouselSection>

      {/* News Carousel */}
      <CarouselSection title="Últimas Notícias">
        {news.map((article) => (
          <NewsCard
            key={article.id}
            title={article.title}
            summary={article.summary}
            image={article.image}
            publishDate={article.publishDate}
            category={article.category}
            onReadMore={() => handleNewsReadMore(article.id)}
          />
        ))}
      </CarouselSection>
    </div>
  );
};

export default Index;