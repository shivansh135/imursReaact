import React from 'react'
import Courosal from '../feedback/courosal/courosal'
import { InfiniteIconMarquee, InfiniteMarquee } from '../marquee/marquee'
import { PartnerInvite } from '../partnerInvite/partnerInvite'
import { ProductFlipBook } from './cards/productFlipbook/productFlipBook'
import ProductGrid from './product-grid/product-grid'
import { ProducTitle } from './product-title/product-title'
import { HedingSubheding } from '../headings/heading'
import { Feedback } from '../feedback/courosal/feedback-cards/card'

export default function Product() {
  return (
    <>

<div className='body' style={{ marginTop: "60px",display:'flex',flexDirection:'column',width:'100%'}}>
    <div/>
    <img src='Collage.png' style={{width:'90%',height:'auto',margin:'auto',maxWidth:'780px',pointerEvents:'none'}}/>
    <HedingSubheding heading='Pyal & Dharmesh' sub_heading="Wedding Magazine"/>
    <ProductFlipBook text="A Wedding Souvenir covering all events and your precious memories "/>
    <div style={{display:'flex',flexDirection:'column',gap:'30px',width:'100%'}}>
    <InfiniteIconMarquee/>
    <InfiniteMarquee/>
    </div>
    <Feedback/>
    <PartnerInvite/>
  </div>
    </>
  )
}
