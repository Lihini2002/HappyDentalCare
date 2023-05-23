import React, { useState, useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineNavigateBefore, MdOutlineNavigateNext} from 'react-icons/md'
import Swipe from "react-easy-swipe";

const reviews = [
  {
    id: 1,
    name: 'Rosanna',
    review: '"Excellent service with friendly atmosphere from the entrance to the chair and back. Clean spotless environment with fully equipped modern clinic. I could relax knowing that I was in good and safe hands"',
  },
  {
    id: 2,
    name: 'Lasanthi',
    review: '"Dr. Dilrukshi Marasinghe is the most professional and skilled dentist that I have met so far. She takes time and explains the details of the necessary treatment and makes sure that the patient aware of what is happening. Thank you doctor and your staff for the great dental experience and care"',
  },
  {
    id: 3,
    name: 'Mark',
    review: '"The best dental care I have ever experienced! Professional and friendly staff made me feel like family… This is a great place to go take care of your teeth. Would highly recommend to anyone!!! "',
  },

  {
    id: 4,
    name: 'Nidarshana',
    review: '"Provided the best service for a reasonable price. Specially,  one of the cleanest places I have ever seenProvided the best service for a reasonable price. Specially,  one of the cleanest places I have ever seenProvided the best service for a reasonable price. Specially,  one of the cleanest places I have ever seen. "',
  },


];
function SlideshowRev() {
  
      const [currentSlide, setCurrentSlide] = useState(0);

      const nextSlide = () => {
        let newSlide =
          currentSlide === reviews.length - 1
            ? 0
            : currentSlide + 1;
        setCurrentSlide(newSlide);
      };
    
      const prevSlide = () => {
        let newSlide =
          currentSlide === 0
            ? reviews.length - 1
            : currentSlide - 1;
        setCurrentSlide(newSlide);
      };
  
      return (
        <div className="bg-[#1e2570] max-w-full mx-9 p-5  relative flex justify-start text-white">
        {reviews.map((slide, index) => {
          return (
            <div key={index}>
              <div   className={
                  index === currentSlide
                    ? "block w-full h-auto object-cover"
                    : "hidden"
                }>
                  <MdOutlineNavigateBefore size={64} onClick={prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer' />
                  <MdOutlineNavigateNext size={64}  onClick={nextSlide}  className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer ' />

                  <p className='text-2xl text-center p-4 font-serif ease-in'>{slide.review}</p>
                  <div className='flex text-[#ffc933] justify-center text-xl '>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                  </div>
                  <p className='text-center p-4 text-3xl'>{slide.name}</p>
                </div>
               
            </div>
          );
        })}
      </div>
  
      );

  }
  





        
export default SlideshowRev