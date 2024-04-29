import React, { useState, useEffect } from "react";

function EventListenerExample() {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        // Function to handle click event
        const handleClick = () => {
            setClickCount(prevCount => prevCount + 1);
        };

        // Add event listener when component mounts
        document.addEventListener("click", handleClick);

        // Clean up by removing event listener when component unmounts
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []); // Empty dependency array means this effect will run only once on component mount

    return (
        <div>
           
            <p>Click count: {clickCount}</p>
            <p>Click anywhere on the document to increase count</p>
        </div>
    );
}

export default EventListenerExample;
