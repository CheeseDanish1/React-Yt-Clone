/** @format */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    return (
      <button onClick={() => this.props.press()} className={`category ${this.props.active ? 'active' : ''}`}>
        {this.props.name}
      </button>
    );
  }
}

Category.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  press: PropTypes.func
};

export default Category;
