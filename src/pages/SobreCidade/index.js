import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, Image, View} from 'react-native';
import ButtonComponent from '../../components/Button';
import FotoSJC from '../../../assets/SJoséCampos.jpg';
import IconCidade from '../../../assets/iconhotelwhite.png';
import FotoJacarei from '../../../assets/Patio_Trilhos1.jpg';

export default function SobreCidade({navigation}){

  const histSJCampos = () => {
    navigation.navigate('sobreSJCampos');
  };

  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.titulo}>
            <Text style={styles.title}>Saiba Mais sobre as Cidades Disponíveis!</Text>
        </View>

        <ScrollView>

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
        <SafeAreaView style={styles.slide}>
            <View style={styles.botao}>
                <Image
                    source={FotoJacarei}
                    style={styles.FotoJacarei}
                />
            </View>
            <View style={styles.botao}>
                <ButtonComponent text="Jacareí" style={styles.botao1} onPress={histSJCampos}/>
            </View>
        </SafeAreaView>
        </SafeAreaView>
        </ScrollView>
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FotoSJC: {
    height: 233,
    width: 380,
    marginBottom: 15,
    marginTop: -100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  FotoJacarei: {
    height: 233,
    width: 380,
    marginBottom: 15,
    marginTop: -100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  slide: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    alignItems: 'flex-end',
    marginTop: 100,
    marginBottom: 5,
    width: 380,
    height: 220,
    backgroundColor: '#9867C5',
    borderRadius: 20,
  },
  slide2: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 5,
    width: 410,
    height: 750,
    backgroundColor: '#FFFF',
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
    marginTop: 55,
    marginBottom: 25,
    marginLeft: 16,
    marginRight: 16,
  },
});
