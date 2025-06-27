import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(https://i.imgur.com/WdhJL9g.jpeg)` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-4xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-14 text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
          Cadastre-se e comece a transformar vidas
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          <span className="text-lg font-medium">Acolher é sua vocação. Facilitar esse encontro é a nossa.</span><br />Junte-se a uma rede de psicólogos que estão fazendo a diferença todos os dias — com autonomia, segurança e suporte real. O SYD é o seu espaço para atender com propósito e viver a psicologia na prática.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="flex w-full sm:w-[20.25rem] px-6 py-3.5 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
            <a
              href="https://syd-83174.bubbleapps.io/version-test/auth?t=login"
              className=" text-white text-xl font-semibold"
            >
              Quero me cadastrar
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
