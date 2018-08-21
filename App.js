import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Form from './app/components/indexForm';
import Lista from './app/components/lista';

import {createStackNavigator} from 'react-navigation';

const Navigator = new createStackNavigator( {
  form: {screen: Form},
  lista: {screen: Lista}
});


export default class App extends React.Component {
  render() {
    return (
      <Navigator></Navigator>

    );
  }
}

