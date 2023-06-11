import React from 'react';
import angel from "../../Assets/New Text Document.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-[#115C8F] h-28 text-white ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <href>About Anjir</href>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  <div className='flex ml-8'>
  <img className='h-14' src={angel} alt="" />
    <href to="/" className="font-bold text-xl  text-white">
      <div>
      Anjir 
      </div>
      <div>Liton</div>
    </href>
    <div className='text-white ml-2 text-sm mt-2'> 
    <div>
    <p >Children's </p>
    <p className=''>Writter</p></div>
    </div>
  </div>
  </div>
  
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium text-lg">
      <li tabIndex={0}>
        <details >
          <summary>About Anjir</summary>
          <ul className="p-2 text-black absolute">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Event</a></li>
      <li><a>News</a></li>
      <li>
      <details>
          <summary>Media</summary>
          <ul className="p-2 bg-gray-600 text-black">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li> <details>
          <summary>Gallary</summary>
          <ul className="p-2 bg-gray-600 text-black">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details></li>
      <li><a>Publication</a></li>
    </ul>
  </div>
    <Link to="/contact" className='btn btn-outline text-white '>Contact</Link>
  </div>
</div> 



        </div>

    );
};

export default Navbar;