import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import musicRoomGarden from '../assets/music-room-garden.jpg';
import tvShopBoys from '../assets/tv-shop-boys.jpg';
import animalOrchestra from '../assets/animal-orchestra-sketch.jpg';

const Music = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tracks = [
    { title: "Coming Soon 1", duration: "0:00" },
    { title: "Coming Soon 2", duration: "0:00" },
    { title: "Coming Soon 3", duration: "0:00" }
  ];

  return (
    <div className="min-h-screen bg-gradient-paper relative overflow-hidden">
      <Navigation />
      
      {/* Background TV Shop with Boys */}
      <div 
        className="fixed inset-0 opacity-30 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${tvShopBoys})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Decorative objects scattered around */}
      <div className="fixed top-20 right-10 w-8 h-8 opacity-30 rotate-45 z-0">
        <div className="w-full h-full bg-ink/20 rounded-full"></div>
      </div>
      <div className="fixed bottom-32 left-8 w-6 h-12 opacity-40 z-0">
        <div className="w-full h-full bg-mountain/30 rounded-sm rotate-12"></div>
      </div>
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Music Room Section */}
          <div className="mb-20 relative">
            <div className="bg-paper/90 backdrop-blur-sm rounded-sm shadow-soft overflow-hidden">
              {/* Single Multimedia Image - Pencil Sketch Room with Photographic Garden */}
              <img 
                src={musicRoomGarden} 
                alt="Music room with garden view" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>


          {/* Track Selector */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-paper/90 backdrop-blur-sm p-8 rounded-sm shadow-soft">
              <h3 className="text-2xl font-elegant text-ink mb-6 text-center">Track Selection</h3>
              <div className="grid gap-4">
                {tracks.map((track, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTrack(index)}
                    className={`w-full p-4 rounded-sm text-left transition-all duration-300 font-body ${
                      selectedTrack === index 
                        ? 'bg-gradient-ink text-primary-foreground shadow-ink' 
                        : 'bg-card hover:bg-ink/10 text-ink'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{track.title}</span>
                      <span className="text-sm opacity-60">{track.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Animal Orchestra Section */}
          <div className="mt-20 mb-16">
            <div className="max-w-4xl mx-auto bg-paper/95 backdrop-blur-sm rounded-sm shadow-soft p-8">
              <h3 className="text-2xl font-elegant text-ink mb-6 text-center">The Orchestra</h3>
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src={animalOrchestra} 
                  alt="Surreal animal orchestra with fantastical instruments" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="fixed bottom-8 left-8 w-12 h-8 opacity-40">
            <div className="w-full h-full bg-mountain/20 rounded-full rotate-45"></div>
          </div>
          <div className="fixed top-40 left-20 w-4 h-8 opacity-30">
            <div className="w-full h-full bg-ink/20 rounded-sm rotate-12"></div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="absolute bottom-4 right-4 text-ink/60 font-body text-sm">
          Email: Contact details coming soon
        </div>
      </main>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-4">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-sun-red transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video bg-black rounded-sm flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-6 opacity-60">▶</div>
                <p className="text-2xl font-body">Fullscreen Video Player</p>
                <p className="text-lg opacity-60 mt-2">No videos available yet</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;