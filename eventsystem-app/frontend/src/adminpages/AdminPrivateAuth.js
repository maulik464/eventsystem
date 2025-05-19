import React from "react";
import { Navigate } from "react-router-dom";

function AdminPrivateAuth (props) {
    const isAuth = () => {
        let value = localStorage.getItem("Isvalid");
        console.log("PrivateAuth",value)

        if (value === "true") {
            return true;
        }else{
            return false;
        }
    };
    return <div>{isAuth() ? props.children : <Navigate to="/adminlogin"/>}</div>
}

export default AdminPrivateAuth;