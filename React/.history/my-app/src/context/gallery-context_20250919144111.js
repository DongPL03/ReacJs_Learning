import React from 'react';

const GalleryContext = React.createContext();

const GalleryProvider = (props) => {
    const [images, setImages] = React.useState([]);
    const value = { images, setImages };
    return 
}