import React from 'react';
import image from "../Assets/1676789309.jpg"
import bar from "../Assets/New Text Document.png"

const SignlePic = () => {
    return (
        <div className='relative scicky'>

            <img src={bar} alt="" className='-mt-14   absolute bottom-0 left-0 top-0 pl-96 mb-20 ' />
         
         
           <div className='h-min'>
           <img src={image} alt="" className=' bg-scroll  h-1/2 w-full' />
           </div>
        </div>
    );
};

export default SignlePic;