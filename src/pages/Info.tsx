import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Facebook, 
  Instagram, 
  Youtube,
  Car,
  Bus,
  Accessibility,
  Info as InfoIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Info = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <InfoIcon className="h-8 w-8 text-primary" />
            </div>
          </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Informações</h1>
        <p className="text-base sm:text-xl text-muted-foreground">
          Tudo que você precisa saber para sua visita
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Contato */}
        <div className="science-card glow-effect">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
            Entre em Contato
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Telefone</p>
                <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">E-mail</p>
                <p className="text-sm text-muted-foreground">contato@pracadaciencia.com.br</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Website</p>
                <p className="text-sm text-muted-foreground">www.pracadaciencia.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Localização */}
        <div className="science-card glow-effect">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
            Localização
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Endereço</p>
                <p className="text-sm text-muted-foreground">
                  Rua da Ciência, 123<br />
                  Bairro da Descoberta<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-science text-primary-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              Abrir no Google Maps
            </Button>
          </div>
        </div>

        {/* Horários */}
        <div className="science-card">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Horário de Funcionamento
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-foreground">Segunda à Sexta</span>
              <span className="text-muted-foreground">09:00 - 17:00</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-foreground">Sábado</span>
              <span className="text-muted-foreground">09:00 - 15:00</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">Domingo</span>
              <span className="text-red-600 dark:text-red-400">Fechado</span>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Feriados:</strong> Funcionamento especial. Consulte nossa agenda.
            </p>
          </div>
        </div>

        {/* Como Chegar */}
        <div className="science-card">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
            Como Chegar
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Car className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">De Carro</p>
                <p className="text-sm text-muted-foreground">
                  Estacionamento gratuito no local<br />
                  200 vagas disponíveis
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Bus className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">Transporte Público</p>
                <p className="text-sm text-muted-foreground">
                  Linhas: 123, 456, 789<br />
                  Ponto: "Praça da Ciência"
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Accessibility className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-foreground">Acessibilidade</p>
                <p className="text-sm text-muted-foreground">
                  Totalmente acessível<br />
                  Elevadores e rampas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="science-card glow-effect text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
          Siga-nos nas Redes Sociais
        </h2>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
            <Youtube className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Fique por dentro das novidades e eventos especiais!
        </p>
      </div>

      {/* FAQ */}
      <div className="science-card">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-foreground mb-2">É necessário agendamento?</h3>
            <p className="text-sm text-muted-foreground">
              Para visitas individuais não é necessário. Para grupos acima de 10 pessoas, recomendamos agendamento.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-2">Qual a idade mínima?</h3>
            <p className="text-sm text-muted-foreground">
              Não há idade mínima. Temos atividades para todas as idades, desde bebês até idosos.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-2">Posso levar lanche?</h3>
            <p className="text-sm text-muted-foreground">
              Sim! Temos áreas de piquenique. Apenas não é permitido comer nos laboratórios.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-2">Têm desconto para estudantes?</h3>
            <p className="text-sm text-muted-foreground">
              Sim! Estudantes têm 50% de desconto mediante apresentação da carteirinha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;