import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Book {
  title: string;
  summary: string;
  cover: string;
}

interface BookSlideshowProps {
  books: Book[];
}

const BookSlideshow: React.FC<BookSlideshowProps> = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [books.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  if (!books.length) return null;

  const currentBook = books[currentIndex];
  const isEvenIndex = currentIndex % 2 === 0;

  return (
    <div className="relative bg-card/90 backdrop-blur-sm rounded-sm shadow-elegant overflow-hidden max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-0 h-[500px]">
        {/* Book Cover - Left on even, Right on odd */}
        <div className={`relative ${isEvenIndex ? 'order-1' : 'order-2'} transition-opacity duration-1000 ease-in-out`}>
          <div className="h-full flex items-center justify-center p-12">
            <div className="relative group">
              <img 
                src={currentBook.cover} 
                alt={`${currentBook.title} cover`} 
                className="w-64 h-80 object-cover shadow-elegant rounded-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow"
              />
              {/* 3D Book Effect */}
              <div className="absolute top-3 left-3 w-full h-full bg-ink/30 rounded-sm -z-10"></div>
            </div>
          </div>
        </div>

        {/* Book Summary - Right on even, Left on odd */}
        <div className={`flex items-center p-12 ${isEvenIndex ? 'order-2' : 'order-1'} transition-opacity duration-1000 ease-in-out`}>
          <div className="w-full">
            <h3 className="text-3xl font-serif text-ink mb-6 tracking-wide">
              {currentBook.title}
            </h3>
            <div className="w-20 h-[2px] bg-sun-red mb-8"></div>
            <div className="h-48 overflow-hidden">
              <p className="text-base text-ink leading-relaxed font-serif">
                {currentBook.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-ink/90 text-paper p-3 rounded-full hover:bg-ink transition-all duration-300 hover:scale-110 shadow-elegant backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-ink/90 text-paper p-3 rounded-full hover:bg-ink transition-all duration-300 hover:scale-110 shadow-elegant backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-sun-red scale-125' : 'bg-ink/50 hover:bg-ink/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-ink/30">
        <div 
          className="h-full bg-gradient-to-r from-sun-red to-primary transition-all duration-1000 ease-out"
          style={{ width: `${((currentIndex + 1) / books.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default BookSlideshow;