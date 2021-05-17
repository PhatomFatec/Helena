import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Linking} from 'react-native';
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
        latitude:-23.2968856,
        longitude:-45.975549,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421       
      },
      markers:[
        {key: 1,  coords:{latitude:-23.1878222,longitude:-45.8886825}, pinColor:'red', titulo: 'Banhado' },
        {key: 2,  coords:{latitude:-23.206598,longitude:-45.9528229}, pinColor:'red', titulo: 'Parque Técnológico - Univap' },
        {key: 3, coords:{latitude:-23.1715639,longitude:-45.8899985}, pinColor:'red', titulo: 'Parque Roberto Burle' },
		    {key: 4, coords:{latitude:-23.1808672,longitude:-45.886671}, pinColor:'red', titulo: 'Mercado Municipal' },
		    {key: 5, coords:{latitude:-23.1973739,longitude:-45.8974538}, pinColor:'red', titulo: 'Parque Vicentina Aranha' },
		    {key: 6, coords:{latitude:-23.1999426,longitude:-45.8921348}, pinColor:'red', titulo: 'Parque Santos Dumont' },
		    {key: 7, coords:{latitude:-23.217603,longitude:-45.906459}, pinColor:'red', titulo: 'Parque Ulisses Guimarães' },
		    {key: 8, coords:{latitude:-23.1982065,longitude:-45.8883887}, pinColor:'red', titulo: 'Catedral São Dimas' },
		    {key: 9, coords:{latitude:-23.1843083,longitude:-45.8876614}, pinColor:'red', titulo: 'Praça Afonso Pena' },
		    {key: 10, coords:{latitude:-23.1635173,longitude:-45.9115702}, pinColor:'red', titulo: 'Parque Alberto Simões'},
        {key: 11, coords:{latitude:-23.184143,longitude:-45.886032}, pinColor:'red', titulo: 'Shopping Centro' },
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
          region={region}
          loadingEnabled
          >

           {
             markers.map((marker)=>{
             return(
                <Marker key={marker.key} coordinate={marker.coords} title={marker.titulo} icon={marker.img} >
                  
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
