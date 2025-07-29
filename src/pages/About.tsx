import React from 'react';
import Navigation from '../components/Navigation';
import BookSlideshow from '../components/BookSlideshow';
import toFlyCover from '../assets/to-fly-cover.jpg';
import professorBarnabasCover from '../assets/professor-barnabas-cover.jpg';
import landDreamSkyCover from '../assets/land-dream-sky-cover.jpg';
import africanGirlProfile from '../assets/african-girl-profile.jpg';
import boysGroup from '../assets/boys-group.jpg';
import playgroundScene from '../assets/playground-scene.jpg';
import shoppingStreet from '../assets/shopping-street.jpg';
import shadowBoy from '../assets/shadow-boy.jpg';
import businessmanWindow from '../assets/businessman-window.jpg';
import policeOfficer from '../assets/police-officer.jpg';
import paradeScene from '../assets/parade-scene.jpg';
import seventiesObjects from '../assets/70s-objects.jpg';
import boysWalkingBehind from '../assets/boys-walking-behind.jpg';
import hoaxAustraliaBg from '../assets/hoax-australia-bg.jpg';
import marketCorporateBg from '../assets/market-corporate-bg.jpg';
import obaZimbabweBg from '../assets/oba-zimbabwe-bg.jpg';
import siphonTvBg from '../assets/siphon-tv-bg.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-paper relative overflow-hidden">
      <Navigation />
      
      {/* KAIJU Section */}
      <section className="relative min-h-screen">
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

            {/* Images scattered like Polaroids */}
            <div className="relative min-h-[800px]">
              {/* Boys Group */}
              <div className="absolute top-20 left-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={boysGroup} 
                    alt="Boys walking in small Japanese town" 
                    className="w-80 h-52 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">Summer of '79 - Three friends</p>
                </div>
              </div>

              {/* Police Officer */}
              <div className="absolute top-40 right-16 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={policeOfficer} 
                    alt="Police officer with robot in desert" 
                    className="w-80 h-52 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The guardian and her companion</p>
                </div>
              </div>

              {/* Parade Scene */}
              <div className="absolute bottom-20 left-1/3 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={paradeScene} 
                    alt="Festival parade with strange floats" 
                    className="w-96 h-64 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">The festival masks everything</p>
                </div>
              </div>

              {/* Boys Walking Behind */}
              <div className="absolute bottom-40 right-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-lg rounded-sm">
                  <img 
                    src={boysWalkingBehind} 
                    alt="Boys walking behind in Japanese town" 
                    className="w-80 h-52 object-cover mb-2"
                  />
                  <p className="text-center text-sm text-gray-600 font-handwriting">Walking towards tomorrow</p>
                </div>
              </div>

              {/* Story Summary - Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-card/95 rounded-sm shadow-soft p-8 backdrop-blur-sm text-center max-w-lg">
                  <h2 className="text-2xl font-light text-ink mb-4 font-japanese">KAIJU</h2>
                  <p className="text-lg text-ink-light mb-3">First book of the Parable Trilogy</p>
                  <div className="w-16 h-[1px] bg-sun-red mx-auto mb-6"></div>
                  <p className="text-sm text-ink leading-relaxed mb-4">
                    In a small Japanese town in the summer of 1979, three boys discover that nothing is as it seems. 
                    Everyone's memories are fragmented—no one can remember how they ended up in this place.
                  </p>
                  <p className="text-sm text-ink-light leading-relaxed">
                    A metaphysical fantasy exploring themes of memory, identity, and the thin line between the ordinary and extraordinary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* HOAX Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${hoaxAustraliaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-paper/70 z-0"></div>
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
                HOAX
              </h1>
              <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
              <p className="text-xl text-ink-light font-light leading-relaxed max-w-3xl mx-auto">
                Second book of the Parable Trilogy
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card/95 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
                <p className="text-lg text-ink leading-relaxed mb-6">
                  Peter Carlisle wrote a book when he was down and out—a hoax about a cult and spiritual beliefs. 
                  It became an overnight success, then an equally quick failure. Now he's fleeing to Australia when he gets a phone call.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-6">
                  People have actually set up the cult from his book. Walking into this reality feels like stepping into his own fiction. 
                  From having no purpose, he suddenly decides he must make them realize the book wasn't real—it was a hoax.
                </p>
                <p className="text-lg text-ink-light leading-relaxed">
                  But as he confronts the cult, he starts to remember the strange circumstances in which he wrote that book, 
                  and begins to wonder: where did those ideas really come from? Maybe it wasn't fiction at all.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* THE MARKET Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${marketCorporateBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-paper/70 z-0"></div>
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
                THE MARKET
              </h1>
              <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
              <p className="text-xl text-ink-light font-light leading-relaxed max-w-3xl mx-auto">
                Third book of the Parable Trilogy
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card/95 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
                <p className="text-lg text-ink leading-relaxed mb-6">
                  James Wilder leaves England after his girlfriend abandons him for an amazing opportunity. 
                  He travels to Larissa—the world's first entirely corporate nation, with its own strange culture and heritage.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-6">
                  While there, he discovers technologies and systems that make him question everything. 
                  The artificial intelligence software he studies leads him to a disturbing realization.
                </p>
                <p className="text-lg text-ink-light leading-relaxed">
                  It's not just that this corporate nation is artificial—something far beyond it, 
                  something fundamental about reality itself, might be fake.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* OBA Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${obaZimbabweBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-paper/70 z-0"></div>
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
                OBA
              </h1>
              <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
              <p className="text-xl text-ink-light font-light leading-relaxed max-w-3xl mx-auto">
                Fourth book of the Parable Trilogy
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card/95 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
                <p className="text-lg text-ink leading-relaxed mb-6">
                  Tinashe returns to his home village in Zimbabwe, embarrassed by his background. 
                  The village sits on the edge of a burning mangrove forest, and he's there to teach a mute girl named Oba.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-6">
                  As a university-educated specialist in speech therapy, he expects to help her find her voice. 
                  But as he settles into village life, he starts remembering things about his past he'd forgotten.
                </p>
                <p className="text-lg text-ink-light leading-relaxed">
                  The forest holds secrets, and Oba may have more to teach him than he has to teach her. 
                  Sometimes the one who cannot speak has the most important things to say.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* THE SIPHON Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${siphonTvBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-paper/70 z-0"></div>
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-light text-ink mb-6 font-japanese tracking-wide">
                THE SIPHON
              </h1>
              <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
              <p className="text-xl text-ink-light font-light leading-relaxed max-w-3xl mx-auto">
                A standalone novel
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card/95 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
                <p className="text-lg text-ink leading-relaxed mb-6">
                  Elliott Park suddenly remembers the Siphons—a strange, half-animated children's show he swears he watched as a child. 
                  The details are vivid, but when he mentions it to friends and family, no one recalls it.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-6">
                  The internet turns up nothing—not a single frame, not a VHS, not even a still. Until he stumbles on a single post 
                  on an abandoned fanfiction site and slowly, obsessively, starts to find other people who remember.
                </p>
                <p className="text-lg text-ink-light leading-relaxed">
                  People who still dream about it. People who have never been quite the same since they watched it. 
                  The deeper he digs, the less it feels like a memory and the more he wonders if it contains something bigger than he could ever imagine.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Young Adult Novels Slideshow Section */}
      <section className="relative min-h-screen bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-ink mb-6 font-japanese tracking-wide">
              Young Adult Novels
            </h2>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-light leading-relaxed max-w-2xl mx-auto">
              Coming-of-age stories exploring identity, purpose, and the extraordinary within the ordinary.
            </p>
          </div>

          {/* To Fly */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
            <div className="order-2 md:order-1 bg-card/90 rounded-sm shadow-soft p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-ink mb-4 font-japanese">To Fly</h3>
              <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
              <p className="text-ink leading-relaxed mb-4">
                "The war was already over and we lost." Isaac, quiet and shy, can't believe he's been selected as one of the special kids for a secret academy. 
              </p>
              <p className="text-ink leading-relaxed mb-4">
                The academy trains test pilots, but Isaac has one problem - he can't fly. While losing his way in the surrounding forest, he sees impossible things that shouldn't be there.
              </p>
              <p className="text-ink-light leading-relaxed">
                As he loses his way, Isaac begins to find himself in this story of aliens, hidden academies, and discovering your own path.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-card rounded-sm shadow-ink overflow-hidden hover:shadow-sun-red/20 transition-all duration-300 transform hover:scale-105">
                <img 
                  src="/src/assets/to-fly-cover.jpg" 
                  alt="To Fly novel cover" 
                  className="w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Professor Barnabas and Darwin */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="bg-card rounded-sm shadow-ink overflow-hidden hover:shadow-sun-red/20 transition-all duration-300 transform hover:scale-105">
                <img 
                  src="/src/assets/professor-barnabas-cover.jpg" 
                  alt="Professor Barnabas and Darwin novel cover" 
                  className="w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>
            <div className="bg-card/90 rounded-sm shadow-soft p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-ink mb-4 font-japanese">Professor Barnabas and Darwin</h3>
              <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
              <p className="text-ink leading-relaxed mb-4">
                Set in Victorian London, a young boy works as an errand boy at an eccentric curiosity shop, fetching strange and peculiar items for the mysterious Professor Barnabas.
              </p>
              <p className="text-ink leading-relaxed mb-4">
                Here he discovers a new London beneath London called "Undon," where mysterious figures from England's past and future seem to live together still.
              </p>
              <p className="text-ink-light leading-relaxed">
                Together they encounter their enemy for the first time: Renard, a mysterious figure with dark intentions.
              </p>
            </div>
          </div>

          {/* The Land is the Dream of the Sky */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
            <div className="order-2 md:order-1 bg-card/90 rounded-sm shadow-soft p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-ink mb-4 font-japanese">The Land is the Dream of the Sky</h3>
              <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
              <p className="text-ink leading-relaxed mb-4">
                Book one of the White Trilogy. A young blind prince lives in a walled town in a wasteland, the only human among robots, never allowed outside.
              </p>
              <p className="text-ink leading-relaxed mb-4">
                The arrival of a strange robot pilgrim from outside makes him question his captivity. When he finally decides to leave, he discovers his town has been destroyed.
              </p>
              <p className="text-ink-light leading-relaxed">
                Alone except for his annoying robot companion, they journey through the wasteland seeking the secrets of the world and his true identity.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-card rounded-sm shadow-ink overflow-hidden hover:shadow-sun-red/20 transition-all duration-300 transform hover:scale-105">
                <img 
                  src="/src/assets/land-dream-sky-cover.jpg" 
                  alt="The Land is the Dream of the Sky novel cover" 
                  className="w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;