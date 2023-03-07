import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import Projects
import stock_3 from '../img_mystocks/stock_3.png'
import stock_4 from '../img_mystocks/stock_4.png'
import stock_5 from '../img_mystocks/stock_5.png'

// Import Background Img
import Icons from '../Image_component/Icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard_screen=()=>{

  
  
  
    return(

        <div className="App">

            <Navbar/>

            <div className='iconos'>
              <Icons/>
            </div>

            <div className='stock_images' >
              <div className='col1'>
                <img className='stocks1' src={stock_3} alt='stock_3' width='80%' />
                <img className='stocks2' src={stock_4} alt='stock_4' width='80%' />
                <img className='stocks3' src={stock_5} alt='stock_5' width='80%' />

              </div>
              <div className='col2' >
                <h3>Stocks App</h3>
              </div>

            </div>
      <Footer/>
        </div>

    )
}

export default Dashboard_screen;
