import React from 'react';
import {StyleSheet, Text, Image, SafeAreaView} from 'react-native';
import ImagemMulherSorrindo from '../../../assets/MulherSorrindo2.png';

const GradeHorarios = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.slide}>
        <Image
          source={ImagemMulherSorrindo}
          style={styles.ImagemMulherSorrindo}
        />
        <Text style={styles.title}>Que horas são? </Text>
        <Text style={styles.text}>"Helena, que horas são?"</Text>
        <Text style={styles.title}>"São 19:00"</Text>
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
    marginTop: 70,
    width: 360,
    height: 550,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: '#000000',
    marginTop: 32,
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
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
});

export default GradeHorarios;
