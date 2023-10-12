import React from "react";
import "./partnerInvite.css";

export const PartnerInvite = () => {
    return (
        <div className="partner">
            <img className="img" alt="Img" src="sampleSquare.jpg" />
            <div className="cont">
                <div className="heading">Become a Partner</div>
                <p className="text">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
                    odio mattis.
                </p>
                <div className="button-secondary">
                    <div className="become-a-partner">BECOME A PARTNER</div>
                </div>
            </div>
        </div>
    );
};
