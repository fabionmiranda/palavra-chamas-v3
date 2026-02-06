
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Cosmovisão', href: '#cosmovisao' },
  { label: 'Missão', href: '#missao' },
  { label: 'Avivalistas', href: '#avivalistas' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 border-b border-amber-900/40 py-3 backdrop-blur-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3 group cursor-pointer shrink-0 mr-10 md:mr-16">

          <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-orange-00 to-amber-500 blur-[1px]"></div>
          <span className="font-black text-sm sm:text-lg tracking-tighter text-white uppercase italic">
            P.A.L.A.V.R.A <span className="text-amber-500 font-light"> {" "} em Chamas</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4 xl:gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-base font-extrabold text-gray-100 hover:text-amber-100 transition-colors uppercase tracking-[0.15em] whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button className="text-white p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-amber-900/30 py-8 flex flex-col items-center gap-6 animate-fade-in">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-lg font-bold text-gray-400 hover:text-amber-400 transition-colors uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
