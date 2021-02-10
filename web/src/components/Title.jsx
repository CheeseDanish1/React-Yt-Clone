import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

class Title extends Component {
  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
      </Helmet>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string
};


export default Title;
