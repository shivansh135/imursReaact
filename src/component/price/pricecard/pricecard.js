import PropTypes from "prop-types";
import React from "react";
import "./pricecard.css";

export const PriceCard = (props) => {

    const idylic = (
        <div  className="price-div"> 
          <img className="auto-stories" alt="Hd" src="hd.png"  />
          <div className="button-label" style={{color:(props.text==="Iconic")?"var(--isabeline)":"var(--jet-black)"}}>HD Print</div>
        </div>
      );
    return (
        <div className="price-price-card" style={{background:props.cardColor,borderColor:"var(--jet-black)" ,border:"2px solid" }}>
            <div className="price-frame">
                <div className="price-text-wrapper" style={{color:(props.text==="Iconic")?"var(--isabeline)":"var(--jet-black)"}}>IMURS {props.text}</div>
               
                <div style={{display:"flex" , justifyContent:"center"}}>
                <div className="price-div">
                    <img className="auto-stories" alt="Auto stories" src="book.png" style={{filter:(props.text==="Iconic")?"brightness(100%)":"brightness(0%)"}}/>
                    <div className="button-label"  style={{color:(props.text==="Iconic")?"var(--isabeline)":"var(--jet-black)"}}>{props.pagetext} Pages</div>
                </div>  
                {props.text === "Idyllic" ? (
  <div>
    {idylic}
  </div>
) : (
  <></>
)}
                </div>
            </div>
            <div className="price-frame-2">
                <div className="price-frame-3">
                    <div className="price-text-wrapper-2"  style={{color:(props.text==="Iconic")?"var(--isabeline)":"var(--jet-black)"}}>{props.pricetext}</div>
                    <div className="price-text-wrapper-3"  style={{color:(props.text==="Iconic")?"var(--isabeline)":"var(--jet-black)"}}>{props.dummytext}</div>
                </div>
                <div className="price-text-wrapper-4"  style={{color:(props.text==="Iconic")?"var(--isabeline)":"var(--jet-black)"}}>each magazine</div>
                <div className="price-text-wrapper-5"  style={{color:(props.text==="Iconic")?"var(--isabeline)":"var(--jet-black)"}}>includes one print copy</div>
            </div>
        </div>
    );
};

PriceCard.propTypes = {
    line: PropTypes.string,
    autoStories: PropTypes.string,
};
