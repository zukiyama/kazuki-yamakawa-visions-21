import React from 'react';
import Navigation from '../components/Navigation';
import characterSketches from '../assets/character-sketches.jpg';
import godOfLiesCover from '../assets/god-of-lies-cover-updated.jpg';
import soulTiedCover from '../assets/soul-tied-cover-new.jpg';
import burdenCover from '../assets/burden-cover-updated.jpg';

const Comic = () => {
  return (
    <div className="min-h-screen bg-gradient-paper relative overflow-hidden">
      <Navigation />
      
      {/* Background Character Sketches */}
      <div 
        className="fixed inset-0 opacity-20 bg-cover bg-center z-0 transform-gpu"
        style={{
          backgroundImage: `url(${characterSketches})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Decorative Elements */}
          <div className="fixed top-20 right-12 w-6 h-6 opacity-30 rotate-45 animate-sway">
            <div className="w-full h-full bg-ink/20 rounded-sm"></div>
          </div>
          <div className="fixed bottom-40 left-16 w-4 h-8 opacity-40 rotate-12">
            <div className="w-full h-full bg-mountain/30 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-elegant tracking-wide">
              Web Comics
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-2xl mx-auto font-body">
              Korean-style webtoons and manga featuring original characters and stories.
            </p>
          </div>

          {/* God of Lies Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-32 max-w-6xl mx-auto transform transition-all duration-500 hover:scale-[1.02]">
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
              <h2 className="text-3xl font-light text-ink mb-6 font-elegant">
                God of Lies
              </h2>
              <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
              <p className="text-lg text-ink leading-relaxed mb-4 font-body">
                Jeong-ho, a young Korean con man, poses as a shaman to deceive a married couple. 
                While pretending to commune with the gods to raise money, he accidentally summons the God of Lies into existence.
              </p>
              <p className="text-lg text-ink leading-relaxed mb-4 font-body">
                The problem? This mischievous deity refuses to disappear and becomes his constant, troublesome companion. 
                But ever the conman, Jeong-ho decides this god might actually be useful.
              </p>
              <p className="text-lg text-ink-light leading-relaxed font-body">
                A Korean-style webtoon that blends comedy, supernatural elements, and the consequences of living by lies.
              </p>
            </div>
          </div>

          {/* Soul Tied Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-32 max-w-6xl mx-auto transform transition-all duration-500 hover:scale-[1.02]">
            {/* Story Summary */}
            <div className="bg-card/90 rounded-sm shadow-soft p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-light text-ink mb-6 font-elegant">
                Soul Tied
              </h2>
              <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
              <p className="text-lg text-ink leading-relaxed mb-4 font-body">
                Min-jun leaves a bar after drinking with friends, but when he waves goodbye, no one waves back. 
                The door swings right through him, people walk through him - he's become a ghost.
              </p>
              <p className="text-lg text-ink leading-relaxed mb-4 font-body">
                Walking the streets, he bumps into someone and apologizes. The businessman can see him! 
                They discover they are "soul tied" - but how can a slacker be connected to such an ambitious man?
              </p>
              <p className="text-lg text-ink-light leading-relaxed font-body">
                As they journey to break their connection, Min-jun begins to see the life he could have led.
              </p>
            </div>

            {/* Cover Image */}
            <div className="flex justify-center">
              <div className="bg-card rounded-sm shadow-ink overflow-hidden hover:shadow-sun-red/20 transition-all duration-300 transform hover:scale-105">
                <img 
                  src={soulTiedCover} 
                  alt="Soul Tied webtoon cover"
                  className="w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* The Burden Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto transform transition-all duration-500 hover:scale-[1.02]">
            {/* Cover Image */}
            <div className="flex justify-center">
              <div className="bg-card rounded-sm shadow-ink overflow-hidden hover:shadow-sun-red/20 transition-all duration-300 transform hover:scale-105">
                <img 
                  src={burdenCover} 
                  alt="The Burden webtoon cover" 
                  className="w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>

            {/* Story Summary */}
            <div className="bg-card/90 rounded-sm shadow-soft p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-light text-ink mb-6 font-elegant">
                The Burden
              </h2>
              <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
              <p className="text-lg text-ink leading-relaxed mb-4 font-body">
                Hiroshi, a 30-year-old Japanese man, gets a call. His mother, who made his childhood unbearable, 
                needs help. He refuses, but his sister tells him something that changes everything - their mother has dementia.
              </p>
              <p className="text-lg text-ink leading-relaxed mb-4 font-body">
                Forced to share his home with the woman he resents, he watches her memory slip away. 
                In her confusion, he begins to see her differently - vulnerable, childlike, as she was before the pain.
              </p>
              <p className="text-lg text-ink-light leading-relaxed font-body">
                In the fading light of her memory, he begins to understand her and lose something he's carried for so long 
                it became part of him.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="text-center py-8">
          <p className="text-ink/60 font-body text-sm">
            Email: Contact details coming soon
          </p>
        </div>
      </main>
    </div>
  );
};

export default Comic;