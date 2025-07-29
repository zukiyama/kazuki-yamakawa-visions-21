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
    <div className="relative bg-card/90 backdrop-blur-sm rounded-sm shadow-soft overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
        {/* Book Cover - Left on even, Right on odd */}
        <div className={`relative ${isEvenIndex ? 'order-1' : 'order-2'}`}>
          <div className="h-full flex items-center justify-center p-8">
            <div className="relative group">
              <img 
                src={currentBook.cover} 
                alt={`${currentBook.title} cover`} 
                className="max-w-xs h-auto object-cover shadow-ink rounded-sm transition-transform duration-300 group-hover:scale-105"
              />
              {/* 3D Book Effect */}
              <div className="absolute top-2 left-2 w-full h-full bg-ink/20 rounded-sm -z-10"></div>
            </div>
          </div>
        </div>

        {/* Book Summary - Right on even, Left on odd */}
        <div className={`flex items-center p-8 ${isEvenIndex ? 'order-2' : 'order-1'}`}>
          <div>
            <h3 className="text-2xl font-elegant text-ink mb-4">
              {currentBook.title}
            </h3>
            <div className="w-16 h-[1px] bg-sun-red mb-6"></div>
            <p className="text-lg text-ink leading-relaxed font-body">
              {currentBook.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-ink/80 text-primary-foreground p-2 rounded-full hover:bg-ink transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-ink/80 text-primary-foreground p-2 rounded-full hover:bg-ink transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-sun-red' : 'bg-ink/40'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-ink/20">
        <div 
          className="h-full bg-sun-red transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / books.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default BookSlideshow;