import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, Image, View} from 'react-native';
import ButtonComponent from '../../components/Button';
import FotoSJC from '../../../assets/SJoséCampos.jpg';
import IconCidade from '../../../assets/iconhotelwhite.png';

export default function SobreCidade({navigation}){

  const histSJCampos = () => {
    navigation.navigate('sobreSJCampos');
  };

  return (
    <SafeAreaView style={styles.container}>
        <Image
            source={IconCidade}
            style={styles.IconCidade}
          />
        <View style={styles.titulo}>
            <Text style={styles.title}>Conheça a História das Cidades Disponíveis!</Text>
        </View>
        <SafeAreaView style={styles.slide2}>
        <SafeAreaView style={styles.slide}>
        <View style={styles.botao}>
            <Image
            source={FotoSJC}
            style={styles.FotoSJC}
          />
        </View>
        <View style={styles.botao}>
            <ButtonComponent text="São José dos Campos" style={styles.botao1} onPress={histSJCampos}/>
        </View>

        </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    /* sbackgroundColor: '#F0FF', */
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    width: 380,
    marginTop: 5,
    marginBottom: -28,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 30,
  },
  titulo:{
  },
  IconCidade:{
    height: 50,
    width: 50,
    marginBottom: -100,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FotoSJC: {
    height: 233,
    width: 380,
    marginBottom: 15,
    marginTop: -110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 30,
    alignItems: 'flex-end',
    marginTop: -85,
    width: 380,
    height: 210,
    backgroundColor: '#9867C5',
    borderRadius: 20,
  },
  slide2: {
    flexDirection: 'column',
    justifyContent: 'center',
    /* alignItems: 'flex-end', */
    marginTop: 30,
    width: 440,
    height: 550,
    backgroundColor: '#FFFF',
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
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 110,
    marginLeft: 16,
    marginRight: 16,
  },
});
