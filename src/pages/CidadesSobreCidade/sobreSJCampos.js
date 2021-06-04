import {ServerContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, Image, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import Swiper from 'react-native-swiper';

export default function SobreCidade({navigation}){

  const headerHeight = useHeaderHeight();

return (
    
    <View style={{...styles.container, marginTop: headerHeight}}>
      <View style={styles.content}>
        <View style={styles.slideroxo}>
            <Text style={styles.title}>São José dos Campos</Text>
        </View>
        <ScrollView>
        <Swiper
          index={0}
          autoplay={false}
          loop={false}
          style={styles.wrapper}
          showsButtons={false}>

          <SafeAreaView style={styles.slide1}> 
            <Text style={styles.text5}>Imagens</Text>
            <Text style={styles.text3}>a</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.slide2}>
            <Text style={styles.text5}>A Cidade</Text>
            <Text style={styles.text3}>"São José dos Campos é uma cidade que une cultura, tradição e tecnologia. No núcleo urbano estão localizados institutos federais de pesquisa científica, empresas de tecnologia de ponta, prédios de arquitetura arrojada, universidades, faculdades e centros de formação de mão de obra qualificada. Por outro lado, a zona rural concentra quase 70% do território do município, boa parte em áreas de proteção ambiental.

É o principal município da Região Metropolitana do Vale do Paraíba e Litoral Norte e o mais importante polo aeronáutico e aeroespacial da América Latina. A população também preserva a cultura local, influenciada pela história dos bandeirantes, que traçaram pela região os caminhos rumo ao ouro das Minas Gerais, e dos tropeiros que vinham do sul do estado vizinho. Hospitaleira, a cidade recebe bem os migrantes de todas as partes, muitos dos quais participam do crescimento local."</Text>
          </SafeAreaView>

          <SafeAreaView style={styles.slide3}>
            <Text style={styles.text5}>A Cidade</Text>
            <Text style={styles.text3}>"Helena, qual a previsão do tempo?"</Text>
          </SafeAreaView>
            
          <SafeAreaView style={styles.slide4}>
            <Text style={styles.text5}>A Cidade</Text>
            <Text style={styles.text3}>"Helena, qual a previsão do tempo?"</Text>
          </SafeAreaView>
          
        </Swiper>
        </ScrollView>
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
    imagemMulherContainer: {
      alignItems: 'center',
      marginTop: -52,
      marginBottom: 22,
    },
    imageMulherSorrindoContainer: {
      flex: 1,
      alignItems: 'center',
    },
    helenaName: {
      textAlign: 'center',
      fontSize: 30,
      color: '#000000',
      marginTop: 55,
    },
    text1: {
      flex: 0.7,
      textAlign: 'center',
      fontSize: 30,
      color: '#000000',
      marginLeft: 8,
      marginRight: 8,
      marginTop: 48,
    },
    text2: {
      flex: 0.5,
      textAlign: 'center',
      fontSize: 30,
      color: '#000000',
      marginTop: 32,
    },
    text3: {
      textAlign: 'justify',
      fontSize: 22,
      color: '#000000',
      marginTop: 55,
      marginLeft: 16,
      marginRight: 16,
    },
    text4: {
      textAlign: 'right',
      fontSize: 25,
      color: '#c19de3',
      marginTop: -50,
      marginLeft: 16,
      marginRight: 16,
    },
    text5: {
      textAlign: 'center',
      fontSize: 30,
      color: '#511789',
      marginTop: 13,
      marginBottom: -43,
      marginLeft: 16,
      marginRight: 16,
      fontWeight: "bold",
    },
    
    lunchexample: {
      textAlign: 'center',
      fontSize: 30,
      color: '#000000',
      margin: 8,
    },
    timetext: {
      textAlign: 'center',
      fontSize: 30,
      color: '#511789',
      marginTop: 16,
    },
    PorExemploText: {
      textAlign: 'center',
      fontSize: 30,
      color: '#511789',
      marginTop: 55,
      marginRight: 155,
      marginBottom: 16,
      fontWeight: "bold",
    },
    imagemMulher: {
      height: 200,
    },
    imagemMulherSorrindo: {
      width: 250,
      height: 250,
    },
    imageMicrophone: {
      height: 130,
    },
    wrapper: {},

    slide1: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 380,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      marginTop: 20,
    },
    slide2: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 380,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      marginTop: 20,

    },
    slide3: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 380,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      marginTop: 20,

    },
    slide4: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 380,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      marginTop: 20,

    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    ImagemExemploTempo: {
      height: 225,
      width: 237,
      marginLeft: 16,
      marginTop: 0,
      marginBottom: -30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    botaoIniciar:{
      marginBottom: 15,
      width: 150,
    },

    titulo:{
    },

    title: {
        textAlign: 'center',
        fontSize: 26,
        color: 'white',
        marginTop: 4,
        marginLeft: 16,
        marginRight: 16,
      },

      slideroxo: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: -20,
        marginTop: -80,
        width: 420,
        height: 77,
        backgroundColor: '#9867C5',
      }
});