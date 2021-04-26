import {navigate} from '../RootNavigation';

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
  {
    name: 'show-functions',
    words: [
      'Helena abrir lista de funções',
      'Helena lista de funções',
      'Helena lista funções',
      'Helena mostrar lista de funções',
      'Helena abrir funções',
    ],
    handler: () => {
      navigate('ListaFuncoes');
    },
  },
  {
    name: 'show-agenda',
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
    name: 'show-schedule',
    words: ['Helena abrir função que horas são', 'Helena função que horas são'],
    handler: () => {
      navigate('GradeHorarios');
    },
  },
  {
    name: 'show-number',
    words: [
      'Helena mostrar função número da recepção',
      'Helena função número da recepção',
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
    name: 'show-alarm',
    words: [
      'Helena abrir função previsão do tempo',
      'Helena função previsão do tempo',
    ],
    handler: () => {
      navigate('Previsao');
    },
  },
];
