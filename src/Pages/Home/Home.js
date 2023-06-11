import React from 'react';
import Slider from '../Slider/Slider';
import Service from '../Service/Service';
import Navbar from '../../Share/Navbar/Navbar';
import Mujib from '../Mujib/Mujib';
import Leader from '../Leader/Leader';
import Upcomming from '../Upcomming';
import Journey from '../Journey';
import Initiatives from '../Initiatives';
import SignlePic from '../SignlePic';
import Media from '../Media';
import Map from './Map';
import Footer from '../../Share/Footer';
import Video from '../Video/Video';
import Gallary from '../Gallary/Gallary';


const Home = () => {
    return (
        <div>
       <Navbar></Navbar>
        <Slider  />
        <Service></Service>
        <Mujib></Mujib>
        <Leader></Leader>
        <Upcomming></Upcomming>
        <Journey></Journey>
        <Initiatives></Initiatives>
        <SignlePic></SignlePic>
        <Video></Video>
        <Gallary></Gallary>
        <Media></Media>
        <Map></Map>
        <Footer></Footer>


          

        </div>
    );
};

export default Home;