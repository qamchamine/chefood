import React from 'react'
import '../pages/style/offoreB.css'
// import  CountDown  from './CountDown'
import Timer from './Timer'


export default function OffersButtom() {
  return (
    <div className='parent-element bgBorder'>
      <div className='borderTB'></div>
        <div className=' contM '>
            <h1 className='title'>Joy is with us</h1>
                <h1 className='titleblack color-dark'>SALE</h1>
                  <p className='getparagraph'>GET</p>
                  <p>FREE DISHES</p>
                  
                  <span className='bg-danger h1 Vbotton  '>COME BACK LATER</span>
                  {/* <CountDown duration={2 * 24 * 60 * 60 * 1000}/> */}
                  <Timer/>
                 

        </div>
      <div className='borderTB'></div>
    </div>
  )
}
