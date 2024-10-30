// components/Header.tsx
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2 bg-glass-100 shadow-md w-4/5 mt-8 lg:mt-6 xl:px-2 mx-auto">
      <Link href="/" className="group flex items-center gap-2 outline-none">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="0.6"
          stroke="currentColor"
          className="h-10 w-10 shrink-0 stroke-primary transition-transform group-hover:rotate-12 dark:stroke-white"
          aria-hidden="true"
        >
          <path
            d="M5.24854 17.0952L18.7175 6.80301L14.3444 20M5.24854 17.0952L9.79649 18.5476M5.24854 17.0952L4.27398 6.52755M14.3444 20L9.79649 18.5476M14.3444 20L22 12.638L16.3935 13.8147M9.79649 18.5476L12.3953 15.0668M4.27398 6.52755L10.0714 13.389M4.27398 6.52755L2 9.0818L4.47389 8.85643M12.9451 11.1603L10.971 5L8.65369 11.6611"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-2xl font-bold text-primary dark:text-white">MANIFOLD</span>
      </Link>

      <div className="flex items-center gap-2">
        <Link href="/about">
          <button className="btn btn-link text-sm">About</button>
        </Link>
        <Link href="/browse">
          <button className="btn btn-link hidden text-sm lg:flex">Browse</button>
        </Link>
        <Link href="/election">
          <button className="btn btn-link hidden text-sm lg:flex">US Election</button>
        </Link>
        <button className="btn btn-link hidden text-sm lg:flex">Get app</button>
        <button className="btn btn-outline btn-sm text-primary dark:text-white">Sign in</button>
        <button className="btn btn-primary btn-sm hidden lg:flex">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
