import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'scss/pages/work.scss';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-array-index-key */
class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname } = { ...this.props.location };

    return (
      <div className="area-work">
        <div className="page-top">
          <h3 className="pathname">{ pathname }</h3>
          <div className="button-wrap">
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
        <div
          className={ classnames('box-wrap', {}) }
        >
          {
            this.props.box.items
              ? this.props.box.items.map((item, idx) => {
                return (
                  <div
                    className={
                      classnames('box', {})
                    }
                    key={ 'box-item-' + idx }
                  >
                    <p>{ item.name }</p>
                  </div>
                );
              })
              : ''
          }
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  box: PropTypes.object.isRequired,
  location: PropTypes.object
};

Work.defaultProps = {
  location: {
    pathname: ''
  }
};

export default connect((state) => {
  return {
    box: state.ui.box
  };
})(Work);
