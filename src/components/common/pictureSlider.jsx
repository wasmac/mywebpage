import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PictureSlider = () => {
  return (
    <div className=" flex w-screen h-40 bg-pink-500 text-white items-center justify-center text-5xl">
      <Carousel autoPlay>
        <div>
          <strong>Yo</strong>
        </div>
        <div>
          <strong>Bo</strong>
        </div>
      </Carousel>
    </div>
  );
};

export default PictureSlider;
