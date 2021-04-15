import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import BoasVindas from '../pages/BoasVindas';
import Teste from '../pages/Teste';
import ListaFuncoes from '../pages/ListaFuncoes';
import Pergunta from '../pages/Pergunta';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "#4c1482"
                    }
                }}>
                <Stack.Screen name="Home" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Pergunta" component={Pergunta} options={{ headerShown: false}} />
                <Stack.Screen name="Teste" component={Teste} options={{ headerShown: false, cardStyle: {backgroundColor:"#E9967A" }}} />
                <Stack.Screen name="ListaFuncoes" component={ListaFuncoes} option={{ headerShown: false}} />
                <Stack.Screen
                    name="BoasVindas"
                    options={{
                        headerTransparent: true,
                        headerTitle: '',
                        headerTintColor: '#FFFFFF'
                    }}
                    component={BoasVindas}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}