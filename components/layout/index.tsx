import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from './footers';
import Header from './header';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Beach Resort'}</title>
        <meta name="description" content="Beach Resort ― Hotel Room Booking System" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main style={{ overflow: 'auto' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;