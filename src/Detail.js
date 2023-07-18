// import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from './Data/data';

const Detail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id =  +(params.id);
    const item = data.find((item) => item.id === id)

  return (
    <div className='flex items-center justify-center mt-20'>
    {/* <button onClick={()=>navigate(-1)}>Back</button> */}
        {/* <p>{item.title}</p>
        <p>${item.price}</p> */}
        <div key={item.id} className=' w-[50%] p-5 flex flex-col gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
             <img src={item.image} alt=" " className='w-[200px]   '/>
            <p className='font-bold '>{item.title} </p>
            <p>{item.description}. </p>
            <p>Price :<span className='text-red-500 font-bold'>${item.price}</span>  </p>
            <p>Category: {item.category} </p>


            <p>{item.rating.rate }⭐ </p>
            <button onClick={()=>navigate(-1)} className='p-1 bg-blue-500 text-white'>Back</button>
          </div>
    </div>
  )
}

export default Detail