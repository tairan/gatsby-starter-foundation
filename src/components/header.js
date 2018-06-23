import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
    <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
                <li><Link to="/">{ siteTitle }</Link></li>
            </ul>
        </div>
    </div>
)

export default Header
