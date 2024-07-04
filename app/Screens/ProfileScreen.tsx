import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ffffff' }}>

        <View style={{paddingBottom: 20}}>
          <Text style={{fontSize: 30, borderWidth: 1, padding:15, borderRadius: 15 }}>PROFILE</Text>
        </View>

              
          <Text>Cambiar Nombre de Usuario:</Text>
            <TextInput style={{height: 40, width: 350, margin:12, padding: 10, borderRadius: 15, borderColor: '#00000', borderWidth: 1, backgroundColor:'#DBD8D8' }}></TextInput>
          <Text>Telefono:</Text>
            <TextInput style={{height: 40, width: 350, margin:12, padding: 10, borderRadius: 15, borderColor: '#00000', borderWidth: 1, backgroundColor:'#DBD8D8'}}></TextInput>
          <Text>Edad:</Text>
            <TextInput style={{height: 40, width: 350, margin:12, padding: 10, borderRadius: 15, borderColor: '#00000', borderWidth: 1, backgroundColor:'#DBD8D8'}}></TextInput>

            <View style={{paddingTop: 20}}>
                <TouchableOpacity  style={{
                padding: 10, 
                backgroundColor: "#DBD8D8", 
                borderRadius: 20,
                borderColor:'#000000', 
                borderWidth: 1,
                width: 250,
                }}>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20
                        }}>
                            Save
                    </Text>

            </TouchableOpacity>
            </View>
      </View>
  )
}