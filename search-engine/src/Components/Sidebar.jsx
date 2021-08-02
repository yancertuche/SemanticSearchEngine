import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Principal</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/graphic" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Explorar Datos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/result" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="search">Búsqueda avanzada</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            {/*<NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>*/}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter 
        style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '18px 5px',
            }}
          >
            Yan
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;