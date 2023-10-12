import React from "react";
import "./planCards.css";
import { ButtonSecondary } from "../../button/button";

export const PriceCard = (props) => {
    return (
        <div className="price-card" style={{background:props.cardColor ,marginTop:(props.text==="Impression")?"0px":"none"}} >
            <div className="head">
                <div className="title">
                    <div className="text-wrapper">IMURS {props.text}</div>
                </div>
                <div className="icon">
                <img className="star" alt="Star" src={props.out} />
                    
                </div>
            </div>
            <div className="cont">
                <div className="text-wrap">
                    <p className="discription">Lorem ipsum dolor sit amet lorem ipsum dolor sit amer jixm</p>
                    <div className="each-magazine">₹ -&nbsp;&nbsp;/ each magazine</div>
                    <div className="bullets-cont">
                        <div className="bullet">
                            <img className="check-circle" alt="Check circle" src="check-circle.png" />
                            <div className="div">No of pages</div>
                        </div>
                        <div className="bullet">
                            <img className="check-circle" alt="Check circle" src="check-circle.png" />
                            <div className="div">No of pages</div>
                        </div>
                        <div className="bullet">
                            <img className="check-circle" alt="Check circle" src="check-circle.png" />
                            <div className="div">No of pages</div>
                        </div>
                        <div className="bullet">
                            <img className="check-circle" alt="Check circle" src="check-circle.png" />
                            <div className="div">No of pages</div>
                        </div>
                        <div className="bullet">
                            <img className="check-circle" alt="Check circle" src="check-circle.png" />
                            <div className="div">No of pages</div>
                        </div>
                    </div>
                </div>
                <ButtonSecondary/>
            </div>
        </div>
    );
};



export const PriceCard2 = (props) => {
    return (
        <div className="plan-card" style={{backgroundColor:props.cardColor,marginTop:props.flexmargin}}>
            <div className="plan-frame">
                <div className="plan-div-wrapper">
                    <div className="plan-text-wrapper" style={{color:props.cardColor}}>IMURS {props.text}</div>
                </div>
                <div className="plan-div">
                    <img className="plan-star" alt="Star" src={props.out} />
                    <img className="plan-img" alt="Star" src={props.in} style={{ height: props.in === 'transparent' ? 0 : 1 }} />
                </div>
            </div>
            <div className="plan-frame-2">
                <div className="plan-frame-3">
                    <p className="plan-p">Lorem ipsum dolor sit amet lorem ipsum dolor sit amer jixm</p>
                    <div className="plan-frame-4">
                        <div className="each-magazine">₹ -&nbsp;&nbsp;/ each magazine</div>
                       
                        <div className="plan-frame-5">
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">No of pages</div>
                            </div>
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">HD Indigo Print</div>
                            </div>
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">Regular Print</div>
                            </div>
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">Some Add Ons</div>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonSecondary
                    className="button-secondary-instance"
                    divClassName="design-component-instance-node"
                    text="GET STARTED"
                />
            </div>
        </div>
    );
};

/*PriceCard.propTypes = {
    star: PropTypes.string,
    img: PropTypes.string,
    line: PropTypes.string,
    checkCircle: PropTypes.string,
    checkCircle1: PropTypes.string,
    checkCircle2: PropTypes.string,
    checkCircle3: PropTypes.string,
};
*/