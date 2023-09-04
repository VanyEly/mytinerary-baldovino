
import { HiOutlineClock, HiOutlineHeart} from "react-icons/hi";
import { PiMoneyFill, PiMoneyLight} from "react-icons/pi";
import Acordion from "./Acordion";


const Itinerary = ({ itinerary }) => {
    return (
        <>
        <div className="bg-white   rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-2xl text-center font-semibold mb-2 py-5 text-fuchsia-700">{itinerary.name}</h2>
        <p className="text-gray-600 text-center mb-3">{itinerary.description}</p>

        {/* Info section */}
            
            <div className=" container-lg flex flex-row items-center justify-center pt-5 gap-10 shadow-inner">
                <div className="flex  flex-col items-center space-y-2">
                        <img src= {itinerary.nameImg} className="rounded-full h-12 w-12" alt=""/>
                        <div className="flex  flex-wrap space-y-2 text-sm text-gray-600  ">
                       
                        </div>
                    
                </div>
                <div className="flex  flex-col items-center space-y-2">
                    <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <HiOutlineHeart /></span>
                        
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span> {itinerary.likes.length} </span>  
                        </div>
                    
                </div>
                <div className="flex  flex-col items-center space-y-2">
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <HiOutlineClock/></span>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span> {itinerary.duration + " hs"} </span>  
                        </div>
                    
                </div>
                <div className="flex  flex-col items-center space-y-2">
                        
                        <div className="flex flew-row ">

                            {
                                    [... new Array(3)].map((money, index)=>{
                                        const priceAr = index< itinerary.price ?   <span className="rounded-full h-12 w-12 text-5xl justify-between text-fuchsia-500" > <PiMoneyFill/></span> :  <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <PiMoneyLight/></span>
                                        return priceAr
                                    })

                            }
    
                        </div>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span>Price</span>  
                        </div>
                    
                </div>
                
                 <div className="flex  flex-col items-center space-y-2">
                        
                        <div className="flex  flex-row flex-wrap items-start  gap-3 ">

                            { itinerary.hashtags.map((hash,index)=>{
                            return <span key={index} className="rounded-full  p-2 text-xs text-white bg-fuchsia-400"> {"#"+hash} </span>
                        
                        })}
                        
                            
                        </div>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span>Hashtags</span>  
                        </div>
                    
                </div>
                 
            </div>

                


        {/* Acordion- View activities-comments */}
            <div className="flex w-auto justify-center mt-10 items-center">

                        <Acordion/>

            </div>

      </div>
        
        </>
    );
  };
  
  export default Itinerary;