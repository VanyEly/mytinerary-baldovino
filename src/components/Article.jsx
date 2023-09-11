import React from 'react'
import Button from './Button'
//import Form from 'react-bootstrap/Form'


export default function Article() {
  

  return (
    <div className=" flex flex-col w-[60%]  justify-center items-center mt-40">
      <div className="flex">
        <div className="map justify-around">
          <h1 className="text-2xl font-bold">Find the perfect destination</h1>
          <p className='text-base my-4'>
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easir.
          </p>
    
        </div>
        <div className='article'> 
        <img className="w-20 h-20 rounded" src="https://w0.peakpx.com/wallpaper/822/642/HD-wallpaper-world-map-world-flags-map-countries.jpg"  />
            <div className="w-10 m-4 ">
        
            </div>
           

     
   
 

          </div>
          </div>
    </div>
  );
}