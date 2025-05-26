import React from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#000000] pt-[70px] pb-[30px]">
        <div className="container mx-auto max-w-[1300px] px-[15px]">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="contact text-[#fff]">
              <h2 className="text-[20px] font-bold mb-2">Contact Us</h2>
              <ul className="text-[16px] leading-[32px]">
                <li>Drou Demo Store</li>
                <li>No. 1259 Freedom, New York</li>
                <li>United States</li>
                <li>+91-987654321</li>
                <li>demo@exampledemo.com</li>
              </ul>
            </div>
            <div className="Information text-[#fff]">
              <h2 className="text-[20px] font-bold mb-2">Information</h2>
              <ul className="text-[16px] leading-[32px] flex flex-col gap-1.5">
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  Product Support
                </li>
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  Checkout
                </li>
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  License Policy
                </li>
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  Affiliate
                </li>
              </ul>
            </div>
            <div className="Services text-[#fff]">
              <h2 className="text-[20px] font-bold mb-2">Customer Service</h2>
              <ul className="text-[16px] leading-[32px] flex flex-col gap-1.5">
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  Help Center
                </li>
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  Redeem Voucher
                </li>
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  Contact Us
                </li>
                <li className="hover:text-[red] duration-300 cursor-pointer">
                  Policies & Rules
                </li>
              </ul>
            </div>
            <div className="apps text-[#fff]">
              <h2 className="text-[20px] font-bold mb-2">Download Our App</h2>
              <p className="text-[15px] leading-[32px] mb-3">
                Download our App and get extra 15% Discount on your first
                Order..!
              </p>
              <ul className="flex items-center gap-1.5">
                <li className="w-[120px] sm:w-[140px]">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/app-store.jpg?v=1603274799"
                    alt=""
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </li>
                <li className="w-[120px] sm:w-[140px]">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/google-play.jpg?v=1603274809"
                    alt=""
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={clsx(
          styles.rights,
          "rights py-[15px] container mx-auto max-w-[1300px] px-[15px]"
        )}
      >
        <ul className="flex items-center justify-between">
          <li className="text-[15px] font-normal text-[#444]">
            Copyright © Team90Degree | Built with drou by Team90Degree.
          </li>
          <li>
            <img
              src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/payment-method.png?v=1603274813"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
