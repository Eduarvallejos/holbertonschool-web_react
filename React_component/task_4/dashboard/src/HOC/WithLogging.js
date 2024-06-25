import React, {Component} from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${this.getComponentName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getComponentName()} is going to unmount`);
    }

    getComponentName() {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set display name for debugging purposes
  WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLoggingComponent;
};

export default WithLogging;
