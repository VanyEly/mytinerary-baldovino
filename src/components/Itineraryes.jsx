export default function itineraryes(props) {
       const inputs = props.inputObj
    const values = props.values
    
    return (
         <>  
      <label key={inputs._id} className="Form-label">{inputs.name}:
                <input className="Form-input" type={inputs.type} name={inputs.name} defaultValue={values? values: ""} placeholder={inputs.ph} required />
            </label>
     
  <section id="itineraries" className="relative scroll-smooth h-screen overflow-hidden flex flex-col snap-start min-h-[600px] justify-center">
        <div className="z-20 max-w-5xl w-50 mx-50 bg-[#FCFCFF] flex flex-col items-center py-12 mb-6">
        
          <h2 className=" my-6 text-2xl lg:my-8">Under construction</h2>
        </div>
      </section>
</>
 )
  }