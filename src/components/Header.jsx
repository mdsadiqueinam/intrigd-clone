import React, { useEffect } from "react";
import MainMenu from "components/MainMenu";

export default function Header() {
  
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 299) {
        document.querySelector("#header").classList.add("is-sticky");
        document.getElementById("scrollUp").style.display = "block";
      } else {
        document.querySelector("#header").classList.remove("is-sticky");
        document.getElementById("scrollUp").style.display = "none";
      }
    }
  },[]);

  return (
    <header id="header" className={`header header-sticky `} >
      <MainMenu />      
    </header>
  );
}
