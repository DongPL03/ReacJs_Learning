import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const GalleryContext = React.createContext();

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false,
  },
];

function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCard, setValue: setStoredCard } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = React.useState(storedValue);
  const [cartItems, setCartItems] = React.useState(storedCard);
  const [favorites, setFavorites] = React.useState([]);

  function toggleFavorite(id) {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
    setValue(updatedPhotos);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) {
        setStoredCard([...prevItems]);
        return [...prevItems];
      }
        setStoredCard([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  const value = {
    photos,
    setPhotos,
    cartItems,
    setCartItems,
    favorites,
    setFavorites,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return <GalleryContext.Provider value={value} {...props} />;
}

function useGallery() {
  const context = React.useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { GalleryProvider, useGallery };
