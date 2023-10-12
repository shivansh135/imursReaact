import React from 'react'
import { Corporate } from './corporate/corporate'

import "./plan.css"
import { PriceCard } from './plans-cards/planCards'
export default function Plan() {
  return (
    <>
    <div className="plan-corporate" style={{display:"flex",justifyContent:"center"}}> <Corporate/></div>
    <div style={{ marginTop: "100px" }} />
    <div className='plan-cards-flex'>  
      <PriceCard out="outerstar.png" in="innerstar.png" text="Iconic" />
      <PriceCard out="sun.png" in="transparent" text="Impression" cardColor= "var(--persian-red)"/>
      <PriceCard out="newstar.png" in="transparent" text="Idyllic" />
    </div>
   
    </>
  )
}

/*<PriceCard out="outerstar.png" in="innerstar.png" text="Iconic" cardColor="#3c3c3c" flexmargin="12rem"/>
    <PriceCard out="sun.png" in="transparent" text="Impression" cardColor= "var(--persian-red)" flexmargin="4rem"/>
    <PriceCard out="newstar.png" in="transparent" text="Idyllic" cardColor="#3c3c3c" flexmargin="12rem" />*/