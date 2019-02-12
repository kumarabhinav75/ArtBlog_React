import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <p className="heading">The Artifact</p>
        <p className="heading-content"><i>Culture & Art blog</i></p>
        <ul className="nav-list">
          <div className="nav-items">
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </ul>
      </div>

    </header>
  );
}

export default Header;