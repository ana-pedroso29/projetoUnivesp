// components/Slider.tsx
"use client"
import { useState } from 'react';

export default function Slider(){
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/adote-cachorro 02.png",
    "/adotar01.jpg",
    "/adote-cachorro 03.png",
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="relative flex justify-center items-center min-h-[800px] max-w-[900px] mx-auto ">
    <div className="overflow-hidden rounded-lg w-full max-w-[900px] flex justify-center items-center">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide}
          alt={`Slide ${idx + 1}`}
          className="w-full h-[600px] object-cover"
        />
      ))}
    </div>
  </div>

  {/* Botões de Navegação */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 rounded-full bg-pink-400 text-white hover:bg-pink-600 flex items-center justify-center"
  >
    <img src="/caret-left-solid.svg" alt="seta para esquerda" className="w-12 h-12" />
  </button>
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 rounded-full bg-pink-400 text-white hover:bg-pink-600 flex items-center justify-center"
  >
    <img src="/caret-right-solid.svg" alt="seta para direita" className="w-12 h-12"/>
  </button>

  {/* Indicadores de Ponto */}
  <div className="absolute flex gap-2 bottom-4 left-1/2 transform -translate-x-1/2">
    {slides.map((_, idx) => (
      <span
        key={idx}
        className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-pink-600' : 'bg-gray-300'}`}
      ></span>
    ))}
  </div>
</div>


  );
};

