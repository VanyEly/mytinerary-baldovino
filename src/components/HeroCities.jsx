import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const HeroCities = () => {
  return (
   
    <div className="hero1 container-fluid  col-sm-12 col-xs-12">

    <h1 className="card-title1   col-sm-12 col-xs-12 ">Cities</h1>
    <p className="card-text1  col-sm-12 col-xs-12">
      Collection of the most beautiful places and experiencie 
    </p>
    
  </div>

  )
}

export default HeroCities












//export default function Hero({children, title, text, styleTitle, styleText, isCenter, imgBackground, height}) {
  //  return (
    //  <section className={`relative  w-full overflow-hidden    ${height == "h-full" ? " h-screen min-h-[550px] snap-start" : null}`}>
      //    <div className={`${height} z-10 relative w-full flex items-center  ${height != "h-full" ? "min-h-[250px] lg:min-h-[300px] h-small": "min-h-[550px]" }`}>
        //      <div className="w-full px-3 sm:px-5 lg:px-10 2xl:px-0 z-10"> 
          //        <div className={`flex items-center max-w-7xl w-full mx-auto ${isCenter ? "w-full" : null}`}>
  //                <div className={`sm:w-96 lg:w-6/12 [&>p]:my-14 mt-5 ${height != "h-full" ? "mt-14": null} ${isCenter ? "flex flex-col justify-center items-center [&>h2]:text-center [&>p]:text-center [&>p]:my-14 max-w-md  w-full mx-auto lg:max-w-5xl " : null} ${height != "h-full" ? "[&>p]:mt-5 [&>p]:mb-0": null }`}>
    //                  <h2 className={`text-4xl font-bold ${styleTitle}`}>{title}</h2>
      //                <p className={`text-xl lg:text-2xl my-12 lg:my-10 ${styleText}`}>{text}</p>
        //              {children}
//                  </div>
  //                </div>
    //          </div>
  //
    //          <div className="absolute top-0 bottom-0 h-full w-full">
      //            <img src={`${imgBackground}`} alt="background" className="h-full w-full object-cover brightness-50"/>
        //      </div>
//          </div>
  //    </section>
  //  )
 ///////// }