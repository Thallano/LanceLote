import React from 'react';
import { AppLoading } from 'expo';
import AppStack from './src/routes/AppStack';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { Poppins_400Regular, Poppins_600SemiBold, Poppins_900Black, useFonts } from '@expo-google-fonts/poppins';
import { Raleway_900Black, Raleway_700Bold, Raleway_800ExtraBold} from '@expo-google-fonts/raleway';

const App: React.FC = () => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_600SemiBold,
    Poppins_900Black,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  }); 
  
  if (!fontsLoaded){
    return <AppLoading/>;  
  } else {
    return (
    <>
      <StatusBar style="light"  />
      <NavigationContainer>
      <AppStack />
      </NavigationContainer>
    </>
    );
  } 
}

export default App;