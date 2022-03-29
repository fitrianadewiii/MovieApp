/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home,Pesanan,Akun,Detail} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components/';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="movie" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="ticket" component={Pesanan} options={{ headerShown: false }} />
        <Tab.Screen name="account" component={Akun} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
};

const Router = () => { 
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="MainApp" style={styles.background} component={MainApp} options={{ headerShown: false }}/>
      <Stack.Screen name="Detail" style={styles.background} component={Detail} options={{ headerShown: false }}/>
    </Stack.Navigator>
      
  );
};

export default Router;

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFFFFF'
  }
});
