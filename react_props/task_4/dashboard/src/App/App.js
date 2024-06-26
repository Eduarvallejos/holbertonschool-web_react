import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn = false}) {
  return (
    <div className="App">
      <div className="headerWithNotifications">
        <Notifications />
        <Header />
      </div>
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
