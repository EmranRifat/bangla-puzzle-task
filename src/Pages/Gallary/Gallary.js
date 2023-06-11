import React from 'react';
import "./Gallary.css"
import gal1 from "../../Assets/1676722362.jpg"
import gal2 from "../../Assets/1675928329.webp"
import gal3 from "../../Assets/1676722426.jpg"
import gal4 from "../../Assets/1676789309.jpg"
import gal5 from "../../Assets/1676722927.jpg"
import gal6 from "../../Assets/1676791153.jpg"
const Gallary = () => {
    return (
        <div>
             <div className='mt-8 text-[#0080D7] ' >
            <h1 className='text-3xl font-bold gallary pl-20 py-8'>P H O T O - G A L L E R Y</h1>
            
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 justify-center gap-4 py-4 px-52'>
           <img src={gal1} alt=""  className='photo h-full' />
           <img src={gal2} alt=""  className='photo h-full'/>
           <img src={gal3} alt=""  className='photo h-'/>
           <img src={gal4} alt=""  className='photo h-full'/>
           <img src={gal5} alt=""  className='photo h-full'/>
           <img src={gal6} alt=""  className='photo  '/>
            </div>
         <div className="flex items-center justify-center pb-8 ">
         <button className="btn btn-active items-center justify-center content-center ">View More</button>
         </div>

        </div>
        </div>
    );
};

export default Gallary;