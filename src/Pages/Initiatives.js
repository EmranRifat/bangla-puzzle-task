import React from "react";
import card1 from "../Assets/1674028164.jpg";
import card2 from "../Assets/1674028064.jpg";
import card3 from "../Assets/1674028041.jpg";
import card4 from "../Assets/1674028014.jpg";
import card5 from "../Assets/1674027986.png";
import card6 from "../Assets/1674027956.png";
const Initiatives = () => {
  return (
    <div>
      <div className="hero  bg-base-100 mt-6 relative">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ml-2" >
          
          
          
            <div className="card w-64 h-32 card-side bg-base-200 shadow border">
              <figure>
                <img src={card1} className="h-32" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#115C8F] font-bold text-2xl">333</h2>
              </div>
            </div>

            <div className="card w-64 h-32 card-side bg-base-200 shadow border">
              <figure>
                <img src={card2} className="h-32" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#115C8F] font-bold text-2xl">999</h2>
              </div>
            </div>



        <div className="card w-64 h-32 card-side bg-base-200 shadow border">
              <figure className="W-1-2">
                <img src={card3} className="h-32 w-32" alt="Movie" />
              </figure>
              <div >
                <h2 className="card-title text-[#115C8F] font-bold text-xl pl-2 mt-8">STARTUP <br />BANGLADESH</h2>
              </div>
         </div>
        <div className="card w-64 h-32 card-side bg-base-200 shadow border">
              <figure>
                <img src={card4} className="h-32" alt="Movie" />
              </figure>
              <div >
                <h2 className="card-title text-[#115C8F] font-bold text-xl pl-3 mt-10">PORICHOY</h2>
              </div>


    </div>
        <div className="card w-64 h-32 card-side bg-base-200 shadow border">
              <figure className="W-1-2">
                <img src={card5} className="h-32 w-32" alt="Movie" />
              </figure>
              <div >
                <h2 className="card-title text-[#115C8F] font-bold text-xl pl-4 mt-8">FOOD <br /> FOR <br /> NATION</h2>
              </div>
         </div>
        <div className="card w-64 h-32 card-side bg-base-200 shadow border">
              <figure>
                <img src={card6} className="h-32" alt="Movie" />
              </figure>
              <div >
                <h2 className="card-title text-[#115C8F] font-bold text-xl pl-1 mt-10">SUROKKHA</h2>
              </div>


    </div>

            


<div>
      
</div>


            
            
          
            
          </div>


          <div className="w-72">
            <h1 className="text-3xl font-bold text-[#115C8F]">INITIATIVES</h1>
            <p className="py-6">
              ICT Division has taken initiatives to build Digital Bangladesh.
              Our software and service industry is a billion-dollar market and
              is expected to grow our export to USD 5 Billion by 2025. We are
              serving clients in the array of domains –Financial Services,
              Telecom companies, Healthcare. Various Startup projects, High-Tech
              parks, Sheikh Kamal IT Training and Incubation Centers etc
              projects are underway across the country.
            </p>
            <button className="btn btn-outline text-white mt-4">
              Learn More ➜
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
