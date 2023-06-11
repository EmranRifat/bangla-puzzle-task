import React from 'react';
import leader from "../../Assets/1675939078.jpg"

const Leader = () => {
    return (
        <div>
            <div className="hero  bg-[#0080D7]">
  <div className="hero-content flex-col lg:flex-row-reverse text-white">
    <img src={leader} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">MY LEADER AND INSPIRATION</h1>
      <p className="py-2 text-2xl">- Hon'ble Prime Minister Sheikh <br /> Hasina</p>
      <button className="btn btn-outline text-white mt-4">Learn More ➜</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Leader;