import { Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import React from "react";
import TabNavigation from "./Navigation/Navegador";
import { NavigationContainer } from "@react-navigation/native";



export default function Index() {
  return (
    <ClerkProvider publishableKey="pk_test_aGlwLWdvb3NlLTk1LmNsZXJrLmFjY291bnRzLmRldiQ">
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignedIn>
        <View>
          <NavigationContainer>
            <TabNavigation></TabNavigation>
          </NavigationContainer>
        </View>
      </SignedIn>
      <SignedOut>
        <LoginScreen></LoginScreen>      
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}
