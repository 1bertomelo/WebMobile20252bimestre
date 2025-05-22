import React from 'react';
import { createStackNavigator } 
from '@react-navigation/stack';
import { NavigationContainer } 
from '@react-navigation/native';
import Pagina1 from './src/Screens/Pagina1';
import Pagina2 from './src/Screens/Pagina2';
import HomeScreen from './src/Screens/HomeScreen';
import JokeDetailScreen from './src/Screens/JokeDetailScreen';
import Splash from './src/Screens/splash';
import exemploSkeleton from './src/Screens/exemploSkeleton';
import CadastroScreen from './src/Screens/CadastroScreen';
import ListaScreen from './src/Screens/ListaScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="exemploSkeleton">
         <Stack.Screen name="exemploSkeleton" component={exemploSkeleton} options={{headerShown: false }} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="ListaScreen" component={ListaScreen} />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Piadas' }} />
        <Stack.Screen name="JokeDetail" component={JokeDetailScreen} options={{ title: 'Detalhe da Piada' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
