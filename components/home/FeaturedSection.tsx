import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedSection: React.FC = () => {
  return (
    <div className="flex h-96 w-full flex-col overflow-hidden drop-shadow-sm sm:mt-4 sm:h-64 sm:flex-row">
      {/* Left Section */}
      <div className="relative z-30 h-[5%] w-full rounded-t-xl bg-indigo-200 sm:h-full sm:w-2/5 sm:rounded-l-xl sm:rounded-r-none">
      <div className="group absolute left-8 top-8 z-30 sm:top-32">
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md px-6 py-3 text-xl font-semibold text-white transition-transform transform bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:scale-105 hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
      >
        Sign up now!
      </button>

    </div>

        <div className="absolute left-8 top-6 sm:top-48 md:left-8">
          <div className="hidden text-right text-sm text-black sm:inline">
            <div className="text-ink-500 my-1.5 justify-center text-sm flex flex-row">
              Get
              <div className="coin-offset items-center whitespace-nowrap mx-1 flex flex-row">
                <Image src="/images/mana.svg" alt="Ṁ" width={16} height={16} className="inline-block mr-1" />
                1,000
              </div>
              and
              <div className="coin-offset items-center whitespace-nowrap mx-1 flex flex-row">
                <Image src="/images/sweepies.svg" alt="S" width={16} height={16} className="inline-block mr-1" />
                3.00
              </div>
              to start trading!
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative h-[95%] w-full rounded-b-xl bg-indigo-700 sm:h-full sm:w-3/5 sm:rounded-l-none sm:rounded-r-xl">
        <div className="animate-slide-up-1 sm:animate-slide-in-1 absolute left-8 top-[20%] z-20 w-4/5 select-none text-white sm:top-2 sm:z-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18" className="h-10 w-10 text-teal-200 dark:text-teal-800">
            <path d="M8.22,4.59c-.66,.37-1.19,.7-1.6,.97s-.82,.63-1.24,1.08c-.39,.42-.69,.86-.9,1.32-.21,.46-.36,1.05-.44,1.78h1.01c.87,0,1.55,.21,2.05,.64s.75,1.05,.75,1.88c0,.59-.22,1.14-.66,1.65s-1.05,.77-1.82,.77c-1.2,0-2.07-.4-2.58-1.18-.52-.79-.78-1.83-.78-3.12,0-.91,.2-1.74,.59-2.48,.39-.75,.87-1.42,1.43-2,.57-.6,1.18-1.11,1.83-1.53,.64-.42,1.18-.76,1.62-1.03l.76,1.26Z"/>
          </svg>
          <div className="ml-8">
            Manifold is engaging, great for testing out my predictions, and ultimately a ton of fun to play with!
          </div>
          <div className="justify-end flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18" className="h-10 w-10 rotate-180 text-teal-200 dark:text-teal-800">
              <path d="M8.22,4.59c-.66,.37-1.19,.7-1.6,.97s-.82,.63-1.24,1.08c-.39,.42-.69,.86-.9,1.32-.21,.46-.36,1.05-.44,1.78h1.01c.87,0,1.55,.21,2.05,.64s.75,1.05,.75,1.88c0,.59-.22,1.14-.66,1.65s-1.05,.77-1.82,.77c-1.2,0-2.07-.4-2.58-1.18-.52-.79-.78-1.83-.78-3.12,0-.91,.2-1.74,.59-2.48,.39-.75,.87-1.42,1.43-2,.57-.6,1.18-1.11,1.83-1.53,.64-.42,1.18-.76,1.62-1.03l.76,1.26Z"/>
            </svg>
          </div>
          <Link href="/SneakySly" target="_blank" rel="noopener noreferrer">
            <div className="group mt-2 justify-end gap-2 flex flex-row">
              <Image src="/images/snecko.jpeg" alt="Testimonial" width={40} height={40} className="h-10 w-10 rounded-full drop-shadow-sm" />
              <div className="text-sm flex flex-col">
                <div className="font-semibold transition-colors group-hover:text-teal-200">Anthony Giovannetti</div>
                <div className="font-thin text-indigo-200">Slay the Spire</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Vertical Line */}
        <div className="absolute -left-0.5 bottom-0 z-20 h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 16" className="h-full text-indigo-200">
            <path d="M0,0V16s3.03,0,3.03,0c.15-.52,.29-1.26,.27-2.19-.06-2.53-.86-4.21-1.64-5.87C.9,6.32,.15,4.73,.13,2.4,.13,1.57,.22,.7,.33,0H0Z"/>
          </svg>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-0 h-6 w-full">
          <div className="z-50 ml-40 flex flex-row">
            <div className="cursor-pointer p-1.5"><div className="h-2 w-2 rounded-full transition-colors bg-indigo-400"></div></div>
            <div className="cursor-pointer p-1.5"><div className="h-2 w-2 rounded-full transition-colors bg-white"></div></div>
            <div className="cursor-pointer p-1.5"><div className="h-2 w-2 rounded-full transition-colors bg-indigo-400"></div></div>
            <div className="cursor-pointer p-1.5"><div className="h-2 w-2 rounded-full transition-colors bg-indigo-400"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
