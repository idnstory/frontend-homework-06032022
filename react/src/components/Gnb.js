import React from 'react';
import { Link } from 'react-router-dom';
import 'scss/components/gnb.scss';

const Gnb = () => {
  return (
    <div id="gnb">
      <h3 className="gnb-title">Sample</h3>
      <div className="gnb-inner">
        <div
          className="gnb-item"
          depth="1"
        >
          <span>Menu 1</span>
          <div
            className="gnb-item"
            depth="2"
          >
            <span className="link">
              <Link to="/1-1">Menu 1-1</Link>
            </span>
          </div>
          <div
            className="gnb-item"
            depth="2"
          >
            <span>Menu 1-2</span>
            <div
              className="gnb-item"
              depth="3"
            >
              <span className="link">
                <Link to="/1-2-1">Menu 1-2-1</Link>
              </span>
            </div>
          </div>
        </div>
        <div
          className="gnb-item"
          depth="1"
        >
          <span className="link">
            <Link to="/2">Menu 2</Link>
          </span>
        </div>
      </div>
      <h3 className="gnb-title">API menu</h3>
      <div className="gnb-inner">
        { /*  your code goes from here */ }
      </div>
    </div>
  );
};

export default Gnb;
