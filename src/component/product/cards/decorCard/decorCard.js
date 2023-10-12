import React from "react";
import { ButtonSecondary } from "../../../button/button";
import "./decorCard.css";

export const DecorCard = () => {
    return (
        <>
        <div className="container-desktop">
            <div className="decor-card">
                <div className="img-cont">
                    <img className="img" alt="Img" src="decor.png" />
                </div>
                <div className="cont">
                    <div className="headin">
                        <div className="name">Rishika’s</div>
                        <div className="catigory">Living Room</div>
                    </div>
                    <div className="text-wrap">
                        <p className="text">
                            She used her wedding magazine as a decor element on her coffee table and cherishes her wedding memories,
                            everyday.
                        </p>
                        <ButtonSecondary/>
                    </div>
                </div>
            </div>
            <div className="decor-card">
                <div className="img-cont">
                    <img className="img" alt="Img" src="decor.png" />
                </div>
                <div className="cont">
                    <div className="headin">
                        <div className="name">Rishika’s</div>
                        <div className="catigory">Living Room</div>
                    </div>
                    <div className="text-wrap">
                        <p className="text">
                            She used her wedding magazine as a decor element on her coffee table and cherishes her wedding memories,
                            everyday.
                        </p>
                        <ButtonSecondary/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-mobile">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{filter:"brightness(0%)"}}></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{filter:"brightness(0%)"}}></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="decor-card">
                    <div className="img-cont">
                        <img className="img" alt="Img" src="decor.png" />
                    </div>
                    <div className="cont">
                        <div className="headin">
                            <div className="name">Rishika’s</div>
                            <div className="catigory">Living Room</div>
                        </div>
                        <div className="text-wrap">
                            <p className="text">
                                She used her wedding magazine as a decor element on her coffee table and cherishes her wedding memories,
                                everyday.
                            </p>
                            <ButtonSecondary/>
                        </div>
                    </div>
                </div>
                </div>
                <div class="carousel-item">
                    <div className="decor-card">
                    <div className="img-cont">
                        <img className="img" alt="Img" src="decor.png" />
                    </div>
                    <div className="cont">
                        <div className="headin">
                            <div className="name">Rishika’s</div>
                            <div className="catigory">Living Room</div>
                        </div>
                        <div className="text-wrap">
                            <p className="text">
                                She used her wedding magazine as a decor element on her coffee table and cherishes her wedding memories,
                                everyday.
                            </p>
                            <ButtonSecondary/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
        
        
    );
};
