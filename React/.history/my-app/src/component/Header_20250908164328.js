import React, { useEffect } from 'react';

const Header = () => {
    return (
        useEffect(() => {
            document.title = "Movie Search App";
        }, []),
        <div className='p-5 bg-black w-full'>
            
        </div>
    );
};

export default Header;