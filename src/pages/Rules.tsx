import { Shield, Clock, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const Rules = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-foreground">Regras da Praça</h1>
        <p className="text-base sm:text-xl text-muted-foreground">
          Diretrizes para uma experiência segura e educativa
        </p>
      </div>

      {/* Regras Gerais */}
      <div className="science-card glow-effect">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-primary" />
          Regras Gerais
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Mantenha sempre o respeito com outros visitantes, educadores e funcionários
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Siga as instruções dos monitores durante as atividades e experimentos
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Mantenha o ambiente limpo e organizado após o uso
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm sm:text-base text-muted-foreground">
              É obrigatório o uso de equipamentos de proteção quando solicitado
            </p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Segurança */}
        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Segurança</h3>
          </div>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>• Não toque em equipamentos sem autorização</li>
            <li>• Relate imediatamente qualquer acidente</li>
            <li>• Mantenha crianças sempre acompanhadas</li>
            <li>• Use calçados fechados nos laboratórios</li>
          </ul>
        </div>

        {/* Horários */}
        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Horários</h3>
          </div>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>• Seg-Sex: 9h às 17h</li>
            <li>• Sábados: 9h às 15h</li>
            <li>• Domingos: Fechado</li>
            <li>• Chegue 15min antes das oficinas</li>
          </ul>
        </div>

        {/* Grupos */}
        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Grupos</h3>
          </div>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>• Máximo 20 pessoas por oficina</li>
            <li>• Agendamento obrigatório para grupos</li>
            <li>• Desconto para escolas</li>
            <li>• Monitor dedicado para grupos escolares</li>
          </ul>
        </div>

        {/* Proibições */}
        <div className="science-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Proibições</h3>
          </div>
          <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>• Alimentos nos laboratórios</li>
            <li>• Celulares durante experimentos</li>
            <li>• Correr pelos corredores</li>
            <li>• Animais de estimação (exceto cães-guia)</li>
          </ul>
        </div>
      </div>

      {/* Contato de Emergência */}
      <div className="science-card bg-primary/5 border-l-4 border-primary">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
          Em Caso de Emergência
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">Emergência Médica:</p>
            <p>Ligue para 192 (SAMU)</p>
          </div>
          <div>
            <p className="font-medium text-foreground">Emergência no Local:</p>
            <p>Procure imediatamente um monitor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;