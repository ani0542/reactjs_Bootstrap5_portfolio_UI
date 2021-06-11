import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import PortfolioSection from './Components/PortfolioSection';
import Freelancer from './Components/Freelancer';
import Testimonial from './Components/Testimonial';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';


function App() {
  return (
             <>
                   <Navbar/>
                   <Home/>
                   <About/>
                   <Services/>
                   <PortfolioSection/>
                   <Freelancer/>
                   <Testimonial/>
                   <ContactSection/>
                   <Footer/>
             </>
  )
}

export default App



//traversi media bootstrap
//36 Bootstrap 4 Flex in Hindi | Bootstrap Tutorial in Hindi - codingyan
//flexbox coders gyan
//flexbox w3 school
//shakhil khan resturant




//ms-3   ->   to give margin or padding from left

//fs-2  -> to increase the size of like icon etc...