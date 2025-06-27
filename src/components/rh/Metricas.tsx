import { Button } from "@/components/ui/button";

const Metricas = () => {
  return (
    <section id="como-funciona" className="w-full max-w-7xl mx-auto flex flex-col gap-12 lg:gap-20 py-16 lg:py-28 px-4 lg:px-14">
      <header className="flex flex-col gap-2 w-full lg:w-[48rem]">
        <h2>Resultados que sua empresa<br />sente na prática</h2>
        <p>Bem-estar emocional não é só discurso, é resultado medido.<br />Com o SYD, sua empresa transforma cuidado em performance. Menos faltas, mais engajamento e uma equipe emocionalmente mais estável refletem diretamente no clima e na produtividade.</p>
      </header>

      <div className="grid gap-12 md:grid-cols-3">
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            40%
          </h1>
          <h4 className="font-bold">
            Redução de faltas por saúde mental
          </h4>
        </div>
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            +700
          </h1>
          <h4 className="font-bold">
            Colaboradores mais engajados
          </h4>
        </div>
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            80%
          </h1>
          <h4 className="font-bold">
            Melhora no equilíbrio emocional
          </h4>
        </div>


      </div>

      <div className="flex flex-col sm:flex-row w-full gap-4">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href="https://api.whatsapp.com/send/?phone=5515996945695&text=gostaria%20de%20agendar%20uma%20demonstração"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Agendar apresentação
                </a>
              </Button>
      </div>
    </section>
  );
};

export default Metricas;
