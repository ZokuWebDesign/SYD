import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    cargo: "",
    empresa: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_7lnuuu9', // Replace with your EmailJS service ID
        'template_jbf5jfk', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_cargo: formData.cargo,
          from_empresa: formData.empresa,
          from_email: formData.email,
          to_name: 'SYD', // Replace with your name or company name
        },
        '7xLhsOou1xwr37tb9' // Replace with your EmailJS public key
      );

      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: "",
        cargo: "",
        empresa: "",
        email: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="w-full">
      <div className="w-full max-w-7xl mx-auto py-16 lg:py-28 px-4 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://i.imgur.com/mXBdYI8.jpeg"
              alt="Escritório"
              className="rounded-2xl shadow-2xl w-full h-[343px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Form Section */}
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2>
                  Fale conosco
                </h2>
                <p>
                  Se você quer entender como levar o SYD para sua equipe, tirar dúvidas sobre nosso modelo ou agendar uma apresentação, preencha o formulário abaixo. Em breve, nosso time entrará em contato com você.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Digite o seu nome"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cargo" className="text-sm font-medium text-gray-700">
                      Cargo
                    </Label>
                    <Input
                      id="cargo"
                      name="cargo"
                      type="text"
                      value={formData.cargo}
                      onChange={handleInputChange}
                      placeholder="Digite o seu cargo"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                      Empresa
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Digite o nome da empresa"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail corporativo
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Digite o seu e-mail"
                      className="h-12"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Contato enviado!' : 'Quero conversar com um especialista'}
                  </Button>

                  <p className="text-sm text-gray-500">
                  Ao enviar este formulário, você concorda com nossos <a>Termos de Uso</a> e <a>Política de Privacidade</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
