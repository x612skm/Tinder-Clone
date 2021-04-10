import React from "react";
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
function Header(){
    return( <div className='header'>
        
        <IconButton >
         <PersonIcon fontsize="large" className="header-
         icon" />
        </IconButton>
        <h2>Tinder</h2>
        <img
            className="header_logo"
            src="https://tinder.com/static/tinder.png"
            alt=""
        />
        <IconButton>
            <ForumIcon fontsize="large" className="header_icon" />
        </IconButton>
    </div>
    );
}
export default Header;