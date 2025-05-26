import React from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { Toaster, toast } from "sonner";
import {
  ChartNoAxesColumnIncreasing,
  Heart,
  ShoppingBagIcon,
} from "lucide-react";

const PopularCards = ({
  image,
  hoverImg,
  title,
  discountprice,
  price,
  addtocard,
}) => {
  return (
    <div>
      <div className={clsx(styles.box, "h-full min-h-[350px] ")}>
        <div className={clsx(styles.boxImg, "h-[250px]")}>
          <img className="w-full h-full object-cover" src={image} alt="" />
          <div className={clsx(styles.icons)}>
            <ul className="flex items-center gap-2">
              <li
                onClick={addtocard}
                className="bg-[#333] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e4573d] duration-300"
              >
                <ShoppingBagIcon color="white" size={19} />
              </li>
              <li className="bg-[#333] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e4573d] duration-300">
                <Heart color="white" size={19} />
              </li>
              <li className="bg-[#333] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#e4573d] duration-300">
                <ChartNoAxesColumnIncreasing color="white" size={19} />
              </li>
            </ul>
          </div>
          <div className={clsx(styles.hoverImg, "h-[250px]")}>
            <img src={hoverImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="boxBody flex items-center flex-col min-h-[100px]  p-5">
          <h2 className="text-[#333]">{title}</h2>
          <div className="price flex items-center gap-2.5">
            <span className="text-[18px] text-[#e52e06] font-bold">
              ${discountprice}
            </span>
            <span className="line-through text-[15px]">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCards;
