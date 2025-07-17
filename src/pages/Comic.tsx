import React from 'react';
import Navigation from '../components/Navigation';

const Comic = () => {
  return (
    <div className="min-h-screen bg-gradient-paper">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
              Comic
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-2xl mx-auto">
              [Placeholder text] Visual storytelling through sequential art and narrative illustration.
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-card rounded-sm shadow-soft p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light text-ink mb-6 font-japanese">
              Manga & Comics
            </h2>
            <p className="text-ink-light leading-relaxed mb-8 max-w-2xl mx-auto">
              [Placeholder text] This section will feature comic and manga work. Content can be updated as needed.
            </p>
            <div className="w-16 h-[1px] bg-sun-red mx-auto"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Comic;