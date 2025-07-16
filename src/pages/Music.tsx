import React from 'react';
import Navigation from '../components/Navigation';

const Music = () => {
  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
              Music
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-2xl mx-auto">
              Songs that capture the nuances of emotion, enhanced by AI visuals that bring each story to life.
            </p>
          </div>

          {/* Music Content */}
          <div className="space-y-12">
            {/* Featured Content Placeholder */}
            <section className="bg-card rounded-sm shadow-soft p-8 md:p-12">
              <h2 className="text-2xl font-light text-ink mb-8 font-japanese text-center">
                Latest Releases
              </h2>
              
              {/* Placeholder for future content */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-gradient-ink rounded-sm flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-16 h-16 border border-current rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-current ml-1"></div>
                    </div>
                    <p className="text-sm opacity-80">Video content coming soon</p>
                  </div>
                </div>
                
                <div className="aspect-video bg-gradient-ink rounded-sm flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-16 h-16 border border-current rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-current ml-1"></div>
                    </div>
                    <p className="text-sm opacity-80">Video content coming soon</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="bg-card rounded-sm shadow-soft p-8 md:p-12">
              <h2 className="text-2xl font-light text-ink mb-6 font-japanese">
                Creative Process
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-sun-red rounded-full mx-auto mb-4 opacity-80"></div>
                  <h3 className="text-lg font-medium text-ink mb-3">Songwriting</h3>
                  <p className="text-ink-light text-sm leading-relaxed">
                    Raw emotions transformed into verse and melody, 
                    capturing the essence of human experience.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-mountain rounded-full mx-auto mb-4 opacity-80"></div>
                  <h3 className="text-lg font-medium text-ink mb-3">Composition</h3>
                  <p className="text-ink-light text-sm leading-relaxed">
                    Layering sounds and silence to create atmospheric 
                    pieces that resonate beyond words.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-ink-light rounded-full mx-auto mb-4 opacity-80"></div>
                  <h3 className="text-lg font-medium text-ink mb-3">AI Visuals</h3>
                  <p className="text-ink-light text-sm leading-relaxed">
                    Collaborating with AI to create visuals that 
                    complement and enhance the musical narrative.
                  </p>
                </div>
              </div>
            </section>

            {/* Coming Soon */}
            <section className="text-center">
              <div className="bg-gradient-sunset text-accent-foreground rounded-sm shadow-accent p-8 md:p-12">
                <h2 className="text-3xl font-light mb-4 font-japanese">
                  Stay Tuned
                </h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  New songs and AI-generated videos will be featured here soon. 
                  Each piece explores different facets of the human experience.
                </p>
                <div className="w-16 h-[1px] bg-accent-foreground mx-auto opacity-60"></div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Music;