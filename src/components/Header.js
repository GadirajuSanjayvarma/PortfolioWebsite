import React from "react";
import "../css/header.css";
function Header() {
  return (

    <div>
        
        <div className="header">
        <a href="/" className="logo">sanjayDev website</a>
        <div className="header-right">
            <a  href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/certificates">Certifications</a>
            <a href="/contacts">Contact</a>
        </div>
        
       
        </div>
        

     


    </div>
    
  );
}
export default Header;