import React from 'react';
import Navigation from '../components/Navigation';
import instrumentsSketch from '../assets/instruments-sketch.jpg';
import summerHouseSketch from '../assets/summer-house-sketch.jpg';
import colorImagination from '../assets/color-imagination.jpg';
import retroElectronics from '../assets/retro-electronics.jpg';
import robotToys from '../assets/robot-toys.jpg';

const Music = () => {
  return (
    <div className="min-h-screen bg-gradient-paper relative overflow-hidden">
      <Navigation />
      
      {/* Background Sketches */}
      <div 
        className="fixed inset-0 opacity-40 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${instrumentsSketch})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
              Music
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-2xl mx-auto">
              Musical compositions and audio-visual experiences that blend analog warmth with digital imagination.
            </p>
          </div>

          {/* Imagination Section */}
          <div className="mb-16">
            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={colorImagination} 
                alt="Pure color imagination" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-light text-ink mb-4 font-japanese">Pure Imagination</h3>
                <p className="text-ink-light leading-relaxed max-w-3xl mx-auto">
                  Visual music videos that capture the essence of color and sound, 
                  creating immersive experiences from pure imagination.
                </p>
              </div>
            </div>
          </div>

          {/* Instrument Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={summerHouseSketch} 
                alt="Summer house music room" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">The Studio</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  A peaceful space where acoustic instruments meet creative inspiration.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={retroElectronics} 
                alt="Vintage analog equipment" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">Analog Soul</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Classic synthesizers and tape machines that add warmth to digital creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Robot Toys Section */}
          <div className="mb-16">
            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={robotToys} 
                alt="Vintage Japanese robot toys" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-light text-ink mb-4 font-japanese">Retro Future</h3>
                <p className="text-ink-light leading-relaxed max-w-3xl mx-auto">
                  Inspired by the optimistic futures imagined in the 1970s, 
                  where robots were friends and technology was full of wonder.
                </p>
              </div>
            </div>
          </div>

          {/* Music Section */}
          <div className="text-center">
            <div className="bg-gradient-ink text-primary-foreground rounded-sm shadow-ink p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-4 font-japanese">
                Audio & Visual
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Musical compositions paired with AI-generated visuals will be featured here. 
                Each piece combines acoustic instruments with electronic elements.
              </p>
              <div className="w-16 h-[1px] bg-sun-red mx-auto"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Music;