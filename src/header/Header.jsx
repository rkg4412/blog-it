import React from 'react'
import '../header/header.css';

export default function Header() {
    return (
     <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">
                React and Node
            </span>
            <span className="headerTitleLg">
              Blog It
            </span>
        </div>
        <img
        className="headerImg"
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2014/03/blog-writing.jpg"                                     /* Image to be added for header */
        alt=""
        />
     </div>
    )
}
