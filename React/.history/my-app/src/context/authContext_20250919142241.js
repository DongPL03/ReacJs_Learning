import React, { useContext } from "react";

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

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
}

export { Provider, useAuth };
