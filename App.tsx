
import React from 'react';
import { 
  ShieldCheck, 
  Flame, 
  BookOpen, 
  Globe, 
  Phone, 
  ExternalLink,
  ChevronRight,
  // Added missing Users icon from lucide-react
  Users
} from 'lucide-react';
import Navbar from './components/Navbar';
import TrinitySymbol from './components/TrinitySymbol';
import FlameText from './components/FlameText';

const RealisticBurningBush = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={`inline-block ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="heatHaze" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <linearGradient id="fireGradHeroReal" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#7c2d12" />
        <stop offset="30%" stopColor="#ea580c" />
        <stop offset="60%" stopColor="#f59e0b" />
        <stop offset="90%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
    </defs>
    
    <g stroke="#2d1a0a" strokeWidth="2" strokeLinecap="round">
      <path d="M60 100 V75" />
      <path d="M60 85 Q45 75 35 55" />
      <path d="M60 88 Q75 75 85 55" />
      <path d="M60 78 Q55 65 52 45" />
      <path d="M60 78 Q65 65 68 45" />
    </g>
    
    <g filter="url(#heatHaze)" className="animate-pulse">
      <path d="M30 65 Q60 0 90 65 T30 65" fill="#ea580c" fillOpacity="0.3" />
      <path d="M40 70 Q60 20 80 70 T40 70" fill="url(#fireGradHeroReal)" fillOpacity="0.8" />
      <path d="M50 75 Q60 40 70 75 T50 75" fill="#fff" fillOpacity="0.6" />
    </g>

    <style>{`
      @keyframes float-up {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-40px) scale(0.5); opacity: 0; }
      }
      .spark { animation: float-up 2s infinite ease-out; fill: #fbbf24; }
    `}</style>
    <circle className="spark" cx="45" cy="40" r="1.2" style={{ animationDelay: '0.1s' }} />
    <circle className="spark" cx="75" cy="30" r="1" style={{ animationDelay: '0.7s' }} />
    <circle className="spark" cx="60" cy="20" r="1.5" style={{ animationDelay: '1.3s' }} />
  </svg>
);

const App: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-amber-500/10 overflow-x-hidden">
      <Navbar />

      {/* SEÇÃO HERO (INÍCIO) */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-black">
        
        {/* Camada do Vídeo (Background Real) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Escurece o vídeo para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
          
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
  <video
    className="w-full h-full object-cover opacity brightness-[1]"
    src="video2.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

        </div>
        
        <div className="w-full max-w-7xl mx-auto px-6 relative z-30 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full">
            
            {/* Símbolo da Trindade à ESQUERDA */}
            <div className="w-full lg:w-[45%] flex justify-center animate-float order-2 lg:order-1 lg:-translate-x-10 transition-transform duration-1000">
              <div className="relative transform scale-100 sm:scale-110 lg:scale-125">
                <TrinitySymbol size={400} />
              </div>
            </div>

            {/* Headline à DIREITA */}
            <div className="w-full lg:w-[55%] text-center lg:text-left order-1 lg:order-2">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-4 mb-2">
                  <RealisticBurningBush className="w-20 h-20 lg:w-28 lg:h-28" />
                  <div className="flex flex-col text-left">
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] lg:text-xs">O SENHOR SE REVELOU NA SARÇA ARDENTE</span>
                    <span className="text-gray-200 font-mono text-[20px] lg:text-[20px]">Êxodo 3:2</span>
                  </div>
                </div>
                
                {/* VERSO BÍBLICO ÊXODO 3:2 */}
                <div className="mb-8 max-w-lg lg:max-w-xl">
                  <p className="text-gray-100 italic FONT-font-strokeLinecap text-sm sm:text-base leading-relaxed border-l-2 border-amber-600/50 pl-4 py-2 bg-black/70 backdrop-blur-md rounded-r-lg shadow-2xl shadow-amber-900/40">
                    “O anjo do SENHOR lhe apareceu numa chama de fogo, no meio de uma sarça. Moisés olhou, e eis que a sarça ardia no fogo e a sarça não se consumia.” <span className="text-amber-500 not-italic font-sans text-xs ml-1 font-bold">(Êx 3.2, NAA)</span>
                  </p>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black mb-6 tracking-tighter leading-[0.9]">
                  <FlameText className="text-glow" /> <br className="hidden lg:block"/> 
                  <span className="text-white drop-shadow-lg">em Chamas</span>
                </h1>
              </div>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-tight drop-shadow-md">
                O fogo bíblico que procede do <span className="text-amber-400 font-bold">Pai</span>, 
                revela o <span className="text-amber-400 font-bold">Filho</span>{" "}
                e é aplicado pelo <span className="text-amber-400 font-bold">Espírito</span>.
              </p>
              
              <div className="mb-10 inline-block px-6 py-3 border border-amber-800/30 bg-black/80 rounded-full backdrop-blur-sm shadow-xl shadow-amber-900/30">
                <p className="text-xs sm:text-sm md:text-base text-gray-200 font-bold tracking-widest uppercase">
                  Fogo trinitário, governado pela Palavra.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#quem-somos" className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-amber-400 transition-all flex items-center justify-center gap-3 group text-sm sm:text-base uppercase tracking-widest shadow-lg shadow-white/5">
                  Conhecer <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#formacao" className="px-10 py-5 border border-amber-500/50 text-amber-400 font-black rounded-full hover:bg-amber-400/10 transition-all flex items-center justify-center gap-3 text-sm sm:text-base uppercase tracking-widest backdrop-blur-sm">
                  Formação
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="py-20 relative flex justify-center bg-black">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <span className="text-amber-500 font-bold uppercase tracking-[0.5em] mb-4 block text-xs sm:text-sm">Aliança Bíblica</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-10 text-fire uppercase leading-none">Quem Somos</h2>
          <div className="glass p-8 sm:p-14 rounded-[2rem] border border-white/5 text-center space-y-8 shadow-2xl shadow-amber-950/10">
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 leading-snug font-medium">
              <FlameText /> em Chamas é um movimento cristão e de formação bíblica fundamentada na Escritura e estruturado na Trindade.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Promovemos avivamento bíblico pela ação conjunta do Pai, do Filho e do Espírito, formando fé, caráter e missão em jovens e adultos, equipando-os para serem fiéis à Palavra em todas as esferas da vida.
            </p>
          </div>
        </div>
      </section>

      {/* COSMOVISÃO */}
      <section id="cosmovisao" className="py-20 bg-white/[0.01]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 uppercase leading-none">Cosmovisão</h2>
              <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-md mx-auto lg:mx-0">Vivemos uma fé trinitária que governa toda a realidade.</p>
              <div className="grid grid-cols-2 gap-4">
                {["Pensamento", "Ética", "Cultura", "Vocação"].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center hover:border-amber-500/30 transition-all cursor-default">
                    <h4 className="text-amber-400 font-black uppercase text-xs sm:text-sm tracking-widest">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-4 w-full">
               {[
                "A Escritura governa toda a realidade",
                "A Trindade é o centro da fé e da vida",
                "Cristianismo é visão de mundo",
                "Fé bíblica transforma a vida pública"
               ].map((text, i) => (
                <div key={i} className="flex items-center gap-5 p-6 glass rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group">
                  <ShieldCheck className="text-amber-500 w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg sm:text-xl font-bold">{text}</span>
                </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section id="missao" className="py-20 bg-black">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase">Missão</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { t: "Fidelidade", d: "Palavra sem concessões.", i: BookOpen },
              { t: "Fervor", d: "Equilíbrio entre paixão e doutrina.", i: Flame },
              { t: "Impacto", d: "Equipar para a sociedade.", i: Globe }
            ].map((item, i) => (
              <div key={i} className="p-10 glass rounded-[2rem] text-center border border-white/5 hover:border-amber-500/20 transition-all group">
                <div className="w-16 h-16 rounded-full bg-amber-900/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-900/40 transition-colors">
                  <item.i className="text-amber-400 w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 uppercase tracking-tighter">{item.t}</h3>
                <p className="text-gray-400 text-base leading-snug">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="py-20 bg-white/[0.05]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase text-fire">Estrutura da Formação</h2>
            <p className="text-gray-1000 tracking-[0.3em] uppercase text-xs sm:text-sm font-bold">Fundamentação Bíblica Trinitária</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { m: 1, t: "Origem no Pai", r: "Hb 1.1-2", d: "Profecia sem Pai é imaginação espiritual." },
              { m: 2, t: "Aponta para o Filho", r: "Jo 5.39", d: "Toda profecia bíblica glorifica a Cristo." },
              { m: 3, t: "Incendiado pelo Espírito", r: "Jo 16.13", d: "O Espírito não contradiz o texto inspirado." },
              { m: 4, t: "Bíblica, não Adivinhação", r: "1Co 14.1", d: "Foco em edificação, não em manipulação." },
              { m: 5, t: "Línguas e Ordem", r: "At 2 | 1Co 14", d: "O agir do Espírito não gera confusão." },
              { m: 6, t: "Palavra em Chamas", r: "Lc 24.32", d: "A exegese é o combustível do fogo santo." },
              { m: 7, t: "Adoração e Santidade", r: "Jo 4.23", d: "Avivamento real gera arrependimento e pureza." },
              { m: 8, t: "Missão da Trindade", r: "2Tm 4.2", d: "Pregar, discernir e enviar ao mundo." }
            ].map((mod) => (
              <div key={mod.m} className="p-8 glass rounded-2xl border border-white/3 hover:border-amber-500/30 transition-all text-center flex flex-col justify-between group">
                <div>
                  <div className="text-[10px] sm:text-xs font-bold text-amber-500 mb-2 uppercase tracking-widest">Módulo {mod.m}</div>
                  <h4 className="text-lg sm:text-x2 font-black mb-3 leading-tight group-hover:text-amber-400 transition-colors">{mod.t}</h4>
                  <div className="text-amber-300 text-xs sm:text-sm font-mono mb-4">{mod.r}</div>
                </div>
                <p className="text-#2d1a0a-500 text-sm sm:text-base leading-tight italic">"{mod.d}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* PÉROLAS DE AVIVAMENTO */}
<section id="avivalistas" className="py-20 bg-black relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.25),_transparent_55%)]" />
  <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(120deg,_rgba(59,130,246,0.10),_transparent_45%,_rgba(34,211,238,0.08))]" />

  <div className="container max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase text-fire">
        Pérolas de Avivamento
      </h2>
      <p className="text-gray-300 tracking-[0.25em] uppercase text-xs sm:text-sm font-bold">
        Fogo com doutrina • piedade • santidade
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          a: "Jonathan Edwards",
          q: "Avivamento bíblico não é ruído religioso; é luz na mente e fogo santo no coração, governado pela Palavra."
        },
        {
          a: "Martyn Lloyd-Jones",
          q: "O Espírito Santo não foi dado para substituir as Escrituras, mas para aplicar a verdade com poder e convicção."
        },
        {
          a: "Charles Spurgeon",
          q: "Onde a Palavra é aberta com fidelidade, o coração aprende a arder sem perder a reverência."
        },
        {
          a: "George Whitefield",
          q: "A pregação que desperta não é a que entretém; é a que exalta Cristo e humilha o pecado."
        },
        {
          a: "J. C. Ryle",
          q: "Sinais de vida espiritual não são apenas lágrimas, mas arrependimento, santidade e perseverança."
        },
        {
          a: "John Owen",
          q: "Fogo verdadeiro não convive com a indulgência: ele produz mortificação do pecado e temor de Deus."
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="p-8 border border-white/10 bg-black/40 rounded-sm hover:border-amber-500/30 transition-all"
        >
          <p className="text-gray-100 italic leading-relaxed mb-6">
            “{item.q}”
          </p>
          <div className="text-amber-400 font-black uppercase tracking-widest text-xs">
            {item.a}
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <p className="text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
        O fogo bíblico é trinitário: procede do Pai, revela o Filho e é aplicado pelo Espírito — sempre sob o governo da Escritura.
      </p>
    </div>
  </div>
</section>


      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="py-20 bg-black">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4">Fervor com Ordem Bíblica</h2>
            <p className="text-gray-500 text-lg">A experiência da verdade transforma a vida.</p>
          </div>
          <div className="space-y-4">
            {[
              "Leitura pública da Escritura",
              "Oração guiada pelo texto bíblico",
              "Louvor avaliado teologicamente",
              "Aplicações pastorais diretas",
              "Envio missionário com sobriedade"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 glass border border-amber-900/10 rounded-2xl hover:border-amber-600/30 transition-all group">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-black group-hover:bg-amber-500 group-hover:text-black transition-all">
                  {i + 1}
                </div>
                <span className="text-xl font-medium text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-black">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <div className="glass rounded-[3rem] p-10 sm:p-20 border border-white/5 shadow-2xl relative overflow-hidden bg-gradient-to-br from-black to-amber-950/20">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-orange-500 to-red-600"></div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight uppercase leading-none">Faça <span className="text-fire">Parte</span></h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
              O avivamento é a Trindade agindo soberanamente por meio da Palavra pregada e vivida.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-14">
              <a href="https://biolink.info/fabioNmiranda" target="_blank" className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 group">
                <ExternalLink size={28} className="text-amber-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs uppercase text-amber-500 font-bold tracking-widest">Link Bio</p>
                  <p className="text-lg sm:text-xl font-black">Acessar Movimento</p>
                </div>
              </a>
              <a href="tel:35997567535" className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 group">
                <Phone size={28} className="text-orange-500 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-xs uppercase text-orange-500 font-bold tracking-widest">WhatsApp</p>
                  <p className="text-lg sm:text-xl font-black">(35) 99756-7535</p>
                </div>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 max-w-lg mx-auto">
              <button className="flex-1 py-6 bg-gradient-to-r from-amber-600 to-red-600 text-white font-black rounded-full uppercase text-sm sm:text-base tracking-[0.2em] hover:scale-105 transition-transform shadow-xl shadow-red-900/20">Entrar no Movimento</button>
              <button className="flex-1 py-6 bg-white text-black font-black rounded-full uppercase text-sm sm:text-base tracking-[0.2em] hover:scale-105 transition-transform">Inscrever-se</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center bg-black">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-fire font-black text-xl sm:text-2xl">P.A.L.A.V.R.A</span>
            <span className="text-white text-xl sm:text-2xl font-light italic">em Chamas</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-[0.4em] mb-8 font-bold">© 2024 • Fundamentado na Rocha • Soli Deo Gloria</p>
          <div className="flex justify-center gap-8">
             <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors"><Instagram size={24} /></a>
             <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors"><Users size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Instagram = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default App;
