import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown } from "lucide-react";
import bibleHero from "@/assets/bible-hero-new.jpg";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-bounce-soft"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-bounce-soft" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block bg-accent px-4 py-2 rounded-full animate-pulse">
              <p className="text-accent-foreground font-bold flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                SUPER LANÇAMENTO
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight text-primary-foreground drop-shadow-lg font-fredoka">
              Bíblia Para Colorir
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-white/95 font-semibold">
              Ensine a Bíblia de Forma Leve e Divertida e Ainda Diminua o Tempo de Tela
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              <span className="font-bold">Colorir ativa o Cérebro:</span> Desenvolve o raciocínio lógico e a tomada de decisões desde cedo – agora unido a valores e ensinamentos cristãos!
            </p>

            <Button 
              size="lg"
              asChild
              className="cta-gradient text-xl sm:text-2xl md:text-3xl py-6 sm:py-8 px-8 sm:px-12 rounded-full btn-shadow hover:scale-105 transition-smooth font-fredoka text-white border-4 border-white/30 w-full sm:w-auto"
            >
              <a href="https://pay.hotmart.com/Q102629610V" target="_blank" rel="noopener noreferrer">
                EU QUERO APROVEITAR! 🎨
              </a>
            </Button>

            <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 animate-bounce">
              <ArrowDown className="w-6 h-6" />
              <span className="text-sm font-medium">Role para ver a oferta especial</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-3xl"></div>
            <img 
              src={bibleHero} 
              alt="Bíblia para Colorir - Livro de atividades cristãs para crianças"
              className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl hover-lift card-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
