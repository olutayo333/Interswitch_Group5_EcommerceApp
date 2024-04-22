import '../assets/css/Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => { 
  return ( 
    <div className='container shadow-lg'> <hr />
        <div className='row my-5 mt-5'> <hr />
            <div className='col-2 line1 '>  
                <ul >
                    <li className='mb-2 fs-5 '><b>Buy</b>  </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Deals</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Mobile</Link> </li>                
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Charity</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Stores</Link> </li>
                     <li className=" "> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Gift Finder</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Holidays & Seasonal Occasions</Link> </li>                
                </ul>
            </div>
            <div className='col-2 line2'> 
                <ul>
                    <li className='mb-2 fs-5'><b> Sell </b> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Deals</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Mobile</Link> </li>                
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Charity</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Stores</Link> </li>
                     <li className=" "> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Gift Finder</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Holidays & Seasonal Occasions</Link> </li>                
                </ul>
            </div>

            <div className='col-3 line3'> 
                <ul>
                    <li className='mb-2 fs-5'><b> Stay Connected </b> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Deals</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Mobile</Link> </li>                
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Charity</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Stores</Link> </li>
                     <li className=" "> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Gift Finder</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Holidays & Seasonal Occasions</Link> </li>                
                </ul>
            </div>
            <div className='col-2 line4'> 
                <ul>
                    <li className='mb-2 fs-5'><b> About Regis </b> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Deals</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Mobile</Link> </li>                
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Charity</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Stores</Link> </li>
                     <li className=" "> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Gift Finder</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Holidays & Seasonal Occasions</Link> </li>                
                </ul>
            </div>
            <div className='col-3 line4'> 
                <ul>
                    <li className='mb-2 fs-5'><b> Help </b> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Regis Returns</Link> </li>
                    <li className="mb-2"> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Money Back Guarantee</Link> </li>                
         
                    <li className=' fs-5'><b> Community </b> </li>
                     <li className=" "> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Announcements</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Discussion Forum</Link> </li>                
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Answer Center</Link> </li>
                    <li className=""> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Groups</Link> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
