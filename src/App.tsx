import { motion } from "motion/react";
import { BookOpen, Star, User, Layers } from "lucide-react";

export default function App() {
  const imageUrl = "/src/assets/images/gaiola_de_ouro_capa.png";

  return (
    <div className="min-h-screen bg-black overflow-hidden selection:bg-gold/30 selection:text-gold-light">
      {/* Luzes de Fundo Atmosféricas */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-gold-dark/5 blur-[100px] rounded-full" />
      </div>

      <header className="relative z-50 p-8 flex justify-between items-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-gold/40 rounded-full flex items-center justify-center">
            <Layers className="w-5 h-5 text-gold" />
          </div>
          <span className="font-display text-sm tracking-[0.2em] text-gold-light uppercase">
            Gaiola de Ouro
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {["Início", "Sinopse", "Autor", "Obras"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-widest text-white/50 hover:text-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 border border-gold/30 rounded-full text-[10px] uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300">
            Comprar Agora
          </button>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Coluna da Esquerda: Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-8 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-gold font-medium tracking-widest text-[10px] uppercase"
            >
              <div className="h-[1px] w-8 bg-gold" />
              Lançamento 2026
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-display leading-[0.85] text-gold-gradient drop-shadow-2xl">
              GAIOLA <br /> DE OURO
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-white/70 max-w-xl">
              "Onde o brilho do metal ofusca a alma, o silêncio é o único grito permitido."
            </p>
          </div>

          <div className="space-y-6 text-white/60 leading-relaxed max-w-lg">
            <p>
              Imagine viver em um paraíso de ouro maciço, onde cada desejo material é atendido, mas a liberdade é uma lembrança proibida. No novo épico dramático de 2026, as paredes de ouro tornam-se a prisão mais impenetrável de todas.
            </p>
            <p>
              Uma história sobre a resistência do espírito humano contra a opressão da riqueza desmedida e a hipocrisia de um mundo que valoriza o preço sobre o valor.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 pt-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-white/40 block">Gênero</span>
              <span className="text-sm font-medium text-white/80">Drama Social / Distopia</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-white/40 block">Páginas</span>
              <span className="text-sm font-medium text-white/80">420 pp.</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-white/40 block">Avaliação</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-6 pt-4">
            <button className="group relative px-8 py-4 bg-gold rounded-full text-black font-semibold text-sm uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <span className="relative z-10">Explorar a Obra</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-sm uppercase tracking-widest hover:border-gold/50 transition-all duration-300">
              Ler Amostra
            </button>
          </div>
        </motion.div>

        {/* Coluna da Direita: A Capa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative perspective-1000 flex justify-center order-1 lg:order-2"
        >
          {/* Sombra da Verso */}
          <div className="absolute -bottom-10 w-[70%] h-12 bg-black/80 blur-3xl rounded-full" />
          
          {/* Estrutura do Livro */}
          <div className="relative group perspective-2000 cursor-pointer">
            <motion.div
              whileHover={{ rotateY: -10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-[320px] md:w-[450px] aspect-[2/3] transform-style-3d shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] rounded-[4px] overflow-hidden group-hover:shadow-[0_45px_100px_-20px_rgba(212,175,55,0.2)] transition-shadow duration-500"
            >
              {/* Imagem da Capa Gerada */}
              <img
                src={imageUrl}
                alt="Capa do Livro Gaiola de Ouro"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Overlays de Tipografia na Imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-12">
                <div className="space-y-1">
                  <div className="h-[2px] w-12 bg-gold mb-4" />
                  <span className="font-display text-sm tracking-[0.3em] text-white/90 uppercase block">
                    Uma obra de
                  </span>
                  <span className="font-serif italic text-2xl text-gold-light">
                    Claudio Tonelli
                  </span>
                </div>
                
                <div className="text-right">
                  <h2 className="font-display text-4xl md:text-5xl text-gold leading-none tracking-tight">
                    GAIOLA <br /> 
                    <span className="text-2xl tracking-[0.5em] opacity-80">DE OURO</span>
                  </h2>
                </div>
              </div>

              {/* Brilhos de Ouro Decorativos Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_50%)]" />
              <div className="absolute top-0 inset-x-0 h-px bg-white/20" />
              <div className="absolute left-0 inset-y-0 w-px bg-white/10" />
            </motion.div>

            {/* Marcador de Livro Sutil */}
            <div className="absolute -top-4 right-12 w-8 h-16 bg-gold-dark/40 backdrop-blur-md border-x border-b border-gold/30 rounded-b-sm group-hover:translate-y-2 transition-transform duration-500" />
          </div>
        </motion.div>
      </main>

      {/* Seção Inferior: Detalhes do Autor */}
      <section className="relative z-10 border-t border-white/5 py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white/5 rounded-xl">
              <User className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white/90">Sobre o Autor</h3>
              <p className="text-sm text-white/50 pt-2">Vencedor do prêmio de literatura dramática, focado em questões humanistas.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white/5 rounded-xl">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white/90">Edição Especial</h3>
              <p className="text-sm text-white/50 pt-2">Capa dura com detalhes em Hot Stamping dourado e papel luxo.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-white/5 rounded-xl">
              <Layers className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white/90">Colecionador</h3>
              <p className="text-sm text-white/50 pt-2">Inclui mapa encartado da cidade de Ouro e prefácio exclusivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2026 Editora Horizonte. Todos os Direitos Reservados.</span>
        <div className="flex gap-8">
          {["Termos", "Privacidade", "Contato"].map(t => (
            <a key={t} href="#" className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">{t}</a>
          ))}
        </div>
      </footer>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .perspective-1000 { perspective: 1000px; }
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
