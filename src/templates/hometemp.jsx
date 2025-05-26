import React from "react";
import BannerSection from "../section/home/BannerSection";
import PopularCards from "../shared/PopularCards";
import PopularSection from "../section/home/PopularProducts";
import SpecialSection from "../section/home/SpecialSection";
import AllProducts from "../section/home/AllProducts";
import FeedBacks from "../section/home/FeedBacks";

const Hometemp = () => {
  return (
    <div>
      <BannerSection />
      <PopularSection />
      <SpecialSection />
      <AllProducts />
      <FeedBacks />
    </div>
  );
};

export default Hometemp;
