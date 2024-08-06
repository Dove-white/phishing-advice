import React from "react";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { LuInfo } from "react-icons/lu";
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
    <div className="w-full my-5 min-h-[100vh] flex flex-col justify-center items-center">
      <div className="flex sm:gap-[42px] items-center">
        <Link
          to={prevuesPage}
          className={
            `max-sm:absolute left-0 max-sm:ml-3 p-3 border-2 border-[#2635AA] rounded-full hover:bg-[#EBEDFE] transition-all ` +
            showPrevuesArrow
          }
        >
          <FaArrowLeftLong size={20} color="#2635AA" />
        </Link>
        <div className="min-h-[550px] bg-white shadow-lg rounded-[2rem] sm:w-[470px] max-sm:max-w-[440px] max-sm:mx-6 max-sm:my-8">
          <div className="sm:h-[285px] max-sm:h-[285px] rounded-md flex justify-center items-center">
            <img
              className="max-sm:h-full max-sm:w-full max-sm:object-cover"
              src={image}
              alt=""
            />
          </div>
          <div className="text-center sm:py-[40px] sm:px-[3rem] max-sm:px-7 max-sm:py-10 max-sm:flex max-sm:flex-col gap-5">
            <div className="flex justify-center mb-2">
              {title === "first" ? (
                <>
                  <div className="text-[1rem] font-medium px-3 py-1  bg-[#FEEFEF] w-fit rounded-full text-[#B42318] flex items-center gap-2">
                    <FaExclamationTriangle /> You are at risk
                  </div>
                </>
              ) : (
                <>
                  {title !== "last" && (
                    <div className="text-[1rem] font-medium px-3 py-1  bg-[#EBEDFE] w-fit rounded-full text-[#2635AA] flex items-center gap-2">
                      <LuInfo /> Tip #{title}
                    </div>
                  )}
                </>
              )}
            </div>
            <h3 className="text-[#262626] font-[600] text-[1.5rem] sm:pb-[20px]">
              {boldContent}
            </h3>
            <div className="text-[#595959] text-[1.15rem]">{simeContent}</div>
          </div>
        </div>
        <Link
          to={nextPage}
          className={
            `max-sm:absolute right-0 max-sm:mr-3 p-3 border-2 border-[#2635AA] rounded-full hover:bg-[#EBEDFE] transition-all ` +
            showNextArrow
          }
        >
          <FaArrowRight size={20} color="#2635AA" />
        </Link>
      </div>
    </div>
  );
};

export default PhishedCard;
