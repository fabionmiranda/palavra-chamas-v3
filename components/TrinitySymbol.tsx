
import React from 'react';

interface TrinitySymbolProps {
  size?: number;
  className?: string;
  watermark?: boolean;
}

const TrinitySymbol: React.FC<TrinitySymbolProps> = ({ size = 300, className = "", watermark = false }) => {
  const opacity = watermark ? "opacity-5" : "opacity-100";
  
  // Coordenadas dos vértices - triângulo equilátero
 const pPai = { x: 200, y: 80 };
const pFilho = { x: 70, y: 300 };  // Filho vai para a esquerda
const pES = { x: 330, y: 300 };     // ES vai para a direita

  // Centro aproximado para a Sarça
  const centerX = 200;
  const centerY = 245;

  return (
    <div className={`relative flex items-center justify-center ${className} ${opacity}`}>
      <svg width={size} height={size} viewBox="0 0 400 400" className="drop-shadow-[0_0_25px_rgba(245,158,11,0.5)] overflow-visible">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="fireGlowReal">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>

          <linearGradient id="fireGradReal" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#9a3412" />
            <stop offset="30%" stopColor="#ea580c" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>

          <style>
            {`
              @keyframes flowLine {
                from { stroke-dashoffset: 60; }
                to { stroke-dashoffset: 0; }
              }
              @keyframes fire-rise {
                0%, 100% { transform: scale(1) translateY(0) rotate(0deg); opacity: 0.9; }
                50% { transform: scale(1.1) translateY(-4px) rotate(1deg); opacity: 1; }
              }
              @keyframes ember-rise {
                0% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
                100% { transform: translateY(-50px) translateX(var(--tx)) scale(0); opacity: 0; }
              }
              .energy-path-fire {
                stroke-dasharray: 10, 5;
                animation: flowLine 2s linear infinite;
                stroke: #ea580c;
              }
              .energy-path-gold {
                stroke-dasharray: 10, 5;
                animation: flowLine 2s linear infinite;
                stroke: #facc15;
              }
              .realistic-flame {
                animation: fire-rise 1.1s infinite ease-in-out;
                transform-origin: bottom center;
                mix-blend-mode: screen;
              }
              .ember {
                animation: ember-rise 2s infinite ease-out;
                fill: #fbbf24;
              }
              .label-text {
                font-family: 'Inter', sans-serif;
                font-weight: 800;
                letter-spacing: 0.15em;
                text-transform: uppercase;
              }
              .definition-text {
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 10px;
                fill: #64748b;
              }
            `}
          </style>

          <marker id="fireArrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 L 3 5 Z" fill="#ea580c" />
          </marker>
          <marker id="goldArrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 L 3 5 Z" fill="#facc15" />
          </marker>
        </defs>
{/* Linhas Conectivas Estáticas (mais grossas) */}
<path 
  d={`M ${pPai.x} ${pPai.y} L ${pES.x} ${pES.y} L ${pFilho.x} ${pFilho.y} Z`} 
  fill="none" 
  stroke="rgba(199, 227, 16, 0.1)" 
  strokeWidth="6"
  strokeLinejoin="round"
  filter="url(#glow)"
/>


       {/* SARÇA ARDENTE REALISTA NO CENTRO */}
<g className="burning-bush-group">
  {/* Sombra no chão */}
  <ellipse cx={centerX} cy={centerY + 36} rx="24" ry="6" fill="#1a0f07" opacity="0.7" />

  {/* Tronco e ramagens (mais visíveis) */}
  <g opacity="0.95">
    <path
      d={`M ${centerX} ${centerY+34} Q ${centerX-4} ${centerY+16} ${centerX} ${centerY-10}`}
      stroke="#6b3a1c"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d={`M ${centerX-2} ${centerY+24} Q ${centerX-24} ${centerY+18} ${centerX-34} ${centerY+6}`}
      stroke="#6b3a1c"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d={`M ${centerX+2} ${centerY+22} Q ${centerX+24} ${centerY+18} ${centerX+36} ${centerY+6}`}
      stroke="#6b3a1c"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </g>

  {/* FOLHAGEM (é isso que estava faltando) */}
  <g filter="url(#glow)" opacity="0.85">
    {/* esquerda */}
    <path
      d={`M ${centerX-52} ${centerY+10} 
          Q ${centerX-40} ${centerY-10} ${centerX-18} ${centerY-6}
          Q ${centerX-34} ${centerY+12} ${centerX-52} ${centerY+10} Z`}
      fill="#14532d"
      stroke="#86efac"
      strokeOpacity="0.25"
      strokeWidth="1"
    />
    {/* direita */}
    <path
      d={`M ${centerX+52} ${centerY+10} 
          Q ${centerX+40} ${centerY-10} ${centerX+18} ${centerY-6}
          Q ${centerX+34} ${centerY+12} ${centerX+52} ${centerY+10} Z`}
      fill="#14532d"
      stroke="#86efac"
      strokeOpacity="0.25"
      strokeWidth="1"
    />
    {/* topo central */}
    <path
      d={`M ${centerX-18} ${centerY-6}
          Q ${centerX} ${centerY-30} ${centerX+18} ${centerY-6}
          Q ${centerX} ${centerY-2} ${centerX-18} ${centerY-6} Z`}
      fill="#166534"
      stroke="#86efac"
      strokeOpacity="0.22"
      strokeWidth="1"
    />

    {/* “miolo” com folhas pequenas */}
    <circle cx={centerX-18} cy={centerY+6} r="8" fill="#0f3d22" opacity="1" />
    <circle cx={centerX+18} cy={centerY+6} r="8" fill="#0f3d22" opacity="1" />
    <circle cx={centerX} cy={centerY+10} r="10" fill="#0f3d22" opacity="1" />
  </g>

  {/* FOGO SAINDO DA SARÇA (camadas com delays) */}
  <g filter="url(#fireGlowReal)">
{/* spikes (jatos) — dão o “salto” */}
<path
  className="flame-spike"
  style={{ animationDelay: "0s" } as any}
  d={`M ${centerX-6} ${centerY+18} 
      Q ${centerX-2} ${centerY-22} ${centerX+2} ${centerY+18} 
      Q ${centerX-2} ${centerY+12} ${centerX-6} ${centerY+18} Z`}
  fill="url(#fireGradReal)"
  opacity="0.95"
/>

<path
  className="flame-spike"
  style={{ animationDelay: "0.22s" } as any}
  d={`M ${centerX+10} ${centerY+20} 
      Q ${centerX+18} ${centerY-10} ${centerX+22} ${centerY+22} 
      Q ${centerX+15} ${centerY+16} ${centerX+10} ${centerY+20} Z`}
  fill="rgba(234, 88, 12, 0.9)"
/>

<path
  className="flame-spike"
  style={{ animationDelay: "0.48s" } as any}
  d={`M ${centerX-18} ${centerY+20} 
      Q ${centerX-24} ${centerY-6} ${centerX-10} ${centerY+22} 
      Q ${centerX-14} ${centerY+16} ${centerX-18} ${centerY+20} Z`}
  fill="rgba(245, 158, 11, 0.85)"
/>



    {/* chama 1 */}
    <g className="realistic-flame" style={{ animationDelay: "0s" } as any}>
      <path d={`M ${centerX-28} ${centerY+12} Q ${centerX} ${centerY-64} ${centerX+28} ${centerY+12} T ${centerX-28} ${centerY+12}`} fill="rgba(154, 52, 18, 0.55)" />
      <path d={`M ${centerX-20} ${centerY+14} Q ${centerX} ${centerY-48} ${centerX+20} ${centerY+14} T ${centerX-20} ${centerY+14}`} fill="rgba(234, 88, 12, 0.75)" />
      <path d={`M ${centerX-11} ${centerY+16} Q ${centerX} ${centerY-32} ${centerX+11} ${centerY+16} T ${centerX-11} ${centerY+16}`} fill="url(#fireGradReal)" />
      <ellipse cx={centerX} cy={centerY} rx="4" ry="12" fill="white" filter="blur(2px)" opacity="0.75" />
    </g>

    {/* chama 2 (ligeiramente deslocada) */}
    <g className="realistic-flame" style={{ animationDelay: "0.35s" } as any}>
      <path d={`M ${centerX-22} ${centerY+16} Q ${centerX-6} ${centerY-56} ${centerX+16} ${centerY+18} T ${centerX-22} ${centerY+16}`} fill="rgba(154, 52, 18, 0.35)" />
      <path d={`M ${centerX-14} ${centerY+18} Q ${centerX-4} ${centerY-42} ${centerX+10} ${centerY+18} T ${centerX-14} ${centerY+18}`} fill="rgba(234, 88, 12, 0.55)" />
      <path d={`M ${centerX-8} ${centerY+20} Q ${centerX-2} ${centerY-28} ${centerX+6} ${centerY+20} T ${centerX-8} ${centerY+20}`} fill="url(#fireGradReal)" opacity="0.9" />
    </g>

    {/* chama 3 (mais fina, mais rápida) */}
    <g className="realistic-flame" style={{ animationDelay: "0.7s" } as any}>
      <path d={`M ${centerX-10} ${centerY+18} Q ${centerX+10} ${centerY-44} ${centerX+24} ${centerY+22} T ${centerX-10} ${centerY+18}`} fill="rgba(234, 88, 12, 0.35)" />
      <path d={`M ${centerX-4} ${centerY+20} Q ${centerX+8} ${centerY-30} ${centerX+16} ${centerY+22} T ${centerX-4} ${centerY+20}`} fill="url(#fireGradReal)" opacity="0.75" />
    </g>
  </g>

  {/* Brasas */}
  <circle className="ember" cx={centerX - 10} cy={centerY+4} r="1.2" style={{ "--tx": "-18px", animationDelay: "0.2s" } as any} />
  <circle className="ember" cx={centerX + 10} cy={centerY - 6} r="1.4" style={{ "--tx": "22px", animationDelay: "0.8s" } as any} />
  <circle className="ember" cx={centerX + 2} cy={centerY - 18} r="1.0" style={{ "--tx": "8px", animationDelay: "1.2s" } as any} />
</g>


        {/* FLUXOS DE ENERGIA DE FOGO */}
        <path 
          d={`M ${pPai.x - 10} ${pPai.y + 15} Q 100 180 ${pES.x + 10} ${pES.y - 15}`}
          fill="none" strokeWidth="3" markerEnd="url(#fireArrow)" className="energy-path-fire" filter="url(#glow)"
        />
        <path
  d={`M ${pFilho.x + 10} ${pFilho.y - 10} Q 200 320 ${pES.x - 10} ${pES.y - 10}`}
  fill="none"
  strokeWidth="3"
  markerEnd="url(#fireArrow)"
  className="energy-path-fire"
  filter="url(#glow)"
/>

{/* Camada extra (mais rápida) para reforçar movimento */}
<path
  d={`M ${pPai.x - 10} ${pPai.y + 15} Q 100 180 ${pES.x + 10} ${pES.y - 15}`}
  fill="none"
  strokeWidth="2"
  markerEnd="url(#fireArrow)"
  className="energy-path-fire"
  style={{ animationDuration: "1.1s", opacity: 0.65 }}
  filter="url(#glow)"
/>

<path
  d={`M ${pFilho.x - 25} ${pFilho.y} L ${pES.x + 30} ${pES.y}`}
  fill="none"
  strokeWidth="2"
  markerEnd="url(#fireArrow)"
  className="energy-path-fire"
  style={{ animationDuration: "1.3s", opacity: 0.55, animationDelay: "0.25s" } as any}
  filter="url(#glow)"
/>
        
        <path 
          d={`M ${pPai.x + 10} ${pPai.y + 15} Q 300 180 ${pFilho.x - 10} ${pFilho.y - 15}`}
          fill="none" strokeWidth="2" markerEnd="url(#goldArrow)" className="energy-path-gold" strokeOpacity="0.4"
        />

        {/* Vértices */}
        <g filter="url(#glow)">
          <circle cx={pPai.x} cy={pPai.y} r="7" fill="#fff" />
          <circle cx={pES.x} cy={pES.y} r="7" fill="#fff" /> {/* ES agora é branco radiante */}
          <circle cx={pFilho.x} cy={pFilho.y} r="7" fill="#facc15" />
        </g>

        {!watermark && (
          <g>
            <text x={pPai.x} y={pPai.y - 45} textAnchor="middle" fill="#fff" className="label-text text-[24px]">Pai</text>
            <text x={pES.x - 15} y={pES.y + 35} textAnchor="end" fill="#fff" className="label-text text-[22px]">ES</text>
            <text x={pFilho.x + 15} y={pFilho.y + 35} textAnchor="start" fill="#facc15" className="label-text text-[22px]">Filho</text>
          </g>
        )}
      </svg>
      
      {/* Luz Radiante de Fundo */}
      <div className={`absolute w-32 h-32 rounded-full bg-amber-500/10 blur-[80px] animate-pulse ${watermark ? 'hidden' : ''}`} style={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
    </div>
  );
};

export default TrinitySymbol;
