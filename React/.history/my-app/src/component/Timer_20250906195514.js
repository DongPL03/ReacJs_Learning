import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [message, setMessage] = useState('Hello Timer');
    useEffect(() => {
        const interval = setInterval(() => {
            setMessage((prev) => prev + '!');
        }, 2000);
    }, [message]);

    return (
        <div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
    );
};

export default Timer;