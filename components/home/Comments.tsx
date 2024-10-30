import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Pagination,FreeMode } from 'swiper/modules';

const commentsData = 
[
  {
    "title": "Valuable Insights and Support for Trading Success",
    "content": "GID Trading has been a great ally in our trading. Their insights help us make quick decisions. They have quickly become a trusted advisor.",
    "author": "Emhart Investments"
  },
  {
    "title": "Exceptional Guidance for High Standards",
    "content": "GID Trading impressed us with their pricing and expert guidance. They took time to understand our goals and delivered seamless solutions.",
    "author": "Fuji Capital"
  },
  {
    "title": "Unmatched Knowledge and Support",
    "content": "Finding trustworthy advice is crucial in our industry. GID Trading has provided us with affordable solutions and expert insights that boosted our performance.",
    "author": "Applied Materials Investments"
  },
  {
    "title": "Dependable for Consistent Quality",
    "content": "We rely on GID Trading for steady guidance. Their advice is always relevant, even as market trends change. They respond quickly with valuable updates.",
    "author": "Vamco Financial"
  },
  {
    "title": "A Reliable Resource for Market Research",
    "content": "Working with GID Trading has made our market research easier. They provide in-depth insights and clear support. Their recommendations are always reliable.",
    "author": "Trican Financial Services"
  },
  {
    "title": "A Go-To for Market Analysis",
    "content": "When facing complex market conditions, we turn to GID Trading. They provide reliable data and trend analysis. Their personalized support boosts our confidence.",
    "author": "ConAgra Investments"
  }
]

  


const Comments: React.FC = () => {
  return (
    <section className="comments">
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
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {commentsData.map((comment, index) => (
          <SwiperSlide key={index}>
            <div className="comments-item p-6 border rounded-lg shadow-lg space-y-4 bg-white h-[350px] w-[auto] min-w-[300px] gap-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold w-1/2">{comment.title}</p>
                <div className="flex space-x-1 w-1/2">
                  {[...Array(5)].map((_, starIndex) => (
                    <Image key={starIndex} src="/images/star.png" alt="star" width={13} height={13} />
                  ))}
                </div>
              </div>
              <p>{comment.content}</p>
              <p className="font-medium text-gray-500">{comment.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Comments;