import  React, { useState } from "react"; 
import Header from "../Header";
import Content from "../Content";
import Popup from "../Popup";
// import Menu from "../Menu";
import './index.scss';
const Main = () => {
    const [popup, setPopup] = useState(false);
    const showPopup = () => {
        setPopup(!popup);
    };
    return (
        <div className="Main">
            <Header />
            <Content showPopup={showPopup} />
            {/* <Menu /> */}
            {popup && <Popup closePopup={()=>setPopup(false)} />}
        </div>
    )
}

export default Main;