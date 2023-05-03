import React, { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const contextInfo = {
    displayName: "Sabbir",
  };
  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
