// import { count } from "d3";
import React from "react"
import { Link } from "react-router-dom"

class Aboutclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:12
        }
    }
    render(){

            const {count} =this.state // This is destructured format we can use this.state.count directly inside retrun or we can do like this and we can do like this for props also 
        return (
            <>
             <div>
             <div>
                <h6>My Name:{this.props.name}</h6>
                <h6>Location:{this.props.location}</h6>
                <button onClick={()=>{
                    this.setState(
                       { count:count+1}
                    )
                }}>Click Me {count}</button>
                <h6>My Count value:{count}</h6>
               <h1>About Us</h1>
               <p>
                 Welcome to our Swiggy-like application! We are a team of food enthusiasts
                 passionate about delivering the best food experience to our customers.
               </p>
               <p>
                 Our mission is to connect people with their favorite restaurants and
                 deliver delicious meals right to their doorstep. We partner with local
                 restaurants to offer a wide range of cuisines and dishes to satisfy your cravings.
               </p>
               <p>
                 Thank you for choosing us as your go-to food delivery app. Your satisfaction
                 is our top priority, and we are committed to providing you with fast, reliable,
                 and delightful service every time you order.
               </p>
               <p>
                 Enjoy your meal and happy ordering!
               </p>
             </div>
         
         <ul>
                 <li>
                   <Link to="/about/inside">Get more info about us!!!</Link>
                 </li>
               </ul>
              
         </div>
         
         
         </>
           )
    }
}

export default Aboutclass