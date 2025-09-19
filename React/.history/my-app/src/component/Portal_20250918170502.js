import React from 'react';

function createPortalWrapper(){
    const element = document.createElement('div');
    element.setAttribute('id', 'portal-wrapper');
    return element;
}
const portalWrapper = createPortalWrapper();
const Portal = () => {
    return (
        <div>
            
        </div>
    );
};

export default Portal;