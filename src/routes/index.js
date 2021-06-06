import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import BoasVindas from '../pages/BoasVindas';
import ListaFuncoes from '../pages/ListaFuncoes';
import Pergunta from '../pages/Pergunta';

import exePontosTuristicos from '../pages/TelasFuncoes/exePontosTuristicos';
import exeRoteiro from '../pages/TelasFuncoes/exeRoteiro';

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

import MapaSJC from '../pages/Mapa/sjc';
import MapaJacarei from '../pages/Mapa/jacarei';
import construcao from '../pages/TelasFuncoes/construcao';
import {navigationRef} from '../RootNavigation';
import Conversor from '../pages/Conversor';
import Calculadora from '../pages/Calculadora';
import ListaTarefas from '../pages/ListaTarefas/index';
import Weahter from '../components/index';
import Localizacao from '../pages/Localizacao/index';
import PontosTuristicos from '../pages/PontosTuristicos';
import Teste from '../pages/Teste';
import Tradutor from '../pages/Tradutor';
import ConversorMedidas from '../pages/ConversorMedidas';
<<<<<<< HEAD
import Hotel from '../pages/Hotel';
import JacareiPreco from '../pages/HotelPreco/jacareipreco';
import SjcPreco from '../pages/HotelPreco/sjcpreco';
import ibisSjc from '../pages/HotelPreco/ibissjc';
=======

import SobreCidade from '../pages/SobreCidade';
import SobreSJCampos from '../pages/CidadesSobreCidade/sobreSJCampos';
>>>>>>> e6629e99659c52aa37a67a3db76c298bd19701df

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
        <Stack.Screen
          name="JacareiPreco"
          component={JacareiPreco}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="SjcPreco"
          component={SjcPreco}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ibisSjc"
          component={ibisSjc}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Hotel"
          component={Hotel}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Pontos Turisticos"
          component={PontosTuristicos}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Teste"
          component={Teste}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Tradutor"
          component={Tradutor}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Pergunta" component={Pergunta} />
        <Stack.Screen
          name="ListaFuncoes"
          component={ListaFuncoes}
          option={{headerShown: true}}
        />
        <Stack.Screen
          name="Localizacao"
          component={Localizacao}
          option={{headerShown: true}}
        />

        <Stack.Screen
          name="exeRoteiro"
          component={exeRoteiro}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="exePontosTuristicos"
          component={exePontosTuristicos}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="Weather"
          component={Weahter}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="ExemploAlarme"
          component={Alarme}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="AtividadesHotel"
          component={AtividadesHotel}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="construcao"
          component={construcao}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="BuscarRotas"
          component={BuscarRotas}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ConversaoMoedas"
          component={ConversaoMoedas}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="FotoMapa"
          component={FotoMapa}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="GradeHorarios"
          component={GradeHorarios}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="MapaCidade"
          component={MapaCidade}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="NumeroRecepcao"
          component={NumeroRecepcao}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Previsao"
          component={Previsao}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="SobreHotel"
          component={SobreHotel}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="TourHotel"
          component={TourHotel}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="TourQuarto"
          component={TourQuarto}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Traduzir"
          component={Traduzir}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="MapaSJC"
          component={MapaSJC}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="MapaJacarei"
          component={MapaJacarei}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Conversor"
          component={Conversor}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Calculadora"
          component={Calculadora}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="BoasVindas" 
          component={BoasVindas} 
        />
        <Stack.Screen
          name="ListaTarefas" 
          component={ListaTarefas} 
        />
        <Stack.Screen
          name="SobreCidade" 
          component={SobreCidade}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="sobreSJCampos" 
          component={SobreSJCampos} 
          options={{headerShown: true}}
        />

       <Stack.Screen
          name="ConversorMedidas"
          component={ConversorMedidas}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
