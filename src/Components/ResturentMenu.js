import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CONTENT_URL } from "../Utils/constants";
import UseRestaurantMenu from "../Utils/UseRestrauntMenu";

const ResturentMenu = () => {
  const [isopen, setIsopen] = useState(0);
  const [allresdetails, setallresdetails] = useState([]);

  const handleClick = (index) => {
    if (isopen === index) {
      setIsopen(0);
    } else {
      setIsopen(index);
    }
  };

  const { resId } = useParams();
  console.log(resId, "Parameteress");
  let id = resId * 1;
  console.log("Param id", id);

  const result = UseRestaurantMenu(resId);
  console.log("myresult", result);

  useEffect(() => {
    fetchresult();
  }, []);

  const fetchresult = async () => {
    let overalllistofmenu = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7003182&lng=76.8033116&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsondetails = await overalllistofmenu.json();
    console.log("overalllistofmenu", jsondetails);
    let updatedjsondetails =
      jsondetails.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setallresdetails(updatedjsondetails);
  };

  console.log("MYallresdetails", allresdetails);

  let filtereddata = allresdetails.filter((data) =>
    data.card.card["@type"].includes(
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  );
  console.log("typeFiltered Data: ", filtereddata);
  // let finalfilterdata= filtereddata?.card?.card
  // console.log("Finalfiltereddata" ,finalfilterdata);
  //   const fetchresult=async()=>{
  //     let induvidualresturant= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7003182&lng=76.8033116&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
  //     const jsondetails= await induvidualresturant.json()
  //     console.log("Myjsondatainresturentdetails",jsondetails);
  //     let updatedresult= jsondetails.data.cards[0].card.card.info
  //     setrestodetails(updatedresult)

  // }

  // console.log("restodetails", restodetails)
  return (
    <>
      <div className=" w-[700px] ml-96 mt-10 flex justify-between ">
        <div className="flex justify-between ">
          <div className="text-center">
            {filtereddata.map((item, index) => {
              return (
                <>
                  <div className="flex justify-between w-[700px] border border-greay border-solid mb-5 shadow-md shadow-lg shadow-slate-500/50">
                    <span className='font-medium mb-5 '>{item.card.card.title}</span>
                    <div onClick={() => handleClick(index + 1)}>⬇️</div>
                  </div>

                  {isopen === index + 1 && (
                    <div className=" flex border-gray-50 border-b-2 flex-col">
                      {item.card.card.itemCards.map((val) => {
                        return (
                          <>
                            <div className="flex flex-col h-[100px] w-[700px]">
                              
                              <span>
                              <span className='mt-[50px]'>{val.card.info.name}</span>
                                <img
                                  className="w-[80px] h-[80px] border-r-4 mt-0"
                                  src={CONTENT_URL + val.card.info.imageId}
                                />
                              </span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResturentMenu;
