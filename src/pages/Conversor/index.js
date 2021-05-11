import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Conversor from './conversor';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="EUR" moedaB="BRL" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;