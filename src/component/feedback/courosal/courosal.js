import React from 'react'
import './courosal.css'
import { Feedback } from './feedback-cards/card'
export default function Courosal() {
  return (
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{filter:"brightness(0%)"}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{filter:"brightness(0%)"}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{filter:"brightness(0%)"}}></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Feedback/>
    </div>
    <div class="carousel-item">
    <Feedback/>
    </div>
    <div class="carousel-item">
    <Feedback/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
