import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import 'react-native-gesture-handler'; 

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <Stack.navigator initialRouteName= "Home">

          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Profile" component={HProfileome}/>
          <Stack.Screen name="Settings" component={Settings}/>

        </Stack.navigator>
    </NavigationContainer>

  );
}



/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
