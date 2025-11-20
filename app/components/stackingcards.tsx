'use client';
import { ReactLenis } from 'lenis/react';

export default function Index() {
  return (
    <ReactLenis root>
      <main className='bg-white'>
        <div className='wrapper'>
          <section className='text-black h-screen w-full bg-white grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Ongoing Projects 👇
            </h1>
          </section>
        </div>

        <section className='text-white w-full bg-white'>
          <>
            <div className='sticky top-0 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='/Apartment.jpg'
                  alt='Project 1'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[55%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-2 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='/ongoingp1.jpg'
                  alt='Project 2'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[60%] align-bottom object-cover rounded-md shadow-xl'
                />
              </figure>
            </div>
            <div className='sticky top-4 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='/ongoingp3.jpg'
                  alt='Project 3'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[65%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-6 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='/ongoing4.jpg'
                  alt='Project 4'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[70%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-8 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='/ongoingp5.jpg'
                  alt='Project 5'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[75%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-12 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='ongoing6.jpg'
                  alt='Project 6'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[80%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
          </>
        </section>

       
      </main>
    </ReactLenis>
  );
}