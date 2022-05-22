import React from 'react';

export default function Header() {
  return (
    <section id="header">
        <div id="logo">
            <a href="#"><img src="/240658807_131692455861283_7195435849864079620_n.png" className="logo-img" alt="" />
                <span>Messy</span>
            </a>
        </div>
        <div id="nav">
            <ul id="navbar">
                <li><a className="active" href="/">Home</a></li>
                {/* <li><a href="/shop">Shop</a></li> */}
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                {/* <li><a href="login.html">Log In</a></li> */}
                <li id="bag"><a href="kart.html"><i className="fa-solid fa-bag-shopping"></i></a></li>
                <a href="#" id="close"><i className="fa-regular fa-x"></i></a>
            </ul>
        </div>
        <div id="mobile">
            <a href="kart.html"><i className="fa-solid fa-bag-shopping"></i></a>
            <i id="bar" className="fa-solid fa-bars"></i>
        </div>
    </section>

  ); 
}
