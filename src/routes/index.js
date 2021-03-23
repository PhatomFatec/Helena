import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import BoasVindas from '../pages/BoasVindas';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#4c1482" } }}>
                <Stack.Screen name="Home" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="BoasVindas" component={BoasVindas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}