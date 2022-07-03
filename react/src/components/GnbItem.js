import React from 'react';
import { Link } from 'react-router-dom';
import 'scss/components/gnb.scss';

const GnbItem = (gnbs) => {
  return (
    <>
      {gnbs.map((gnbOne) => {
        return (
          <div className="gnb-item" key={gnbOne.name} depth="1">
            <span>{gnbOne.name}</span>
            {gnbOne.children && gnbOne.children.map((gnbTwo) => {
              return (
                <div className="gnb-item" key={gnbTwo.name} depth="2">
                  <span>{gnbTwo.name}</span>
                  {gnbTwo.children && gnbTwo.children.map((gnbThree) => {
                    return (
                      <div className="gnb-item" key={gnbThree.name} depth="3">
                        <span className="link">
                          <Link to={gnbThree.pathname}>{gnbThree.name}</Link>
                        </span>
                      </div>
                    )
                  })}
                </div>
              );
            })}
          </div>      
        )
      })}
    </>
  );
};

export default GnbItem;
