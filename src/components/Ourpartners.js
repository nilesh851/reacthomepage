import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

export default function Ourpartners(props) {
    return(
        <section id="ourpartners" className="ourpartners pb-5">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header mb-3">
            <h2>Our Partners</h2>
            </div>
           <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={4}
              autoPlay={true}
              modules={FreeMode}
              
              className="mySwiper"
                 >
               <SwiperSlide>
                <div className="ourpartner-item">
                  <img src="https://bimamandi.in/images/company-logo/raheja-qbe.png" className="ourpartner-img" alt="aditya-birla-health"/>
                </div>
              </SwiperSlide>
               <SwiperSlide>
                <div className="ourpartner-item">
                  <img src="https://bimamandi.in/images/img/Reliance-General-Insurance.png" className="ourpartner-img" alt="shriramcapital"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ourpartner-item">
                  <img src="https://bimamandi.in/images/company-logo/canara.jpg" className="ourpartner-img" alt="canara"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="ourpartner-item">
                <img src="https://bimamandi.in/images/company-logo/canara.jpg" className="ourpartner-img" alt="canara"/>
                </div>
              </SwiperSlide> 
              <SwiperSlide>
                <div className="ourpartner-item">
                <img src="https://bimamandi.in/images/company-logo/Cholainsurancelogo.jpg" className="ourpartner-img" alt="manipalcignahealthinsurance"/>
                </div>
              </SwiperSlide>
               <SwiperSlide>
                <div className="ourpartner-item">
                 <img src="https://bimamandi.in/images/company-logo/Kotak-Life-Insurance-Company.jpg" className="ourpartner-img" alt="Kotak-Life-Insurance-Company"/>
               </div>
              </SwiperSlide> 
                <SwiperSlide>
                <div className="ourpartner-item">
                <img src="https://bimamandi.in/images/company-logo/Pnb-metlife-logo.jpg" className="ourpartner-img" alt="Pnb-metlife-logo"/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ourpartner-item">
                  <img src="https://bimamandi.in/images/company-logo/SBI_Genral_Insurance.jpg" className="ourpartner-img" alt="SBI_Genral_Insurance"/>
                </div>
                </SwiperSlide>
    </Swiper>
    <div className="swiper-pagination"></div>
          </div>
      </section>

      
    )
  
}
