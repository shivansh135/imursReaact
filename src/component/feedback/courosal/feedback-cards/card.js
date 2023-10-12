import React from "react";
import "./card.css";

export const Feedback = () => {
    return (
        <div className="feedback">
            <div className="cont">
                <img className="image" alt="feedback" src="sample.jfif" />
                <div className="text-wrap">
                    <div className="heading">
                        <div className="text-wrapper">Nitya Puri</div>
                        <div className="div">Amritsar</div>
                    </div>
                    <p className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the
                        industry&#39;s standard lorem ipsum dolor. Lorem Ipsum is simply dummy text of.
                    </p>
                </div>
                <img className="img" alt="svg" src='quates.svg' />
                <img className="vector" alt="Vector" src="halfSquare.svg" />

            </div>
        </div>
    );
};
