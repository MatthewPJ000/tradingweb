import React from "react";
import Link from 'next/link';
import Product from "../shared/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Scrollbar,FreeMode } from 'swiper/modules';

interface FeaturedProductsProps {
  featuredProducts: Array<{
    product_images: { url: string }[];
    product_price: number;
    product_slug: string;
    product_name: string;
  }>;
  title: string; // Add title prop
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ featuredProducts, title }) => {
  return (
    <section className="featured-products">
      <div className="products-header row-center-between">
        <h1 className='section-title'>{title}</h1>
        <Link href="https://www.industrialtrading.net/categories">
          View all products
        </Link>
      </div>

      <div className="flex featured-products-center">
      <Swiper

          breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px

          1024: {
            slidesPerView: 2,
          },
          // when window width is >= 1440px
          1640: {
            slidesPerView: 3,
          },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          scrollbar={{
            hide: true,
          }}
         
          modules={[FreeMode, Scrollbar]}
          className="mySwiper"
          >
        {featuredProducts?.map((product, index) => (
          <SwiperSlide key={index}>
            <Product key={product.product_slug} product={product} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturedProducts;