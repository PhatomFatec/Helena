import React, {usaState} from 'react';
import {navigate} from '../RootNavigation';

export const HelenaActions = [
  {
    name: 'show-weather',
    words: [
      'Helena clima',
      'Helena abrir função previsão do tempo',
      'Helena abrir a função previsão do tempo',
      'Helena função previsão do tempo',
      'Helena qual é previsão do tempo',
      'Helena qual o clima atual',
      'Helena abrir clima atual',
      'Helena mostrar clima atual',
      'Helena clima atual',
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
      'Helena pontos turísticos',
      'Helena pontos turisticos',
      'Helena abrir função pontos turísticos',
      'Helena função pontos turísticos',
      'Helena abrir pontos turísticos',
      'Helena abrir os pontos turísticos',
      'Helena mostrar pontos turísticos',
      'Helena mostrar os pontos turísticos',
      'Helena abrir mapa turísticos',
    ],
    handler: () => {
      navigate('Pontos Turisticos');
    },
  },

  {
    name: 'show-Map-SJC',
    words: [
      'Helena abrir pontos turísticos São José dos Campos',
      'Helena pontos turísticos São José dos Campos',
      'Helena pontos turísticos de São José dos Campos',
      'Helena mostrar pontos turísticos de São José dos Campos',
      'Helena mostrar os pontos turísticos São José dos Campos',
    ],
    handler: () => {
      navigate('MapaSJC');
    },
  },

  {
    name: 'show-Map-Jacareí',
    words: [
      'Helena abrir pontos turísticos Jacareí',
      'Helena pontos turísticos Jacareí',
      'Helena pontos turísticos de Jacareí',
      'Helena mostrar pontos turísticos de Jacareí',
      'Helena mostrar os pontos turísticos Jacareí',
    ],
    handler: () => {
      navigate('MapaJacarei');
    },
  },

  {
    name: 'open-maps',
    words: [
      'Helena onde estou',
      'Helena abrir função mapa',
      'Helena abrir a função mapa',
      'Helena função mapa',
      'Helena acessar função mapa',
      'Helena onde eu estou',
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
      'Helena calculadora',
      'Helena função calculadora',
      'Helena abrir calculadora',
      'Helena abrir a calculadora',
      'Helena mostrar calculadora',
      'Helena mostrar a calculadora',
    ],
    handler: () => {
      navigate('Calculadora');
    },
  },
  {
    name: 'show-schedule',
    words: [
      'Helena lista de tarefas',
      'Helena abrir função lista de tarefas',
      'Helena abrir a função lista de tarefas',
      'Helena mostar função lista de tarefas',
      'Helena mostar a função lista de tarefas',
    ],
    handler: () => {
      navigate('ListaTarefas');
    },
  },
  {
    name: 'open-money-converter',
    words: [
      'Helena conversor de moedas',
      'Helena abrir função conversão de moedas',
      'Helena abrir a função conversão de moeda',
      'Helena mostar função conversão de moedas',
      'Helena mostar a função conversão de moedas',
      'Helena função moedas',
      'Helena moedas',
    ],
    handler: () => {
      navigate('Conversor');
    },
  },
  {
    name: 'open-google-translate',
    words: [
      'Helena abrir google tradutor',
      'Helena abrir tradutor',
      'Helena tradutor'
    ],
    handler: () => {
      navigate('Tradutor');
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
//=========================================Adicionar mais açoes=====================================================
  {
    name: 'show-hotel-price',
    words: [
      'Helena abrir preço dos hotéis',
      'Helena abrir lista de hotel',
      'Helena abrir lista de hotéis',
    ],
    handler: () => {
      navigate('Hotel');
    },
  },

  {
    name: 'show-hotel-price-sjc',
    words: [
      'Helena abrir preço dos hotéis em são josé dos campos',
      'Helena abrir lista de hotel em são josé dos campos',
      'Helena abre preço dos hotéis em são josé dos campos',
    ],
    handler: () => {
      navigate('SjcPreco');
    },
  },

  {
    name: 'show-hotel-price-jacarei',
    words: [
      'Helena abrir preço dos hotéis em jacareí',
      'Helena abrir lista de hotel em jacareí',
      'Helena abre preço dos hotéis em jacareí',
    ],
    handler: () => {
      navigate('JacareiPreco');
    },
  },

  {
    name: 'show-hotel-info-ibisSjc',
    words: [
      'Helena abrir informações do hotel ibis',
      'Helena hotel ibis',
    ],
    handler: () => {
      navigate('ibisSjc');
    },
  },

  {
    name: 'show-hotel-info-PlazaHotel',
    words: [
      'Helena abrir informações do hotel Plaza',
      'Helena hotel plaza',
    ],
    handler: () => {
      navigate('PlazaHotel');
    },
  },

  {
    name: 'show-hotel-info-NovoHotel',
    words: [
      'Helena abrir informações do novo hotel',
      'Helena novo hotel',
    ],
    handler: () => {
      navigate('NovoHotel');
    },
  },

  {
    name: 'show-size-measure',
    words: [
      'Helena abrir conversor de medidas',
      'Helena conversor de medidas',
    ],
    handler: () => {
      navigate('ConversorMedidas');
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
