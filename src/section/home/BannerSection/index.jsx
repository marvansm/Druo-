import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const BannerSection = () => {
  return (
    <div className="container mx-auto max-w-[1300px] px-[15px]">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="md:col-span-2 ">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/files/new-s1_b9ecc0a5-4779-4351-86ac-7947dd6afc81.jpg?v=1674276677"
                  alt="Big"
                  class="w-full h-full object-cover"
                />
                <div className="absolute bottom-[60px] left-[60px] flex items-start flex-col">
                  <ul className="text-[#fff] flex items-center gap-2 mb-[20px]">
                    <li>
                      <button className="bg-[#e4573d] text-[#fff] rounded-[2px] py-[6px] px-[10px] leading-[1]">
                        -28%
                      </button>
                    </li>
                    <li className="text-[18px] font-normal leading-[1.74] ">
                      New iPhone Series
                    </li>
                  </ul>
                  <h2 className="text-[#fff] text-[34px] leading-[48px] font-medium mb-[20px] text-left">
                    Up To 40% Off <br /> Premium Smart watch
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[26px] w-[60%] mb-[20px] text-left">
                    We work with global brand and have create an smart gadget
                    for you to make easiest life.
                  </p>
                  <button className="text-[#fff] hover:bg-[#e4573d] cursor-pointer duration-300 bg-[#323232] text-[15px] font-bold rounded-[50px] py-[14px] px-[42px]">
                    {" "}
                    Buy now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/files/new-s2.jpg?v=1674276675"
                  alt="Big"
                  class="w-full h-full object-cover"
                />
                <div className="absolute bottom-[30px] left-[20px] md:bottom-[60px] md:left-[60px] flex items-start flex-col">
                  <ul className="text-[#fff] flex items-center gap-2 mb-[20px]">
                    <li>
                      <button className="bg-[#e4573d] text-[#fff] rounded-[2px] py-[6px] px-[10px] leading-[1]">
                        -28%
                      </button>
                    </li>
                    <li className="text-[18px] font-normal leading-[1.74] ">
                      New iPhone Series
                    </li>
                  </ul>
                  <h2 className="text-[#fff] text-[34px] leading-[48px] font-medium mb-[20px] text-left">
                    This week only <br /> up to sell 50% new item
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[26px] w-[60%] mb-[20px] text-left">
                    We work with global brand and have create an smart gadget
                    for you to make easiest life.
                  </p>
                  <button className="text-[#fff] hover:bg-[#e4573d] cursor-pointer duration-300 bg-[#323232] text-[15px] font-bold rounded-[50px] py-[14px] px-[42px]">
                    {" "}
                    Buy now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="grid grid-rows-2 gap-4 relative md:h-full">
          <img
            src="https://drou-electronics-store.myshopify.com/cdn/shop/files/bnr1_grande.jpg?v=1674276675"
            alt="Small 1"
            class="w-full h-full object-cover "
          />
          <div className="absolute  top-[90px] left-[20px] flex items-start flex-col">
            <ul className="text-[#fff] flex items-center gap-2 mb-[5px]">
              <li className="text-[15px] font-normal leading-[1.74] ">
                Modern Mobile
              </li>
            </ul>
            <h2 className="text-[#fff] text-[24px] leading-[48px] font-normal mb-[5px] text-left">
              New Collection
            </h2>
            <h3 className="text-[#e4573d] text-[24px] font-bold">$99.00</h3>
          </div>
          <img
            src="https://drou-electronics-store.myshopify.com/cdn/shop/files/nbnr22_grande.jpg?v=1674276675"
            alt="Small 2"
            class="w-full h-full object-cover "
          />
          <div className="absolute bottom-[40px] left-[20px] flex items-start flex-col">
            <ul className="text-[#fff] flex items-center gap-2 mb-[5px]">
              <li className="text-[15px] font-normal leading-[1.74] ">
                Modern Mobile
              </li>
            </ul>
            <h2 className="text-[#fff] text-[24px] leading-[48px] font-normal mb-[5px] text-left">
              New Collection
            </h2>
            <h3 className="text-[#e4573d] text-[24px] font-bold">$99.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
