import DropdownList from "./DropdownList";
import listItems from "./data";
import "./index.css";
import React, {useState} from "react";


function Dropdown() {

const [openState, setOpenState] = useState(false); 

const toggleOpen = ()  => {
  setOpenState(!openState); 
}

   return (
        <div className="container">
        <div data-id="wrapper" className={`dropdown-wrapper ${openState ? "open" : ""}`}>
          <button data-id="toggle" className="btn" onClick={toggleOpen}>
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          {openState && <DropdownList listItems={listItems}/>} 
        </div>
      </div>
   )
}

export default Dropdown;