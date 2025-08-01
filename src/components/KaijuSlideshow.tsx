import React, { useState, useEffect } from 'react';
import boysWalkingBehind from '../assets/boys-walking-behind.jpg';
import policeOfficer from '../assets/police-officer.jpg';
import kyotoOfficeView from '../assets/kyoto-office-window-view.jpg';
import japaneseEvening from '../assets/japanese-tv-shop-evening.jpg';

interface Slide {
  image: string;
  quote: string;
  alt: string;
}

const KaijuSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: boysWalkingBehind,
      quote: "Feelings are the thoughts of the heart",
      alt: "Boys walking behind in Japanese town"
    },
    {
      image: policeOfficer,
      quote: "In the silence, something watches",
      alt: "Police officer with robot in desert"
    },
    {
      image: kyotoOfficeView,
      quote: "Giants walk among the everyday",
      alt: "View from Kyoto office window with giant silhouette"
    },
    {
      image: japaneseEvening,
      quote: "Television light reveals hidden truths",
      alt: "Japanese TV shop in the evening with children"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with slow zoom */}
          <div 
            className={`w-full h-full bg-cover bg-center transition-transform duration-6000 ease-linear ${
              index === currentSlide 
                ? index % 2 === 0 
                  ? 'transform scale-105' 
                  : 'transform scale-100' 
                : index % 2 === 0 
                  ? 'transform scale-100' 
                  : 'transform scale-105'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Animated Quote */}
          {index === currentSlide && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto px-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-sm p-8 animate-fade-in">
                  <blockquote className="text-white font-serif animate-scale-in">
                    <span className="text-3xl md:text-5xl leading-relaxed tracking-wide">
                      <span className="text-4xl md:text-6xl">"</span>
                      {slide.quote.split(' ').map((word, wordIndex) => (
                        <span 
                          key={wordIndex}
                          className={`inline-block mx-1 ${
                            wordIndex % 3 === 0 ? 'text-3xl md:text-5xl' :
                            wordIndex % 3 === 1 ? 'text-2xl md:text-4xl' :
                            'text-3xl md:text-5xl'
                          }`}
                          style={{
                            animationDelay: `${wordIndex * 0.1}s`
                          }}
                        >
                          {word}
                        </span>
                      ))}
                      <span className="text-4xl md:text-6xl">"</span>
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default KaijuSlideshow;