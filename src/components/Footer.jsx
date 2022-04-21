import React from "react";

function Footer(){
    const currentDay = new Date();
    const currentYear = currentDay.getFullYear();

    return <footer>
        <p>Copyright ⓒ {currentYear}</p>
    </footer>
}

export default Footer;