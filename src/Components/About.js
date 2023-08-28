import React from 'react'
import InsideAbout from './InsideAbout'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const About = () => {
  return (
   <>
    <div>
    <div>
      <h1>About Us</h1>
      <h4>
        Welcome to our Swiggy-like application! We are a team of food enthusiasts
        passionate about delivering the best food experience to our customers.
      </h4>
      <h3>
        Our mission is to connect people with their favorite restaurants and
        deliver delicious meals right to their doorstep. We partner with local
        restaurants to offer a wide range of cuisines and dishes to satisfy your cravings.
      </h3>
      <h2>
        Thank you for choosing us as your go-to food delivery app. Your satisfaction
        is our top priority, and we are committed to providing you with fast, reliable,
        and delightful service every time you order.
      </h2>
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

export default About