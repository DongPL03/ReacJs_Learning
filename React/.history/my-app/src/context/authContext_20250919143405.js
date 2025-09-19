import React, { useContext } from "react";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, setUser] = React.useState({
    userId: 1,
    fullname: "k1D0zG",
    email: "k1D0zG@example.com",
    avatar:"https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
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

export { AuthProvider, useAuth };
