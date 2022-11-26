import Image from "next/image";
import React, { Fragment } from "react";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="lg:grid grid-cols-2">
        {/* Text-section */}
        <div>
          {/* Heading */}
          <div>
            <h1></h1>
          </div>
          {/* Buy-Tickets */}
          <div className="lg:grid grid-cols-2">
            {/* image */}
            <div>
              <Image src="" alt="" />
            </div>
            {/* button&text */}
            <div>
              <p></p>
              <button></button>
            </div>
          </div>
        </div>
        {/* Image-Section */}
        <div></div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
