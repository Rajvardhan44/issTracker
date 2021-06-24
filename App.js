import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import IssLocationScreen from './screens/issLocationSreen';
import MeteorScreen from './screens/meteor';
                             
const stack = createStackNavigator()
export default function App() {
  return(
  <NavigationContainer>
    <stack.Navigator initialRouteName ="Home" screenOptions={{headerShown:false}}>
      <stack.Screen name ="Home" component={HomeScreen}/>
      <stack.Screen name ="IssLocation" component={IssLocationScreen}/>
      <stack.Screen name ="Meteor" component={MeteorScreen}/>
      </stack.Navigator>
  </NavigationContainer>  
    
  )
}
