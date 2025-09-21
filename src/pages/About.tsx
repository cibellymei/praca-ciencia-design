import { Building2, Users, Award, Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Sobre a Praça da Ciência</h1>
        <p className="text-xl text-muted-foreground">
          Um espaço dedicado à descoberta e aprendizado científico
        </p>
      </div>

      <div className="science-card glow-effect">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Nossa Missão</h2>
        <p className="text-muted-foreground leading-relaxed">
          A Praça da Ciência é um centro interativo de educação científica que busca inspirar curiosidade, 
          promover o aprendizado e despertar o interesse pela ciência e tecnologia em pessoas de todas as idades. 
          Através de experimentos práticos, oficinas interativas e exposições envolventes, criamos um ambiente 
          onde a descoberta acontece naturalmente.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Instalações Modernas</h3>
          </div>
          <p className="text-muted-foreground">
            Laboratórios equipados com tecnologia de ponta para experiências práticas e seguras.
          </p>
        </div>

        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Equipe Especializada</h3>
          </div>
          <p className="text-muted-foreground">
            Educadores qualificados e apaixonados por compartilhar conhecimento científico.
          </p>
        </div>

        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Excelência Reconhecida</h3>
          </div>
          <p className="text-muted-foreground">
            Premiada como melhor centro de educação científica da região nos últimos 3 anos.
          </p>
        </div>

        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Programação Diversificada</h3>
          </div>
          <p className="text-muted-foreground">
            Atividades semanais para diferentes faixas etárias e níveis de conhecimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;