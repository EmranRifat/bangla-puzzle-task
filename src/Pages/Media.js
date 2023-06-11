import React from "react";
import img1 from "../Assets/1675939078.jpg";
import img2 from "../Assets/1676722175.jpg";
import img3 from "../Assets/1676722156.jpg";
import img4 from "../Assets/1675928329.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Media = () => {
  return (
 <div>
               <div  className='mt-8 bg-[#0080D7] relative'>
          <h1 className='text-3xl font-bold pl-20 py-8  text-white'>M E D I A - C O V E R A G E S</h1>


      
    
     <div className="carousel  lg:ml-96 py-12  max-w-lg gap-2  " >



     <div className="carousel-item">
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img2}alt="Shoes" className="rounded-xl" />
    
      </figure>

      <div className="card-body ">
      <p className="text-gray-400">Jan 15,2023</p>
        <h2 className="card-title">Anjir Liton received Shishu Sahitya Award</h2>
        <p>Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se... </p>
        <p className="font-bold underline"> Learn More</p>

      </div>
    </div>
      </div>
     
     
      <div className="carousel-item">
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img4}alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
      <p className="text-gray-400">Jan 15,2023</p>
        <h2 className="card-title">Anjir Liton received Shishu Sahitya Award</h2>
        <p>Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se... </p>
        <p className="font-bold underline"> Learn More</p>

      </div>
    </div>
      </div>
    
    
    
      <div className="carousel-item">
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img1}alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
      <p className="text-gray-400">Jan 15,2023</p>
        <h2 className="card-title">Anjir Liton received Shishu Sahitya Award</h2>
        <p>Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se... </p>
        <p className="font-bold underline"> Learn More</p>

      </div>
    </div>
      </div>

    
      <div className="carousel-item">
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img3}alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
      <p className="text-gray-400">Jan 15,2023</p>
        <h2 className="card-title">Anjir Liton received Shishu Sahitya Award</h2>
        <p>Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se... </p>
        <p className="font-bold underline"> Learn More</p>

      </div>
    </div>
      </div>
    
     
    
      

     </div>
 </div>
 </div>
  

      
      
     
  );
};

export default Media;
