
import React, { useState, useRef, useEffect } from 'react';
import Layout from './components/Layout';
import { 
  BIZ_INFO, 
  MASTER_COUNTY_LIST, 
  SERVICE_MATRIX, 
  Icons,
  KNOWLEDGE_BASE
} from './constants';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap');

  :root {
    --gold-primary: #d4af37;
    --navy-deep: #030816;
    --navy-glass: rgba(8, 20, 45, 0.75);
    --gold-glow: rgba(212, 175, 55, 0.6);
  }

  .bureau-bg { 
    background: radial-gradient(circle at 10% 10%, rgba(212,175,55,0.18), transparent 35%), 
                radial-gradient(circle at 90% 90%, rgba(212,175,55,0.1), transparent 40%), 
                var(--navy-deep); 
  }
  
  .glass-card {
    background: var(--navy-glass);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(212, 175, 55, 0.45);
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.8);
  }

  .glow-gold { text-shadow: 0 0 12px var(--gold-glow); }
  .gold-border-glow { box-shadow: 0 0 25px rgba(212, 175, 55, 0.15); }
  
  .grain-overlay:before { 
    content: ''; position: fixed; inset: 0; pointer-events: none; opacity: 0.05; 
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" stitchTiles="stitch"/></filter><rect width="140" height="140" filter="url(%23n)" opacity="0.4"/></svg>'); 
  }

  .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
  .perspective-1200 { perspective: 1200px; }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .shimmer-text {
    background: linear-gradient(90deg, var(--gold-primary) 0%, #ffffff 50%, var(--gold-primary) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 5s linear infinite;
  }
`;

function HomePage() {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);

  const qrUrl = `https://quickchart.io/qr?size=320&margin=2&ecLevel=H&text=${encodeURIComponent(BIZ_INFO.siteUrl)}&dark=d4af37&light=0a192f00`;

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${BIZ_INFO.name}\nORG:Elite Bureau\nEMAIL:${BIZ_INFO.email}\nTEL:${BIZ_INFO.phone}\nURL:${BIZ_INFO.siteUrl}\nTITLE:Professional Signing Agent\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'North_MS_Notary_Bureau.vcf';
    a.click();
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    cardRef.current.style.transform = flipped 
      ? `rotateY(180deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
      : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = flipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
  };

  return (
    <div className="flex flex-col items-center">
      {/* HERO SECTION / DIGITAL CARD */}
      <section id="home" className="w-full max-w-7xl px-6 flex flex-col items-center justify-center py-20">
        <header className="mb-10 text-center max-w-sm">
          <h1 className="sr-only">Mobile Notary North Mississippi - Oxford, Tillatoba, Grenada, Batesville</h1>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5">
              <Icons.ShieldCheck className="text-[#d4af37]" size={18} />
              <span className="text-[10px] tracking-[0.5em] text-[#d4af37] uppercase font-sans font-bold">Elite Verified Node</span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-sans">Mississippi Professional Bureau</p>
          </div>
        </header>

        <div className="w-full max-w-md perspective-1200 animate-float">
          <article
            ref={cardRef}
            onClick={() => setFlipped(!flipped)}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            className="relative aspect-[1.586/1] w-full cursor-pointer transition-transform duration-1000 ease-out"
            style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            {/* FRONT */}
            <section className="absolute inset-0 glass-card rounded-2xl p-6 sm:p-10 flex flex-col justify-between backface-hidden gold-border-glow overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Icons.Globe size={120} className="text-[#d4af37]" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.6em] font-sans font-bold" style={{ fontFamily: 'Cinzel' }}>Bureau Node</p>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/50 font-sans tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    Active 24/7
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-6xl italic text-[#d4af37] glow-gold leading-none" style={{ fontFamily: 'Pinyon Script' }}>
                    North MS
                  </p>
                  <h2 className="text-4xl uppercase tracking-[0.2em] mt-2 text-white font-bold" style={{ fontFamily: 'Cinzel' }}>
                    Notary
                  </h2>
                </div>

                <div className="mt-8 flex items-start gap-3">
                   <div className="p-2 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20">
                      <Icons.MapPin size={18} className="text-[#d4af37]" />
                   </div>
                   <div className="space-y-1 text-left">
                      <p className="text-[12px] uppercase tracking-widest text-white/90 font-sans font-bold">Dispatch Center: Tillatoba</p>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-sans leading-relaxed">
                        Oxford • Grenada • Batesville • Charleston
                      </p>
                   </div>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-[#d4af37]/20 pt-6">
                <div className="space-y-1 text-left">
                  <h3 className="text-[9px] text-[#d4af37]/70 uppercase tracking-[0.4em] font-sans font-bold">Authorized Dispatch</h3>
                  <p className="text-lg text-white font-sans font-semibold tracking-widest">{BIZ_INFO.phone}</p>
                </div>
                <div className="text-right">
                   <div className="flex items-center justify-end gap-2 mb-1.5">
                      <Icons.Award size={14} className="text-[#d4af37]" />
                      <span className="text-[9px] text-white/60 uppercase font-sans tracking-widest">Commissioned MS</span>
                   </div>
                   <p className="text-[10px] text-white/30 font-sans tracking-[0.2em] uppercase font-bold tracking-tighter">Ref: 601-DISPATCH</p>
                </div>
              </div>
            </section>

            {/* BACK */}
            <section 
              className="absolute inset-0 glass-card rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-between backface-hidden gold-border-glow"
              style={{ transform: 'rotateY(180deg)' }}
            >
              <div className="w-full flex justify-between items-start gap-6 mb-2">
                <div className="text-left space-y-2 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icons.Briefcase size={14} className="text-[#d4af37]" />
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-sans font-bold">Service Nodes</h4>
                  </div>
                  <ul className="grid grid-cols-1 gap-y-1.5">
                    {SERVICE_MATRIX.map((s, i) => (
                      <li key={i} className="text-[9.5px] text-white/80 font-sans tracking-wide flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span>
                        {s.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative p-2 bg-white/5 rounded-xl border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors">
                  <img src={qrUrl} alt="Secure QR Access Node" className="w-24 h-24 opacity-95 rounded-lg" />
                  <div className="absolute -bottom-1 -right-1 bg-[#d4af37] p-1 rounded-md shadow-lg">
                    <Icons.Shield size={10} className="text-[#030816]" />
                  </div>
                </div>
              </div>

              <nav className="grid grid-cols-5 gap-4 w-full px-4 text-[#d4af37] mb-2">
                <button title="Email Bureau" onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(BIZ_INFO.email); setCopied(true); setTimeout(()=>setCopied(false), 2000); }} className="group flex flex-col items-center gap-2 hover:scale-110 transition-all">
                  <div className="p-3 rounded-xl bg-white/5 border border-[#d4af37]/20 group-hover:border-[#d4af37]/60">
                    {copied ? <Icons.Check size={22} className="text-green-400" /> : <Icons.Mail size={22} />}
                  </div>
                  <span className="text-[8px] uppercase tracking-widest opacity-40">Email</span>
                </button>
                <a href={`tel:${BIZ_INFO.phone}`} onClick={e => e.stopPropagation()} className="group flex flex-col items-center gap-2 hover:scale-110 transition-all">
                  <div className="p-3 rounded-xl bg-white/5 border border-[#d4af37]/20 group-hover:border-[#d4af37]/60">
                    <Icons.Phone size={22} />
                  </div>
                  <span className="text-[8px] uppercase tracking-widest opacity-40">Call</span>
                </a>
                <a href={`sms:${BIZ_INFO.phone}`} onClick={e => e.stopPropagation()} className="group flex flex-col items-center gap-2 hover:scale-110 transition-all">
                  <div className="p-3 rounded-xl bg-white/5 border border-[#d4af37]/20 group-hover:border-[#d4af37]/60">
                    <Icons.MessageCircle size={22} />
                  </div>
                  <span className="text-[8px] uppercase tracking-widest opacity-40">Text</span>
                </a>
                <button onClick={e => { e.stopPropagation(); window.open(BIZ_INFO.siteUrl, '_blank'); }} className="group flex flex-col items-center gap-2 hover:scale-110 transition-all">
                  <div className="p-3 rounded-xl bg-white/5 border border-[#d4af37]/20 group-hover:border-[#d4af37]/60">
                    <Icons.ExternalLink size={22} />
                  </div>
                  <span className="text-[8px] uppercase tracking-widest opacity-40">Web</span>
                </button>
                <button onClick={e => { e.stopPropagation(); navigator.share({url: BIZ_INFO.siteUrl}); }} className="group flex flex-col items-center gap-2 hover:scale-110 transition-all">
                  <div className="p-3 rounded-xl bg-white/5 border border-[#d4af37]/20 group-hover:border-[#d4af37]/60">
                    <Icons.Share2 size={22} />
                  </div>
                  <span className="text-[8px] uppercase tracking-widest opacity-40">Share</span>
                </button>
              </nav>

              <footer className="text-center w-full border-t border-white/10 pt-7 pb-6 flex flex-col items-center justify-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] font-sans font-bold mb-2">Serving Her People & Prosperity</p>
                <div className="flex items-center gap-2">
                   <Icons.Award size={12} className="text-[#d4af37]/50" />
                   <span className="text-[8px] text-white/30 tracking-[0.4em] uppercase font-sans font-black">Authorized Mobile Logistics</span>
                </div>
              </footer>
            </section>
          </article>
        </div>

        <div className="w-full max-w-md mt-16 space-y-4">
          <button 
            onClick={downloadVCard}
            className="w-full group relative flex items-center justify-center gap-4 py-5 border border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-700 rounded-xl bg-[#d4af37]/5 overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Icons.Download size={20} className="text-[#d4af37] group-hover:-translate-y-1 transition-transform" />
            <span className="text-[12px] uppercase tracking-[0.5em] text-[#d4af37] font-sans font-bold">Download Contact Artifact</span>
          </button>
          
          <a 
            href="https://faq.northmsnotary.com"
            className="flex items-center justify-center gap-2 py-4 text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-[#d4af37] transition-colors font-sans font-bold"
          >
            <Icons.BookOpen size={14} /> 
            Explore Bureau Knowledge Vault
          </a>
        </div>
      </section>

      {/* SERVICES EXPANDED SECTION */}
      <section id="services" className="w-full max-w-7xl px-6 py-32 border-t border-white/5">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-cinzel font-black text-white mb-6 uppercase tracking-tight">
            Bureau <span className="text-[#d4af37]">Service Portfolio</span>
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed font-light">
            Mississippi's most advanced mobile logistics deployment unit. We specialize in high-stakes document witnessing, precision loan closings, and international certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_MATRIX.map((service, idx) => (
            <div key={idx} className="glass-card p-10 rounded-3xl border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 group">
              <div className="w-14 h-14 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#d4af37] group-hover:text-[#0a192f] transition-all">
                {idx === 0 && <Icons.FileSearch size={28} />}
                {idx === 1 && <Icons.MapPin size={28} />}
                {idx === 2 && <Icons.Activity size={28} />}
                {idx === 3 && <Icons.Shield size={28} />}
                {idx === 4 && <Icons.Globe size={28} />}
                {idx === 5 && <Icons.Users size={28} />}
              </div>
              <h3 className="text-2xl font-cinzel font-bold text-white mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-gray-400 font-light mb-8 text-sm leading-relaxed">{service.longDesc}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] mb-3">Operational Use Cases</h4>
                  <ul className="space-y-2">
                    {service.useCases.map((uc, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-[#d4af37] rounded-full shrink-0"></span>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] mb-3">Client Benefits</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-[10px] font-bold text-white/80 uppercase tracking-widest flex items-center gap-2">
                        <Icons.Check size={12} className="text-[#d4af37]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGIONAL NETWORK / GEO INDEX */}
      <section id="network" className="w-full max-w-7xl px-6 py-32 border-t border-white/5">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-cinzel font-black text-white mb-6 uppercase tracking-tight">
              Regional <span className="text-[#d4af37]">Jurisdiction</span>
            </h2>
            <p className="max-w-xl text-gray-400 text-lg leading-relaxed font-light">
              Our Bureau maintains active logistics nodes across 5 strategic counties. From the Oxford University district to the Grenada medical hub, we serve 62+ unique communities.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="p-6 glass-card rounded-3xl text-center min-w-[140px]">
                <p className="text-3xl font-cinzel font-black text-[#d4af37]">05</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Counties</p>
             </div>
             <div className="p-6 glass-card rounded-3xl text-center min-w-[140px]">
                <p className="text-3xl font-cinzel font-black text-[#d4af37]">62</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Communities</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {MASTER_COUNTY_LIST.map((data) => (
            <div key={data.county} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#d4af37]/20 pb-4">
                <Icons.Activity size={20} className="text-[#d4af37]" />
                <h5 className="text-xl text-white font-cinzel font-black uppercase tracking-[0.2em]">{data.county} County</h5>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-black text-[#d4af37]/60 uppercase tracking-widest text-[9px] mb-3">Strategic Hubs & Logistics Centers</p>
                  <div className="flex flex-wrap gap-2">
                    {data.hubs.map((hub, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-widest">
                        {hub.name} <span className="text-[#d4af37] ml-1">{hub.zip}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-black text-[#d4af37]/60 uppercase tracking-widest text-[9px] mb-3">Serviceable Local Communities</p>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed uppercase tracking-wider">
                    {data.communities.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function KnowledgePage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  return (
    <section id="knowledge" className="w-full max-w-7xl mx-auto px-6 py-20 min-h-screen">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-cinzel font-black text-white mb-6 uppercase tracking-tight">
          Bureau <span className="text-[#d4af37]">Knowledge Vault</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-relaxed font-light italic">
          Mississippi's Premier Educational Repository for Notarial Protocols, International Authentication, and Loan Signing Standards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {KNOWLEDGE_BASE.map((unit, uIdx) => (
          <div key={uIdx} className="space-y-8">
            <div className="flex items-center gap-4 border-b border-[#d4af37]/30 pb-6">
              <div className="p-3 bg-[#d4af37]/10 rounded-xl text-[#d4af37]">
                {unit.category === "Notary Fundamentals" && <Icons.BookOpen size={24} />}
                {unit.category === "Loan Signing Specialty" && <Icons.Briefcase size={24} />}
                {unit.category === "International & Apostille" && <Icons.Globe size={24} />}
              </div>
              <h3 className="text-xl font-cinzel font-black text-white uppercase tracking-widest">{unit.category}</h3>
            </div>
            
            <div className="space-y-4">
              {unit.faqs.map((faq, fIdx) => {
                const id = `${uIdx}-${fIdx}`;
                const isOpen = activeFaq === id;
                return (
                  <div key={id} className={`glass-card rounded-2xl border-white/5 overflow-hidden transition-all duration-500 ${isOpen ? 'ring-1 ring-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : ''}`}>
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : id)}
                      className="w-full text-left p-6 flex justify-between items-center group gap-4"
                    >
                      <span className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${isOpen ? 'text-[#d4af37]' : 'text-white/80 group-hover:text-white'}`}>{faq.q}</span>
                      <div className={`transition-transform duration-500 shrink-0 ${isOpen ? 'rotate-180 text-[#d4af37]' : 'text-gray-600'}`}>
                        <Icons.HelpCircle size={18} />
                      </div>
                    </button>
                    <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                      <p className="text-[13px] text-gray-400 leading-relaxed font-light border-t border-white/5 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-32 p-10 glass-card rounded-3xl text-center border-[#d4af37]/20">
         <Icons.Scale className="mx-auto text-[#d4af37] mb-6" size={48} />
         <h4 className="text-2xl font-cinzel font-black uppercase text-white mb-4">Official Disclaimer</h4>
         <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed italic">
            The North Mississippi Notary Bureau provides educational information for public benefit. We are not attorneys and do not provide legal advice. All document interpretations should be reviewed by licensed legal counsel. We serve strictly as impartial commissioned witnesses for the State of Mississippi.
         </p>
      </div>
    </section>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isKnowledgeBase = currentView.startsWith('#knowledge') || currentView.startsWith('#faq');

  return (
    <Layout>
      <div className="min-h-screen bureau-bg grain-overlay selection:bg-[#d4af37]/30 overflow-x-hidden pt-20">
        <style>{styles}</style>
        
        {isKnowledgeBase ? <KnowledgePage /> : <HomePage />}

        {/* FOOTER STRATEGIC INDEX (Persistent for SEO) */}
        <footer className="w-full bg-[#030816] py-32 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 text-center opacity-40 hover:opacity-100 transition-opacity duration-1000">
            <div className="space-y-12">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 italic font-semibold text-[10px] uppercase tracking-[0.2em] text-gray-500">
                {["Oxford Notary 38655", "Tillatoba MS 38961", "Grenada Signing Agent 38901", "Batesville Closings 38606", 
                  "Charleston MS Notary 38921", "Water Valley Dispatch 38965", "Coffeeville Mobile 38922", "Apostille Mississippi", 
                  "Hospital Oxford MS 38655", "Nursing Home Yalobusha 38965", "Emergency Panola Notary 38606", "I-9 Oxford Agent 38655",
                  "Harmontown MS Notary 38619", "Sardis Lake Mobile Agent 38666", "Enid Dam Witness 38927", "Courtland MS Signing 38620",
                  "Tutwiler Notary 38963", "Webb MS Notary 38966"].map((term) => (
                  <span key={term} className="hover:text-[#d4af37] transition-colors">{term}</span>
                ))}
              </div>

              <div className="flex flex-col items-center gap-6 pt-12 border-t border-white/5">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[11px] text-[#d4af37] tracking-[0.5em] font-black uppercase">
                  <span className="flex items-center gap-3"><Icons.Star size={14} fill="#d4af37" /> Tier-1 Rating</span>
                  <span className="flex items-center gap-3"><Icons.UserCheck size={14} /> Verified Agent</span>
                  <span className="flex items-center gap-3"><Icons.Shield size={14} /> Bonded/Insured</span>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] opacity-50 uppercase tracking-[0.5em] font-bold px-4">
                    Encrypted Node Transmission • Licensed Commission MS SOS • Active 24/7/365
                  </p>
                  <p className="text-[9px] opacity-30 font-sans italic">
                    Authorized Logistics & Notary Bureau for the Sovereign State of Mississippi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
