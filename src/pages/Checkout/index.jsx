import React from "react";
import { SelectContext } from "../../Providers/AddToCard";
import { X } from "lucide-react";

const CheckoutPage = () => {
  const { Card, RemoveProduct, IncreaseProduct, TotalPrice } = SelectContext();
  return (
    <div class="bg-gray-100  py-8">
      <div class="container mx-auto max-w-[1300px] px-[15px]">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full">
            <div class="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-300">
              <table class="w-full">
                <thead className="">
                  <tr>
                    <th class="text-left font-semibold ">Product</th>
                    <th class="text-left font-semibold">Price</th>
                    <th class="text-left font-semibold">Quantity</th>
                    <th class="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Card &&
                    Card.map((item, idx) => (
                      <tr key={idx}>
                        <td class="py-4">
                          <div class="flex items-center">
                            <img
                              class="h-16 w-16 mr-4"
                              src={item?.image}
                              alt=""
                            />
                            <span class="font-semibold">{item?.title}</span>
                          </div>
                        </td>
                        <td class="py-4">${item?.price}</td>
                        <td class="py-4">
                          <div class="flex items-center">
                            <button
                              onClick={() => {
                                RemoveProduct(item?.id);
                              }}
                              class="border rounded-md py-2 px-4 mr-2"
                            >
                              -
                            </button>
                            <span class="text-center w-8">
                              {item?.quantity}
                            </span>
                            <button
                              class="border rounded-md py-2 px-4 ml-2"
                              onClick={() => {
                                IncreaseProduct(item?.id);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td class="py-4"> ${TotalPrice()}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
