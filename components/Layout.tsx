
import React, { useState, useEffect } from 'react';
import { Icons, HUBS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');

  const tickerMessages = [
    "LOGISTICS UNIT 01: ACTIVE • OXFORD DISTRICT",
    "LOGISTICS UNIT 02: DEPLOYED • GRENADA MEDICAL HUB",
    "ELITE DISPATCH PROTOCOL: 45m AVG LATENCY",
    "SYSTEM STATUS: ALL 25 STRATEGIC HUBS OPERATIONAL",
    "SECURED DUAL-TRAY PRINTING BUREAU ONLINE"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 6000);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHashChange = () => setCurrentHash(window.location.hash || '#');
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'Services', path: '#services' },
    { name: 'Regional Network', path: '#network' },
    { name: 'Knowledge Vault', path: 'https://faq.northmsnotary.com' },
    { name: 'Dispatch Inquiry', path: '#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '#' && (currentHash === '#' || currentHash === '')) return true;
    if (path.startsWith('#') && currentHash.startsWith(path)) return true;
    return currentHash === path;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0a192f] text-white">
      {/* Top Ticker Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#d4af37] text-[#0a192f] py-2 overflow-hidden z-[60] shadow-md border-b border-[#0a192f]/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#0a192f] rounded-full animate-ping shrink-0"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-cinzel text-nowrap">
              {tickerMessages[tickerIndex]}
            </span>
          </div>
          <span className="hidden lg:block text-[9px] font-black uppercase tracking-[0.4em] opacity-80 shrink-0">
            Premium Logistics Bureau • MS-NORTH DIVISION
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'translate-y-8' : 'translate-y-12'} px-4`}>
        <div className={`max-w-7xl mx-auto rounded-[1.5rem] border border-white/5 transition-all duration-700 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-2xl py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
          <div className="px-8 flex justify-between items-center">
            <a href="#" className="flex flex-col text-left group">
              <span className="font-cinzel font-black text-xl md:text-2xl tracking-tighter text-[#d4af37] leading-none uppercase group-hover:text-white transition-all duration-500">THE NORTH MS NOTARY</span>
              <span className="text-[9px] uppercase tracking-[0.5em] text-gray-500 font-bold mt-1 group-hover:text-[#d4af37] transition-colors">MOBILE BUREAU UNIT</span>
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-[10px] font-black transition-all uppercase tracking-[0.25em] relative group ${
                    isActive(link.path) ? 'text-[#d4af37]' : 'text-gray-400 hover:text-[#d4af37]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#d4af37] transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              ))}
              <div className="flex items-center gap-3">
                <a href="https://faq.northmsnotary.com" className="border border-[#d4af37]/40 text-[#d4af37] px-5 py-2.5 rounded-full font-black text-[9px] tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-[#0a192f] transition shadow-lg">
                  FAQs
                </a>
                <a href="tel:6013278333" className="bg-[#d4af37] text-[#0a192f] px-6 py-3 rounded-full font-black text-[10px] tracking-widest uppercase hover:scale-105 transition shadow-xl hover:shadow-[#d4af37]/20">
                  Direct Dispatch
                </a>
              </div>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#d4af37]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-4 right-4 bg-[#0a192f] border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 font-black uppercase tracking-[0.2em] text-xs ${
                  isActive(link.path) ? 'text-[#d4af37]' : 'text-gray-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="https://faq.northmsnotary.com" onClick={() => setIsMenuOpen(false)} className="block w-full text-center border border-[#d4af37] text-[#d4af37] py-3 rounded-2xl font-black uppercase tracking-widest text-xs">Knowledge Vault</a>
            <a href="tel:6013278333" className="block w-full text-center bg-[#d4af37] text-[#0a192f] py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Direct Call</a>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-10">{children}</main>

      <footer className="bg-[#0a192f] text-gray-500 py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 text-left">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-cinzel text-2xl font-black text-white mb-8 uppercase tracking-tighter">THE NORTH <span className="text-[#d4af37]">MISSISSIPPI</span> NOTARY</h4>
            <p className="max-w-md mb-10 leading-relaxed text-sm font-light">
              Mississippi's premier mobile logistics bureau. Specialized in high-stakes document witnessing, estate execution, and clinical power of attorney deployments.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://privacy.northmsnotary.com" className="px-6 py-3 rounded-xl border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[9px] hover:border-[#d4af37] hover:text-[#d4af37] transition-all bg-white/5 shadow-xl">
                Bureau Privacy
              </a>
              <a href="https://faq.northmsnotary.com" className="px-6 py-3 rounded-xl border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[9px] hover:border-[#d4af37] hover:text-[#d4af37] transition-all bg-white/5 shadow-xl">
                Knowledge Vault
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Regional Hubs</h5>
            <ul className="grid grid-cols-2 gap-y-3 text-[10px] font-bold">
              {HUBS.slice(0, 10).map(hub => (
                <li key={hub.id}>
                  <a href={`#contact?hub=${encodeURIComponent(hub.name)}`} className="hover:text-[#d4af37] transition uppercase tracking-widest">Notary {hub.name}</a>
                </li>
              ))}
              <li className="col-span-2 mt-6">
                <a href="#network" className="text-[#d4af37] font-black uppercase tracking-widest border-b border-[#d4af37]">Network Atlas</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Bureau Protocols</h5>
            <ul className="space-y-4 text-[10px] font-bold tracking-widest">
              <li><a href="https://privacy.northmsnotary.com" className="hover:text-[#d4af37] transition uppercase">GLBA COMPLIANCE</a></li>
              <li><a href="https://faq.northmsnotary.com" className="hover:text-[#d4af37] transition uppercase">KNOWLEDGE VAULT</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition uppercase">SERVICE PORTFOLIO</a></li>
              <li className="pt-8">
                <p className="text-[9px] leading-tight text-gray-700 uppercase italic">NNA Certified • E&O Insured • LSS Verified High-Capacity Units</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] font-black text-gray-600">
          <span>© {new Date().getFullYear()} The North MS Notary Bureau</span>
          <span className="mt-4 md:mt-0 italic text-right">Technologist Owned • Zero-Defect Philosophy</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
