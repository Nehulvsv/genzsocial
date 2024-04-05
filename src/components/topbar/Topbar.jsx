import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo">GENZSOCIAL</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="search your friends"
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="./assets/person/1.jpg" alt="helo" className="profileImage" />
      </div>
    </div>
  );
}
