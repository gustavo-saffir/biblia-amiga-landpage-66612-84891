import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe do Lucas, 5 anos",
      text: "Meu filho estava passando muito tempo no tablet. Com a Bíblia Para Colorir, ele fica horas colorindo e aprendendo sobre Jesus. Melhor investimento que já fiz!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Pai da Sofia, 7 anos",
      text: "Incrível como as histórias são bem ilustradas! Minha filha adora colorir e sempre me pergunta sobre as histórias bíblicas. Está ajudando muito na educação cristã dela.",
      rating: 5
    },
    {
      name: "Ana Paula",
      role: "Mãe do Pedro, 6 anos",
      text: "O bônus Amigo Jesus é lindo! Meu filho se apaixonou. E o melhor: ele está aprendendo valores importantes enquanto se diverte. Recomendo muito!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Pai dos gêmeos, 4 anos",
      text: "Comprei para os gêmeos e foi sucesso total! Eles adoram colorir juntos e já decoraram várias histórias. O tempo de tela diminuiu significativamente. Muito obrigado!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-foreground font-fredoka">
            O Que os Pais Estão Dizendo
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Veja como outras famílias estão transformando o aprendizado dos seus filhos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 card-elevated hover-lift bg-card border-2 border-primary/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hero-gradient flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base text-foreground">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
