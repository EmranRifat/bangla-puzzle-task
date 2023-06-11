import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
          lat:23.729245965569692, 
          lng:90.40093506504954
        },
        zoom: 17
      };
    return (
        <div className='grid grid-flow-row lg:grid-cols-2 sm:grid-cols-1'>
         <div>
         <div className='py-8 pb-24 ml-16 '>
            <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
            </div>
         </div>

          <div className='-ml-8'>
          <div className='text-center mt-16  '>
                <h1 className='text-3xl font-semibold'>Present Address</h1>
                <p className='text-gray-600'>resent Address- Bangladesh Shishu <br />
                  Academy ,<br/> Doyel Chattor, Shabag, Dhaka-1000</p>
         </div>
            
          <div className='text-center'>
                <h1 className='text-3xl mt-10 font-semibold'>Permanent Address</h1>
                <p className='text-gray-600'>Mymensingh District <br />
                  Academy ,<br/> Mymensingh Bangladesh</p>
         </div>
            
          </div>
        </div>
    );
};

export default Map;