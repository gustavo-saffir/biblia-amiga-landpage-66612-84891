import { Button } from "@/components/ui/button";
import kidsColoring from "@/assets/kids-coloring.jpg";
import jesusKids from "@/assets/jesus-kids.jpg";

const Features = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-primary-foreground font-fredoka leading-tight">
            Colorindo as Ilustrações Eles Terão uma Experiência Incrível!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            E escutando as histórias entenderão de forma muito mais clara os ensinamentos bíblicos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <img 
              src={kidsColoring}
              alt="Crianças colorindo histórias bíblicas"
              className="rounded-3xl shadow-2xl hover-lift w-full card-elevated"
            />
            <div className="bg-white/95 backdrop-blur p-4 sm:p-6 rounded-2xl card-elevated">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary">📖 Histórias Envolventes</h3>
              <p className="text-sm sm:text-base text-foreground">
                Cada página traz uma história bíblica ilustrada, perfeita para colorir e aprender ao mesmo tempo!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src={jesusKids}
              alt="Jesus com crianças - ilustração para colorir"
              className="rounded-3xl shadow-2xl hover-lift w-full card-elevated"
            />
            <div className="bg-white/95 backdrop-blur p-4 sm:p-6 rounded-2xl card-elevated">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-secondary">❤️ Valores que Permanecem</h3>
              <p className="text-sm sm:text-base text-foreground">
                Ensinamentos sobre amor, fé, bondade e sabedoria que acompanharão seus filhos para sempre!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToOffer}
            className="cta-gradient text-xl sm:text-2xl md:text-3xl py-6 sm:py-8 px-8 sm:px-12 rounded-full btn-shadow hover:scale-105 transition-smooth font-fredoka text-white border-4 border-white/30 w-full sm:w-auto"
          >
            TAMBÉM QUERO GARANTIR! 🌟
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
