import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import retroMagazine from '../assets/retro-magazine-cover.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Magazine Cover */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${retroMagazine})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Main Title Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-elegant text-paper drop-shadow-lg tracking-wider mb-4">
            PARABLE
          </h1>
          <h2 className="text-3xl md:text-4xl font-elegant text-paper/90 drop-shadow-lg tracking-wide mb-2">
            BOOK ONE
          </h2>
          <h3 className="text-2xl md:text-3xl font-elegant text-paper/80 drop-shadow-lg tracking-wide mb-4">
            KAIJU
          </h3>
          <p className="text-xl md:text-2xl font-elegant text-paper/70 drop-shadow-lg tracking-wide mb-8">
            COMING SOON
          </p>
          
          {/* Quote */}
          <div className="text-center max-w-2xl mx-auto px-6 mt-8">
            <div className="font-body text-lg md:text-xl text-paper/80 leading-relaxed drop-shadow-lg">
              <span className="italic">feelings</span>
              <span className="ml-2">are the</span>
              <span className="ml-2 font-elegant">thoughts</span>
              <span className="ml-2">of the</span>
              <span className="italic ml-2">heart</span>
            </div>
          </div>
        </div>
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