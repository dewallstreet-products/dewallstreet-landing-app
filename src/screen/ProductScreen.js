import React from "react";
import AboutCarousel from "../patterns/AboutCarousel";
import SharedTech from "../patterns/SharedTech";

import tech from "../assets/images/sharedTech.png";
import OpenTech from "../patterns/OpenTech";
import OpensourceProd from "../patterns/OpensourceProd";
import Customers from "../patterns/Customers";

const ProductScreen = () => {
  return (
    <div>
      <AboutCarousel
        heading="PRODUCTS WE BUILD"
        product="true"
        para=" All our products are affordable, quick to implement, and designed for the end-user.
        So your IT, customer service, sales, marketing, and HR teams can effortlessly create delightful experiences at scale."
      />
      <SharedTech
        heading="The process of building open source products"
        para="Innovation comes from everywhere. We help companies and developers identify and contribute to the projects that matter. Working together, the Open Source Community is addressing the challenges of industry and technology for the benefit of society. Code is power."
        image={tech}
      />
      <OpenTech/>
      <OpensourceProd/>
      <Customers/>
      
    </div>
  );
};

export default ProductScreen;
