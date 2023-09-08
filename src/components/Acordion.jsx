import  { useState } from 'react';

const Acordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-0  shadow mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full text-center "
      >
        View More
      </button>
      {isOpen && (
        <div className="p-4 border-none w-auto ">
             <div className="py-8 px-4 mx-auto  text-center lg:py-16 lg:px-12">
       
           <h1 className="mb-4 text-4xl ">
             Under construction
           </h1>
           <p className="font-light">
          
           </p>
           <br />

          
         </div>


        </div>
      )}
    </div>
  );
};

export default Acordion;