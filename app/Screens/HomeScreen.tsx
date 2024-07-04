import { View, Text, Image } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View
    style={{flex: 1, alignItems: 'center', backgroundColor: '#FF1B1B'}}
    >
      
      <Text style={{fontSize: 60, marginTop: 40, fontWeight: '600'}}>DeathMusic</Text>

      <Text style={{fontSize: 25, fontWeight: '400'}} >Escucha tus emociones</Text>

      <View style={{ flex: 1, justifyContent: 'center', paddingTop: 300}}>
        <Image source={require('./../../assets/images/skull1 (1).png')}
          style={{width: 250, height: 250, }}></Image>
      </View>
    </View>
  )
}