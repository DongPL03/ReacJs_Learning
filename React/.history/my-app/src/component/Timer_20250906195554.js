import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [message, setMessage] = useState('Hello Timer');
    useEffect(() => {
        setInterval(() => {
            console.log('Timer: ', message);
            console.log("🚀 -----------------------------🚀")
            console.log("🚀 ~ Timer ~ message:", message)
            console.log("🚀 -----------------------------🚀")
        }, 2000);
    }, [message]);

    return (
        <div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
    );
};

export default Timer;