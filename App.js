import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    greeting: undefined,
  };

  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25, marginBottom: 30 }} testID="welcome">Welcome</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
