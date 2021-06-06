import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import ButtonComponent from '../../components/Button';
import ListaTarefas from '../ListaTarefas';

export default function Main({navigation}) {
  
  const irParaClima = () => {
    navigation.navigate('Weather');
  };
  const irParaFotoMapa = () => {
    navigation.navigate('SobreCidade');
  };
  const irParaNumeroRecepcao = () => {
    navigation.navigate('NumeroRecepcao');
  };
  const irParaGradeHorarios = () => {
    navigation.navigate('GradeHorarios');
  };
  const irParaConversaoMoedas = () => {
    navigation.navigate('Conversor');
  };
  const irParaAgenda = () => {
    navigation.navigate('construcao');
  };
  const irParaAlarme = () => {
    navigation.navigate('construcao');
  };
  const irParaBuscarRotas = () => {
    navigation.navigate('construcao');
  };
  const irParaTraduzir = () => {
    navigation.navigate('construcao');
  };
  const irParaSobreHotel = () => {
    navigation.navigate('construcao');
  };
  const irParaAtividadesHotel = () => {
    navigation.navigate('construcao');
  };
  const irParaTourHotel = () => {
    navigation.navigate('ConversorMedidas');
  };
  const irParaTourQuarto = () => {
    navigation.navigate('construcao');
  };
  const irParaCalculadora = () => {
    navigation.navigate('Calculadora');
  };
  const ListaTarefas = () => {
    navigation.navigate('exeRoteiro');
  };
  const irParaMapa = () => {
    navigation.navigate('Mapa');
  };
  const irParaLocalizacao = () => {
    navigation.navigate('Localizacao');
  };
  const irParaPrevisao = () => {
    navigation.navigate('Previsao');
  };  
  const irParaPontosTuristicos = () => {
    navigation.navigate('exePontosTuristicos');
  };  
  const irParaTeste = () => {
    navigation.navigate('Teste');
  };           

  return (
    <View style={styles.container}>
      <Text style={styles.conhecaFuncoes}>Conheça Nossas Funções!</Text>

      <View style={styles.content}>
        <ScrollView>
          <ButtonComponent text="Pontos Turísticos" onPress={irParaPontosTuristicos} />
          <ButtonComponent text="Onde Estou?" onPress={irParaLocalizacao} />
          <ButtonComponent text="Preço de Hoteis (Mapa)" onPress={irParaGradeHorarios}/>
          <ButtonComponent text="Roteiro Pessoal" onPress={ListaTarefas} />
          <ButtonComponent text="Clima Atual" onPress={irParaClima} />
          <ButtonComponent text="Saiba Mais (Cidades)" onPress={irParaFotoMapa}/>
          <ButtonComponent text="Conversão de Medidas" onPress={irParaConversaoMoedas} />
          <ButtonComponent text="Conversão de Moedas" onPress={irParaConversaoMoedas} />

          <ButtonComponent text="Calculadora" onPress={irParaCalculadora} />

          
        </ScrollView>
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
    justifyContent: 'center',
  },
  conhecaFuncoes: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFF',
    marginTop: 15,
    marginBottom: 25,
  },
  naoHospedadoText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFF',
  },
  hospedeText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFF',
  },
  imagemiconhotel: {
    height: 100,
  },
  imagemhotelContainer: {
    alignItems: 'center',
  },
});
