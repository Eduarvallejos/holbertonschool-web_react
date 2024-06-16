/* update Class App */
import React, {Component} from 'react';
import Proptypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css'


class App extends Component{
  static proptypes = {
    logOut: Proptypes.func
  };

  static defaultProps = {
    logOut: () => {}
  };

  
  // Add the listener for the keydown event
  ComponentDidMount() {
    document.addEventListener('keydown', this.handlekeyDown);
  }

  // Clear the keydown event listener when the component is unmounted
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlekeyDown);
  }

  handlekeyDown = (Event) => {
    if (Event.ctrlKey && Event.Key === 'h') {
      alert('Logging you out');
      this.props.logOut
    }
  };

  render () {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          <Login />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
