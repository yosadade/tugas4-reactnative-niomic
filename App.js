import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Content from './components/Content';

export default class App extends Component {
  render() {
    return (
      <View>
        <Content />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
