import React from 'react'
import Heroslider from './Heroslider'
import About from './About'
import Services from './Services'
import Enquiry from './Enquiry'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div className='w-full h-auto justify-center overflow-x-hidden'> 
 <Heroslider /> 
 <About/>
 <Services/>
 <Enquiry/>
 <Testimonials/>
    </div>
  )
}
 export default Home
