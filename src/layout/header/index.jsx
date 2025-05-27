import {
  AlignJustify,
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  ListIcon,
  Plus,
  Search,
  ShoppingBag,
  Twitter,
  User2,
  X,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { SelectContext } from "../../Providers/AddToCard";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [OpenModal, SetOpenModal] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    SetOpenModal(false);
  }, []);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log("Switched language", i18n.language);
  }, [i18n.language]);

  const locales = {
    en: { title: "En" },
    az: { title: "Az" },
    ru: { title: "Ru" },
  };

  const { Card, TotalPrice, RemoveProduct } = SelectContext();
  const { isSignedIn, isLoaded } = useUser();

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
                  <select
                    onChange={(e) => {
                      i18n.changeLanguage(e.target.value);
                    }}
                    id="language"
                    name="language"
                    value={i18n.language}
                  >
                    <option value="az">{locales.az.title}</option>
                    <option value="ru">{locales.ru.title}</option>
                    <option value="en">{locales.en.title}</option>
                  </select>
                </li>
                <li>
                  <div className="border border-black/20 h-[20px]"></div>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    Navigate("/register");
                  }}
                >
                  Login / Sign Up
                </li>
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
                onClick={() => Navigate("/")}
                className="max-w-[160px] h-full object-cover cursor-pointer"
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
                <li
                  onClick={() => Navigate("/checkout")}
                  className={clsx(
                    styles.bag,
                    "relative hover:text-[#e52e06] duration-200 cursor-pointer group"
                  )}
                >
                  <div>
                    <ShoppingBag size={35} strokeWidth={1} />
                    <span className="bg-[#e52e06] text-[#fff] absolute -bottom-[5px] -right-[7px] w-[20px]  h-[20px] rounded-full flex items-center justify-center text-[12px] ">
                      {Card.length > 0 ? Card.length : 0}
                    </span>
                  </div>
                  <div
                    className={clsx(
                      styles.basket,
                      " bg-[#fff] absolute w-[350px] h-[350px] z-[9999] flex flex-col right-0 top-14 py-4 px-3  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    )}
                  >
                    <div className="overflow-y-scroll h-[150px]">
                      {Card &&
                        Card.map((item, idx) => (
                          <div
                            key={idx}
                            className="box flex items-center justify-between gap-6.5 border-b border-black/10 p-4 "
                          >
                            <div className="boxImg w-[40px] h-auto relative">
                              <img
                                src={item?.image}
                                alt=""
                                className="w-full h-full object-contain"
                              />
                              <div className="absolute top-0 left-0 bg-amber-700 w-[19px] h-[20px] text-white rounded-full flex items-center justify-center text-[14px]">
                                <span>{item.quantity}</span>
                              </div>
                            </div>
                            <div className="boxBody">
                              <h2 className="title text-[15px] text-[#4f4f4f]">
                                {item?.title}
                              </h2>
                              <h3 className="font-semibold text-[#e52e06]">
                                $ {item?.price}
                              </h3>
                            </div>
                            <div
                              onClick={() => {
                                RemoveProduct(item.id);
                              }}
                              className=""
                            >
                              <X size={20} color="black" />
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="total border-b border-black/10 p-4 ">
                      <ul className="flex items-center justify-between">
                        <li className="text-black font-medium">Total:</li>
                        <li className="font-semibold text-[#e52e06]">
                          $ {TotalPrice()}
                        </li>
                      </ul>
                    </div>
                    <div className="total border-b border-black/10 p-4 absolute bottom-0 flex justify-center items-center ">
                      <ul className="flex items-center w-full gap-2">
                        <li className="w-full ">
                          <button className="text-[15px] bg-[#323232] font-bold py-[17px] px-[32px] text-[#fff] rounded-[50px] hover:bg-[#e52e06] duration-300 cursor-pointer ">
                            View cart
                          </button>
                        </li>
                        <li>
                          <button className="text-[15px] bg-[#323232] font-bold py-[17px] px-[32px] text-[#fff] rounded-[50px] hover:bg-[#e52e06] duration-300 cursor-pointer">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {isSignedIn && isLoaded ? (
                  <li className="hover:text-[#e52e06] duration-200 cursor-pointer ">
                    <div className="flex items-center justify-center">
                      <UserButton />
                    </div>
                  </li>
                ) : (
                  <li
                    onClick={() => {
                      Navigate("/register");
                    }}
                    className="hover:text-[#e52e06] duration-200 cursor-pointer "
                  >
                    <User2 size={35} strokeWidth={1} />
                  </li>
                )}
                <li className="hover:text-[#e52e06] duration-200 cursor-pointer">
                  <div
                    onClick={() => SetOpenModal(true)}
                    className={clsx(styles.burgerIcon)}
                  >
                    <AlignJustify size={35} strokeWidth={1} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          styles.pagination,
          "  border-b border-gray-200 py-[10px] w-full"
        )}
      >
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
                <li
                  onClick={() => Navigate("/")}
                  className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer"
                >
                  {t("navbar.home")} <ChevronDown size={15} />
                </li>
                <li className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer">
                  {t("navbar.electronics")} <ChevronDown size={15} />
                </li>
                <li className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer">
                  {t("navbar.Blog")} <ChevronDown size={15} />
                </li>
                <li className="flex items-center hover:text-[#e52e06] duration-200 cursor-pointer">
                  {t("navbar.Pages")} <ChevronDown size={15} />
                </li>
                <li className="hover:text-[#e52e06] duration-200 cursor-pointer">
                  {t("navbar.contact")}
                </li>
              </ul>
            </div>
            <div className="right">
              <ul className="flex items-center gap-2.5 text-[#333]">
                <li className="text-[14px] font-normal">{t("navbar.hotline")}</li>
                <li className="text-[18px] font-bold">1800 - 1102</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {OpenModal && (
        <div className="fixed w-ful inset-0 h-full z-[9999] bg-[#00000063]">
          <div className="absolute left-0 bg-[#444] h-full w-[400px] p-5 overflow-y-scroll z-[9999999]">
            <p className="text-[15px] font-normal leading-[1.74] text-[#fff] mb-5">
              We are open with limited hours and staff.
            </p>
            <div className="flex items-center border border-gray-200 rounded-full text-[15px] min-h-[52px] w-full justify-between px-[20px] bg-[#fff] ">
              <input
                type="search"
                placeholder="Search our store"
                className="outline-none "
              />
              <Search color="#e52e06" />
            </div>
            <div className="w-full mt-10">
              <ul className="text-[#fff] flex flex-col gap-5">
                <li className="flex items-center justify-between">
                  Home <Plus strokeWidth={1} />
                </li>
                <li className="flex items-center justify-between">
                  Electronics <Plus strokeWidth={1} />
                </li>
                <li className="flex items-center justify-between">
                  Blog <Plus strokeWidth={1} />
                </li>
                <li className="flex items-center justify-between">
                  Pages <Plus strokeWidth={1} />
                </li>
                <li>Contact </li>
              </ul>
            </div>
            <div className="my-5 border-b border-white/20 py-5 w-full">
              <button className="flex items-center py-[20px] px-[45px] bg-[#e52e06] text-[#fff] uppercase rounded-[5px] font-semibold gap-1 w-full justify-between">
                <ListIcon /> All Categories
                <ChevronDown />
              </button>
            </div>
            <div className="my-5 border-b border-white/20 py-5">
              <ul className="text-[#fff]">
                <li>Store location</li>
                <li>Log In / Sign Up</li>
                <li>(08)123 456 7890</li>
                <li>currency:USD</li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-1.5">
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Facebook size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Instagram size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Linkedin size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Youtube size={18} />
                </li>
                <li className="w-[40px] h-[40px] bg-[#fff] p-2 rounded-full flex items-center justify-center">
                  <Twitter size={18} />
                </li>
              </ul>
            </div>
            <div
              onClick={() => SetOpenModal(false)}
              className="bg-[#1f1f1f] absolute top-0 right-0 w-[40px] h-[40px] flex items-center justify-center"
            >
              <X color="white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
