import React from "react";
import TopBrands from "../components/Home/TopBrands/TopBrands";
import BestSeller from "../components/Home/BestSeller/BestSeller";
import ExclusiveDiscount from "../components/Home/Exclusive_discount/ExclusiveDiscount";
import ShopByCategory from "../components/Home/ShopByCategory/ShopByCategory";
import Subscription from "../components/Home/Subscription/Subscription";
import NewArrivals from "../components/Home/NewArrivals/NewArrivals";
import BlogCards from "../components/Home/BlogCards/BlogCards";
import BrandProducts from "../components/Home/BrandsProduct/BrandProducts";

const Home = () => {
  return (
    <>
      <BestSeller />
      <TopBrands />
      <ExclusiveDiscount />
      <ShopByCategory />
      <NewArrivals />
      <BlogCards />
      <BrandProducts />
      <Subscription />

    </>
  );
};

export default Home;
