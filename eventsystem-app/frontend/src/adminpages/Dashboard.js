import React from "react";
import './Admin.css'
import Toggleicon from './adminimage/toggleicon.png'
import Searchicon from './adminimage/searchicon.png'
import Notifyicon from './adminimage/notifyicon.png'
import Profileicon from './adminimage/profileicon.png'

function Dashboard() {
    return (
        <div>
            <header>
                <div class="logosec">
                    <div class="logo">Event Company</div>
                    <img src={Toggleicon} className="icn menuicn" id="menuicn" alt="menu-icon" />
                </div>
                
                <div class="searchbar">
                    <input type="text"
                        placeholder="Search" />
                    <div class="searchbtn">
                        <img src={Searchicon} class="icn srchicn" alt="search-icon" />
                    </div>
                </div>

                <div class="message">
                    <div class="circle"></div>
                    <img src={Notifyicon} class="icn" alt="" />
                    <div class="dp">
                        <img src={Profileicon} class="dpicn" alt="dp" />
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Dashboard