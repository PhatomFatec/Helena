import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import PickerSelect, { defaultStyles } from 'react-native-picker-select';

const ConversorMedidas = () => {
  const [text, setText] = useState('');
  const [valor, setValor] = useState('');

  let campoValidacao = () => {
    if (valor == 'Fem') {
      <Text> Testeeeee </Text>;
    }
  };
  return (
    <SafeAreaView>
      <Text style={Styles.titulo1}>Conversor de tamanho de calçados</Text>
      <Text style={Styles.titulo}>Selecione o sexo do modelo:</Text>
      <View style={Styles.picker}>
        <PickerSelect
          style={{ height: 50, whidth: '100%' }}
          Value={valor}
          onValueChange={(valor) => setValor(valor)}
          items={[
            { label: 'Feminino', value: 'Fem' },
            { label: 'Masculino', value: 'Masc' },
          ]}
        />
      </View>
      <Text style={Styles.titulo}>Digite o tamanho para a conversão: </Text>
      <View>
        <TextInput
          style={{ height: 40, marginLeft: 30, marginTop: -27 }}
          placeholder="Tamanho"
          Value={text}
          onChangeText={(text) => setText(text)}
          Multiline="False"
          maxLength={2}
          keyboardType={'numeric'}
        />
        // Mostrando os valores pegos pelas variaveis
        <Text style={Styles.titulo}> {text} </Text>
        <Text style={Styles.titulo}> {valor} </Text>
      </View>
      <Button onPress={() => campoValidacao}/>
    </SafeAreaView>
  );
};

export default ConversorMedidas;

const Styles = StyleSheet.create({
  picker: {
    alignItems: 'center',
    marginLeft: 23,
    marginTop: -30,
  },
  titulo: {
    fontSize: 15,
    marginTop: 30,
    margin: 30,
    alignItems: 'center',
  },
  titulo1: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    margin: 30,
    alignItems: 'center',
  },
});
