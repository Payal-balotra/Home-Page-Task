import React from "react";
import Header from "../Components/Header"
import Categories from "../Components/Categories";
import Offers from "../Components/Offers";
import Collections from "../Components/Collections";
import ProductSection from "../Components/ProductsSection";
import CategorySection from "../Components/CategorySection";
import ShopByGender from "../Components/ShopByGender";
import CommentsSec from "../Components/CommentsSec"
import NewsSection from "../Components/NewsSection";
import EmailSignup from "../Components/EmailSignup";
import InfoSection from "../Components/InfoSection";
export default function Dashboard() {
  return (
    <div>
      <div >
        <Header />
        <Categories/>
        <Offers/>
        <Collections/>
         <ProductSection
        title="TRENDING PRODUCTS"
        filterKey="TRENDING"
      />

      <ProductSection
        title="BEST SELLERS"
        filterKey="BESTSELLERS"
      />
      <CategorySection/>
      <ShopByGender/>
      <CommentsSec/>
      <NewsSection/>
      <EmailSignup/>
      <InfoSection/>
      </div>
    </div>
  )
}
