import PropTypes from "prop-types";
import React from "react";
import { Socials } from "../footer/social/social";
import "./footer.css";

export const PropertyFooterWrapper = () => {
    return (
        <div className="footer">
            <div className="title-cont">
                <div className="title">IMURS</div>
                <p className="sub-title">REIMAGINING THE MAGAZINES WITH A SWEET TOUCH</p>
            </div>
            <div className="cont">
                <div className="social-media">
                <Socials className="frame" property1="default" text="INSTAGRAM" />
                <Socials className="frame" property1="default" text="FACEBOOK" />   
                <Socials className="frame" property1="default" text="INSTAGRAM" />
                <Socials className="frame" property1="default" text="FACEBOOK" />
                </div>
                <div className="about-us">
                    <div className="text-wrapper">PRIVACY POLICY</div>
                    <div className="text-wrapper">CANCELLATION &amp; REFUND POLICY</div>
                    <div className="text-wrapper">TERMS &amp; CONDITIONS</div>
                    <div className="text-wrapper">CONTACT US</div>
                </div>
            </div>
            <img className="star" alt="Star" src="star-5.png" />
        </div>
    );
};


PropertyFooterWrapper.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "footer"]),
    star: PropTypes.string,
};
