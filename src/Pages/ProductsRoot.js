import React from "react";
import { Outlet } from "react-router-dom";

import classes from "./ProductsRoot.module.css";

import ProductNavbar from "../Components/Products/ProductNavbar";
import Comparament from "../Components/Products/Comparament";
import WhatYouGet from "../Components/WhatYouGet";
import CometeerRecipes from "../Components/CometeerRecipes";
import ReviewCarousel from "../Components/ReviewCarousel";
import CustomerReviews from "../Components/CustomerReviews";
import FAQs from "../Components/FAQs";

const ProductsRootLayout = () => {
  return (
    <div className={classes.background}>
      <Outlet />
      <ProductNavbar />
      <Comparament />
      <WhatYouGet />
      <CometeerRecipes />
      <ReviewCarousel />
      <CustomerReviews />
      <FAQs />
    </div>
  );
};

export default ProductsRootLayout;
