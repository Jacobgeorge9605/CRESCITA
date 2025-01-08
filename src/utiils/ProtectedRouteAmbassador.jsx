import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

const AmbassadorPrivateRoutes = () => {
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'))?.token;
        if (token) {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp * 1000 < Date.now()) { // check if token is expired
            localStorage.removeItem('user'); // remove token from local storage
<Navigate to="/ambassador-login" />;          }
        }
      }, []); 
    const admintoken = JSON.parse(localStorage.getItem('user'))?.token;
    return admintoken ? <Outlet /> : <Navigate to="/ambassador-login" />;
};
  
export default AmbassadorPrivateRoutes;
