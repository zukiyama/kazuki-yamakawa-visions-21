import React from 'react';
import Navigation from '../components/Navigation';
import boysGroup from '../assets/boys-group.jpg';
import playgroundScene from '../assets/playground-scene.jpg';
import shoppingStreet from '../assets/shopping-street.jpg';
import shadowBoy from '../assets/shadow-boy.jpg';
import businessmanWindow from '../assets/businessman-window.jpg';
import policeOfficer from '../assets/police-officer.jpg';
import paradeScene from '../assets/parade-scene.jpg';
import seventiesObjects from '../assets/70s-objects.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-paper relative overflow-hidden">
      <Navigation />
      
      {/* Background 70s Objects */}
      <div 
        className="fixed inset-0 opacity-10 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${seventiesObjects})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
              KAIJU
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-xl text-ink-light font-light leading-relaxed max-w-3xl mx-auto">
              First book of the Parable Trilogy
            </p>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-3xl mx-auto mt-4">
              [Placeholder text] A philosophical metaphysical fantasy set in an alternate 1979 Japan. 
              A group of boys in a small town discover that nothing is as it seems when strange events 
              unfold during one unforgettable summer.
            </p>
          </div>

          {/* Story Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={boysGroup} 
                alt="Group of boys in 1979 Japan" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">The Boys</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  [Placeholder text] Three friends discover their town holds secrets no one remembers.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={playgroundScene} 
                alt="School playground with mysterious robot" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">The School</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  [Placeholder text] A residential school where small robots maintain order.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={shoppingStreet} 
                alt="Boys shopping in dusty town" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">The Town</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  [Placeholder text] A dusty street where memories fade and questions multiply.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={shadowBoy} 
                alt="Boy with giant shadow" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">The Shadow</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  [Placeholder text] When reality bends, even shadows become something more.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={businessmanWindow} 
                alt="Businessman at office window" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">The City</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  [Placeholder text] In nearby Kyoto, unbelievable events begin to unfold.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={policeOfficer} 
                alt="Police officer with robot companion" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-light text-ink mb-2 font-japanese">The Guardian</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  [Placeholder text] A police officer and her robot companion face the unknown.
                </p>
              </div>
            </div>
          </div>

          {/* Parade Scene - Full Width */}
          <div className="mb-20">
            <div className="bg-card rounded-sm shadow-soft overflow-hidden group hover:shadow-ink transition-all duration-300">
              <img 
                src={paradeScene} 
                alt="Parade scene in Kyoto" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-light text-ink mb-4 font-japanese">The Parade</h3>
                <p className="text-ink-light leading-relaxed max-w-3xl mx-auto">
                  [Placeholder text] In Kyoto, a festival masks the emergence of something extraordinary. 
                  Children watch in wonder as balloons fill the sky and reality begins to shift.
                </p>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="text-center">
            <div className="bg-gradient-ink text-primary-foreground rounded-sm shadow-ink p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-4 font-japanese">
                Coming Soon
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                [Placeholder text] The first book of the Parable Trilogy will explore themes of memory, 
                identity, and the thin line between the ordinary and the extraordinary.
              </p>
              <div className="w-16 h-[1px] bg-sun-red mx-auto"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;