import React from 'react';
import {StyleSheet, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import ImagemMulherSorrindo from '../../../assets/MulherSorrindo2.png';
import ImagemExemploTempo from '../../../assets/ExemploTempo.png';

const NumeroRecepcao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.slide}>
        <Image
          source={ImagemMulherSorrindo}
          style={styles.ImagemMulherSorrindo}
        />
        <Text style={styles.title}>Foto mapa Turístico</Text>
        <Text style={styles.text}> "Helena, me mostre o mapa turístico"</Text>
        <ScrollView style={styles.scrollView}>
          <Image
            source={ImagemExemploTempo}
            style={styles.ImagemExemploTempo}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

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
    marginTop: 90,
    width: 360,
    height: 550,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    marginTop: 16,
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A020F0',
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  ImagemMulherSorrindo: {
    height: 180,
    width: 310,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImagemExemploTempo: {
    height: 280,
    width: 280,
    marginLeft: 32,
    marginBottom: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NumeroRecepcao;
