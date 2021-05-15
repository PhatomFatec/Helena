import React, {usaState} from 'react';
import {navigate} from '../RootNavigation';


export const HelenaActions = [
  {
    name: 'show-weather',
    words: [
      'Helena abrir função previsão do tempo',
      'Helena abrir a função previsão do tempo',
      'Helena função previsão do tempo',
      'Helena qual é previsão do tempo',
      'Helena qual o clima atual',
      'Helena abrir clima atual',
      'Helena mostrar clima atual',
      'Helena clima atual',
      'Helena clima',
      'Helena qual o clima',
      'Helena abrir clima',
      'Helena abrir o clima',
      'Helena mostrar clima',
      'Helena mostrar o clima',
    ],
    handler: () => {
      navigate('Weather');
    },
  },

  {
    name: 'show-Map-Turism',
    words: [
      'Helena abrir função pontos turísticos',
      'Helena função pontos turísticos',
      'Helena pontos turísticos',
      'Helena abrir pontos turísticos',
      'Helena abrir os pontos turísticos',
      'Helena mostrar pontos turísticos',
      'Helena mostrar os pontos turísticos',
      'Helena pontos turísticos',
    ],
    handler: () => {
      navigate('Mapa');
    },
  },

  {
    name: 'open-maps',
    words: [
      'Helena abrir função mapa',
      'Helena abrir a função mapa',
      'Helena função mapa',
      'Helena acessar função mapa',
      'Helena onde eu estou',
      'Helena onde estou',
      'Helena mostrar localização',
      'Helena mostrar local',
      'Helena abrir localização',
      'Helena abrir local',
      'Helena local',
      'Helena mapa',
    ],
    handler: () => {
      navigate('Localizacao');
    },
  },

  {
    name: 'function-calculator',
    words: [
      'Helena função calculadora',
      'Helena abrir calculadora',
      'Helena abrir a calculadora',
      'Helena mostrar calculadora',
      'Helena mostrar a calculadora',
      'Helena calculadora',
      
    ],
    handler: () => {
      navigate('Calculadora');
    },
  },

  {
    name: 'open-money-converter',
    words: [
      'Helena abrir função conversão de moedas',
      'Helena abrir a função conversão de moeda',
      'Helena mostar função conversão de moedas',
      'Helena mostar a função conversão de moedas',
      'Helena função moedas',
      'Helena moedas',
      'Helena conversor de moedas',
    ],
    handler: () => {
      navigate('Conversor');
    },
  },

  {
    name: 'show-schedule',
    words: [
      'Helena abrir função lista de tarefas',
      'Helena abrir a função lista de tarefas',
      'Helena mostar função lista de tarefas',
      'Helena mostar a função lista de tarefas',
      'Helena lista de tarefas',
    ],
    handler: () => {
      navigate('ListaTarefas');
    },
  },

  {
    name: 'show-functions',
    words: [
      'Helena abrir lista de funcionalidades',
      'Helena abrir lista de funções',
      'Helena abrir a lista de funções',
      'Helena abrir lista funções',
      'Helena abrir funções',
      'Helena mostrar lista de funções',
      'Helena mostrar a lista de funções',
      'Helena mostrar lista funções',
      'Helena mostrar funções',
      'Helena lista de funções',
      'Helena lista funções',
      'Helena funções',
      'Helena lista de funcionalidades',
      'Helena funcionalidades',
    ],
    handler: () => {
      navigate('ListaFuncoes');
    },
  },

 // Em Construção _______________________________________________________________
 
 
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
    name: 'show-alarm',
    words: ['Helena abrir função alarme', 'Helena função alarme'],
    handler: () => {
      navigate('construcao');
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
];
