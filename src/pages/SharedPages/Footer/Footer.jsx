import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Footer = () => {
  const contextInfo = useContext(AuthContext);
  return (
    <div>
      <h2>This is a footer area...{contextInfo.displayName}</h2>
    </div>
  );
};

export default Footer;
