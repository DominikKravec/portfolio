"use client";

import { useState } from "react";
import Image from "next/image";
import './style.css'

export default function ImageScroller({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if(!images){
        return <div>no images</div>;
    }

    return (
        <div className="image-scroller">
            {/* Left Arrow */}
            <div className="button-wrapper">
                <button onClick={handlePrev} className="button">
                    <p>
                        {'<'}
                    </p>
                </button>
            </div>

            {/* Image Display */}
            <div className="image-wrapper">
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    fill={true}
                    
                    className="scroller-image"
                />
            </div>

            {/* Right Arrow */}
            <div className="button-wrapper">
                <button onClick={handleNext} className="button">  
                    <p>
                        {'>'}
                    </p>
                </button>
            </div>
        </div>
    );
}
