import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
              Writing
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-2xl mx-auto">
              Exploring the intersection of language, emotion, and human experience through words.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* Current Work */}
            <section className="bg-card rounded-sm shadow-soft p-8 md:p-12">
              <h2 className="text-2xl font-light text-ink mb-6 font-japanese">
                Current Work
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-ink-light leading-relaxed mb-6">
                  I am currently working on a book that delves into the complexities of modern relationships 
                  and the quiet moments that define our connections with others. This collection explores 
                  themes of vulnerability, desire, and the spaces between what we say and what we mean.
                </p>
                <p className="text-ink-light leading-relaxed">
                  The writing process has been an intimate journey of discovery, blending personal reflection 
                  with universal truths about the human condition. Each piece is crafted with careful attention 
                  to the rhythm of language and the power of restraint.
                </p>
              </div>
            </section>

            {/* Philosophy */}
            <section className="bg-card rounded-sm shadow-soft p-8 md:p-12">
              <h2 className="text-2xl font-light text-ink mb-6 font-japanese">
                Writing Philosophy
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-ink mb-4">Minimalism in Words</h3>
                  <p className="text-ink-light leading-relaxed">
                    Like Japanese ink paintings, I believe in the power of negative space. 
                    What's left unsaid often carries more weight than what's explicitly stated.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-ink mb-4">Emotional Honesty</h3>
                  <p className="text-ink-light leading-relaxed">
                    Writing that doesn't shy away from the raw, uncomfortable truths of 
                    human experience. Authenticity over comfort.
                  </p>
                </div>
              </div>
            </section>

            {/* Upcoming Book */}
            <section className="text-center">
              <div className="bg-gradient-ink text-primary-foreground rounded-sm shadow-ink p-8 md:p-12">
                <h2 className="text-3xl font-light mb-4 font-japanese">
                  Coming Soon
                </h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  My debut collection will be available soon. A meditation on intimacy, 
                  solitude, and the courage required to truly see and be seen.
                </p>
                <div className="w-16 h-[1px] bg-sun-red mx-auto"></div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;