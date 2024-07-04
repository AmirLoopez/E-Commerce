import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../Screens/ExploreScreen';
import ComprasScreen from '../Screens/ComprasScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const TabBotton = createBottomTabNavigator()

function Navegador() {
  return (
    <TabBotton.Navigator screenOptions={{headerShown: false}}>
        <TabBotton.Screen name='home' component={HomeScreen}
            options={{
              tabBarLabel:({color}) => (
                <Text style={{color: color, fontSize: 12,  marginBottom: 3}}>Home</Text>
              ),
              tabBarIcon:({color, size}) => (
                <Entypo name="home" size={24} color="#8D1414" />
              )
            }}
        />
        <TabBotton.Screen name='explore' component={ExploreScreen}
            options={{
              tabBarLabel:({color}) => (
                <Text style={{color: color, fontSize: 12,  marginBottom: 3}}>Explore</Text>
              ),
              tabBarIcon:({color, size}) => (
                <Entypo name="magnifying-glass" size={24} color="#8D1414" />
              )
            }}
        />
        <TabBotton.Screen name='compras' component={ComprasScreen}
            options={{
              tabBarLabel:({color}) => (
                <Text style={{color: color, fontSize: 12,  marginBottom: 3}}>Carrito</Text>
              ),
              tabBarIcon:({color, size}) => (
              <Entypo name="shopping-cart" size={24} color="#8D1414" />              )
            }}
        />
        <TabBotton.Screen name='profile' component={ProfileScreen}
            options={{
              tabBarLabel:({color}) => (
                <Text style={{color: color, fontSize: 12,  marginBottom: 3}}>Profile</Text>
              ),
              tabBarIcon:({color, size}) => (
                <FontAwesome name="user" size={24} color="#8D1414" />
              )
            }}
        />
    </TabBotton.Navigator>
  )
}

export default Navegador;