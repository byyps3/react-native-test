import React from 'react';
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Index from './src'

const Stack = createNativeStackNavigator();

interface IOptions {
  route: RouteProp<ParamListBase, string>
}

const options = ({route}: IOptions): NativeStackNavigationOptions => {
  return {
    headerShown: false,
    animation: 'slide_from_right',
    ...route.params,
  }
}

const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Index} options={options} />
          <Stack.Screen name="Details" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
