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
    navigation.navigate('construcao');
  };
  const irParaTourQuarto = () => {
    navigation.navigate('construcao');
  };
  const irParaCalculadora = () => {
    navigation.navigate('Calculadora');
  };
  const ListaTarefas = () => {
    navigation.navigate('ListaTarefas');
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
    navigation.navigate('Pontos Turisticos');
  };  
  const irParaTeste = () => {
    navigation.navigate('Teste');
  };           

  return (
    <View style={styles.container}>
      <Text style={styles.conhecaFuncoes}>Conheça Nossas Funções!</Text>

      <View style={styles.content}>
        <ScrollView>
        <ButtonComponent text="Teste" onPress={irParaTeste} />
          <ButtonComponent text="Pontos Turísticos" onPress={irParaPontosTuristicos} />
          <ButtonComponent text="Clima Atual" onPress={irParaClima} />
          <ButtonComponent text="Onde Estou?" onPress={irParaLocalizacao} />
          <ButtonComponent text="Conversão de Moedas" onPress={irParaConversaoMoedas} />
          <ButtonComponent text="Roteiro Pessoal" onPress={ListaTarefas} />
          <ButtonComponent text="Saiba Mais (Cidades)" onPress={irParaFotoMapa}/>
          <ButtonComponent text="Preço de Hoteis" onPress={irParaGradeHorarios}/>
          
          <ButtonComponent text="Calculadora" onPress={irParaCalculadora} />

          <ButtonComponent
            text="🚧 Número Recepção"
            onPress={irParaNumeroRecepcao}
          />
          <ButtonComponent text="🚧 Previsão do Tempo" onPress={irParaPrevisao} />
          <ButtonComponent text="🚧 Alarme" onPress={irParaAlarme} />
          <ButtonComponent text="🚧 Buscar Rota" onPress={irParaBuscarRotas} />
          <ButtonComponent text="🚧 Traduzir" onPress={irParaTraduzir} />
          <ButtonComponent text="🚧 Sobre o Hotel" onPress={irParaSobreHotel} />      
          <ButtonComponent
            text="🚧 Atividades do Hotel"
            onPress={irParaAtividadesHotel}
          />
          <ButtonComponent text="🚧 Tour do Hotel" onPress={irParaTourHotel} />
          <ButtonComponent text="🚧 Tour do Quarto" onPress={irParaTourQuarto} />
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
