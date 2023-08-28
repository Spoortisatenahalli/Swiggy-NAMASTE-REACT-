import React from 'react'
import { CONTENT_URL } from '../Utils/constants'

const Itemlist = ({item}) => {
  return (
    <div className=" flex border-gray-50 border-b-2">
            {item.card.card.itemCards.map((val)=>{
            
                <div>
                <p>{val.card.info.name}</p>
                <img className="w-[50px] h-[50px]" src={CONTENT_URL + val.card.info.imageId}/>
              </div>
              
            })}
            
    </div>
  )
}

export default Itemlist