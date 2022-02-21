import React from 'react'
import globe from '../images/globe.png'

function Header() {
    return (
        <>
            <div className="header">
                <img className="header-img" src={globe} alt="" />
                <h1 className="header-text">my travel journal.</h1>
            </div>
        </>
    )
}

export default Header