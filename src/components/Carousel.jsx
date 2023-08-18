import {React, useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const cities = [
    {id:'0' ,country: 'Argentina',city:"Buenos Aires", url:'https://images.unsplash.com/photo-1508710285745-edc8137d6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFyZ2VudGluYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'},
    {id:'1' ,country: 'Argentina',city:"Santa Cruz", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/df/b4/3e/upsala-glacier.jpg?w=2400&h=-1&s=1'},
    {id:'2' ,country: 'Peru',city:"Machu Pichu", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/32/ae/b1/south-america.jpg?w=1400&h=-1&s=1'},
    {id:'3' ,country: 'Spain',city:"Madrid", url:'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    {id:'4' ,country: 'England',city:"Londres", url:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    {id:'5' ,country: 'Peru',city:"Region Ancah", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ba/7a/b9/condoriri-peak.jpg?w=1200&h=-1&s=1'},
    {id:'6' ,country: 'Portugal',city:"Lisboa", url:'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80'},
    {id:'7' ,country: 'Colombia',city:"Ciénaga", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/3a/a0/48/palmor-de-la-sierra-cienaga.jpg?w=1100&h=-1&s=1'},
    {id:'8' ,country: 'Italy',city:"Rome", url:'https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    {id:'9' ,country: 'Serbia',city:"Belgrade", url:'https://images.unsplash.com/photo-1608816747977-4d303f476571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    {id:'10' ,country: 'Qatar',city:"Doha", url:'https://images.unsplash.com/photo-1562823083-3f86817ec7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    {id:'11' ,country: 'Edmonton',city:"Canada", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/35/c0/ab/sunset-on-the-south-atlantic.jpg?w=2000&h=-1&s=1'},
    {id:'12' ,country: 'Georgia',city:"Isla", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c8/07/da/a-sea-of-king-penguins.jpg?w=1400&h=-1&s=1'},
    {id:'13' ,country: 'Chile',city:"Temuco", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/05/d3/82/coleccionamomentos.jpg?w=1400&h=-1&s=1'},
    {id:'14' ,country: 'Brasil',city:"Rio de Janeiro", url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1c/98/40/rio-de-janeiro-brazil.jpg?w=1400&h=-1&s=1&cx=2425&cy=2300&chk=v1_c8bab6f5acc7090fc4ad'}
    
  ]

export default function Carousel() {

    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(4)
    
    const handlerBack = () => {
        if(start!=0){
            setStart(start-4)
            setEnd(end-4)
        } 
    }
    
    const handlerUp = () => {
        if(end != 14){
            setEnd(end+4)
            setStart(start+4)
        }
    }

  return (
    <>
       
    <div className='max-w-[900px] h-[800px] w-full py-16 px-4 relative group flex justify-center'>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={()=>{handlerBack()}} size={30} />
        </div>
        <div className='caro flex flex-wrap gap-3 justify-center w-20 h-20  rounded'> 
            { cities.slice(start,end).map((city) =>  <div className='w-[45%]' key={city.id}> 
                <img src={ city.url }  /> 
                </div>) }
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={()=>{handlerUp()}} size={30} />
        </div>
    </div>
    </>
  )
  }
    