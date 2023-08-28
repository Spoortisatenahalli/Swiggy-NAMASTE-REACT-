import React, { useEffect, useState } from 'react'
import Veg from "../Assets/Veg_Briyani.jpg"
import { CONTENT_URL } from '../Utils/constants'
import Shimmer from './Shimmer'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'
import UseRestaurantMenu from '../Utils/UseRestrauntMenu'
import useOnlinestatus from '../Utils/useOnlinestatus'
// import { resData } from './Res';

const Container = ({isactive }) => {

  const[restrarentdetails, setrestrarentdetails]=useState()
  // let result=resData
  // console.log("result" , resData);

  console.log("isactieve" , isactive);
  const[searchtext, setSearchtext]=useState(" ")
  const[filteredData, setfiltereddata]=useState([])
 
  
  // const {restrarentdetails}= UseRestaurantMenu()
  // console.log("restrarentdetails", restrarentdetails);
  
  const {params}= useParams()
  console.log(params, "Parameteress")

  useEffect(()=>{
      fetchData()
      // fetchresult()

   
      //  setrestrarentdetails(result)
      // setfiltereddata(result)
      //     if(searchtext.length===0){
      // }

      // Both bt keeping the searchtext as dependecy and making its length will work as Dependecy will render the component again when its value is updated
  },[searchtext])


  
  const handlechange=(e)=>{
    setSearchtext(e.target.value)
  }

  const fetchData = async() =>{
    const data= await fetch(
      // Swiggy API to get Restaurant data with corsproxy
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7003182&lng=76.8033116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json= await data.json()
    console.log("Myjsondata",json);
    let result=json.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants
    // data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    console.log("Extractred data" ,result)
    setrestrarentdetails(result)
    setfiltereddata(result)
    // console.log("Result:",result)
  }

  const stars=(datas)=>{
    if(datas.startsWith("4.0")){
      return <span>****</span>
    }
    else if(datas.startsWith("3.0")){
      return <span>***</span>
    }
    else if(datas.startsWith("2.0")){
      return <span>**</span>
    }
    else{
      return <span>*</span>
    }
  }

  // console.log("restrarentdetails", filteredData);

  // const updateddata=[]
  

  // const data=(resData)=>{
  //     if(resData.data.avgRating =="4.0"){
  //         updateddata.push(resData.data.avgRating)
  //     }
  // }

  // data(resData)

  // console.log("Updateddata" , updateddata);
    // console.log("resdata" , resData.data);
    // console.log("Ratings" , Ratings, resname);

    // if(restrarentdetails.length===0){
    //   return <Shimmer/>
    // }

    // console.log("filteredData" , filteredData)
  
  const searchFood = () => {
    let filteredresult=filteredData.filter((res)=>res.info.name.includes(searchtext))
    console.log("response:",filteredresult)
    setfiltereddata(filteredresult)
  }
   console.log("filteredData" , filteredData)
  const onlinestatus= useOnlinestatus()
  if(onlinestatus=== false)
  return(
    <h1>You are Offline!!</h1>
  )

  return (
    <div className='m-7'>
      {/* <button >{isactive}</button> */}
      <div>
      <input type="text" placeholder='Here is your search' value={searchtext} onChange={handlechange}/>
    {/* <button onClick={()=>searchFood()} >Search</button> */}
      </div> 
        <div className='search_conatiner'>
                <button className='btn_container btn_container border-2 border-solid border-black bg-gray-100 border-r-2' onClick={()=>{
                      let filters= restrarentdetails.filter((res)=>
                           res.info.avgRating > 4
                      )
                      setrestrarentdetails(filters)
                }}>
                   Top 10 Restaurant's
                </button>
                <button className='btn_container border-2 border-solid border-black mx-5 bg-gray-100 border-r-2' onClick={()=>{
                      let filterveg= restrarentdetails.filter((res)=>
                           res.info.veg == true
                      )
                      setrestrarentdetails(filterveg)
                }}>
                   Click to get Veg
                </button>
                  {/* <button onClick={()=>{
                  setrestrarentdetails(result)
                  setfiltereddata(result)
                }}>
                      Reset the filter
                </button>   */}
        </div> 
        <h1 className='text-center text-lg'>Here you go to fill your HUNGER!!</h1>
        <div className='flex  flex-wrap flex-row '>
        { restrarentdetails && restrarentdetails.map((item)=>{
        
          return(
          
          <div key={item.info.id}  className='flex items-center bg-slate-50 m-5 h-[400px] w-[400px] border-black border-1 border-solid justify-center flex-col p-5 shadow-lg shadow-slate-500/50 '>
               {item.info.avgRating? <p className='text-center text-md font-medium border border-solid border-black bg-green-500 w-[40px] rounded-sm ml-[300px]'>  {(item.info.avgRating)} *</p>:""}
              <img  className="h-[170px] w-[100%] m-5 border-r-5 object-fill"src={CONTENT_URL+item.info.cloudinaryImageId}/>
              <div style={{marginLeft:"10px"}}>
             <Link  to={"/resturantdetails/"+item.info.id}>  { item.info.name ? <p className='text-center text-md font-medium'>{item.info.name}</p>:""}</Link>
                {item.info.cuisines ?<p className='text-center text-md font-medium'>{item.info.cuisines.join(", ")}</p>:""}
               
                {item.info.deliveryTime ?<p className='text-center text-md font-medium'>Delivery Time {item.info.deliveryTime}mins</p>:""}
                {/* <span>{resData.data.avgRating }</span> */}
                {/* <span>{item.data.cuisines.toString().slice(0,40) ? item.data.cuisines.toString().slice(0,40):<span>{item.data.cuisines.toString().slice(0,40)}...</span>}</span> */}
              </div>
          </div>

          )
        })} 
   
        </div>
      
        {/* <div className='res_conatiener'>
            <img src={Veg} />
             {result.map((item)=>{
              console.log("myitamdata",item);
            
             })}
        </div> */}
    </div>
  )
}

export default Container