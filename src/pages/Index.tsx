import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import heroLandscape from '../assets/hero-landscape.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroLandscape})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-paper/70"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light text-ink mb-8 font-japanese tracking-wide">
            KAZUKI
            <span className="block text-3xl md:text-5xl font-extralight text-ink-light mt-2 tracking-[0.2em]">
              YAMAKAWA
            </span>
          </h1>
          
          <div className="w-32 h-[1px] bg-sun-red mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl font-light text-ink-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Writer. Musician. Creator of stories that blur the line between dreams and reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/about"
              className="group bg-gradient-ink text-primary-foreground px-8 py-4 rounded-sm font-japanese tracking-wide transition-all duration-300 hover:shadow-ink hover:scale-105"
            >
              Discover My Writing
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link 
              to="/music"
              className="group border border-ink text-ink px-8 py-4 rounded-sm font-japanese tracking-wide transition-all duration-300 hover:bg-ink hover:text-primary-foreground hover:shadow-ink"
            >
              Listen to Music
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">♪</span>
            </Link>
            <Link 
              to="/comic"
              className="group border border-ink text-ink px-8 py-4 rounded-sm font-japanese tracking-wide transition-all duration-300 hover:bg-ink hover:text-primary-foreground hover:shadow-ink"
            >
              Read Web Comics
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">◯</span>
            </Link>
          </div>
        </div>
        
      </section>
      
      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 font-japanese">
                Crafting Stories
              </h2>
              <p className="text-lg text-ink-light leading-relaxed mb-8">
                Through minimalist prose and evocative songwriting, I explore the 
                complex emotions that define our most intimate moments. Each piece 
                is an invitation to feel deeply and think differently.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-sun-red font-japanese tracking-wide hover:text-ink transition-colors duration-300"
              >
                Read More About My Work
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-ink rounded-sm shadow-ink p-12 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-light mb-4 font-japanese">"</div>
                  <p className="text-lg font-light leading-relaxed">
                    In the space between
                    <br />
                    breath and word,
                    <br />
                    truth lives quietly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
