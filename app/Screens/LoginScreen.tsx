import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '@/Componentes/SignInWithOAuth';
import * as Linking from "expo-linking"




WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })});

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);





  return (
    <View>
        <Image source={require('./../../assets/images/skull1 (1).png')}
        style={{width: 350, height: 350}}></Image>
        <View>
            <TouchableOpacity onPress={onPress} style={{
                padding: 15, 
                backgroundColor: "#DBD8D8", 
                borderRadius: 15,
                borderColor:'#000000', 
                borderWidth: 1 }}>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20
                        }}>
                            Entrar al Infierno
                    </Text>

            </TouchableOpacity>
        </View>
    </View>
  )
}