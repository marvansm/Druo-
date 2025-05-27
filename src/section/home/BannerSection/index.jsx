import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const BannerSection = () => {
  return (
    <div className="container mx-auto max-w-[1300px] px-[15px] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 my-6">
        <div className="md:col-span-2 ">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            loop={true}
            className="mySwiper h-full"
          >
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/files/new-s1_b9ecc0a5-4779-4351-86ac-7947dd6afc81.jpg?v=1674276677"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-[30px] left-[20px] sm:bottom-[40px] sm:left-[40px] md:bottom-[60px] md:left-[60px] h-auto flex items-start sm:items-start flex-col text-center sm:text-left w-[90%] sm:w-auto">
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
                  <h2 className="text-[#fff]  text-[18px] mg:text-[24px]  lg:text-[34px] leading-[48px] font-medium mb-[20px] text-left">
                    Up To 40% Off <br /> Premium Smart watch
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[26px] w-[60%] mb-[20px] text-left">
                    We work with global brand and have create an smart gadget
                    for you to make easiest life.
                  </p>
                  <button className="text-[#fff] hover:bg-[#e4573d] cursor-pointer duration-300 bg-[#323232] text-[15px] font-bold rounded-[50px] py-[14px] px-[42px]">
                    Buy now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://drou-electronics-store.myshopify.com/cdn/shop/files/new-s2.jpg?v=1674276675"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-[30px] left-[20px] sm:bottom-[40px] sm:left-[40px] md:bottom-[60px] md:left-[60px] flex items-start sm:items-start flex-col text-center sm:text-left w-[90%] sm:w-auto">
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
        <div className="grid grid-rows-2 gap-4  md:h-full">
          <div className="relative">
            <img
              src="https://drou-electronics-store.myshopify.com/cdn/shop/files/bnr1_grande.jpg?v=1674276675"
              alt=""
              className="w-full h-full object-cover "
            />
            <div className="absolute top-[20px] left-[10px] sm:top-[40px] sm:left-[20px] md:top-[60px] md:left-[40px] flex flex-col items-start sm:items-start text-center sm:text-left w-[90%] sm:w-auto">
              <ul className="text-[#fff] flex items-center gap-2 mb-[1px]">
                <li className="text-[15px] font-normal leading-[1.74] uppercase ">
                  Modern Mobile
                </li>
              </ul>
              <h2 className="text-[#fff] text-[24px] leading-[48px] font-normal mb-[1px] text-left">
                New Collection
              </h2>
              <h3 className="text-[#e4573d] text-[24px] font-bold">$99.00</h3>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://drou-electronics-store.myshopify.com/cdn/shop/files/nbnr22_grande.jpg?v=1674276675"
              alt=""
              className="w-full h-full object-cover "
            />
            <div className="absolute top-[20px] left-[10px] sm:top-[40px] sm:left-[20px] md:top-[60px] md:left-[40px] flex flex-col items-start sm:items-start text-center sm:text-left w-[90%] sm:w-auto">
              <ul className="text-[#fff] flex items-center gap-2 mb-[1px]">
                <li className="text-[15px] font-normal leading-[1.74] uppercase ">
                  Modern Mobile
                </li>
              </ul>
              <h2 className="text-[#fff] text-[24px] leading-[48px] font-normal mb-[1px] text-left">
                New Collection
              </h2>
              <h3 className="text-[#e4573d] text-[24px] font-bold">$99.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
