import React from "react";
import Contact from "./contact";

const Hero = () => {
  return (
    <div className=" z-[1]  justify-between m-auto st">
      <div className=" w-[600px] h-[141px] flex text-left px-5 py-5">
        <div className="flex flex-col">
          <div className="flex flex-col font-bold text-4xl leading-10">
            <div className="text-yellow-400 leading-10">
              User-Centric Excellence <span className="text-black">: Our</span>
            </div>
            <div className="mx-2 font-extrabold leading-10">
              App development services
            </div>
            <div>Tackles Your Pain Points</div>
          </div>
          <div>
            Experience a Seamless Digital Journey with Desun - Where Every Line
            of Code Resolves Your Challenges and Elevates Your App Experience to
            Unparalleled Heights.
          </div>
          <div className=" mt-7"> <Contact/>
          </div>
          
        </div>
        <div className=" ">
        <img 
          className=" absolute right-0 bottom z-[5]  mb-48  "
          src="/Group 1.png"
          alt="Group 1 Image"
        />
      </div>
  
      </div>
  
      
    </div>
  );
};

export default Hero;
