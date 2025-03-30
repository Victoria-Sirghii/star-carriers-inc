import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinkToTop from "./LinkToTop";
import Button from "./Button";

const ImgAnimation = ({ images, children }) => {
  const [currentImg, setcurrentImg] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentImg(images[Math.floor(Math.random() * images.length)]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[500px] w-full bg-blue-50 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={currentImg}
          alt="Random"
          className="object-cover w-full h-full transition-opacity duration-700" // Smooth transition
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full md:w-2/3 text-center">
          {children}
          <LinkToTop to="/contact">
            <Button type="secondary">Request a Quote</Button>
          </LinkToTop>
        </div>
      </div>
    </div>
  );
};

ImgAnimation.propTypes = {
  images: PropTypes.array,
  children: PropTypes.node,
};

export default ImgAnimation;
