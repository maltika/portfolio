import { useState } from "react";

// id, size, x, y, opacity,AnimationDuration

export const StarBackground = () => {
    const [stars, setStas] = useState([])

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
    }
    return <div></div>;
}