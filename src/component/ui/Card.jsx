import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

const PhishedCard = ({
  image,
  title,
  boldContent,
  simeContent,
  prevuesPage,
  nextPage,
  showPrevuesArrow,
  showNextArrow,
}) => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="flex gap-[42px] items-center">
        <Link
          to={prevuesPage}
          className=" max-sm:absolute max-sm:bottom-9 max-sm:left-[40%] -translate-x-[40%]"
        >
          <IoIosArrowDropleftCircle
            className={`hover:text-[#212d43]` + showPrevuesArrow}
            size={37}
            color="#243654"
          />
        </Link>
        <div className="sm:h-[700px] max-sm:max-h-[700px] bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-lg sm:w-[440px] max-sm:max-w-[440px] max-sm:mx-6">
          <div className="sm:h-[285px] max-sm:h-[285px] border-b rounded-md flex justify-center items-center">
            <img
              className="max-sm:h-full max-sm:w-full max-sm:object-cover"
              src={image}
              alt=""
            />
          </div>
          <div className="text-center sm:py-[55px] sm:px-[20px] max-sm:px-7 max-sm:py-10 max-sm:flex max-sm:flex-col gap-10">
            <h4 className="text-[#969191] text-sm sm:pb-[21px] font-[500]">
              {title}
            </h4>
            <h3 className="text-[#243654] font-[500] text-[1.8rem] leading-9 sm:pb-[50px]">
              {boldContent}
            </h3>
            <div className="text-[#807D7D] text-xs">{simeContent}</div>
          </div>
        </div>
        <Link
          to={nextPage}
          className=" max-sm:absolute max-sm:bottom-9 max-sm:right-[40%] translate-x-[40%]"
        >
          <IoIosArrowDroprightCircle
            className={`hover:text-[#212d43] ` + showNextArrow}
            size={37}
            color="#243654"
          />
        </Link>
      </div>
    </div>
  );
};

export default PhishedCard;
