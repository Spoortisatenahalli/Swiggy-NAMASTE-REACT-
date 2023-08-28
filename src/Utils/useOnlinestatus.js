import React, { useEffect, useState } from 'react'

const useOnlinestatus = () => {
    const[isactive, setisactive] =useState(true)

    useEffect(()=>{
        window.addEventListener("offline" ,()=>{
            setisactive(false)
        })

        window.addEventListener("online" ,()=>{
            setisactive(true)
        })
    },[])
  return isactive
}

export default useOnlinestatus