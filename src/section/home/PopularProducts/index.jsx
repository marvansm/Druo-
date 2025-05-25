import React from "react";
import PopularCards from "../../../shared/PopularCards";
import { useQuery } from "@tanstack/react-query";

const PopularSection = () => {
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
    <div>
      {data &&
        data.map((item, idx) => (
          <PopularCards
            key={idx}
            image={item?.image}
            title={item?.title}
            hoverImg={item?.hoverImage}
            price={item?.price}
            discountprice={item?.discountPrice}
          />
        ))}
    </div>
  );
};

export default PopularSection;
