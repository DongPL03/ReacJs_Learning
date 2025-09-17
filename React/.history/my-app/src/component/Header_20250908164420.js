import React, { useEffect } from 'react';

const Header = () => {
    return (
        useEffect(() => {
            const handleFixHeader = () => {
                if (window.scrollY >= 200) {
                    document.querySelector('header').classList.add('fixed', 'top-0', 'left-0', 'right-0', 'shadow-lg');
                } else {
                    document.querySelector('header').classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'shadow-lg');
                };
        }, []),
        <div className='p-5 bg-black w-full'>
            <h1 className='text-white text-3xl'></h1>
        </div>
    );
};

export default Header;