import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <hi class="fs-1 fw-bold">Web Development</hi>
                <Typed
                    className="typed-text"
                    strings={[ "React", "Web Development", "Facebook Ads SMM", "Google Ads" ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header;
