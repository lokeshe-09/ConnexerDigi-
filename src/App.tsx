/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/60 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Zap className="w-6 h-6 text-white fill-current" />
          </div>
          <span className="text-slate-900 font-display">Connexer<span className="text-blue-600 font-black">Digi</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
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
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-4 bg-blue-600 text-white text-center rounded-full font-bold text-lg"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const marqueeImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2671&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % marqueeImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [marqueeImages.length]);

  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-slate-50">
      {/* Dynamic Background Scrolling Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.5] rotate-[-12deg] scale-125 pointer-events-none">
        <div className="flex flex-col gap-8 h-full">
          <ImageMarquee images={marqueeImages} speed={25} />
          <ImageMarquee images={[...marqueeImages].reverse()} direction="right" speed={30} />
          <ImageMarquee images={marqueeImages} speed={20} />
          <ImageMarquee images={[...marqueeImages].reverse()} direction="right" speed={35} />
        </div>
      </div>

      {/* Subtle Background Image Fading Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIndex}
            src={marqueeImages[currentImageIndex]} 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Engineering Growth"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 -right-64 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[140px] -z-10 animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative glass p-12 md:p-16 rounded-[4rem] border-white/90 bg-white/90 shadow-2xl shadow-blue-900/10 overflow-hidden group"
          >
            {/* Background Image Layer inside Card */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
               <AnimatePresence mode="wait">
                 <motion.img 
                   key={currentImageIndex}
                   src={marqueeImages[currentImageIndex]} 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 0.25 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 1.5 }}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[20s] ease-linear"
                   alt="Collaboration Background"
                   referrerPolicy="no-referrer"
                 />
               </AnimatePresence>
               <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-blue-50/10" />
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
              We Don’t Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 decoration-blue-200 underline underline-offset-8">Market</span> Brands. <br />
              We Make Them <span className="italic">Impossible To Ignore.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">
              Performance-driven digital marketing for brands ready to scale faster, sell smarter, and dominate online. From viral campaigns to revenue-focused ad strategies — we turn attention into growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <a href="#contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-2xl shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group/btn">
                Scale My Brand <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <Link to="/portfolio" className="px-10 py-5 glass text-slate-900 rounded-2xl font-bold text-lg hover:bg-white transition-all text-center flex items-center justify-center shadow-lg border-white/50">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Visual Component */}
      <div className="mt-20 space-y-4 relative z-10">
        <ImageMarquee images={marqueeImages} speed={40} />
      </div>
    </section>
  );
};

