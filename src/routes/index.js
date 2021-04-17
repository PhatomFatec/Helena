import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import BoasVindas from '../pages/BoasVindas';
import Teste from '../pages/Teste';
import ListaFuncoes from '../pages/ListaFuncoes';
import Pergunta from '../pages/Pergunta';

import Agenda from '../pages/TelasFuncoes/agenda';
import Alarme from '../pages/TelasFuncoes/alarme';
import AtividadesHotel from '../pages/TelasFuncoes/atividadesHotel';
import BuscarRotas from '../pages/TelasFuncoes/buscarRota';
import ConversaoMoedas from '../pages/TelasFuncoes/conversaoMoedas';
import FotoMapa from '../pages/TelasFuncoes/fotoMapa';
import GradeHorarios from '../pages/TelasFuncoes/gradeHorarios';
import MapaCidade from '../pages/TelasFuncoes/mapaCidade';
import NumeroRecepcao from '../pages/TelasFuncoes/numeroRecepcao';
import Previsao from '../pages/TelasFuncoes/previsao';
import SobreHotel from '../pages/TelasFuncoes/sobreHotel';
import TourHotel from '../pages/TelasFuncoes/tourHotel';
import TourQuarto from '../pages/TelasFuncoes/tourQuarto';
import Traduzir from '../pages/TelasFuncoes/traduzir';
import {navigationRef} from '../RootNavigation';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#4c1482',
          },
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#FFFFFF',
        }}>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Pergunta" component={Pergunta} />
        <Stack.Screen
          name="Teste"
          component={Teste}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#E9967A'},
          }}
        />
        <Stack.Screen
          name="ListaFuncoes"
          component={ListaFuncoes}
          option={{headerShown: false}}
        />

        <Stack.Screen
          name="Agenda"
          component={Agenda}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="Alarme"
          component={Alarme}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="AtividadesHotel"
          component={AtividadesHotel}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="BuscarRotas"
          component={BuscarRotas}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="ConversaoMoedas"
          component={ConversaoMoedas}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="FotoMapa"
          component={FotoMapa}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="GradeHorarios"
          component={GradeHorarios}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="MapaCidade"
          component={MapaCidade}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="NumeroRecepcao"
          component={NumeroRecepcao}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="Previsao"
          component={Previsao}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="SobreHotel"
          component={SobreHotel}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="TourHotel"
          component={TourHotel}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="TourQuarto"
          component={TourQuarto}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />
        <Stack.Screen
          name="Traduzir"
          component={Traduzir}
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#A020F0'},
          }}
        />

        <Stack.Screen name="BoasVindas" component={BoasVindas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
