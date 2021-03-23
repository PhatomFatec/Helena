
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonComponent from '../../components/Button';

export default function Main({ navigation }) {
    const handleClickGuest = () => {
        navigation.navigate('BoasVindas');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sejaBemVindoText}>Seja bem-vindo(a)</Text>
            <View style={styles.content}>
                <Text style={styles.naoHospedadoText}>Ainda não está hospedado?</Text>
                <ButtonComponent text="Visitante" onPress={handleClickGuest} />
                <Text style={styles.hospedeText}>Já sou hospede parceiro!</Text>
                <ButtonComponent text="Leitor QR Code" />
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
        marginTop: 16        
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
    }
  });