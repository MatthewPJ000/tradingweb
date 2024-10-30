import React from 'react';
import Trade from './trade';
import FeaturedProducts from './Products';
import FeaturedSection from './FeaturedSection';
import Comments from './Comments';
import TradeCard from './tradeCard';

function Services() {

  const featuredProducts = [
    {
      product_images: [{ url: '/images/products/product-1.jpeg' }],
      product_price: 199.99,
      product_slug: 'product-1',
      product_name: 'Product One',
    },
    {
      product_images: [{ url: '/images/products/product-2.jpeg' }],
      product_price: 299.99,
      product_slug: 'product-2',
      product_name: 'Product Two',
    },
    {
      product_images: [{ url: '/images/products/product-3.jpeg' }],
      product_price: 399.99,
      product_slug: 'product-3',
      product_name: 'Product Three',
    },
    {
      product_images: [{ url: '/images/products/product-4.jpeg' }],
      product_price: 499.99,
      product_slug: 'product-4',
      product_name: 'Product Four',
    },
    {
      product_images: [{ url: '/images/products/product-5.jpeg' }],
      product_price: 599.99,
      product_slug: 'product-5',
      product_name: 'Product Five',
    },
    {
      product_images: [{ url: '/images/products/product-6.jpeg' }],
      product_price: 699.99,
      product_slug: 'product-6',
      product_name: 'Product Six',
    },
    {
      product_images: [{ url: '/images/products/product-7.jpeg' }],
      product_price: 799.99,
      product_slug: 'product-7',
      product_name: 'Product Seven',
    },
    {
      product_images: [{ url: '/images/products/product-8.jpeg' }],
      product_price: 899.99,
      product_slug: 'product-8',
      product_name: 'Product Eight',
    },
    {
      product_images: [{ url: '/images/products/product-9.jpeg' }],
      product_price: 999.99,
      product_slug: 'product-9',
      product_name: 'Product Nine',
    },
    {
      product_images: [{ url: '/images/products/product-10.jpeg' }],
      product_price: 1099.99,
      product_slug: 'product-10',
      product_name: 'Product Ten',
    },
  ];
  
  return (
    <section className='w-3/5 flex flex-1 flex-col mt-8 lg:mt-6 xl:px-2 mx-auto '>
      
      <TradeCard />
      <Trade />
      <FeaturedProducts title='Trending Topics' featuredProducts={featuredProducts} />
      <Comments />
      <FeaturedSection />
    </section>
    
  );
}

export default Services;
