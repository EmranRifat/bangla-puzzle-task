import React from 'react';
import img1 from "../../Assets/1676722927.jpg"
import img2 from "../../Assets/1676722944.jpg"
import img3 from "../../Assets/1676789309.jpg"

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';




const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://anjirliton.com/uploads/banner/1676722944.jpg',
  },
  {
    url: 'https://anjirliton.com/uploads/banner/1676789309.jpg',
  },
  {
    url: 'https://anjirliton.com/uploads/banner/1676789309.jpg',
  },
];
const Slider = () => {
    return (
//       <div>
//          <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src={img1} alt=''  className="w-full h-min" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src={img2} alt=''  className="w-full h-2/3" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src={img3} alt=''  className="w-full h-min" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//     <img src={img1} alt=''  className="w-full h-min" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//       </div>
<div>
<div className="slide-container relative">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>

        <div>
        <div className="card w-[520px] bg-[#080808b0] text-white mt-48 pl-20 ml-10  absolute left-0 top-0">
  <div className="card-body">
    <h2 className="card-title text-2xl">Tongi Para visit..!</h2>
    <div className="card-actions">
      <button className="btn btn-sm text-white bg-[#115C8F] ">Read More </button>
    </div>
  </div>
</div>
        </div>
      </div>
</div>
    );
};

export default Slider;