import React, { useEffect, useState } from 'react'
import food from "../Assets/swiggy-1.svg"
import {Link} from "react-router-dom"
import useOnlinestatus from '../Utils/useOnlinestatus'

const Header = () => {
  const[loginstate, setloginstate] =useState("login")
  let onlinestatus= useOnlinestatus()
  // const[searchtext, setSearchtext]=useState(" ")
  // useEffect(()=>{
  //   setloginstate("logout")
  // },[])

  const handleclick=()=>{
    setloginstate("logout")
  }

  // const handlechange=(e)=>{
  //   setSearchtext(e.target.value)
  // }
  return (
    <div className='flex justify-between border-solid bg-slate-100 shadow-lg shadow-slate-500/50'>
        <div className='w-14 h-2 mt-3'>
            <img src={food}/>
            {/* <div>
              <input type='text'  placeholder='Search in' value={searchtext} onChange={handlechange}/>
              <button 
              //  onClick={()=>{
              //   let filtereddata= 
              //  }}
              >Search</button>
            </div> */}
        </div>
        <div className='mr-5 px-4'>
            <ul className='flex justify-between list-none p-10'>
                <li className='px-4'>Online Status: {onlinestatus? "🟢" : "🔴"}</li>
                <li className='px-4'> <Link to="/">Home </Link></li>
                <li className='px-4'><Link to="/about">About Us</Link></li>
                <li className='px-4'><Link to="/contact">Contact Us</Link></li>
                <li className='px-4'><Link to="link">Cart</Link></li>
                <li className='px-4'><Link to="/grocery">Grocery Store</Link></li>
                <button onClick={handleclick}>{loginstate}</button>
            </ul>
        </div>
    
    </div>
  )
}

export default Header