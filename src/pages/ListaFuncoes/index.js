import { ServerContainer } from '@react-navigation/native';
import React from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Button } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack';

import ImagemMulher from '../../../assets/mulher.png';


export default function ListaFuncoes({ navigation }) {
    const headerHeight = useHeaderHeight();
    const agenda = () => {
        navigation.navigate('Agenda');
    }
    const alarme = () => {
        navigation.navigate('Alarme');
    }
    const maps = () => {
        navigation.navigate('Maps');
    }
    const mapaturistico = () => {
        navigation.navigate('MapaTuristico');
    }
    const buscarota= () => {
        navigation.navigate('Rota');
    }
    const traduzir = () => {
        navigation.navigate('Traduzir');
    }
    const moedas = () => {
        navigation.navigate('Moedas');
    }
    const recepcao = () => {
        navigation.navigate('Recepcao');
    }
    const sobreHotel = () => {
        navigation.navigate('SobreHotel');
    }
    const atvHotel = () => {
        navigation.navigate('AtividadesHotel');
    }
    const horarios = () => {
        navigation.navigate('Horarios');
    }
    const tourHotel = () => {
        navigation.navigate('TourHotel');
    }
    const tourQuarto = () => {
        navigation.navigate('TourQuarto');
    }

    return (
        <View style={{ ...styles.container, marginTop: headerHeight }}>
            <View style={styles.content}>
                <View style={styles.imagemMulherContainer}>
                    <Image source={ImagemMulher} resizeMode={'contain'} style={styles.imagemMulher} />
                    index={0}
                    autoplay={false}
                    loop={false}
                    style={styles.wrapper}
                    showsButtons={false}
                    <View style={styles.content}>
                        <Button title="Previsão do Tempo" onPress={} />
                        <Button title="Agenda" onPress={agenda} />
                        <Button title="Alarme" onPress={alarme} />
                        <Button title="Mapa da Cidade" onPress={maps} />
                        <Button title="Foto Mapa Turístico" onPress={mapaturistico} />
                        <Button title="Buscar Rota" onPress={buscarota} />
                        <Button title="Traduzir" onPress={traduzir} />
                        <Button title="Conversão de Moedas" onPress={moedas} />
                        <Button title="Número Recepção" onPress={recepcao} />
                        <Button title="Sobre o Hotel" onPress={sobreHotel} />
                        <Button title="Atividades do Hotel" onPress={atvHotel} />
                        <Button title="Grade de Horários" onPress={horarios} />
                        <Button title="Tour do Hotel" onPress={tourHotel} />
                        <Button title="Tour do Quarto" onPress={tourQuarto} />
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        margin: 16,
        flex: 1,
    },
    imagemMulherContainer: {
        alignItems: "center"
    },
    imageMulherSorrindoContainer: {
        flex: 1,
        alignItems: "center"
    },
    helenaName: {
        textAlign: "center",
        fontSize: 30,
        color: "#000000",
        marginTop: 32,
    },
    text1: {
        flex: 0.7,
        textAlign: "center",
        fontSize: 30,
        color: "#000000",
        marginTop: 16,
    },
    text2: {
        flex: 0.5,
        textAlign: "center",
        fontSize: 30,
        color: "#000000",
        marginTop: 32,
    },
    text3: {
        textAlign: "center",
        fontSize: 30,
        color: "#000000",
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
    },
    lunchexample: {
        textAlign: "center",
        fontSize: 30,
        color: "#000000",
        margin: 8,
    },
    timetext: {
        textAlign: "center",
        fontSize: 30,
        color: "#511789",
        marginTop: 16,
    },
    PorExemploText: {
        textAlign: "center",
        fontSize: 30,
        color: "#511789",
        marginTop: 16,
        marginRight: 155,
        marginBottom: 16,
    },
    imagemMulher: {
        height: 200
    },
    imagemMulherSorrindo: {
        width: 150,
        height: 150
    },
    wrapper: {},
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
