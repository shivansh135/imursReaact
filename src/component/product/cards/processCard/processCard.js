import React from "react";
import "./processCard.css";

export const ProcessContainer = () => {
    return (
        <div className="process-container">
            <div className="heading">
                <div className="sub-title">A Hassle Free</div>
                <div className="title">Twelve Minute Process</div>
            </div>
            <div className="process-wrap">
                <div className="process">
                    <img className="vector" alt="Vector" src="step1.svg" />
                    <div className="text-wrap">
                        <div className="text-wrapper">1) Submit the visuals</div>
                        <p className="div">
                            After placing the order, you get an iForm to upload your visuals for the magazine with custom
                            instruinstructions.
                        </p>
                    </div>
                </div>
                <div className="process">
                    <img className="vector" alt="Vector" src="step2.svg" />
                    <div className="text-wrap">
                        <div className="text-wrapper">1) Submit the visuals</div>
                        <p className="div">
                            After placing the order, you get an iForm to upload your visuals for the magazine with custom
                            instruinstructions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
