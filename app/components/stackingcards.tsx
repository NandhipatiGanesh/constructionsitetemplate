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
                  src='https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=1200&auto=format&fit=crop'
                  alt='Project 1'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[55%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-2 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='https://images.unsplash.com/photo-1476180814856-a36609db0493?w=1200&auto=format&fit=crop'
                  alt='Project 2'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[60%] align-bottom object-cover rounded-md shadow-xl'
                />
              </figure>
            </div>
            <div className='sticky top-4 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=1200&auto=format&fit=crop'
                  alt='Project 3'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[65%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-6 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=1200&auto=format&fit=crop'
                  alt='Project 4'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[70%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-8 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=1200&auto=format&fit=crop'
                  alt='Project 5'
                  className='transition-all duration-300 h-[80%] w-[90%] md:w-[75%] align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-12 w-full'>
              <figure className='w-full h-screen flex items-center justify-center'>
                <img
                  src='https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=1200&auto=format&fit=crop'
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