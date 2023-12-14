import { StyleSheet, Text, View } from 'react-native';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/pages/Home';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Header/>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
      <Footer/>
    </NavigationContainer>
  );
}