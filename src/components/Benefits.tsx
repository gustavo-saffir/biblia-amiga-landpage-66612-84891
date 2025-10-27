import { Brain, Heart, Smartphone, BookOpen } from "lucide-react";
import brainDev from "@/assets/brain-development.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Desenvolvimento Cognitivo",
      description: "Colorir ativa áreas cerebrais responsáveis pelo raciocínio lógico e criatividade"
    },
    {
      icon: Heart,
      title: "Valores Cristãos",
      description: "Aprenda sobre amor, fé e bondade através de histórias bíblicas envolventes"
    },
    {
      icon: Smartphone,
      title: "Menos Tempo de Tela",
      description: "Substitua conteúdos digitais por atividades educativas e divertidas"
    },
    {
      icon: BookOpen,
      title: "Aprendizado Divertido",
      description: "Histórias bíblicas ilustradas que cativam e ensinam de forma leve"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-foreground font-fredoka">
            Entenda a Importância de Diminuir o Tempo nas Telas
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Exposição excessiva a telas pode prejudicar o desenvolvimento infantil. Nossas atividades oferecem uma alternativa saudável e educativa!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <img 
            src={brainDev}
            alt="Desenvolvimento cerebral através de atividades de colorir"
            className="rounded-2xl shadow-xl hover-lift w-full"
          />
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-background rounded-2xl card-elevated hover-lift"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full hero-gradient flex items-center justify-center mx-auto sm:mx-0">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
