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
    <div className="bg-[rgb(255,255,255)] w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="flex gap-[42px] items-center">
        <Link to={prevuesPage}>
          <IoIosArrowDropleftCircle
            className={`hover:opacity-[0.9] ` + showPrevuesArrow}
            size={37}
            color="#243654"
          />
        </Link>
        <div className="h-[700px] bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-lg w-[440px]">
          <div className="h-[285px] border-b rounded-md flex justify-center items-center">
            <img className="object-cover" src={image} alt="" />
          </div>
          <div className="text-center py-[55px] px-[20px]">
            <h4 className="text-[#969191] text-sm pb-[21px] font-[500]">
              {title}
            </h4>
            <h3 className="text-[#243654] font-[500] text-[1.8rem] leading-9 pb-[50px]">
              {boldContent}
            </h3>
            <div className="text-[#807D7D] text-xs">{simeContent}</div>
          </div>
        </div>
        <Link to={nextPage}>
          <IoIosArrowDroprightCircle
            className={`hover:opacity-[0.9] ` + showNextArrow}
            size={37}
            color="#243654"
          />
        </Link>
      </div>
    </div>
  );
};

export default PhishedCard;
