
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Container from './Components/Container';
import Header from './Components/Header';
// import { resData } from './Res';
import { resData } from './Components/Res';
import Contact from './Components/Contact';
import InsideAbout from './Components/InsideAbout';
import Errorpage from './Components/Errorpage';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturentMenu from './Components/ResturentMenu';
import Aboutclass from './Components/Aboutclass';
import { Suspense, lazy, useState } from 'react';
// import Loadingdata from './Components/Loadingdata';
// import Loadingdata from './Components/Loadingdata';
// import { useRouteError } from 'react-router-dom'

const Grocery= lazy(()=>import("./Components/Loadingdata"))

function App() {

    // const errorinfo= useRouteError()
    // console.log("Myerrordetails" , errorinfo);
    // <Container resData={resData}/>
    // <About/>
//   console.log("resdatainapp" , resData);
const[isactive, setisactive] =useState("Notactive")

const handlechange=()=>{
    setisactive("Active")
}

  return (
    <div className="App">
        <BrowserRouter>
  <Header/>
      <Routes>
        <Route path='/' onClick={handlechange} element={<Container resData={resData} isactive={isactive}/>} />
        {/* <Route path='/about' element={<Aboutclass name={"Spoorti in class component"} location={"Banglore"}/>}/> */}
        <Route path='/about' element={<About/>}/>
            <Route path='about/inside' element={<InsideAbout/>}/>
      
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/about/inside" element={<InsideAbout/>}/>
        <Route path="*" element={<Errorpage />} />
         <Route path="/resturantdetails/:resId" element={<ResturentMenu/>} />
         <Route path='/grocery' element={<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>}/> 
         {/* <Route path='/grocery' element={<Loadingdata/>}/> */}
      </Routes>
  </BrowserRouter> 
       {/* <div className='main_container'>
          <div className='inner_container'>
              <div className='errorinbox'>
                  <p>Error COunt</p>
                  <p>10</p>
              </div>
              <div className='errorinbox'>
                  <span>Error COunt</span>
              </div>
              <div className='errorinbox'>
                  <span>Error COunt</span>
              </div>
          </div> 
         
        <div className='overall_container'>
          <div>
          <div className='content_container'>
              <span>Ping Status</span>
              <span>10</span>
          </div>
          <div className='content_container'>
              <span>Flex Status</span>
              <span>20</span>
          </div>
          <div className='content_container'>
              <span>Area Status</span>
              <span>30</span>
          </div>
          </div>
          <div>
          <div className='content_container'>
              <span>Ping Status</span>
              <span>10</span>
          </div>
          <div className='content_container'>
              <span>Flex Status</span>
              <span>20</span>
          </div>
          <div className='content_container'>
              <span>Area Status</span>
              <span>30</span>
          </div>
          </div>
        </div>
       </div> */}

       
    </div>
  );
}

export default App;
