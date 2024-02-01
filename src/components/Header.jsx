import React, { useState, useEffect } from 'react';
import HeaderImage1 from '../images/background-images/background-image4.jpg';
import HeaderImage2 from '../images/background-images/compounding.webp';
import HeaderImage3 from '../images/background-images/ant5.webp';
import HeaderImage4 from '../images/background-books.jpg';
import Marquee from "react-fast-marquee";


const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [HeaderImage1, HeaderImage2, HeaderImage3, HeaderImage4];

  useEffect(() => {
    // Set up an interval to change the image every 5 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="h-56 w-4/5 mx-auto rounded-xl bg-gradient-to-b from-blue-300 to-green-400 items-center flex justify-center">
      <div className="w-4/5 md:flex md:justify-evenly ">
        <div className="flex flex-col justify-center text-center  md:pt-6">
          <Marquee>
          <h3 className="p-2 text-center uppercase">Welcome to kuyant pharmacourse</h3>
          </Marquee>
          <Marquee>
          <p className="p-2 text capitalize">Your home of excellence</p>
          </Marquee>
        </div>
        <div className="my-4 flex items-center justify-center p-2">
          <img
            className="m-2 h-24 w-56 rounded-2xl"
            src={images[currentImageIndex]}
            alt="pharmacy-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
