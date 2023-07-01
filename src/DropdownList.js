import React, {useState} from "react";

function DropdownList({listItems}) {

const [activeState, setActiveState] = useState(null); 

const stateChanger = (index) => {
  setActiveState(index);
}
  
  return (
    <ul data-id="dropdown" className="dropdown">
      {listItems.map((item, index) =>
      (<li key={index} onClick={() => stateChanger(index)} className={activeState === index ? "active" : ""}><a href="#">{item}</a></li>
      ))}
    </ul>
  )
}

export default DropdownList;

