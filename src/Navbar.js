import React from "react";
//import SignUp from "./SignUp";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The True blogs</h1>
            <div className="links">
                <a href="/"style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>
                <a href="/signUp" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Sign up</a>
            </div>
        </nav>
    );
}
 
export default Navbar;