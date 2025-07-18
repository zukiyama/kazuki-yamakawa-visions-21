import React from 'react';
import Navigation from '../components/Navigation';
import comicSketchesBg from '../assets/comic-sketches-bg.jpg';
import koreanTownBg from '../assets/korean-town-bg.jpg';
import godOfLiesCover from '../assets/god-of-lies-cover-new.jpg';

const Comic = () => {
  return (
    <div className="min-h-screen bg-gradient-paper relative overflow-hidden">
      <Navigation />
      
      {/* Background Sketches */}
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${comicSketchesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Korean Town Background - positioned */}
      <div 
        className="absolute top-1/3 right-0 w-1/2 h-1/2 opacity-40 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${koreanTownBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
              Web Comics
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-2xl mx-auto">
              Korean-style webtoons and manga featuring original characters and stories.
            </p>
          </div>

          {/* God of Lies Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
            {/* Cover Image */}
            <div className="flex justify-center">
              <div className="bg-card rounded-sm shadow-ink overflow-hidden hover:shadow-sun-red/20 transition-all duration-300 transform hover:scale-105">
                <img 
                  src={godOfLiesCover} 
                  alt="God of Lies webtoon cover" 
                  className="w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>

            {/* Story Summary */}
            <div className="bg-card/90 rounded-sm shadow-soft p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-light text-ink mb-6 font-japanese">
                God of Lies
              </h2>
              <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
              <p className="text-lg text-ink leading-relaxed mb-4">
                A young con man's life takes an unexpected turn when he poses as a shaman to deceive a couple. 
                While pretending to commune with the gods to raise money, he accidentally summons the God of Lies into existence.
              </p>
              <p className="text-lg text-ink leading-relaxed mb-4">
                The problem? This mischievous deity refuses to disappear and becomes his constant, troublesome companion. 
                Now the con man must navigate his schemes while dealing with a god who embodies deception itself.
              </p>
              <p className="text-lg text-ink-light leading-relaxed">
                A Korean-style webtoon that blends comedy, supernatural elements, and the consequences of living by lies.
              </p>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center">
            <div className="bg-gradient-ink text-primary-foreground rounded-sm shadow-ink p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-light mb-4 font-japanese">
                Coming Soon
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                More webtoons and manga stories are in development. 
                Each will feature unique characters and explore different themes through visual storytelling.
              </p>
              <div className="w-16 h-[1px] bg-sun-red mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Comic;