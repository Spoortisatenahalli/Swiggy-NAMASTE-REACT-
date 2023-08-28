// import React, { useEffect, useState } from 'react';
// import Veg from '../Assets/Veg_Briyani.jpg';
// import { CONTENT_URL } from '../Utils/constants';
// import Shimmer from './Shimmer';
// import { Link, useParams } from 'react-router-dom';

// interface Restaurant {
//   info: {
//     id: string;
//     cloudinaryImageId: string;
//     name: string;
//     cuisines: string[];
//     avgRating: string;
//     veg: boolean;
//     deliveryTime: string;
//   };
// }

// const Container: React.FC<{ resData: any }> = ({ resData }) => {
//   const [restrarentdetails, setrestrarentdetails] = useState<Restaurant[] | null>(null);
//   const [searchtext, setSearchtext] = useState<string>(' ');
//   const [filteredData, setfiltereddata] = useState<Restaurant[]>([]);

//   const { params } = useParams<{ params: string }>();

//   useEffect(() => {
//     fetchData();
//   }, [searchtext]);

//   const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchtext(e.target.value);
//   };

//   const fetchData = async () => {
//     const data = await fetch(
//       'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7003182&lng=76.8033116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
//     );

//     const json = await data.json();
//     const result = json.data.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants || [];
//     setrestrarentdetails(result);
//     setfiltereddata(result);
//   };

//   const stars = (datas: string) => {
//     if (datas.startsWith('4.0')) {
//       return <span>****</span>;
//     } else if (datas.startsWith('3.0')) {
//       return <span>***</span>;
//     } else if (datas.startsWith('2.0')) {
//       return <span>**</span>;
//     } else {
//       return <span>*</span>;
//     }
//   };

//   const searchFood = () => {
//     const filteredresult = filteredData.filter((res) => res.info.name.includes(searchtext));
//     setfiltereddata(filteredresult);
//   };

//   return (
//     <div className='body_container'>
//       <div>
//         <input type='text' placeholder='Here is your search' value={searchtext} onChange={handlechange} />
//         <button onClick={searchFood}>Search</button>
//       </div>
//       <div className='search_conatiner'>
//         <button
//           className='btn_container'
//           onClick={() => {
//             const filters = restrarentdetails?.filter((res) => parseFloat(res.info.avgRating) > 4) || [];
//             setrestrarentdetails(filters);
//           }}
//         >
//           Top 10 Restaurant's
//         </button>
//         <button
//           className='btn_container'
//           onClick={() => {
//             const filterveg = restrarentdetails?.filter((res) => res.info.veg);
//             setrestrarentdetails(filterveg || []);
//           }}
//         >
//           Click to get Veg
//         </button>
//       </div>
//       <h3>Top restaurant chains in Chandigarh</h3>
//       <div className='res_container'>
//         {restrarentdetails?.map((item) => (
//           <div key={item.info.id} className='inner_container'>
//             <img src={CONTENT_URL + item.info.cloudinaryImageId} alt={item.info.name} />
//             <div style={{ marginLeft: '10px' }}>
//               <Link to={'/resturantdetails/' + item.info.id}>{item.info.name ? <p>{item.info.name}</p> : ''}</Link>
//               {item.info.cuisines.length > 0 ? <p>{item.info.cuisines.join(', ')}</p> : ''}
//               {item.info.avgRating ? <p> Ratings ({item.info.avgRating})</p> : ''}
//               {item.info.deliveryTime ? <p>Delivery Time {item.info.deliveryTime}mins</p> : ''}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Container;
