import React, { useEffect } from 'react';

const Header = () => {
    return (
        useEffect(() => {
            document.title = "Movie Search App";
        }, []),
        <div className='p-5 bg-black w-full'>
            <h1 className='text-white text-3xl'>Movie Search App</h1>
        </div>
    );
};

export default Header;