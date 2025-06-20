import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureItem from "./FeatureItem";
import sun from "@/assets/icons/sun-icon.svg";

const features1 = [
  {
    text: "Pague apenas pelos minutos utilizados",
    iconSvg: sun
  },
  {
    text: "Acesso a atendimentos de urgência 24h",
    iconSvg: sun
  },
  {
    text: "Sem necessidade de agendamento prévio",
    iconSvg: sun
  },
  {
    text: "Sem mensalidade, sem fidelidade",
    iconSvg: sun
  },
  {
    text: "Liberdade total de uso, quando quiser",
    iconSvg: sun
  }
];

const features2 = [
  {
    text: "Acesso para todos os colaboradores sem custo direto individual",
    iconSvg: sun
  },
  {
    text: "Relatórios de uso e indicadores de bem-estar organizacional",
    iconSvg: sun
  },
  {
    text: "Atendimentos sob demanda ou por agendamento",
    iconSvg: sun
  },
  {
    text: "Suporte personalizado para RH e gestão de saúde mental",
    iconSvg: sun
  },
  {
    text: "Garantia de sigilo e ética em todas as consultas",
    iconSvg: sun
  }
];

const Pricing = () => {
  return (
    <section id="planos" className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-16 lg:py-28 px-4 lg:px-14">
        <div className="text-center max-w-xl sm:max-w-4xl mb-12">
          <p className="text-sm sm:text-base mb-4">
            Planos e Preços
          </p>
          <h2 className="mb-2">
            Transparência e liberdade para você escolher como cuidar da sua mente.
          </h2>
          <p>
            No SYD, você decide como e quanto investir no seu bem-estar emocional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 w-full mx-auto">
          {/* Individual Plan */}
          <Card className="relative flex flex-col items-start gap-6 p-6 rounded-xl border border-primary shadow-sm w-full hover:bg-gradient-to-br from-primary/20 to-white group">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais popular
              </span>
            </div>
            {/* Price Title */}
            <div className="text-start">
              <h4 className="text-xl font-semibold text-[hsl(var(--black))]">Atendimento avulso</h4>
              <p className="text-base text-[hsl(var(--black))] mt-1">Ideal para quem busca flexibilidade total, sem compromissos.</p>
            </div>

            {/* Divider */}
            <hr className="w-full border-t border-primary" />

            {/* Content */}
            <div className="flex flex-col gap-6 w-full">
              {/* Price */}
              <div className="flex flex-col gap-1 h-[120px] justify-end">
                <h1>R$1,99<span className="font-medium text-2xl text-[hsl(var(--black))]">/minuto</span></h1>
                <p className="text-base">Escolha sessões de 20, 40 ou 60 minutos, sem mensalidades.</p>
              </div>

              {/* Button */}
              <Button className="w-full p-0 bg-secondary hover:bg-secondary/90 rounded-2xl h-auto">
                <a href="" className="w-full py-3 px-6 text-lg text-center text-white font-medium">
                  Agendar consulta
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-primary rounded-full"></div>

            {/* List */}
            <ul className="flex flex-col gap-4 w-full">
              {features1.map((feature, index) => (
                <FeatureItem
                  key={index}
                  text={feature.text}
                  iconSvg={feature.iconSvg}
                />
              ))}
            </ul>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative flex flex-col items-start gap-6 p-6 rounded-xl border border-primary shadow-sm w-full hover:bg-gradient-to-br from-primary/20 to-white group">
            {/* Price Title */}
            <div className="text-start">
              <h4 className="text-xl font-semibold text-[hsl(var(--black))]">Convênio com empresas</h4>
              <p className="text-base text-[hsl(var(--black))] mt-1">Cuidado com colaboradores, benefícios para o negócio.</p>
            </div>

            {/* Divider */}
            <hr className="w-full border-t border-primary" />

            {/* Content */}
            <div className="flex flex-col gap-6 w-full">
              {/* Price */}
              <div className="flex flex-col gap-1 h-[120px] justify-end">
                <h2 className="text-primary">Personalizado</h2>
                <p className="text-base">Entre em contato e receba uma proposta personalizada para sua empresa.</p>
              </div>

              {/* Button */}
              <Button className="w-full p-0 bg-secondary hover:bg-secondary/90 rounded-2xl h-auto group">
                <a
                  href=""
                  className="flex items-center justify-center w-full py-3 px-6 text-lg text-white font-semibold font-[Lato] w-full"
                >
                  Entrar em contato
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-primary rounded-full"></div>

            {/* List */}
            <ul className="flex flex-col gap-4 w-full">
              {features2.map((feature, index) => (
                <FeatureItem
                  key={index}
                  text={feature.text}
                  iconSvg={feature.iconSvg}
                />
              ))}
            </ul>
          </Card>
        </div>
        {/* 
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Todos os planos incluem uma garantia de 7 dias. 
            <span className="text-primary font-semibold ml-1">Sem perguntas.</span>
          </p>
        </div>
        */}
      </div>
    </section>
  );
};

export default Pricing;
