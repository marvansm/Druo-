import { ArrowRight, MoveRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import PopularCards from "../../../shared/PopularCards";

const AllProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/product");
      return res.json();
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p className="flex items-center justify-center bg-[#ff00008b]">
        Error: {error.message}
      </p>
    );
  return (
    <div className="overflow-hidden">
      <div className="container mx-auto max-w-[1300px] px-[15px]">
        <ul className="flex items-center justify-between">
          <li className="text-[30px] font-medium text-[#323232]">
            Popular products
          </li>
          <li className="flex items-center gap-1.5 text-[15px] font-bold text-[#333] hover:text-[#E52E06] duration-300 cursor-pointer">
            View all aroducts{" "}
            <MoveRight size={14} strokeWidth={3} color="#E52E06" />
          </li>
        </ul>
        <div className="">
          <Swiper
            slidesPerView={4}
            loop={true}
            spaceBetween={10}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full "
          >
            {data &&
              data.map((item, idx) => (
                <SwiperSlide className="p-2">
                  <PopularCards
                    key={idx}
                    image={item?.image}
                    title={item?.title}
                    hoverImg={item?.hoverImage}
                    price={item?.price}
                    discountprice={item?.discountPrice}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
