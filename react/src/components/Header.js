import React from 'react';
import { Link } from 'react-router-dom';
import 'scss/components/header.scss';

const Header = () => {
  return (
    <div id="header">
      <div className="logo">
        <Link to="/">
          Haezoom
        </Link>
      </div>
    </div>
  );
};

export default Header;
