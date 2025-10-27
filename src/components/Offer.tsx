import { Button } from "@/components/ui/button";
import { Check, Gift, Clock } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import bookCover1 from "@/assets/book-cover-1.png";
import bookCover2 from "@/assets/book-cover-2.png";
import bookCover3 from "@/assets/book-cover-3.png";
import bookCover4 from "@/assets/book-cover-4.png";
import bookCover5 from "@/assets/book-cover-5.png";
import bookCover6 from "@/assets/book-cover-6.png";
import bookCover7 from "@/assets/book-cover-7.png";
import bookCover8 from "@/assets/book-cover-8.png";
import bookCover9 from "@/assets/book-cover-9.png";
import bookCover10 from "@/assets/book-cover-10.png";
import bookCover11 from "@/assets/book-cover-11.png";
import bookCover12 from "@/assets/book-cover-12.png";
import bookCover13 from "@/assets/book-cover-13.png";
import bookCover14 from "@/assets/book-cover-14.png";
import bookCover15 from "@/assets/book-cover-15.png";
import bookCover16 from "@/assets/book-cover-16.png";
import bookCover17 from "@/assets/book-cover-17.png";

const Offer = () => {
  const bookCovers = [
    { id: 1, image: bookCover1, title: "Livro de Colorir 1" },
    { id: 2, image: bookCover2, title: "Livro de Colorir 2" },
    { id: 3, image: bookCover3, title: "Livro de Colorir 3" },
    { id: 4, image: bookCover4, title: "Livro de Colorir 4" },
    { id: 5, image: bookCover5, title: "Livro de Colorir 5" },
    { id: 6, image: bookCover6, title: "Livro de Colorir 6" },
    { id: 7, image: bookCover7, title: "Livro de Colorir 7" },
    { id: 8, image: bookCover8, title: "Livro de Colorir 8" },
    { id: 9, image: bookCover9, title: "Livro de Colorir 9" },
    { id: 10, image: bookCover10, title: "Livro de Colorir 10" },
    { id: 11, image: bookCover11, title: "Livro de Colorir 11" },
    { id: 12, image: bookCover12, title: "Livro de Colorir 12" },
    { id: 13, image: bookCover13, title: "Livro de Colorir 13" },
    { id: 14, image: bookCover14, title: "Livro de Colorir 14" },
    { id: 15, image: bookCover15, title: "Livro de Colorir 15" },
    { id: 16, image: bookCover16, title: "Livro de Colorir 16" },
    { id: 17, image: bookCover17, title: "Bíblia em Desenho" },
  ];

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

        {/* Book Covers Carousel */}
        <div className="mb-12 relative">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-fredoka text-foreground mb-2">
              📚 Mais de 25 Livros + A Bíblia em Desenho
            </h3>
            <p className="text-muted-foreground">
              Deslize para ver todas as capas incríveis dos livros para colorir
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {bookCovers.map((book) => (
                <CarouselItem key={book.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group relative p-2">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift transition-smooth">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth z-10" />
                      <img
                        src={book.image}
                        alt={`${book.title} - Livro para Colorir da Bíblia`}
                        className="w-full h-auto transform group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth z-20">
                        <p className="text-white font-fredoka text-center text-sm">
                          {book.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-primary/90 hover:bg-primary text-white border-none hover:scale-110 transition-smooth" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-primary/90 hover:bg-primary text-white border-none hover:scale-110 transition-smooth" />
          </Carousel>
          
          {/* Mobile swipe hint */}
          <div className="md:hidden text-center mt-4">
            <p className="text-sm text-muted-foreground animate-pulse">
              👆 Deslize para ver mais livros
            </p>
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
            
            {/* Featured Main Offer */}
            <div className="highlight-gradient p-4 sm:p-6 rounded-2xl border-2 border-primary/30 card-elevated">
              <div className="space-y-3">
                <p className="text-lg sm:text-xl md:text-2xl text-accent-foreground font-bold mb-3">
                  🎨 21 LIVROS PARA COLORIR DA BÍBLIA
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
                  <p className="text-base sm:text-lg md:text-xl text-accent-foreground font-bold mb-2">
                    ⭐ MAIS DE 1.000 DESENHOS ESTILO BOBBIE GOODS
                  </p>
                  <p className="text-sm sm:text-base text-accent-foreground/90">
                    Ilustrações encantadoras e pedagógicas que seus filhos vão adorar!
                  </p>
                </div>
                <ul className="ml-4 space-y-2">
                  <li className="text-sm sm:text-base text-accent-foreground">✨ Os 10 Mandamentos</li>
                  <li className="text-sm sm:text-base text-accent-foreground">✨ Gênesis - O Começo de Tudo</li>
                  <li className="text-sm sm:text-base text-accent-foreground">✨ Histórias do Novo Testamento</li>
                  <li className="text-sm sm:text-base text-accent-foreground">✨ E muito mais!</li>
                </ul>
              </div>
            </div>
            
            {/* Regular Items */}
            <div className="space-y-3">
              
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
