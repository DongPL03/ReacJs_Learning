import React from 'react';

const SidebarMenu = React.forwardRef((props) => {
    return (
        <div className={`w-[300px] bg-gray-300 shadow-md fixed top-0 left-0 bottom-0 z-10 ${props.show} ? "" : "-translate-x-full"} transform transition-transform duration-300 ease-in-out`}>
        </div>
    );
});

export default SidebarMenu;