import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como funciona o atendimento por minuto?",
    answer: "Você só paga pelos minutos efetivamente utilizados durante a consulta. O tempo é contabilizado automaticamente e mostrado de forma clara para você, sem surpresas."
  },
  {
    question: "Preciso agendar com antecedência?",
    answer: "Não. O SYD oferece atendimento de urgência 24h com profissionais disponíveis em tempo real. Mas, se preferir, você também pode agendar com antecedência."
  },
  {
    question: "É seguro e sigiloso?",
    answer: "Sim. Todos os atendimentos seguem o código de ética profissional da psicologia. Seus dados e conversas são protegidos com total sigilo."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! Você pode usar a plataforma diretamente do seu celular, tablet ou computador. Basta ter conexão com a internet."
  },
  {
    question: "Preciso pagar alguma mensalidade?",
    answer: "Não. Você pode usar o SYD de forma avulsa, sem nenhum tipo de fidelidade ou taxa mensal. Só paga quando usar."
  },
  {
    question: "O que acontece se eu cancelar uma consulta agendada?",
    answer: "Você pode cancelar sua consulta diretamente pela plataforma, sem burocracia. Se o cancelamento for feito com até 1 hora de antecedência, o valor não é cobrado. Cancelamentos após esse prazo podem gerar cobrança parcial ou total, dependendo do tempo reservado pelo profissional. Sempre informamos as condições antes da confirmação do agendamento."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-14">
        <div className="max-w-3xl text-center pb-12">
          <h2 className="pb-2 text-left">
            Perguntas Frequentes
          </h2>
          <p className="text-left">
            Separamos as dúvidas mais comuns de quem está começando no SYD. Caso ainda tenha alguma pergunta, nosso time está pronto para te ajudar.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col items-start self-stretch border-b border-[hsl(var(--primary))]">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="flex flex-col w-full"
            >
              <AccordionTrigger className="flex items-center gap-6 py-5 w-full border-t border-[hsl(var(--primary))] hover:no-underline font-[var(--body)]">
                <h4 className="font-semibold text-[hsl(var(--black))] text-left">{faq.question}</h4>
              </AccordionTrigger>
              <AccordionContent className="flex items-start gap-4 pb-6 w-full">
                <p className="">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="max-w-xl text-center pt-12">
          <h3 className="text-[hsl(var(--black))] pb-2 text-left">
            Ainda tem dúvidas?
          </h3>
          <p className="pb-6 text-left">
            Entre contato conosco! Estamos aqui para te ajudar com o que for preciso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex w-full lg:w-[14rem] px-6 py-3.5 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 text-white text-xl font-[var(--body)] h-auto">
                Entrar em contato
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
