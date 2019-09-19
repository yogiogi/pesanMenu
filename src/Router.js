import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import forget from './components/auth/forgetPassword';

import Home from './components/pages/Home';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'SignIn',
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'SignUp',
      header: null
    }
  },
  Forget: {
    screen: forget,
    navigationOptions: { header: null }
  },
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  }
})

const AppContainer = createAppContainer(AuthStack);
export default AppContainer;