import React from 'react'
import data from './Data/data'
import { useNavigate } from 'react-router-dom'
import "./App.css"

const Home = () => {
  const navigate= useNavigate()
  const handleclick=(id)=>{
    console.log(id);
    navigate(`/deatil/${id}`)
  }
  return (
    <div className='mt-[50px] flex flex-col gap-y-10 '>
      {
        data.map((item)=>(
          <div key={item.id} className='p-5 flex flex-col gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
             <img src={item.image} alt=" " className='w-[200px]   '/>
            <p className='font-bold '>{item.title} </p>
            {/* <p>{item.description.slice(0,30)}... </p> */}
            <p>Price :<span className='text-red-500 font-bold'>${item.price}</span>  </p>

            <p>{item.rating.rate }⭐ </p>
            <button onClick={()=>handleclick(item.id)} className='p-1 bg-blue-500 text-white'>Deatils</button>
          </div>
           
        ))
      }
    </div>
  )
}

export default Home