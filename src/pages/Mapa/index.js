import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

/*
SP: -23.5492243   -46.5813785
DF: -15.8080374  -47.8750231
CG: -20.4695225 -54.6016767
*/
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      region:{
        latitude:-23.1791,
        longitude:-45.8872,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421       
      },
      markers:[
        {key: 1,  coords:{latitude:-23.1886891,longitude:-46.0030994}, pinColor:'red' },
        {key: 2,  coords:{latitude:-23.1879339,longitude:-46.0031001}, pinColor:'red' },
        {key: 3, coords:{latitude:-23.1715639,longitude:-45.8899985}, pinColor:'red' },
		    {key: 4, coords:{latitude:-23.1808672,longitude:-45.886671}, pinColor:'red' },
		    {key: 5, coords:{latitude:-23.1973739,longitude:-45.8974538}, pinColor:'red' },
		    {key: 6, coords:{latitude:-23.1999426,longitude:-45.8921348}, pinColor:'red' },
		    {key: 7, coords:{latitude:-23.2183333,longitude:-45.907761}, pinColor:'red' },
		    {key: 8, coords:{latitude:-23.1985349,longitude:-45.8897282}, pinColor:'red' },
		    {key: 9, coords:{latitude:-23.1843083,longitude:-45.8876614}, pinColor:'red' },
		    {key: 10, coords:{latitude:-23.1635173,longitude:-45.9115702}, pinColor:'red' },
      ]
    };

  }

  render() {
    const {region, markers} = this.state;

    return (
      <View style={styles.container}>
        <Text>{region.latitude} | {region.longitude}</Text>

        <MapView
          style={styles.mapa}
          region={region}>

           {
             markers.map((marker)=>{
             return(
                <Marker key={marker.key} coordinate={marker.coords}>
                  
                </Marker>

             );
           })
           }       

        </MapView>

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
