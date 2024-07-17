import React from "react";
// import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import MuiAppBar from "../cmps/MuiAppBar";
// import AppFooter from "../cmps/AppFooter";
import "../assets/styles/main.scss";
// import Sidebar from "../cmps/Sidebar";
import {ChatAdapter} from "../cmps/Chat/ChatAdapter";
import Sidebar from "../cmps/Sidebar";

const MainLayout = () => {
    // const location = useLocation().pathname;
    // console.log("THE LOCATION IS ", location);
    return (
      <>
        <header>
          {/* <MuiAppBar/> */}
        </header>
          <div className="main-layout">
            <div className="sidebar-hover-target">
              <Sidebar/>
            </div>
              <div className="content-area">
                  <main className="main-container">
                      <ChatAdapter/>
                  </main>
              </div>
          </div>
      </>
    );
};
export default MainLayout;