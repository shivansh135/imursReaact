import React from "react";
import { ButtonSecondary } from "../../../button/button";
import "./productFlipBook.css";


export const ProductFlipBook = (props) => {
    return (
        <div className="flipbook-container-product">
            <img className="flipbook" alt="Flipbook" src="sample.jfif" />
            <div className="cont">
                <div className="text-wrap">
                    <p className="tag">
                       {props.text}
                    </p>
                </div>
                <ButtonSecondary/>
                <p className="price">Starts at Just ₹999</p>
            </div>
        </div>
    );
};
