import { QuoteIcon } from "lucide-react";
import React from "react";

const FeedBacks = () => {
  return (
    <div className="container mx-auto max-w-[1300px] px-[15px] my-8">
      <div>
        <h2 className="text-[30px] font-medium">Customer love</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2   gap-4 mt-6">
        <div className="box bg-[#f8f8f8] py-[56px] px-[32px]">
          <h2 className="text-[20px] font-medium text-[#323232] flex items-center justify-between">
            Great quality!
            <img
              src="https://drou-electronics-store.myshopify.com/cdn/shop/t/33/assets/testimonial-icon.png"
              alt=""
              className="w-[34px] h-[28px] object-contain"
            />
          </h2>
          <p className="text-[18px] leading-[30px] text-[#333] mt-[22px] mb-[34px]">
            This is a great design and I hope that we will create a website with
            a good signature. Team90Degree team is reactive and kind. Thanks for
            the help so far.
          </p>
          <h3 className="text-[20px] font-bold text-[#323232]">David smith</h3>
          <h4 className="text-[15px] text-[#444]">Developer, Canada</h4>
        </div>
        <div className="box bg-[#f8f8f8] py-[56px] px-[32px]">
          <h2 className="text-[20px] font-medium text-[#323232] flex items-center justify-between">
            Great quality!
            <img
              src="https://drou-electronics-store.myshopify.com/cdn/shop/t/33/assets/testimonial-icon.png"
              alt=""
              className="w-[34px] h-[28px] object-contain"
            />
          </h2>
          <p className="text-[18px] leading-[30px] text-[#333] mt-[22px] mb-[34px]">
            This is a great design and I hope that we will create a website with
            a good signature. Team90Degree team is reactive and kind. Thanks for
            the help so far.
          </p>
          <h3 className="text-[20px] font-bold text-[#323232]">Ashley rosa</h3>
          <h4 className="text-[15px] text-[#444]">Designer, UK</h4>
        </div>
        <div className="box bg-[#f8f8f8] py-[56px] px-[32px]">
          <h2 className="text-[20px] font-medium text-[#323232] flex items-center justify-between">
            Great quality!
            <img
              src="https://drou-electronics-store.myshopify.com/cdn/shop/t/33/assets/testimonial-icon.png"
              alt=""
              className="w-[34px] h-[28px] object-contain"
            />
          </h2>
          <p className="text-[18px] leading-[30px] text-[#333] mt-[22px] mb-[34px]">
            This is a great design and I hope that we will create a website with
            a good signature. Team90Degree team is reactive and kind. Thanks for
            the help so far.
          </p>
          <h3 className="text-[20px] font-bold text-[#323232]">Luke hego</h3>
          <h4 className="text-[15px] text-[#444]">Managing, USA</h4>
        </div>
      </div>
    </div>
  );
};

export default FeedBacks;
