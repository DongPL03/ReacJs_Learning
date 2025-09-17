import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [message, setMessage] = useState('Hello Timer');
    useEffect(() => {}, [])
    setInterval(() => {},2000
    return (
        <div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
    );
};

export default Timer;