import React, { useState } from 'react'

function index() {
   
    let[carousel,setCarousel] = useState(1)

 let handlearBack = () => {
    if(carousel != 1){
          setCarousel( carousel -1)
    }
  
 }

let handlearUp = () => {
    if(carousel != 3){
        setCarousel(carousel + 1)
}
}


  return (
    <>
      <div>

        { (carousel == 1  || carousel == 2 || carousel == 3 || carousel == Image3) ? <>
     {carousel == 1 &&  < Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjFzZvLX7K5RHfOc0QW1WsNz6XWzf6qao6sUxAUw_Dj1r7GwFYFNxOnvY4DZITkBYCeY&usqp=CAU" />}
   {carousel == 1 &&  <Image src= "https://www.infobae.com/new-resizer/4lYgDG-DKV_GuzNXy8o2Xb5WIsI=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YVABRSOUERFRNGXG3HV2ZWV66A.jpg" className="d-block w-100" />}
   {carousel == 1 &&  <Image src="https://www.conclusion.com.ar/wp-content/uploads/2022/11/DSC_0224.jpg" className="d-block w-100" />}
   </>
   : 
   <>
      <p>No existe ese paso</p>
      </>
    }


    
  

  

  

   <button onClick={()=>handlearBack()}> Back </button>
 <button onClick={()=>handlearUp()}>  Next </button>
    </div>
    </>
  )
}

export default index