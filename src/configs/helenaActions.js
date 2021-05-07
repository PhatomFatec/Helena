import React, {usaState} from 'react';
import {navigate} from '../RootNavigation';
import * as Speech from 'expo-speech';


export const HelenaActions = [
  {
    name: 'open-maps',
    words: [
      'Helena abrir função mapa',
      'Helena abrir a função mapa',
      'Helena função mapa',
      'Helena acessar função mapa',
    ],
    handler: () => {
      //navigate('construcao');
      const [text, setText] = usaState('Bem vindo amigo');
      Speech.speak(text, {language: 'pt-BR'});
    },
  },
  {
    name: 'show-hotel-address',
    words: [
      'Helena qual o endereço do hotel',
      'Helena endereço do hotel',
      'Helena endereço hotel',
    ],
    handler: () => {
      navigate('construcao');
    },
  },
  {
    name: 'show-functions',
    words: [
      'Helena abrir lista de funções',
      'Helena lista de funções',
      'Helena lista funções',
      'Helena mostrar lista de funções',
      'Helena abrir funções',
      'Helena abrir lista de funcionalidades',
      'Helena funções',
      'Helena abrir lista de funções exemplo'
    ],
    handler: () => {
      navigate('ListaFuncoes');
    },
  },
  {
    name: 'show-weather',
    words: [
      'Helena abrir função previsão do tempo',
      'Helena função previsão do tempo',
    ],
    handler: () => {
      navigate('Previsao');
    },
  },
  {
    name: 'show-Map-Turism',
    words: [
      'Helena abrir função mapa turístico',
      'Helena abrir função foto mapa turístico',
      'Helena função mapa turístico',
      'Helena mapa turístico',
    ],
    handler: () => {
      navigate('FotoMapa');
    },
  },
  {
    name: 'show-schedule',
    words: [
      'Helena abrir função que horas são',
      'Helena abrir função grade de horários',
      'Helena função que horas são'
    ],
    handler: () => {
      navigate('GradeHorarios');
    },
  },
  {
    name: 'show-number-hotel',
    words: [
      'Helena mostrar função número da recepção',
      'Helena função número da recepção',
      'Helena abrir função número recepção',
      'Helena abrir função número da recepção',
    ],
    handler: () => {
      navigate('NumeroRecepcao');
    },
  },
  {
    name: 'open-money-converter',
    words: [
      'Helena abrir função conversão de moedas',
      'Helena abrir função conversão de moeda',
      'Helena abrir a função conversão de moedas',
      'Helena função moedas',
    ],
    handler: () => {
      navigate('construcao');
    },
  },
  {
    name: 'show-schedule',
    words: [
      'Helena Abrir função lista de agenda',
      'Helena abrir função lista de agenda',
      'Helena abrir função agenda',
      'Helena mostar função agenda',
    ],
    handler: () => {
      navigate('construcao');
    },
  },
  {
    name: 'show-alarm',
    words: ['Helena abrir função alarme', 'Helena função alarme'],
    handler: () => {
      navigate('construcao');
    },
  },
  {
    name: 'show-city-map',
    words: [
      'Helena mostre a função mapa da cidade',
      'Helena função mapa da cidade',
    ],
    handler: () => {
      navigate('construcao');
    },
  },
];
