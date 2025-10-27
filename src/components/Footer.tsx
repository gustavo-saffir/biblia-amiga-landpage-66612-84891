import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-white">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            <h3 className="text-xl sm:text-2xl font-fredoka">Geração Pequenos Heróis da Fé</h3>
          </div>
          
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Transformando o aprendizado bíblico em uma experiência divertida e significativa para crianças de todo o Brasil.
          </p>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-xs sm:text-sm text-white/70">
              © {new Date().getFullYear()} Geração Pequenos Heróis da Fé. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-xs mt-2">
              Este produto é comercializado com garantia de 7 dias através da plataforma Hotmart.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
