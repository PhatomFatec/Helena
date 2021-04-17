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
      navigate('Home');
    },
  },
  {
    name: 'show-hotel-address',
    words: ['qual o endereço do hotel', 'endereço hotel', 'endereço'],
    handler: () => {
      console.log('o endereco do hotel é: Rua H27E 120 - Campus do CTA');
    },
  },
];
