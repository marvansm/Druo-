import React from "react";
import PopularCards from "../../../shared/PopularCards";
import { useQuery } from "@tanstack/react-query";
import { SelectContext } from "../../../Providers/AddToCard";

const PopularSection = () => {
  const {
    AddToCard,
    RemoveProduct,
    ClearCard,
    IncreaseProduct,
    TotalPrice,
    Card,
  } = SelectContext();
  console.log(Card);
  const { data, isloading, error } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/product");
      return res.json();
    },
  });
  if (isloading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="container mx-auto max-w-[1300px] px-[15px] mt-20 ">
      <div className="border-2 border-[#e52e06] rounded-[5px]  relative">
        <div className="flex items-center justify-center">
          <ul className="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-[#fff] absolute w-[95%] px-3 py-3 flex-wrap gap-3 text-center">
            <li className="text-[24px] font-medium leading-1 text-[#323232] sm:text-[30px]">
              This week's deals
            </li>
            <li className="bg-[#e4573d] px-[20px] sm:text-[20px] text-[18px] text-[#fff] flex items-center gap-2 ">
              <span>End in :</span>
              <span className="font-semibold">212 :</span>
              <span className="font-semibold">09 :</span>
              <span className="font-semibold">19 :</span>
              <span className="font-semibold">23</span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 pt-15 px-8 pb-15 gap-4 w-full md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  sm:grid-cols-2">
          {data &&
            data.slice(0, 5).map((item, idx) => (
              <PopularCards
                key={idx}
                image={item?.image}
                title={item?.title}
                hoverImg={item?.hoverImage}
                price={item?.price}
                discountprice={item?.discountPrice}
                addtocard={() => {
                  AddToCard(item);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
