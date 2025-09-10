
import React, { useState, useEffect } from "react";

function clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return (() => {
            clearInterval(intervalId);
        })
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = time >= 12 ? "pm" : "am";

        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default clock