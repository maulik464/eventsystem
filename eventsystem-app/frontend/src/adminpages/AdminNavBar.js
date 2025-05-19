import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboardicon from './adminimage/dashboardicon.png';
import Icon1 from './adminimage/icon1.png';
import Icon2 from './adminimage/icon2.png';
import Icon3 from './adminimage/icon3.png';
import Icon4 from './adminimage/icon4.png';
import Icon5 from './adminimage/icon5.png';
import Icon6 from './adminimage/icon6.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function AdminNavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleSubMenu = (menu) => {
        setActiveMenu(menu === activeMenu ? null : menu);
        setIsSubMenuOpen(menu === activeMenu ? false : true);
    };

    return (
        <div className="navcontainer">
            <div className={`nav ${isSidebarOpen ? "open" : "closed"}`}>
                <div className="nav-upper-options">
                    <div className="nav-option option1">
                        <img src={Dashboardicon} className="nav-img" alt="dashboard" /> <h3>Dashboard</h3>
                    </div>

                    <div className="nav-option" onClick={() => toggleSubMenu('pages')}>
                        <img src={Icon1} className="nav-img" alt="pages" />
                        <h3>Pages</h3>
                        <ArrowDropDownIcon 
                            className={`arrow ${isSubMenuOpen && activeMenu === 'pages' ? 'rotate' : ''}`}
                        />
                    </div>

                    {isSubMenuOpen && activeMenu === 'pages' && (
                        <div className="sidebar-submenu open">
                            <ul>
                                <li><Link to="/admin/mainbanner">Main Banner</Link></li>
                                <li><Link to="/admin/introevents">Intro Events</Link></li>
                                <li><Link to="/admin/page3">Page 3</Link></li>
                            </ul>
                        </div>
                    )}

                    <div className="nav-option" onClick={() => toggleSubMenu('reports')}>
                        <img src={Icon2} className="nav-img" alt="report" /> <h3>Report</h3>
                    </div>

                    {isSubMenuOpen && activeMenu === 'reports' && (
                        <div className="sidebar-submenu open">
                            <ul>
                                <li><Link to="/admin/report1">Report 1</Link></li>
                                <li><Link to="/admin/report2">Report 2</Link></li>
                            </ul>
                        </div>
                    )}

                    <div className="nav-option">
                        <img src={Icon3} className="nav-img" alt="institution" /> <h3>Institution</h3>
                    </div>

                    <div className="nav-option">
                        <img src={Icon4} className="nav-img" alt="profile" /> <h3>Profile</h3>
                    </div>

                    <div className="nav-option">
                        <img src={Icon5} className="nav-img" alt="settings" /> <h3>Settings</h3>
                    </div>

                    <div className="nav-option">
                        <img src={Icon6} className="nav-img" alt="logout" /> <h3>Logout</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNavBar;
