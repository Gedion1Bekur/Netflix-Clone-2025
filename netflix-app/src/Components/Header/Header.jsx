// import React from 'react'
import { useState, useEffect } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/Logo/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


export default function Header() {

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled vertically
      setScrolled(window.pageYOffset > 0);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

   
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={NetflixLogo} alt="netflix__logo" />

          <span>HomePage</span>
          <span>Series</span>
          <span>Moveis</span>
          <span>New and Popular</span>
          <span>Tv List </span>
        </div>

        <div className="right">
          <SearchIcon className="icons"/>
          <AccountBoxIcon className="icons" />
          <NotificationsNoneIcon className="icons" />
          <div className="profile">
            <ArrowDropDownIcon className="icons" />

            <div className="options">
              <span>settings</span>
              <span>Log out </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
