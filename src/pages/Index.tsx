import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import canvasPainting from '../assets/canvas-painting-3d.jpg';
import chineseObjects from '../assets/chinese-objects-overhead.jpg';
import retroMagazine from '../assets/retro-magazine-cover.jpg';
import shadowBoy from '../assets/shadow-boy.jpg';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Show quote when magazine cover is fully in view
      if (window.scrollY > 400) {
        setShowQuote(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const magazineTransform = Math.max(0, 100 - (scrollY * 0.1));

  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      {/* Canvas Painting Layer - Fixed Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Main Canvas Painting */}
        <div 
          className="fixed inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${canvasPainting})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1
          }}
        />

        {/* Chinese Objects Around Edges */}
        <div 
          className="fixed inset-0 w-full h-full opacity-80"
          style={{
            backgroundImage: `url(${chineseObjects})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 2
          }}
        />

        {/* Main Title Text */}
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="text-center">
            <h1 className="text-8xl md:text-9xl font-elegant text-paper drop-shadow-lg tracking-wider mb-4">
              PARABLE
            </h1>
            <h2 className="text-4xl md:text-5xl font-elegant text-paper/90 drop-shadow-lg tracking-wide mb-2">
              BOOK ONE
            </h2>
            <h3 className="text-3xl md:text-4xl font-elegant text-paper/80 drop-shadow-lg tracking-wide mb-2">
              KAIJU
            </h3>
            <p className="text-2xl md:text-3xl font-elegant text-paper/70 drop-shadow-lg tracking-wide">
              COMING SOON
            </p>
          </div>
        </div>

        {/* Magazine Cover Layer - Animated */}
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out"
          style={{
            transform: `translateY(${magazineTransform}%)`,
            zIndex: 10
          }}
        >
          {/* Magazine Cover */}
          <div 
            className="w-full h-full relative"
            style={{
              backgroundImage: `url(${retroMagazine})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* PARABLE Cutout Letters - Top Right - Bold 1970s Style */}
            <div className="absolute top-16 right-16 z-20">
              <div className="text-6xl md:text-8xl text-paper font-black leading-tight" style={{ fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '3px 3px 0px rgba(0,0,0,0.8)' }}>
                <div className="mb-2 font-black">PAR</div>
                <div className="ml-8 mb-2 font-black">AB</div>
                <div className="ml-16 font-black">LE</div>
              </div>
            </div>

            {/* Pencil Sketch Layer Underneath */}
            <div 
              className="absolute inset-0 opacity-60 mix-blend-multiply"
              style={{
                backgroundImage: `url(${shadowBoy})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        </div>

        {/* Floating Quote - Repositioned */}
        <div 
          className={`fixed bottom-32 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-2000 ${
            showQuote ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center max-w-2xl px-6">
            <div className="font-body text-2xl md:text-3xl text-ink leading-relaxed">
              <span className="italic text-3xl">feelings</span>
              <span className="text-xl ml-2 relative top-1">are the</span>
              <span className="text-4xl ml-2 font-elegant">thoughts</span>
              <br />
              <span className="text-2xl">of the</span>
              <span className="italic text-5xl ml-2">heart</span>
            </div>
          </div>
        </div>

        {/* Spacer for scroll effect */}
        <div className="h-[200vh]"></div>
      </section>

      {/* Navigation Buttons - Always Visible */}
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/about"
            className="group bg-paper/90 backdrop-blur-sm text-ink px-6 py-3 rounded-sm font-elegant tracking-wide transition-all duration-300 hover:shadow-ink hover:scale-105 border border-ink/20"
          >
            Discover My Writing
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link 
            to="/music"
            className="group bg-paper/90 backdrop-blur-sm text-ink px-6 py-3 rounded-sm font-elegant tracking-wide transition-all duration-300 hover:shadow-ink hover:scale-105 border border-ink/20"
          >
            Listen to Music
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">♪</span>
          </Link>
          <Link 
            to="/comic"
            className="group bg-paper/90 backdrop-blur-sm text-ink px-6 py-3 rounded-sm font-elegant tracking-wide transition-all duration-300 hover:shadow-ink hover:scale-105 border border-ink/20"
          >
            Read Web Comics
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">◯</span>
          </Link>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="fixed bottom-4 right-4 text-ink/60 font-body text-sm z-50 bg-paper/80 backdrop-blur-sm px-3 py-1 rounded">
        Email: Contact details coming soon
      </div>
    </div>
  );
};

export default Index;