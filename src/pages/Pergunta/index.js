import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native';

import ButtonComponent from '../../components/Button';
import ImagemMicrophone from '../../../assets/microfone.png'
import ImagemHelena from '../../../assets/helenaicon.png';

export default function BoasVindas({ navigation }) {
    const Micro = () => {
        navigation.navigate('Pergunta');
    }

    return (
      <View style={styles.container}>
          <Image source={ImagemHelena} resizeMode={'contain'} style={styles.imagemHelena}/>
          <Text style={styles.sejaBemVindoText}>Basta Perguntar!</Text>
          <View style={styles.imageMicrophone}>
            <Image source={ImagemMicrophone} resizeMode={'contain'} style={styles.imageMicrophone}/>
          </View>
          <View style={styles.content}>
              <ButtonComponent text="Microfone" onPress={Micro} />
          </View>
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    content: {
        flex: 1,
        justifyContent: "center"
    },
    sejaBemVindoText: {
        textAlign: "center",
        fontSize: 30,
        color: "#FFF",
        marginTop: 128,       
    },
    botaoFalarText: {
        textAlign: "center",
        fontSize: 24,
        color: "#FFF"
    },
    hospedeText: {
        textAlign: "center",
        fontSize: 24,
        color: "#FFF"
    },
    imagemHelena: {
        height: 200,
        alignItems: "center",
        marginTop: 30,
        marginBottom: -100 
        
    },
    imageMicrophone: {
        height: 100,
        alignItems: "center",
        marginTop: 110,
        marginBottom: 110
    },
  });