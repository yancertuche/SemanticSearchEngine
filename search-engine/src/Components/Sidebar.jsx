import React, {useState} from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';

const Sidebar = (props) => {
  return (
    <I18nProvider locale={props.la}>
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
                <CDBSidebarMenuItem icon="columns">{translate('principal')}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/graphic" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">{translate('explorar')}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/result" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="search">{translate('avanzada')}</CDBSidebarMenuItem>
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
    </I18nProvider>
  );
};

export default Sidebar;