import { ServerContainer } from '@react-navigation/native';
import React from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import Swiper from 'react-native-swiper'

import ImagemMulher from '../../../assets/mulher.png';
import ImagemMulherSorrindo from '../../../assets/MulherSorrindo2.png'



export default function BoasVindas() {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                
                <Swiper
                    index={0}
                    height={540}
                    dot={
                        <View style={{backgroundColor:'rgba(0,0,0,.2)', 
                        width: 8, 
                        height: 8,
                        borderRadius: 4, 
                        marginLeft: 3, 
                        marginRight: 3, 
                        marginTop: 3, 
                        marginBottom: 3,}} />
                      }
                    autoplay={false}
                    loop={false}
                    style={styles.wrapper}
                    showsButtons={false}
                >
                    <View style={styles.slide1}>
                    <View style={styles.imagemMulherContainer}>
                    <Image source={ImagemMulher} style={styles.imagemMulher} />
                    </View>
                        <Text style={styles.helenaName}>Muito prazer! me chamo helena</Text>
                        <Text style={styles.helenaName}>Sou sua assistente virtual</Text>
                    </View>
                    <View style={styles.slide2}>
                    <View style={styles.imagemMulherContainer}>
                    <Image source={ImagemMulher} style={styles.imagemMulher} />
                    </View>
                        <Text style={styles.helenaName}>Estou aqui para te ajudar em diversas atividades!</Text>
                        <Text style={styles.helenaName}>Por exemplo:</Text>
                        <Text style={styles.helenaName}>"Qual o horário do almoço?</Text>
                    </View>
                    <View style={styles.slide3}>
                    <View style={styles.imagemMulherContainer}>
                    <Image source={ImagemMulher} style={styles.imagemMulher} />
                    </View>
                        <Text style={styles.helenaName}>"Qual o horário do almoço?</Text>
                        <Text style={styles.helenaName}>"Será ao 12:00!</Text>
                        <Text style={styles.helenaName}></Text>
                    </View>
                    <View style={styles.slide4}>
                    <View style={styles.imageMulherSorrindoContainer}>
                    <Image source={ImagemMulherSorrindo} style={styles.imagemMulherSorrindo} />
                    </View>
                        <Text style={styles.helenaName}>Basta chamar meu nome e falar!</Text>
                        <Button
                            title="Press me"
                            color="#f194ff"
                             onPress={() => Alert.alert('Button with adjusted color pressed')}
                         />
                    </View>
                </Swiper>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
        margin: 16
    },
    imagemMulherContainer: {
        flex: 1,
       alignItems: "center"
    },
    imageMulherSorrindoContainer:{
        flex: 1,
       alignItems: "center"
    },
    helenaName: {
        textAlign: "center",
        fontSize: 30,
        color: "#FFF",
        marginTop: 16        
    },
    imagemMulher: {
        width: 450,
        height: 450
    },
    imagemMulherSorrindo:{
        width: 250,
        height: 250
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
