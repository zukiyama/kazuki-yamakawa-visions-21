import React from 'react';
import Navigation from '../components/Navigation';
import BookSlideshow from '../components/BookSlideshow';
import KaijuSlideshow from '../components/KaijuSlideshow';
import toFlyNew from '../assets/to-fly-cover-new.jpg';
import professorBarnabasCover from '../assets/professor-barnabas-cover.jpg';
import landDreamSkyNew from '../assets/land-dream-sky-cover-new.jpg';
import hoaxCommune from '../assets/hoax-commune.jpg';
import hoaxAustraliaBg from '../assets/hoax-australia-bg.jpg';
import obaZimbabweBg from '../assets/oba-zimbabwe-bg.jpg';
import siphonTvBg from '../assets/siphon-tv-bg.jpg';
import youngGirlProfile from '../assets/young-girl-profile.jpg';

const About = () => {
  const youngAdultBooks = [
    {
      title: "To Fly",
      summary: '"The war was already over and we lost." Isaac, quiet and shy, can\'t believe he\'s been selected as one of the special kids for a secret academy. The academy trains test pilots for a new type of spaceship during a war against aliens, but Isaac has one problem - he can\'t fly. While losing his way in the surrounding forest, he sees impossible things that shouldn\'t be there. As he loses his way, Isaac begins to find himself in this story of aliens, hidden academies, and discovering your own path.',
      cover: toFlyNew
    },
    {
      title: "Professor Barnabas and Darwin",
      summary: "Set in Victorian London, a young boy works as an errand boy at an eccentric curiosity shop, fetching strange and peculiar items for the mysterious Professor Barnabas. When he's asked to deliver a package to Charles Darwin himself, he discovers that some of the Professor's curiosities aren't quite what they seem - and neither is the Professor.",
      cover: professorBarnabasCover
    },
    {
      title: "The Land is the Dream of the Sky",
      summary: "A young blind human boy lives in a holy city surrounded by grey wasteland. Robot pilgrims come to the city, and one tells him that he may be being kept inside rather than protected. When his father, who runs the city, is away, the boy decides to sneak outside. But the city is destroyed by stranger invaders, leaving him alone to discover the truth about his world.",
      cover: landDreamSkyNew
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-paper relative">
      <Navigation />
      
      {/* KAIJU Section */}
      <section className="relative min-h-screen">
        {/* Header with larger text */}
        <div className="relative z-20 pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-sm p-12 inline-block">
              <h2 className="text-3xl md:text-4xl font-elegant text-ink mb-4">KAIJU</h2>
              <h3 className="text-xl md:text-2xl font-serif text-ink mb-4">PARABLE BOOK ONE</h3>
              <p className="text-lg text-ink-light mb-3">A metaphysical fantasy</p>
              <div className="w-20 h-[2px] bg-sun-red mx-auto mb-6"></div>
              <p className="text-lg text-ink leading-relaxed mb-4 max-w-3xl">
                In a small Japanese town in the summer of 1979, three boys discover that nothing is as it seems. 
                Everyone's memories are fragmented—no one can remember how they ended up in this place.
              </p>
              <p className="text-lg text-ink-light leading-relaxed max-w-3xl">
                A metaphysical fantasy exploring themes of memory, identity, and the thin line between the ordinary and extraordinary.
              </p>
              <p className="text-lg text-ink-light font-light mt-6">
                COMING SOON
              </p>
            </div>
          </div>
        </div>

        {/* Full-screen slideshow */}
        <KaijuSlideshow />
      </section>

      {/* HOAX Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${hoaxCommune})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-paper/50 z-0"></div>
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-serif text-ink mb-6 tracking-wide">
                HOAX
              </h1>
              <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
              <p className="text-xl text-ink-light font-serif leading-relaxed max-w-3xl mx-auto">
                A standalone novel
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
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
        {/* Semi-transparent girl profile overlay on left side */}
        <div 
          className="absolute inset-0 bg-cover bg-left opacity-40 z-[1]"
          style={{
            backgroundImage: `url(${youngGirlProfile})`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-paper/50 z-[2]"></div>
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-serif text-ink mb-6 tracking-wide">
                OBA
              </h1>
              <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
              <p className="text-xl text-ink-light font-serif leading-relaxed max-w-3xl mx-auto">
                A standalone novel
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
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
        <div className="absolute inset-0 bg-paper/50 z-0"></div>
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-serif text-ink mb-6 tracking-wide">
                THE SIPHON
              </h1>
              <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
              <p className="text-xl text-ink-light font-serif leading-relaxed max-w-3xl mx-auto">
                A standalone novel
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 rounded-sm shadow-soft p-12 backdrop-blur-sm text-center">
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

      {/* Young Adult Novels Slideshow Section - Moved to bottom */}
      <section className="relative min-h-screen bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6 tracking-wide">
              Young Adult Novels
            </h2>
            <div className="w-24 h-[1px] bg-sun-red mx-auto mb-8"></div>
            <p className="text-lg text-ink-light font-serif leading-relaxed max-w-2xl mx-auto">
              Coming-of-age stories exploring identity, purpose, and the extraordinary within the ordinary.
            </p>
          </div>

          <BookSlideshow books={youngAdultBooks} />
        </div>

        {/* Contact Footer */}
        <div className="text-center py-8">
          <p className="text-ink/60 font-body text-sm">
            Email: Contact details coming soon
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;