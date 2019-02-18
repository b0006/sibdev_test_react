import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../ErrorIndicator'

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;

    if(hasError) {
      return <ErrorIndicator />
    } else {
      return this.props.children;
    }
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.element.isRequired
};

export default ErrorBoundry;
