import { useEffect, useState } from "react"

const UseRestaurantMenu=(resId)=>{
    const[restodetails, setrestodetails] = useState([])
   
    useEffect(()=>{
       fetchresult()
   
    },[])
   
    const fetchresult=async()=>{
        // const data2= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7003182&lng=76.8033116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7003182&lng=76.8033116&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const jsondetails= await data.json()
        // const jsondetails2= await data2.json()
        console.log("jsondetailswithresid,",jsondetails)
        // console.log("jsondetails2,",jsondetails2)
        // let result=jsondetails2.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log("result" , result);
         let updatedresult= jsondetails?.data.cards[0].card.card.info
         setrestodetails(updatedresult)
        // setrestrarentdetails(result)

    };

    // console.log("restrarentdetailsincustomhook" , restrarentdetails);
    return restodetails
   
}
export default UseRestaurantMenu;


// This Process is being defined as custom hooks where you will write your useeffect and states in this file and just import it 
