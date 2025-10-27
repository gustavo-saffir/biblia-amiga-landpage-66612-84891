import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Para qual idade é recomendado?",
      answer: "A Bíblia Para Colorir é ideal para crianças de 3 a 10 anos. As ilustrações são pensadas para diferentes níveis de habilidade, desde traços mais simples até desenhos mais detalhados."
    },
    {
      question: "O material é digital ou físico?",
      answer: "O material é 100% digital! Você recebe acesso imediato após a compra e pode imprimir quantas vezes quiser, em casa ou em uma gráfica."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas."
    },
    {
      question: "Posso usar em tablets ou celulares?",
      answer: "Sim! Além de poder imprimir, os arquivos podem ser usados em aplicativos de colorir em tablets. Porém, recomendamos a impressão para reduzir o tempo de tela."
    },
    {
      question: "Quantas páginas vêm no kit?",
      answer: "O kit completo contém mais de 50 páginas ilustradas com histórias bíblicas, além do bônus Amigo Jesus com páginas extras no estilo Bobbie Goods."
    },
    {
      question: "Vou receber atualizações?",
      answer: "Sim! Você terá acesso vitalício e receberá todas as atualizações futuras com novas histórias e ilustrações sem custo adicional."
    }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-foreground font-fredoka">
            Perguntas Frequentes
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Tire suas dúvidas antes de garantir seu kit!
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background rounded-2xl px-4 sm:px-6 border-2 border-primary/10 card-elevated"
            >
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-foreground hover:text-primary text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
