import React from 'react';
import ReactPlayer from 'react-player';
import "./Video.css"
const Video = () => {
    return (
        <div className='mt-8 bg-[#0080D7] text-white' >
            <h1 className='text-3xl font-bold pl-20 py-8'>V i d e o - G a l l e r y</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1  justify-center gap-4 py-4 px-52'>

            <ReactPlayer className="videos" width="full" height="200px" url='https://youtu.be/k0FC8biMK6A'  control s={true}  />
            <ReactPlayer className="videos" width="full" height="200px" url='https://youtu.be/YrpRgqawOBo'  control s={true}  />
            <ReactPlayer className="videos" width="full" height="200px" url='https://youtu.be/Cn-q-gXmrBA'  control s={true}  />
            <ReactPlayer className="videos" width="full" height="200px" url='https://youtu.be/sE64kscT1pA'  control s={true}  />
            <ReactPlayer className="videos" width="full" height="200px" url='https://youtu.be/o3rR5_O0hss'  control s={true}  />
            <ReactPlayer className="videos" width="full" height="200px" url='https://youtu.be/sPWnaUul8OQ'  control s={true}  />
            </div>
         <div className="flex items-center justify-center pb-8 ">
         <button className="btn btn-active items-center justify-center content-center ">View More</button>
         </div>

        </div>
    );
};

export default Video;