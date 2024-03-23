import { createContext, useContext, useState } from "react";

//this is the context AuthContext
export const AuthContext = createContext();

// to be able to consume this value we are using this useAuthContext hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// This is the provider, this wraps our app with these { authUser, setAuthUser } values
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
