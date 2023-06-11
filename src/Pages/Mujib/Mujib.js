import React from 'react';
import joy from "../../Assets/row-image-Mujib100.png"
const Mujib = () => {
    return (
        <div>
            <div className="hero  transform transition-all hover:scale-125 duration-300 pt-4">
  <div className="hero-content flex-col lg:flex-row">
    <img src={joy} alt='' className="w-96" />
    <div className='pl-12'>
      <h1 className="text-2xl font-bold text-gray-600">THE IDEOLOGY</h1>
      <p className="py-6 text-gray-600">My greatest strength is the love for my people, My <br /> greatest weakness is that I love them too much.</p>
      <h1 className="text-2xl font-bold text-gray-600">-Bangabandhu Sheikh Mujibur <br /> Rahman</h1>
     
      <button className="btn btn-outline text-gray-600 mt-4">Learn More ➜</button>


    </div>
  </div>
</div>
        </div>
    );
};

export default Mujib;