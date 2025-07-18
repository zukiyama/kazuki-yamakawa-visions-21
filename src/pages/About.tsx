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
        className="fixed inset-0 opacity-20 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${seventiesObjects})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
              KAIJU
            </h1>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-xl text-ink-light font-light leading-relaxed max-w-3xl mx-auto">
              First book of the Parable Trilogy
            </p>
          </div>

          {/* Three Main Images - Separated and Clear */}
          <div className="space-y-32">
            {/* Boys Group - First Image */}
            <div className="flex justify-start">
              <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={boysGroup} 
                    alt="Boys walking in small Japanese town" 
                    className="w-96 h-64 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">Summer of '79 - Three friends</p>
                </div>
              </div>
            </div>

            {/* Story Summary - Center */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/95 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
                <h2 className="text-3xl font-light text-ink mb-6 font-japanese">
                  KAIJU
                </h2>
                <p className="text-xl text-ink-light mb-4">First book of the Parable Trilogy</p>
                <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
                <p className="text-lg text-ink leading-relaxed mb-6 max-w-3xl mx-auto">
                  In a small Japanese town in the summer of 1979, three boys discover that nothing is as it seems. 
                  Everyone's memories are fragmented—no one can remember how they ended up in this place.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-6 max-w-3xl mx-auto">
                  As strange events unfold, the boys become embroiled in a mystery that reaches beyond their quiet town 
                  to the nearby city of Kyoto, where something unbelievable has emerged from a fallen meteor.
                </p>
                <p className="text-lg text-ink-light leading-relaxed max-w-3xl mx-auto">
                  A metaphysical fantasy exploring themes of memory, identity, and the thin line between the ordinary and extraordinary. 
                  As reality bends and the impossible becomes tangible, three boys must navigate a world where 
                  nothing can be trusted—not even their own recollections.
                </p>
              </div>
            </div>

            {/* Police Officer - Second Image */}
            <div className="flex justify-end">
              <div className="transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={policeOfficer} 
                    alt="Police officer with robot in desert" 
                    className="w-96 h-64 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The guardian and her companion</p>
                </div>
              </div>
            </div>

            {/* Parade Scene - Third Image */}
            <div className="flex justify-center">
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={paradeScene} 
                    alt="Festival parade with strange floats" 
                    className="w-[500px] h-80 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The festival masks everything</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;