
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import ButtonComponent from '../../components/Button';
import Imagemiconhotel from '../../../assets/iconhotelwhite.png'

export default function Main({ navigation }) {
    const handleClickGuest = () => {
        navigation.navigate('BoasVindas');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sejaBemVindoText}>Seja bem-vindo!</Text>
            <View style={styles.content}>
                <Text style={styles.naoHospedadoText}>Ainda não está hospedado?</Text>
                <ButtonComponent text="Visitante" onPress={handleClickGuest} />
                <Text style={styles.hospedeText}>Já sou hospede parceiro!</Text>
                <ButtonComponent text="Leitor QR Code" />
            </View>
            <View style={styles.imagemhotelContainer}>
                    <Image source={Imagemiconhotel} resizeMode={'contain'} style={styles.imagemiconhotel} />
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
    naoHospedadoText: {
        textAlign: "center",
        fontSize: 24,
        color: "#FFF"
    },
    hospedeText: {
        textAlign: "center",
        fontSize: 24,
        color: "#FFF"
    },
    imagemiconhotel: {
        height: 100
        
    },
    imagemhotelContainer: {
        alignItems: "center"
    },
  });