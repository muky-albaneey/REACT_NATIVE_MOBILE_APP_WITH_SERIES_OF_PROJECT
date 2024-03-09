import { View, Text } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router'
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedSplash from '@components/day4/AnimatedSplash';
import Animated, { FadeIn } from 'react-native-reanimated';
import FadeOut from 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function _Layout() {
  const [ready, setReady] = React.useState(false);

  const [splashAnimationFinished, setSplashAnimationFinished] = React.useState(false);

  
  let [fontsLoaded, fontError] = useFonts({
    inter:Inter_900Black,
    interSemi  : Inter_600SemiBold,
    interBold  : Inter_700Bold,
    amaticRegular: AmaticSC_400Regular,
    amaticBold : AmaticSC_700Bold
  });
 
  React.useEffect(() =>{
    if (fontsLoaded || fontError) {
       SplashScreen.hideAsync();
       setReady(true);
    }
 }, [fontsLoaded, fontError]);

 const showAnimatedSplash =!ready || !splashAnimationFinished;

  if (showAnimatedSplash) {
    return (
      <AnimatedSplash
       onAnimationFinish={(isCancelled)=>{
        if(!isCancelled){
          setSplashAnimationFinished(true)
        }        
      }}/>
      
    );
  }
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>

   
      <Animated.View style={{flex:1}} entering={FadeIn}>

         <Stack screenOptions={{
            headerStyle: {        
              // backgroundColor: '#f4511e',
              
              backgroundColor: 'gold',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            // headerTintColor: '#f4511e',
            headerTitleStyle: {
              fontWeight: 'bold',        
            },
          }}>
          
                <Stack.Screen name='index' options={{title: 'Mukhy It Hub',}} />
          
            
          </Stack>
       </Animated.View>      
   
    </GestureHandlerRootView>
  )
  
}