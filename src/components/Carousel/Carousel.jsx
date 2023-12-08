/* eslint-disable no-unused-vars */
import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Carousel() {
  const [curr, setCurr] = useState(0);
  const nextImg = () => {
    setCurr((curr) => (curr === carousel.length - 1 ? 0 : curr + 1));
  };
  const prevImg = () => {
    setCurr((curr) => (curr === 0 ? carousel.length - 1 : curr - 1));
  };
  const carousel = [
    {
      id: 1,
      img: "https://marathon.edu.vn/images/middle-banner-promo-thang10-pc.png",
    },
    {
      id: 2,
      img: "https://marathon.edu.vn/images/middle-banner-codi-pc.png",
    },
    {
      id: 3,
      img: "https://png.pngtree.com/background/20210711/original/pngtree-children-s-education-training-web-design-flat-background-banner-picture-image_1095340.jpg",
    },
    {
      id: 4,
      img: "https://marathon.edu.vn/images/middle-banner-promo2-pc.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(()=>{
         nextImg();
      },3000)
      return () => clearInterval(interval)
    }, []);

  return (
    <div className="flex justify-center m-auto relative">
      <button style={{ marginTop:'90px',marginRight:'20px'}} onClick={prevImg}><ArrowBackIosNewIcon/></button>
      <div
        className="relative xl:w-[75%] w-[90%] block h-56 bg-cover rounded-lg md:h-96 transition duration-500 ease-in-out mt-20"
        style={{
          backgroundImage: `url(${carousel[curr].img})`,
        }}
      ></div>
      <button style={{ marginTop:'90px',marginLeft:'20px'}} onClick={nextImg}><ArrowForwardIosIcon/></button>
    </div>
  );
}

export default Carousel;
