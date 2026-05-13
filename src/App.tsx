/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BarChart3, 
  Globe, 
  Search, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Menu,
  X
} from "lucide-react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// --- Components ---

const ImageMarquee = ({ direction = "left", speed = 20, images }: { direction?: "left" | "right", speed?: number, images: string[] }) => {
  return (
    <div className="overflow-hidden flex bg-zinc-900 py-10 border-y border-zinc-800">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-10"
      >
        {/* Double the images for seamless loop */}
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-80 h-48 bg-zinc-800 overflow-hidden relative group">
            <img 
              src={img} 
              alt={`Work ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay invisible group-hover:visible transition-all" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-black uppercase tracking-[0.2em] flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-sm" />
          <span className="text-zinc-100">ConnexerDigi</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-zinc-500 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="px-8 py-3 bg-white text-black hover:bg-blue-600 hover:text-white transition-all">
            Get Growth
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const marqueeImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2671&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
  ];

  return (
    <section className="relative min-h-screen flex flex-col pt-32 overflow-hidden bg-zinc-950">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10 -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-20">
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[12vw] md:text-[min(14rem,15vw)] font-black leading-[0.8] tracking-tighter uppercase block text-zinc-100 drop-shadow-2xl">
              Connexer
            </span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-4 gap-8">
              <span className="text-[10vw] md:text-[min(8rem,10vw)] font-black leading-[0.8] tracking-tighter text-blue-600 uppercase block drop-shadow-lg">
                Digital
              </span>
              <div className="max-w-xs">
                <p className="text-zinc-400 text-sm leading-relaxed pb-4 uppercase tracking-widest font-medium">
                  We accelerate brand growth through data-driven performance marketing and high-impact creative strategies for the next generation of digital giants.
                </p>
                <div className="flex gap-4">
                   <div className="w-12 h-px bg-blue-600 mt-2" />
                   <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em]">Scroll to Explore Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-20 flex flex-col sm:flex-row gap-px bg-zinc-800 border-y border-zinc-800 relative z-20">
             <div className="flex-1 py-12">
                <p className="text-4xl md:text-6xl font-black text-zinc-100 tracking-tighter">700+</p>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-2">Projects Delivered</p>
             </div>
             <div className="flex-1 py-12 md:px-8 border-l border-zinc-800">
                <p className="text-4xl md:text-6xl font-black text-zinc-100 tracking-tighter">99.8%</p>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-2">Client Success</p>
             </div>
             <div className="flex-1 flex flex-col sm:flex-row md:contents">
                <div className="flex-1 py-12 md:px-8 border-l border-zinc-800">
                    <p className="text-4xl md:text-6xl font-black text-zinc-100 tracking-tighter">320%</p>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-2">Avg. Revenue Growth</p>
                </div>
                <div className="flex flex-col bg-zinc-800 gap-px border-l border-zinc-800">
                    <button className="bg-white text-black p-12 flex items-center justify-center group cursor-pointer hover:bg-blue-600 hover:text-white transition-all w-full">
                        <span className="font-black uppercase tracking-[0.2em] text-sm">Scale Your Brand</span>
                        <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <a href="#portfolio" className="bg-zinc-900 text-zinc-400 p-6 flex items-center justify-center group hover:bg-zinc-800 hover:text-white transition-all w-full border-t border-zinc-800">
                        <span className="font-black uppercase tracking-[0.3em] text-[10px]">View Our Work</span>
                    </a>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Infinite Scrolling Section in Hero */}
      <ImageMarquee images={marqueeImages} speed={30} />
      <ImageMarquee images={marqueeImages.reverse()} direction="right" speed={35} />
    </section>
  );
};

const Services = () => {
  const list = [
    {
      title: "Search Optimization",
      desc: "Dominating SERPs through precision SEO and strategic keyword engineering.",
    },
    {
      title: "Performance Ads",
      desc: "High-conversion PPC and Social Media Advertising with measurable ROI.",
    },
    {
      title: "Content Engine",
      desc: "Story-driven content marketing that builds community and brand authority.",
    },
    {
      title: "Social Strategy",
      desc: "Full-funnel social management from viral creative to analytics reporting.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 mt-16 border-x border-zinc-800">
          {list.map((item, idx) => (
            <div key={idx} className="bg-zinc-950 py-16 px-8 group hover:bg-zinc-900 transition-colors">
              <span className="text-blue-600 font-mono text-xs mb-8 block font-bold uppercase tracking-widest">0{idx + 1}/</span>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter text-zinc-100 italic">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const showcased = [
    { name: "Damro Group", val: "+25% Growth", img: "https://images.unsplash.com/photo-1556761175-59733973f446?q=80&w=2670&auto=format&fit=crop" },
    { name: "Third Wave", val: "4514% Clicks", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop" },
    { name: "MyMuse", val: "1st Page Rank", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2670&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-100 leading-[0.9] uppercase italic">
            Visual <br /> Archive.
          </h2>
          <button className="px-10 py-5 border-2 border-zinc-800 text-zinc-100 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black hover:border-white transition-all">
            See All Impact
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {showcased.map((p, i) => (
            <div key={i} className="group relative overflow-hidden bg-zinc-950 aspect-[4/5]">
               <img 
                 src={p.img} 
                 alt={p.name} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-80"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-blue-500 font-mono text-xs mb-2 block uppercase font-bold tracking-widest">{p.val}</span>
                  <h3 className="text-3xl font-black tracking-tighter italic text-zinc-100 uppercase">{p.name}</h3>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-600/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.4em] mb-8">Initiate Connection</h2>
            <p className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12">
              Let's craft <br /> your <span className="text-blue-500 italic">legacy</span>.
            </p>
            
            <div className="space-y-12">
               <div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Hyderabad HQ</p>
                  <p className="text-2xl font-bold">Banjara Hills, Road #12, <br /> Hyderabad, TS 500034</p>
               </div>
               <div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Direct Channel</p>
                  <p className="text-2xl font-bold">growth@connexerdigi.com <br /> +91 78271 13855</p>
               </div>
               
               <div className="flex gap-6">
                 {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="p-4 rounded-2xl bg-white/5 hover:bg-blue-600 transition-all">
                     <Icon className="w-5 h-5 text-white" />
                   </a>
                 ))}
               </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
             <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-500">Full Presence</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border-b border-white/20 py-4 outline-none focus:border-blue-500 transition-all font-bold text-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-500">Digital ID</label>
                    <input type="email" placeholder="email@company.com" className="w-full bg-white/5 border-b border-white/20 py-4 outline-none focus:border-blue-500 transition-all font-bold text-xl" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-500">Project Type</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-blue-500 transition-all font-bold text-xl">
                    <option className="bg-gray-900">Performance Marketing</option>
                    <option className="bg-gray-900">High-End Web Dev</option>
                    <option className="bg-gray-900">Search Ecosystem</option>
                    <option className="bg-gray-900">Brand Social Identity</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-500">Mission Brief</label>
                  <textarea rows={4} placeholder="Describe your growth goals..." className="w-full bg-white/5 border-b border-white/20 py-4 outline-none focus:border-blue-500 transition-all font-bold text-xl resize-none" />
                </div>

                <button className="w-full py-6 bg-white text-gray-900 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                  Engage Now <Zap className="w-6 h-6 fill-current" />
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-12">
            <div className="text-3xl font-black tracking-tighter flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="text-white w-6 h-6 fill-current" />
              </div>
              Connexer<span className="text-blue-600">Digi</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mb-12 uppercase tracking-widest font-black">
            The Digital Growth partner for the fearless.
          </p>
          <div className="flex justify-center gap-10 text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mb-12">
             <a href="#" className="hover:text-blue-500 transition-all">Privacy</a>
             <a href="#" className="hover:text-blue-500 transition-all">Terms</a>
             <a href="#" className="hover:text-blue-500 transition-all">Cookies</a>
          </div>
          <div className="h-px bg-white/5 mb-12" />
          <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.2em]">
            © 2026 ConnexerDigi Collective. All Systems Operational.
          </p>
       </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App ---
import { useLocation } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="selection:bg-blue-600 selection:text-white font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <section className="bg-zinc-900 py-12 border-y border-zinc-800">
                  <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 text-zinc-100">
                    <span className="text-2xl font-black tracking-tighter">DAMRO</span>
                    <span className="text-2xl font-black tracking-tighter italic">KRISPY KREME</span>
                    <span className="text-2xl font-black tracking-tighter underline underline-offset-8">MYMUSE</span>
                    <span className="text-2xl font-black tracking-tighter bg-white text-black px-3">INVESCO</span>
                    <span className="text-2xl font-black tracking-tighter italic text-blue-600">THIRD WAVE</span>
                  </div>
                </section>
                <Services />
                <Projects />

                {/* Team Section */}
                <section className="py-32 bg-zinc-950 border-t border-zinc-900">
                  <div className="max-w-7xl mx-auto px-6">
                     <div className="mb-20 text-center">
                        <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.5em] mb-4">Mind Collective</h2>
                        <p className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-100 uppercase italic">The Strategists.</p>
                     </div>
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                          { name: "Ankur Sharma", role: "Growth Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" },
                          { name: "Shekhar Suman", role: "Creative Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
                          { name: "Priya Rao", role: "UX Architect", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop" },
                          { name: "Vikram Shah", role: "Ads Specialist", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" }
                        ].map((m, i) => (
                          <div key={i} className="group flex flex-col items-center">
                             <div className="w-full aspect-[3/4] bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden relative">
                                <img 
                                  src={m.img} 
                                  alt={m.name} 
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <h4 className="text-xl font-black tracking-tighter text-zinc-100 uppercase italic opacity-80 group-hover:opacity-100 transition-opacity">{m.name}</h4>
                             <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-2">{m.role}</p>
                          </div>
                        ))}
                     </div>
                  </div>
                </section>
                
                {/* Values Section */}
                <section className="py-32 bg-zinc-950 border-t border-zinc-900">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-24">
                      <div className="lg:col-span-1 text-left">
                        <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6">Our Core</h2>
                        <h3 className="text-7xl font-black tracking-tighter text-zinc-100 leading-[0.8] mb-8 italic">
                          Total <br /> Focus.
                        </h3>
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs leading-relaxed">
                          We operate as an extension of your team, obsessed with results and unyielding in our pursuit of creative excellence.
                        </p>
                      </div>
                      <div className="lg:col-span-2 grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
                        <div className="p-16 bg-zinc-950 group hover:bg-blue-600 transition-all">
                           <Zap className="w-12 h-12 text-blue-600 mb-10 group-hover:text-white" />
                           <h4 className="text-2xl font-black mb-4 tracking-tighter text-zinc-100 group-hover:italic">Momentum</h4>
                           <p className="text-sm text-zinc-500 leading-relaxed font-medium group-hover:text-zinc-100">
                             Agile pods designed to ship in days, not months. We value speed over bureaucratic drag.
                           </p>
                        </div>
                        <div className="p-16 bg-zinc-950 group hover:bg-blue-600 transition-all border-l border-zinc-800">
                           <CheckCircle2 className="w-12 h-12 text-blue-600 mb-10 group-hover:text-white" />
                           <h4 className="text-2xl font-black mb-4 tracking-tighter text-zinc-100 group-hover:italic">Truth</h4>
                           <p className="text-sm text-zinc-500 leading-relaxed font-medium group-hover:text-zinc-100">
                             No vanity stats. Real-time dashboards and honest assessments of what actually drives ROI.
                           </p>
                        </div>
                        <div className="p-16 bg-zinc-950 group hover:bg-blue-600 transition-all border-t border-zinc-800">
                           <Users className="w-12 h-12 text-blue-600 mb-10 group-hover:text-white" />
                           <h4 className="text-2xl font-black mb-4 tracking-tighter text-zinc-100 group-hover:italic">Unity</h4>
                           <p className="text-sm text-zinc-500 leading-relaxed font-medium group-hover:text-zinc-100">
                             Cultural and operational alignment with your vision is our absolute priority.
                           </p>
                        </div>
                        <div className="p-16 bg-zinc-950 group hover:bg-blue-600 transition-all border-t border-l border-zinc-800">
                           <TrendingUp className="w-12 h-12 text-blue-600 mb-10 group-hover:text-white" />
                           <h4 className="text-2xl font-black mb-4 tracking-tighter text-zinc-100 group-hover:italic">ROI</h4>
                           <p className="text-sm text-zinc-500 leading-relaxed font-medium group-hover:text-zinc-100">
                             Every pixel has a purpose. If it doesn't move the needle, it gets deleted.
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* About Section Snippet */}
                <section id="about" className="py-40 bg-zinc-950 border-t border-zinc-900">
                   <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
                     <div className="relative">
                        <div className="aspect-square bg-zinc-900 border border-zinc-800 p-20 flex items-center justify-center">
                           <span className="text-[20vw] lg:text-[20rem] font-black text-blue-600/5 select-none absolute">CX</span>
                           <motion.div 
                             whileHover={{ scale: 1.05, rotate: 2 }}
                             className="w-full aspect-square bg-white text-black p-16 flex flex-col justify-between shadow-[40px_40px_0px_0px_rgba(37,99,235,1)]"
                           >
                              <Zap className="w-16 h-16 fill-current" />
                              <div>
                                <p className="text-[8vw] lg:text-[6rem] font-black tracking-tighter leading-none italic uppercase underline decoration-blue-600 underline-offset-8">Impact</p>
                              </div>
                           </motion.div>
                        </div>
                     </div>
                     <div>
                        <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.6em] mb-12">The Connexer Way</h2>
                        <h3 className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-zinc-100 leading-[0.85] mb-12 italic uppercase">
                          Our oxygen <br /> is <span className="text-blue-600">performance.</span>
                        </h3>
                        <p className="text-lg text-zinc-400 font-bold leading-relaxed mb-16 uppercase tracking-widest max-w-lg">
                          Founded on the principle that digital marketing should be as measurable as it is creative, ConnexerDigi focuses on meaningful connections.
                        </p>
                        <div className="grid grid-cols-2 gap-12 bg-zinc-900 p-12 border border-zinc-800">
                           <div className="space-y-4">
                              <p className="text-5xl font-black text-zinc-100 tracking-tighter">9/10</p>
                              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Global Ranking</p>
                           </div>
                           <div className="space-y-4">
                              <p className="text-5xl font-black text-zinc-100 tracking-tighter">$100M+</p>
                              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Revenue Generated</p>
                           </div>
                        </div>
                     </div>
                   </div>
                </section>

                {/* Gallery Section */}
                <section className="py-32 bg-zinc-900 border-y border-zinc-800">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 overflow-hidden">
                       {[
                         "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
                         "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
                         "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
                         "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2671&auto=format&fit=crop",
                         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
                         "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop",
                         "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
                         "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2670&auto=format&fit=crop"
                       ].map((url, i) => (
                         <motion.div 
                           key={i}
                           whileHover={{ scale: 1.05 }}
                           className="aspect-square bg-zinc-950 overflow-hidden relative group"
                         >
                            <img 
                              src={url} 
                              alt={`Gallery ${i}`} 
                              className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" 
                              referrerPolicy="no-referrer"
                            />
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </section>

                <Contact />
              </>
            } />
            <Route path="/services" element={
               <div className="pt-32 min-h-screen bg-zinc-950">
                  <div className="max-w-7xl mx-auto px-6 py-20">
                     <div className="relative h-96 w-full mb-20 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop" 
                          className="w-full h-full object-cover grayscale opacity-30" 
                          alt="Services Header"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <h1 className="text-8xl md:text-[10rem] font-black text-zinc-100 uppercase italic tracking-tighter drop-shadow-2xl">Capabilities.</h1>
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                        <div className="h-80 bg-zinc-900 border border-zinc-800 overflow-hidden transition-all hover:border-blue-600">
                           <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                        </div>
                        <div className="h-80 bg-zinc-900 border border-zinc-800 overflow-hidden transition-all hover:border-blue-600">
                           <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                        </div>
                     </div>

                     <Services />
                     <div className="mt-20 p-20 bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />
                        <h2 className="text-4xl font-black text-white mb-10 uppercase italic">Detailed Capabilities</h2>
                        <ul className="grid md:grid-cols-2 gap-x-20 gap-y-10 text-zinc-400 font-bold uppercase tracking-widest text-sm relative z-10">
                           <li>• Advanced SEO Audits</li>
                           <li>• Technical SEO Infrastructure</li>
                           <li>• High-ROAS Performance Marketing</li>
                           <li>• Meta Ads & Creative Strategy</li>
                           <li>• Social Media Viral Engineering</li>
                           <li>• Premium Web & Mobile Applications</li>
                           <li>• Data Analytics & BI Dashboards</li>
                           <li>• Brand Identity & Logo Design</li>
                        </ul>
                     </div>
                  </div>
                  <Contact />
               </div>
            } />
            <Route path="/portfolio" element={
               <div className="pt-32 min-h-screen bg-zinc-950">
                  <div className="max-w-7xl mx-auto px-6 py-20">
                     <div className="mb-20 text-center">
                        <h1 className="text-8xl md:text-[12rem] font-black text-zinc-100 uppercase italic tracking-tighter leading-none mb-4">Archive.</h1>
                        <p className="text-blue-600 font-black uppercase tracking-[0.5em] text-sm">Visual Impact Registry</p>
                     </div>
                     
                     <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="aspect-video bg-zinc-900 overflow-hidden group border border-zinc-800">
                           <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2671&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60" referrerPolicy="no-referrer" />
                        </div>
                        <div className="aspect-video bg-zinc-900 overflow-hidden group border border-zinc-800">
                           <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60" referrerPolicy="no-referrer" />
                        </div>
                     </div>

                     <Projects />
                     
                     <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {[
                           "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2670&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                        ].map((url, i) => (
                           <div key={i} className="aspect-square bg-zinc-900 overflow-hidden">
                              <img src={url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100" referrerPolicy="no-referrer" />
                           </div>
                        ))}
                     </div>
                  </div>
                  <Contact />
               </div>
            } />
            <Route path="/about" element={
               <div className="pt-32 min-h-screen bg-zinc-950">
                  <div className="max-w-7xl mx-auto px-6 py-20">
                     <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                        <h1 className="text-8xl md:text-[10rem] font-black text-zinc-100 uppercase italic tracking-tighter leading-[0.8]">The <br /> Collective.</h1>
                        <div className="w-full md:w-1/3 aspect-[4/3] border border-zinc-800 overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1556761175-59733973f446?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" referrerPolicy="no-referrer" />
                        </div>
                     </div>

                     <div className="grid lg:grid-cols-2 gap-20 mb-32">
                        <div className="aspect-[4/5] bg-zinc-900 border border-zinc-800 overflow-hidden relative group">
                           <img 
                             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                             className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000"
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                        </div>
                        <div className="flex flex-col justify-center">
                           <p className="text-4xl font-black text-zinc-100 uppercase italic mb-10 leading-none">Growth over <br /> Vanity.</p>
                           <p className="text-xl text-zinc-500 font-medium leading-relaxed mb-10">Founded on the principle that digital marketing should be as measurable as it is creative, ConnexerDigi focuses on meaningful connections. We combine high-end creative with brutal data integrity.</p>
                           <div className="p-10 bg-blue-600 text-white font-black uppercase italic text-2xl tracking-tighter shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]">
                              "The best way to predict your brand's future is to engineer it."
                           </div>
                           
                           <div className="mt-16 grid grid-cols-3 gap-4">
                              <div className="h-32 bg-zinc-900 overflow-hidden border border-zinc-800">
                                 <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                              </div>
                              <div className="h-32 bg-zinc-900 overflow-hidden border border-zinc-800">
                                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                              </div>
                              <div className="h-32 bg-zinc-900 overflow-hidden border border-zinc-800">
                                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <Contact />
               </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
