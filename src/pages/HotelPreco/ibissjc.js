import {ServerContainer} from '@react-navigation/native';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Button,
} from 'react-native';
import ButtonComponent from '../../components/Button';
import Swiper from 'react-native-swiper';
import {useHeaderHeight} from '@react-navigation/stack';

import ImagemIbisHotel from '../../../assets/ibishotel.png';
import ImagemIbisHotel2 from '../../../assets/ibishotel2.png';


export default function BoasVindas({navigation}) {
  const headerHeight = useHeaderHeight();

  const botao = () => {
    navigation.navigate('Pergunta');
  };
  const pular = () => {
    navigation.navigate('Pergunta');
  };

  return (
    <View style={{...styles.container, marginTop: headerHeight}}>
      <View style={styles.content}>
      <Text style={styles.teste}>Hotel Ibis Dutra</Text>
      <Swiper index={0}
          autoplay={false}
          loop={false}
          style={styles.wrapper}
          showsButtons={true}>

        <View style={styles.slide1}>
        <Image
              source={ImagemIbisHotel}
              resizeMode={'contain'}
              style={styles.ImagemIbisHotel}
            />
        </View>
        <View style={styles.slide2}>
        <Image
              source={ImagemIbisHotel2}
              resizeMode={'contain'}
              style={styles.ImagemIbisHotel}
            />
        </View>
        
      </Swiper>
      <Text style={styles.descricao1}></Text>
      <Text style={styles.descricao}>🅿️ Estacionamento Grátis</Text>
      <Text style={styles.descricao}>📶 Wi-Fi</Text>
       <Text style={styles.descricao}>❄️ Ar-condicionado</Text>
       <Text style={styles.descricao}>☕ Café da Manhã</Text>
      <Text style={styles.descricao1}></Text>
      <Text style={styles.descricao1}></Text>
       <ButtonComponent text="Verificar preço" style={styles.botao}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    
  },
  content: {
    margin: 16,
    flex: 1,
  },
  ImagemIbisHotel: {
    width: 500,
    height: 250,
    marginTop: 40,
    borderRadius: 20
  },
  descricao: {
    textAlign: 'left',
    marginLeft: 20,
    fontSize: 18,
    color: 'white',
  },
  descricao1: {
    textAlign: 'left',
    fontSize: 15,
    color: 'white',
  },
  text1: {

    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 48,
  },
  text2: {

    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    marginTop: 32,
  },
  text3: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16,
  },
  teste: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    marginLeft: 1,
    marginRight: 16,
  },
  wrapper: {
    marginBottom: -50,
    height: 310,
  },
  slide1: {

    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 370,
    height: 10,
    margin: 10,
    borderRadius: 20,
  },
  slide2: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 370,
    height: 50,
    margin: 10,
    borderRadius: 20,
  },
});
