import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import ButtonComponent from '../../components/Button';

export default function Main({ navigation }) {
    const handleClickGuest = () => {
        navigation.navigate('Teste');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.conhecaFuncoes}>Conheça Nossas Funções!</Text>

            <View style={styles.content}>
            <ButtonComponent text="Previsão do Tempo" onPress={handleClickGuest} />
                        <ButtonComponent text="Agenda" onPress={handleClickGuest} />
                        <ButtonComponent text="Alarme" onPress={handleClickGuest} />
                        <ButtonComponent text="Mapa da Cidade" onPress={handleClickGuest} />
                        <ButtonComponent text="Foto Mapa Turístico" onPress={handleClickGuest} />
                        <ButtonComponent text="Buscar Rota" onPress={handleClickGuest} />
                        <ButtonComponent text="Traduzir" onPress={handleClickGuest} />
                        <ButtonComponent text="Conversão de Moedas" onPress={handleClickGuest} />
                        <ButtonComponent text="Número Recepção" onPress={handleClickGuest} />
                        <ButtonComponent text="Sobre o Hotel" onPress={handleClickGuest} />
                        <ButtonComponent text="Atividades do Hotel" onPress={handleClickGuest} />
                        <ButtonComponent text="Grade de Horários" onPress={handleClickGuest} />
                        <ButtonComponent text="Tour do Hotel" onPress={handleClickGuest} />
                        <ButtonComponent text="Tour do Quarto" onPress={handleClickGuest} />
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
    },
    content: {
        flex: 1,
        justifyContent: "center"
    },
    conhecaFuncoes: {
        textAlign: "center",
        fontSize: 25,
        color: "#FFF",
        marginTop: 15,       
        marginBottom: 25,
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