import React, { FC, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HiSpeakerphone} from "react-icons/hi"
import { IconContext } from 'react-icons';
import {BsGear} from "react-icons/bs"
import { AiOutlineMenu, AiOutlineQuestion} from 'react-icons/ai';
// import {BiGridHorizontal} from "react-icons/bi"
import AppsIcon from "@material-ui/icons/Apps";
// import { SwipeableDrawer } from '@material-ui/core';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import "./Sidebar.css";

 const Nav = styled.div`
       position: fixed;
       display: flex;   
       color: '#fff';
       top: 0;
       left: 0;
       width: 100px;
       justify-content: space-between;
       padding: 0 20px 0 26px;
       align-items: center;
       margin-top: 56px;     
       box-sizing: border-box;
 `;


const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    margin-top: 56px;
    background-color: white;
    // border-right: 3px solid red;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 600ms ease-in-out;
 `;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    font-size: 2.5rem;
    margin-left: 1.5rem;
`;

 const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    

  return (
   <IconContext.Provider value={{color:"black" }}>
         <div className="App">
        <header className="header"> 
        <div>
            <span><AppsIcon /> </span>
            <span style={{paddingLeft: "20px"}}>To Do</span>
        </div>
        <div>Search</div>
        <div>
                <span style={{fontSize: "20px"}}>< BsGear style={{color: "#fff", marginLeft: "10px"}}  /> </span>
                <span style={{fontSize: "20px"}}><AiOutlineQuestion style={{color: "white", marginLeft: "10px"}} /></span>
                <span style={{fontSize: "20px"}}>< HiSpeakerphone style={{color: "#fff", marginLeft: "10px"}} /></span>
                <span style={{marginLeft:"15px", padding: "4px", border: "1px solid #fff", borderRadius: "60%" ,fontSize: "18px"}}>AJ</span>
           </div>
           </header>
             <div className="container">
                <div style={{backgroundColor: "rgb(245,245,245)"}}>
                <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                 <AiOutlineMenu style={{width: "20px", color: "#0275d8", marginRight: "30px"}} />  
                 </NavIcon>  
                 </Nav>
              <SidebarNav  sidebar={sidebar}>
                <SidebarWrap> 
                    <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu style={{color: "#0275d8", width: "20px", marginLeft: "20px"}} />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                 return <Submenu item={item} key={index} />;
                    })}
                </SidebarWrap>
              </SidebarNav>
             
            </div>
       </div>
  </div>
      </IconContext.Provider>
      
   );
 };

export default Sidebar;