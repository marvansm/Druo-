import React from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
const SpecialSection = () => {
  return (
    <div className="container mx-auto max-w-[1300px] px-[15px] my-17">
      <div className="overflow-hidden">
        <div
          className={clsx(
            styles.box,
            " bg-[url(https://drou-electronics-store.myshopify.com/cdn/shop/files/slide61.jpg?v=1674276677)] bg-cover bg-no-repeat bg-center transition-all duration-500 hover:scale-110 h-[450px] flex items-center justify-center overflow-hidden"
          )}
        >
          <div className="content flex items-center flex-col gap-2.5 pb-20">
            <h2 className="text-[15px]  uppercase text-[#666666] ">
              30 NOV - 03 DEC
            </h2>
            <h3 className="text-[#323232] text-[24px] font-normal">
              The wait is on iPhone 14 max pro
            </h3>
            <h4 className="text-[#E5573D] text-[24px] font-bold">$999.00</h4>
            <button className="text-[14px] bg-[#E52E06] text-[#fff] font-bold rounded-[50px] py-[9px] px-[22px] ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
