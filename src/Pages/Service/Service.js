import React from "react";
import { CiAt } from "react-icons/ci";
import { TbPhone } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Service = () => {
  
  
  return (

  
    <div className="bg-[#115C8F] text-white pb-12 ">


<div className="flex flex-col w-full 	">
  <div className="divider"></div> 
</div>  
      <h1 className="text-center font-bold text-4xl pt-12  ">
        CONSTITUENT SERVICES
      </h1>

      
      <div className="flex gap-5 flex-wrap justify-center transform transition-all hover:scale-125 duration-300   mt-8 ">
        
        <div className="rounded-full  h-32 w-32	bg-[#0080D7]	">
          <div className="ml-7 pt-6 font-bold">
            <CiAt className="text-4xl ml-4  "></CiAt>
            <p>Email Me</p>
          </div>
        </div>
        <div className="rounded-full  h-32 w-32	bg-[#0080D7]	">
          <div className="ml-7 pt-6 font-bold">
            <TbPhone className="text-4xl ml-4  "></TbPhone>
            <p>Call Me</p>
          </div>
        </div>
        <div className="rounded-full  h-32 w-32	bg-[#0080D7]	">
          <div className="ml-7 pt-6 font-bold">
            <FaRegNewspaper className="text-4xl ml-4  "></FaRegNewspaper>
            <p className="pl-4">News</p>
          </div>
        </div>
        <div className="rounded-full  h-32 w-32	bg-[#0080D7]	">
          <div className="ml-7 pt-6 font-bold">
            <TbWorld className="text-4xl ml-4  "></TbWorld>
            <p className="pl-2">Visit us</p>
          </div>
        </div>
       
      
        <div className="flex flex-col w-full">
  <div className="divider "></div> 
</div>  
        </div>

    </div>
  );
};

export default Service;
