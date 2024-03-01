import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Login from './paginas/login';
import Home from './paginas/home';
import Detalhes from './paginas/detalhes'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    paddingVertical: 1,
                    borderTopColor: 'transparent',
                },
                tabBarActiveTintColor: '#3D5920',
                tabBarInactiveTintColor: 'black',
            }}
        >
            <Tab.Screen
                name='HOME'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size }) => (
                        <Ionicons name='home' size={size} color={'black'}></Ionicons>
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

function MainStack() {
    return (
        <Stack.Navigator>
            {/* apagar a home depois */}
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
                name='Detalhes'
                component={Detalhes}
                options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
                name='Tabs'
                component={Tabs}
                options={{ headerShown: false }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default function Routers() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}