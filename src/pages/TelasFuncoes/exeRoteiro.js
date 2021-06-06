import React from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Button, SafeAreaView} from 'react-native';
import ImagemMulherSorrindo from '../../../assets/MulherSorrindo2.png';
import ftExeRoteiro from '../../../assets/ftExeRoteiro.png';

const exeRoteiro = () => {
  return (
          <SafeAreaView style={styles.container}>
          < ScrollView>
            <SafeAreaView style={styles.slide}>
            <Image
                source={ImagemMulherSorrindo}              
                style={styles.ImagemMulherSorrindo}
            />

          
            <Text style={styles.title}>Roteiro Pessoal</Text>
            <Text style={styles.text}>Diga a Afirmação:</Text>
            <Text style={styles.text1}>"Helena, abrir roteiro pessoal"</Text>
            <Text style={styles.text3}>ou algo similar</Text>
            <Text style={styles.text2}>e a Helena responderá com a seguinte ação:</Text>

            <Image
                source={ftExeRoteiro}              
                style={styles.ftExeRoteiro}
             />
            </SafeAreaView>
            </ScrollView>
          </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    /* backgroundColor: '#F0FF', */
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flexDirection: 'column',
    justifyContent: 'center',
    /* alignItems: 'flex-end', */
    width: 360,
    height: 940,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 75,
    marginBottom: 20,
    
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
    color: '#4c1482',
    marginTop: 30,
    marginBottom:5,
    fontWeight:'bold',
  },
  text1: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000000',
    marginTop: 15,
    marginBottom:5,
  },
  text2: {
    textAlign: 'center',
    fontSize: 23,
    color: '#4c1482',
    marginTop: -10,
    marginBottom:5,
    fontWeight:'bold',
  },
  text3: {
    textAlign: 'center',
    fontSize: 23,
    color: '#4c1482',
    marginTop: 15,
    marginBottom:5,
    fontWeight:'bold',
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    marginTop: 15,
    marginLeft: 16,
    marginRight: 16,
    textDecorationLine: 'underline',
  },
  ImagemMulherSorrindo: {
    height: 160,
    width: 160,
    justifyContent: 'center',
    marginLeft: 85,
    alignItems: 'center',
    marginTop: -140,
    marginBottom: -45,
  },
  ftExeRoteiro: {
    height: 550,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 20,
  },
});



export default exeRoteiro;
