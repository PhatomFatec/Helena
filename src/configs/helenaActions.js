import {navigate} from '../RootNavigation';

export const HelenaActions = [
  {
    name: 'open-maps',
    words: [
      'abrir mapa',
      'abrir o mapa',
      'mapa',
      'acessar mapa',
      'mapa da cidade',
    ],
    handler: () => {
      navigate('Mapa');
    },
  },
  {
    name: 'show-hotel-address',
    words: ['qual o endereço do hotel', 'endereço hotel', 'endereço'],
    handler: () => {
      navigate('sobreHotel');
    },
  },
  {
    name: 'show-functions',
    words: [
      'abrir lista de funções',
      'lista funções',
      'mostrar lista de funções',
    ],
    handler: () => {
      navigate('ListaFuncoes');
    },
  },
  {
    name: 'show-agenda',
    words: ['abrir lista de agenda', 'abrir agenda', 'mostar agenda'],
    handler: () => {
      navigate('Agenda');
    },
  },
  {
    name: 'show-schedule',
    words: ['abrir grade de horários', 'abrir horários', 'grade de horários'],
    handler: () => {
      navigate('GradeHorarios');
    },
  },
  {
    name: 'show-number',
    words: ['mostrar número da recepção', 'número da recepção'],
    handler: () => {
      navigate('NumeroRecepcao');
    },
  },
  {
    name: 'show-alarm',
    words: ['abrir alarme', 'abrir o alarme'],
    handler: () => {
      navigate('Alarme');
    },
  },
];
