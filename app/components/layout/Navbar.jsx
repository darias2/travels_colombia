import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar">
      <a>
        <h1 classname="navbar logo">Mountain</h1>
      </a>
      <div>
        <div classname="navbar-list">
          <a classname="navbar-list-item"> Home </a>
          <a classname="navbar-list-item"> About </a>
        </div>
      </div>
    </div>
  );
}
