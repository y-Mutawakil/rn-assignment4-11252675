import { Text, SafeAreaView, StyleSheet,View,ScrollView } from 'react-native';
import Login from './Login'
import Home from './home'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
const Stack =createStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
  return (

 <NavigationContainer>
  
   <Tab.Navigator>
    
    <Tab.Screen name = 'Login' component ={Login}/>
    <Tab.Screen name='Home' component ={Home}/>
   
   </Tab.Navigator>
  
 </NavigationContainer>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems:'center'
  }
 
})
