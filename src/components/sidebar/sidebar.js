import React from 'react';
import {Sidebarcontainer, Icon, Closeicon, Sidebarmenu, Sidebarlink ,Sidebarwrap, Sidebarroute} from './sidebar.element';

const Sidebar = ({isOpen, toggle}) => {
  return (
   <Sidebarcontainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
           <Closeicon />
       </Icon>
       <Sidebarmenu>
           <Sidebarlink to='/'>Pizzas</Sidebarlink>
           <Sidebarlink to='/'>Desserts</Sidebarlink>
           <Sidebarlink to='/'>Full Menu</Sidebarlink>
        </Sidebarmenu>
        <Sidebarwrap>
            <Sidebarroute to='/'>Order Now</Sidebarroute>
        </Sidebarwrap>
   </Sidebarcontainer>
    )
}

export default Sidebar;
