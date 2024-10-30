import React from 'react';
import Image from 'next/image';

const WhyBuy: React.FC = () => {
  return (
    <section className="why-buy">
      <div className="why-buy-header row-center-between">
        <h2 className="section-title">Why buy from GID?</h2>
      </div>
      <div className="why-buy-list row-center-between">
        <div>
          <Image src="/images/quality.png" alt="quality" width={100} height={100} />
          <p>Quality</p>
          <p>We are industry veterans who take pride in our work</p>
        </div>
        <div>
          <Image src="/images/protection.png" alt="protection" width={100} height={100} />
          <p>Protection</p>
          <p>Avoid the dangers of risky trading in the gray market</p>
        </div>
        <div>
          <Image src="/images/access.png" alt="access" width={100} height={100} />
          <p>Access</p>
          <p>Our network of suppliers is ready and at your disposal</p>
        </div>
        <div>
          <Image src="/images/savings.png" alt="savings" width={100} height={100} />
          <p>Savings</p>
          <p>Maintain legacy systems to prevent costly downtime</p>
        </div>
        <div>
          <Image src="/images/speed.png" alt="speed" width={100} height={100} />
          <p>Speed</p>
          <p>Time is of the essence, and we are respectful of yours</p>
        </div>
      </div>

      <div className="about">

        <div className="about-content flex justify-between relative z-10">
          <div>
            <h1>About Industrial Trading</h1>
            <p>
              Industrial Trading is a website of <span>GID Industrial</span>, the world &apos;s premiere source for the sale and
              servicing of single board computers and related equipment.<br /><br />
              GID protects you from the pitfalls of trading in the gray market through its specialized procurement
              techniques and commitment to quality as documented in its ISO 9001:2015-certified Quality Management
              System.<br /><br />
              Should you experience any trouble at all, our team is ready to help however we can in order to solve the issue
              until you are completely satisfied with your purchase.
            </p>
          </div>
          <Image src="/images/about-logo.png" alt="about logo" width={100} height={100} />
        </div>
      </div>    
    </section>
  );
};

export default WhyBuy;