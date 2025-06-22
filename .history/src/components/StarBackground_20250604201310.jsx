import { useState } from "react";

// id, size, x, y, opacity,AnimationDuration

export const StarBackground = () => {
    const [stars, setStas] = useState([])

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = []

        for(let i = 0;i < numberOfStars; i++){
            newStars.push(
                id: i,
                size: Math.random() * 3 + 1;
                x: Math.random() * 100,
                y: Math.random() * 100,
            )
        }
    };
    return <div></div>;
}