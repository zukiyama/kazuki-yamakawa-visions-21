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

          {/* Scattered Polaroid-style Images */}
          <div className="relative min-h-screen">
            {/* First cluster with text */}
            <div className="relative mb-16">
              {/* Boy Group Polaroid */}
              <div className="absolute left-12 top-0 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={boysGroup} 
                    alt="Boys walking in town" 
                    className="w-80 h-60 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">Summer of '79</p>
                </div>
              </div>

              {/* Playground Polaroid */}
              <div className="absolute right-16 top-12 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={playgroundScene} 
                    alt="School playground" 
                    className="w-72 h-54 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The school</p>
                </div>
              </div>

              {/* Story Description */}
              <div className="absolute left-1/2 top-80 transform -translate-x-1/2 max-w-2xl">
                <div className="bg-card/90 rounded-sm shadow-soft p-8 backdrop-blur-sm">
                  <p className="text-lg text-ink leading-relaxed mb-4">
                    In a small Japanese town in the summer of 1979, three boys discover that nothing is as it seems. 
                    Everyone's memories are fragmented—no one can remember how they ended up in this place.
                  </p>
                  <p className="text-lg text-ink leading-relaxed">
                    As strange events unfold, the boys become embroiled in a mystery that reaches beyond their quiet town 
                    to the nearby city of Kyoto, where something unbelievable has emerged from a fallen meteor.
                  </p>
                </div>
              </div>
            </div>

            {/* Second cluster */}
            <div className="relative mt-96 mb-16">
              {/* Shadow Boy Polaroid */}
              <div className="absolute left-8 top-20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={shadowBoy} 
                    alt="Boy with giant shadow" 
                    className="w-64 h-80 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">When shadows grow</p>
                </div>
              </div>

              {/* Shopping Street Polaroid */}
              <div className="absolute right-12 top-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={shoppingStreet} 
                    alt="Town shopping street" 
                    className="w-84 h-56 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The dusty streets</p>
                </div>
              </div>

              {/* Businessman Polaroid */}
              <div className="absolute left-1/3 top-32 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={businessmanWindow} 
                    alt="Businessman at window" 
                    className="w-72 h-54 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">In distant Kyoto</p>
                </div>
              </div>
            </div>

            {/* Third cluster with final images */}
            <div className="relative mt-80">
              {/* Police Officer Polaroid */}
              <div className="absolute left-16 top-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={policeOfficer} 
                    alt="Police officer with robot" 
                    className="w-76 h-58 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The guardian</p>
                </div>
              </div>

              {/* Parade Scene - Larger */}
              <div className="absolute right-8 top-16 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={paradeScene} 
                    alt="Festival parade" 
                    className="w-96 h-64 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The festival masks everything</p>
                </div>
              </div>

              {/* Final Story Text */}
              <div className="absolute left-1/2 top-96 transform -translate-x-1/2 max-w-2xl">
                <div className="bg-gradient-ink text-primary-foreground rounded-sm shadow-ink p-8">
                  <h2 className="text-2xl font-light mb-4 font-japanese text-center">
                    A Metaphysical Fantasy
                  </h2>
                  <p className="text-lg opacity-90 mb-4 text-center">
                    KAIJU explores themes of memory, identity, and the thin line between the ordinary and extraordinary. 
                    As reality bends and the impossible becomes tangible, three boys must navigate a world where 
                    nothing can be trusted—not even their own recollections.
                  </p>
                  <div className="w-16 h-[1px] bg-sun-red mx-auto mt-6"></div>
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