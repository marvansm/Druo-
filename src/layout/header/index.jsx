import {
  AlignJustify,
  ChevronDown,
  Heart,
  ListIcon,
  Plus,
  Search,
  ShoppingBag,
  User2,
  X,

} from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss"
import { clsx } from "clsx";
const Header = () => {
  const [OpenModal, SetOpenModal] = useState([])
  useEffect(() => {
    SetOpenModal(false)
  }, [])

  return (
    <div>
      <div className={clsx(styles.header, "bg-[#f3f3f3] py-[20px]")}>
        <div className="container mx-auto max-w-[1300px] px-[15px]">
          <div className="flex items-center justify-between ">
            <div className="left">
              <ul className="flex items-center text-[#444] font-medium gap-3 text-[13px]">
                <li className="">(08)123 456 7890</li>
                <li>
                  <div className="border border-black/20 h-[20px]"></div>
                </li>
                <li>Store location</li>
              </ul>
            </div>
            <div className="center text-[#444] text-[15px] font-normal leading-[1.74]">
              <p>We are open with limited hours and staff.</p>
            </div>
            <div className="right">
              <ul className="flex items-center text-[#444] font-medium gap-3 text-[13px]">
                <li className="flex items-center gap-1 text-[13px] font-bold">
                  USD <ChevronDown size={17} />
                </li>
                <li>
                  <div className="border border-black/20 h-[20px]"></div>
                </li>
                <li>Login / Sign Up</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav py-[30px] border-b border-gray-200">
        <div className="container mx-auto max-w-[1300px] px-[15px]">
          <div className="flex items-center justify-between">
            <div className="left">
              <img
                className="max-w-[160px] h-full object-cover"
                src="https://drou-electronics-store.myshopify.com/cdn/shop/files/logo_300x300.png?v=1674276674"
                alt=""
              />
            </div>
            <div className={clsx(styles.search)}>
              <div className="flex items-center border border-gray-200 rounded-[5px] text-[15px] min-h-[52px] w-[560px] justify-between px-[20px]">
                <input
                  type="search"
                  placeholder="Search our store"
                  className="outline-none"
                />
                <Search color="#e52e06" />
              </div>
            </div>
            <div className="right">
              <ul className="flex items-center gap-3.5">
                <li className="hover:text-[#e52e06] duration-200 cursor-pointer">
                  <Heart size={35} strokeWidth={1} />
                </li>
                <li className="relative hover:text-[#e52e06] duration-200 cursor-pointer">
                  <ShoppingBag size={35} strokeWidth={1} />
                  <span className="bg-[#e52e06] text-[#fff] absolute -bottom-[5px] -right-[7px] w-[20px]  h-[20px] rounded-full flex items-center justify-center text-[12px]">
                    0
                  </span>
                </li>
                <li className="hover:text-[#e52e06] duration-200 cursor-pointer">
                  <User2 size={35} strokeWidth={1} />
                </li>
                <li className="hover:text-[#e52e06] duration-200 cursor-pointer">
                  <div onClick={() => SetOpenModal(true)} className={clsx(styles.burgerIcon)}>
                    <AlignJustify size={35} strokeWidth={1} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.pagination, "  border-b border-gray-200 py-[10px] w-full")}>
        <div className="container mx-auto max-w-[1300px] px-[15px]">
          <div className="flex items-center justify-between">
            <div className="left">
              <button className="flex items-center py-[20px] px-[45px] bg-[#e52e06] text-[#fff] uppercase rounded-[5px] font-semibold gap-1">
                <ListIcon /> All Categories
                <ChevronDown />
              </button>
            </div>
            <div className="center">
              <ul className="flex items-center text-[#333] gap-3.5 text-[16px] font-medium">
                <li className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer">
                  Home <ChevronDown size={15} />
                </li>
                <li className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer">
                  Electronics <ChevronDown size={15} />
                </li>
                <li className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer">
                  Blog <ChevronDown size={15} />
                </li>
                <li className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer">
                  Pages <ChevronDown size={15} />
                </li>
                <li className="hover:text-[#e52e06] duration-200 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="flex items-center gap-2.5 text-[#333]">
                <li className="text-[14px] font-normal">Hotline</li>
                <li className="text-[18px] font-bold">1800 - 1102</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {
        OpenModal && (
          <div className="fixed w-ful inset-0 h-full z-[9999] bg-[#00000063]">
            <div className="absolute left-0 bg-[#444] h-full w-[400px] p-5">
              <p className="text-[15px] font-normal leading-[1.74] text-[#fff] mb-5"> We are open with limited hours and staff.</p>
              <div className="flex items-center border border-gray-200 rounded-full text-[15px] min-h-[52px] w-full justify-between px-[20px] bg-[#fff] ">
                <input
                  type="search"
                  placeholder="Search our store"
                  className="outline-none "
                />
                <Search color="#e52e06" />
              </div>
              <div>
                <ul>
                  <li className="flex items-center">Home <Plus /></li>
                  <li className="flex items-center">Electronics <Plus /></li>
                  <li className="flex items-center">Blog <Plus /></li>
                  <li className="flex items-center">Pages <Plus /></li>
                  <li>Contact </li>
                </ul>
              </div>
              <div onClick={() => SetOpenModal(false)} className="bg-[#1f1f1f] absolute top-0 -right-10 w-[40px] h-[40px] flex items-center justify-center">
                <X color="white" />
              </div>
            </div>
          </div>

        )
      }
    </div>
  );
};

export default Header;
