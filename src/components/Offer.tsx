import { Button } from "@/components/ui/button";
import { Check, Gift, Clock } from "lucide-react";
import mockupMobile from "@/assets/mockup-mobile.png";
import mockupEbook from "@/assets/mockup-ebook.png";
import mockupPages from "@/assets/mockup-pages.png";

const Offer = () => {
  return (
    <section id="oferta" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        {/* Urgency Banner */}
        <div className="highlight-gradient text-accent-foreground text-center py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mb-12 card-elevated">
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <p className="text-base sm:text-xl md:text-2xl font-bold">
              SOMENTE ESTA SEMANA - Oferta Especial com Bônus Exclusivo!
            </p>
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
          </div>
        </div>

        {/* Mockup Images */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="hover-lift">
            <img 
              src={mockupMobile} 
              alt="Ebook no celular - Geração Pequenos Heróis da Fé" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="hover-lift">
            <img 
              src={mockupEbook} 
              alt="Capa do ebook - Bíblia em Desenho" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="hover-lift">
            <img 
              src={mockupPages} 
              alt="Páginas para colorir do ebook" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Main Offer Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 card-elevated hover-lift border-4 border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-block bg-secondary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4">
              <p className="text-secondary font-bold text-base sm:text-lg flex items-center gap-2">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                OFERTA IMPERDÍVEL
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka text-foreground mb-4">
              Kit Completo Geração Pequenos Heróis da Fé
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Tudo que você precisa para começar hoje mesmo!
            </p>
          </div>

          {/* What's Included */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">O que está incluso:</h3>
            
            {/* Regular Items */}
            <div className="space-y-3">
              <div className="bg-background/50 p-3 sm:p-4 rounded-xl">
                <p className="text-sm sm:text-base md:text-lg text-foreground font-semibold mb-2">📚 Bíblia Para Colorir Digital</p>
                <ul className="ml-6 space-y-1">
                  <li className="text-sm sm:text-base text-muted-foreground">• Os 10 mandamentos</li>
                  <li className="text-sm sm:text-base text-muted-foreground">• Genesis - o Começo</li>
                  <li className="text-sm sm:text-base text-muted-foreground">• Historinhas do Novo Testamento</li>
                </ul>
              </div>
              
              <div className="flex items-start gap-3 bg-background/50 p-3 sm:p-4 rounded-xl">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base md:text-lg text-foreground">🎨 Guia de Atividades Criativas</span>
              </div>
            </div>

            {/* Featured Differential */}
            <div className="highlight-gradient p-4 sm:p-6 rounded-2xl border-2 border-primary/30 card-elevated">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-accent-foreground mb-1">
                    🎧 Áudios das Histórias Bíblicas Narradas
                  </p>
                  <p className="text-sm sm:text-base text-accent-foreground/90 font-semibold">
                    ⭐ DIFERENCIAL: 50+ historinhas em áudio
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Items */}
            {[
              "👨‍👩‍👧 Manual de Orientação para Pais",
              "🎁 BÔNUS: Caderno 'Amigo Jesus' Estilo Bobbie Goods",
              "✨ Atualizações Gratuitas com Novas Histórias"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-background/50 p-3 sm:p-4 rounded-xl">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base md:text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-2xl mb-8">
            <div className="text-center">
              <p className="text-muted-foreground line-through text-xl sm:text-2xl mb-2">De R$ 197,00</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">R$ 27,90</span>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-muted-foreground">ou 12x de</p>
                  <p className="text-xl sm:text-2xl font-bold text-secondary">R$ 2,33</p>
                </div>
              </div>
              <div className="inline-block bg-accent px-4 py-2 rounded-full">
                <p className="font-bold text-sm sm:text-base text-accent-foreground">🔥 Economia de R$ 169,10</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            asChild
            className="cta-gradient w-full text-xl sm:text-2xl md:text-3xl py-6 sm:py-8 rounded-full btn-shadow hover:scale-105 transition-smooth font-fredoka text-white border-4 border-white/30"
          >
            <a href="https://pay.hotmart.com/Q102629610V" target="_blank" rel="noopener noreferrer">
              QUERO MEU EBOOK AGORA! 📖✨
            </a>
          </Button>

          {/* Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-primary/10 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl">
              <p className="text-base sm:text-lg font-semibold text-foreground">
                🛡️ Garantia de 7 dias - 100% do seu dinheiro de volta se não gostar!
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            🎊 Mais de 5.000 famílias já transformaram o aprendizado dos seus filhos!
          </p>
          <div className="flex justify-center gap-1 sm:gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-3xl sm:text-4xl">⭐</span>
            ))}
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground mt-2">4.9/5 - Avaliação média dos pais</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
