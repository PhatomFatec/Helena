import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,} from 'react-native';
import MapView from 'react-native-maps';
/*
SP: -23.5492243   -46.5813785
DF: -15.8080374  -47.8750231
CG: -20.4695225 -54.6016767
*/
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      region:null
    };

  }

  async componentDidMount(){
    await navigator.geolocation.getCurrentPosition(
      async ({ coords:{latitude, longitude} })=>{
        this.setState({
          region:{
            latitude:-23.143515,
            longitude:-45.78241833333333,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
          }
        });
      },
      ()=>{  }, //ERRO
      {
        timeout:2000,
        maximumAge:1000,
      }
    )
  }
  render() {
    const {region} = this.state;

    return (
      <View style={styles.container}>

        <MapView
          minZoomLevel={10}
          style={styles.mapa}
          region={region}
          showsUserLocation
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapa:{
    width:'100%',
    height:'100%',
    marginTop: 15
  }
});