const Services = () => {
  const list = [
    {
      title: "Performance Marketing",
      desc: "ROI-focused campaigns across Meta & Google designed to generate leads, sales, and scalable growth.",
      icon: TrendingUp
    },
    {
      title: "Social Media Management",
      desc: "Content that doesn’t just look good — it builds communities, trust, and brand authority.",
      icon: Users
    },
    {
      title: "Branding & Creative",
      desc: "Building memorable brand identities that people recognize, trust, and choose.",
      icon: Zap
    },
    {
      title: "Influencer Marketing",
      desc: "Strategic creator collaborations that increase reach, credibility, and conversions.",
      icon: Instagram
    },
    {
      title: "SEO & Growth",
      desc: "Helping your brand rank higher, get discovered faster, and stay ahead of competitors.",
      icon: Search
    },
    {
      title: "Scale Beyond Limits",
      desc: "Custom marketing engines engineered for businesses that want more than just traffic.",
      icon: Zap
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-2xl mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Growth Solutions Built For <span className="italic">Modern Brands.</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div key={idx} className="glass p-10 rounded-[2.5rem] border-white/50 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const showcased = [
    { name: "Damro Group", val: "+25% Conversion", img: "https://images.unsplash.com/photo-1556761175-59733973f446?q=80&w=2670&auto=format&fit=crop" },
    { name: "Third Wave", val: "451% Lead Growth", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop" },
    { name: "MyMuse", val: "Top 3 Rank Growth", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2670&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase italic">
              Selected <br /> Impact.
            </h3>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
            View All Work <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {showcased.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[3rem] glass p-3 border-white/50 hover:shadow-2xl hover:shadow-blue-600/10 transition-all">
               <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                 <img 
                   src={p.img} 
                   alt={p.name} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-90"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end h-1/2">
                    <span className="text-blue-400 font-bold text-xs mb-2 uppercase tracking-widest">{p.val}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{p.name}</h3>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const points = [
    "Data-driven advertising",
    "High-converting creatives",
    "Audience psychology",
    "Performance analytics",
    "Conversion optimization"
  ];

  return (
    <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 -skew-x-12 translate-x-1/2 opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Marketing Backed By <span className="text-blue-400">Strategy.</span> <br />
              Powered By Creativity.
            </h3>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Most agencies focus on reach. We focus on results. We create growth systems that combine psychology, technology, and creativity to turn every ad dollar into revenue.
            </p>
            
            <div className="space-y-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 glass flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="text-lg font-bold text-slate-100">{p}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass rounded-[3rem] overflow-hidden p-3">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[2.5rem] opacity-70 contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/50 border-white/10 backdrop-blur-2xl">
               <p className="text-4xl font-black tracking-tighter text-white">Growth isn’t luck.</p>
               <p className="text-xl font-bold italic text-blue-400 uppercase tracking-widest mt-2">It’s engineered.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Campaigns Executed", val: "1,200+" },
    { label: "Avg. Brand Growth", val: "320%" },
    { label: "Client Satisfaction", val: "99.8%" },
    { label: "Audience Reach", val: "85M+" }
  ];

  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-50/50 to-transparent -z-10" />
      <div className="container-custom">
        <div className="flex flex-col mb-16 text-center items-center">
           <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Numbers That Matter</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="relative mb-4">
                <p className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter italic transition-transform group-hover:scale-110 duration-500">{s.val}</p>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-100 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BoldSection = () => {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-[4rem] border-white/60 shadow-2xl shadow-blue-100/50"
          >
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-10">
              Your Competitors Are Already Online. <br />
              The Question Is — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 underline underline-offset-[12px] decoration-blue-200 italic">Are You Winning There?</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
              In today’s digital world, attention is currency. Brands that market better grow faster. We help businesses build visibility, authority, and predictable growth through powerful digital strategies.
            </p>
            <div className="flex justify-center">
               <div className="inline-flex p-1 px-4 bg-blue-600 text-white rounded-full items-center gap-4 text-sm font-black uppercase tracking-widest animate-pulse shadow-lg shadow-blue-600/30">
                  Growth Starts Here
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-indigo-200/40 rounded-full blur-[100px] -z-10" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-8">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-slate-900">
              Ready To Build A Brand People <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Remember?</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-12 font-medium">
              Whether you’re launching, scaling, or rebranding — ConnexerDigi helps you grow with strategies designed for long-term impact.
            </p>
            
            <div className="space-y-10">
               <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office</p>
                    <p className="text-lg font-bold text-slate-800">Road #12, Banjara Hills, Hyderabad</p>
                  </div>
               </div>
               <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg font-bold text-slate-800">growth@connexerdigi.com</p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                 {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 rounded-full glass border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-slate-600">
                     <Icon className="w-5 h-5" />
                   </a>
                 ))}
               </div>
            </div>
          </div>

          <div className="glass p-12 rounded-[3.5rem] shadow-2xl border-white/40">
             <h4 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Book A Free Consultation</h4>
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Your Name</label>
                    <input type="text" className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-semibold shadow-inner" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                    <input type="email" className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-semibold shadow-inner" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Interested In</label>
                  <select className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-semibold appearance-none shadow-inner">
                    <option>Performance Marketing</option>
                    <option>Social Media Management</option>
                    <option>Creative Strategy</option>
                    <option>Brand Growth Scale</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Message</label>
                  <textarea rows={4} className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-semibold resize-none shadow-inner" />
                </div>

                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98]">
                  Send Inquiry <ArrowRight className="w-5 h-5" />
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
    <footer className="bg-white border-t border-slate-100 py-20">
       <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-slate-900 font-display font-black">ConnexerDigi</span>
              </Link>
              <p className="text-slate-500 font-medium max-w-sm">
                Marketing That Drives Revenue. We engineer growth systems for businesses ready to dominate their market.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">Company</h5>
              <ul className="space-y-4 text-sm font-semibold text-slate-600 transition-all">
                <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link></li>
                <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6">Social</h5>
              <div className="flex gap-4">
                 {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
                     <Icon className="w-5 h-5" />
                   </a>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              © 2026 ConnexerDigi Collective. Engineering the future.
            </p>
            <div className="flex gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
               <a href="#" className="hover:text-blue-600 transition-all">Privacy Policy</a>
               <a href="#" className="hover:text-blue-600 transition-all">Terms of Service</a>
            </div>
          </div>
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
                <section className="bg-white py-16 border-y border-slate-100">
                  <div className="container-custom flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-opacity duration-700">
                    <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase">DAMRO</span>
                    <span className="text-3xl font-black tracking-tighter italic text-slate-900 border-x px-8 border-slate-200">KRISPY KREME</span>
                    <span className="text-3xl font-black tracking-tighter underline underline-offset-8 text-slate-900">MYMUSE</span>
                    <span className="text-3xl font-black tracking-tighter bg-slate-900 text-white px-4 py-1">INVESCO</span>
                    <span className="text-3xl font-black tracking-tighter italic text-blue-600">THIRD WAVE</span>
                  </div>
                </section>
                
                <section className="section-padding bg-white">
                  <div className="container-custom">
                    <div className="max-w-4xl">
                      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-8">Statement</h2>
                      <p className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                        At <span className="text-blue-600 italic">ConnexerDigi</span>, we blend strategy, creativity, and performance marketing to help brands grow in the digital-first world. <br />
                        <span className="opacity-40">No fluff. No vanity metrics. Just campaigns built to generate real business impact.</span>
                      </p>
                    </div>
                  </div>
                </section>

                <Services />
                <WhyChooseUs />
                <Projects />
                <Stats />
                <BoldSection />
                <Contact />
              </>
            } />
            <Route path="/services" element={
               <div className="pt-44 min-h-screen bg-white">
                  <div className="container-custom pb-20">
                     <div className="mb-20">
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-none mb-4">Growth <br /><span className="text-blue-600 italic">Capabilities.</span></h1>
                        <p className="text-xl text-slate-600 max-w-2xl font-medium">Growth solutions built for modern brands. We engineer systems that scale your reach and conversion simultaneously.</p>
                     </div>
                     <Services />
                     <div className="mt-20 p-16 glass rounded-[3rem] border-white/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full" />
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight uppercase">Detailed Capabilities Registry</h2>
                        <ul className="grid md:grid-cols-2 gap-10 text-slate-600 font-bold uppercase tracking-widest text-sm relative z-10">
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> Advanced SEO Audits</li>
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> Technical SEO Infrastructure</li>
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> High-ROAS Performance Marketing</li>
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> Meta Ads & Creative Strategy</li>
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> Social Media Viral Engineering</li>
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> Premium Web & Mobile Applications</li>
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> Data Analytics & BI Dashboards</li>
                           <li className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50" /> Brand Identity & Logo Design</li>
                        </ul>
                     </div>
                  </div>
                  <Contact />
               </div>
            } />
            <Route path="/portfolio" element={
               <div className="pt-44 min-h-screen bg-white">
                  <div className="container-custom pb-20">
                     <div className="mb-20 text-center">
                        <h1 className="text-7xl md:text-[10rem] font-black text-slate-900 tracking-tighter leading-none mb-4 uppercase italic">Archive.</h1>
                        <p className="text-blue-600 font-bold uppercase tracking-[0.5em] text-sm italic">Marketing That Drives Revenue</p>
                     </div>
                     <Projects />
                     <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                           "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2671&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
                           "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2574&auto=format&fit=crop"
                        ].map((url, i) => (
                           <div key={i} className="aspect-square glass rounded-3xl overflow-hidden border-white/50 p-2">
                              <img src={url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 rounded-2xl" referrerPolicy="no-referrer" />
                           </div>
                        ))}
                     </div>
                  </div>
                  <Contact />
               </div>
            } />
            <Route path="/about" element={
               <div className="pt-44 min-h-screen bg-white">
                  <div className="container-custom pb-20">
                     <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                        <h1 className="text-7xl md:text-[9rem] font-black text-slate-900 leading-[0.85] tracking-tighter uppercase italic">The <br /> Collective.</h1>
                        <div className="w-full md:w-1/3 aspect-video rounded-3xl bg-slate-100 border border-slate-100 overflow-hidden shadow-2xl">
                           <img src="https://images.unsplash.com/photo-1556761175-59733973f446?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                        </div>
                     </div>

                     <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="aspect-[4/5] bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden relative group">
                           <img 
                             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                             className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-1000"
                             referrerPolicy="no-referrer"
                           />
                        </div>
                        <div>
                           <p className="text-4xl font-black text-slate-900 mb-8 leading-tight italic uppercase tracking-tight">Growth Starts <span className="text-blue-600">Here.</span></p>
                           <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">At ConnexerDigi, we blend strategy, creativity, and performance marketing to help brands grow in the digital-first world. We combine high-end creative with brutal data integrity.</p>
                           <div className="p-10 bg-blue-600 text-white rounded-[2rem] font-black italic text-2xl tracking-tighter shadow-2xl shadow-blue-600/30">
                              "The best way to predict your brand's future is to engineer it."
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
