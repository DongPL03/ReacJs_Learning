import React from "react";

const AuthContext = React.createContext();

function Provider(props) {
  const [user, setUser] = React.useState({
    userId: 1,
    fullname: "k1D0zG",
    email: "k1D0zG@example.com",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth(){
  
}