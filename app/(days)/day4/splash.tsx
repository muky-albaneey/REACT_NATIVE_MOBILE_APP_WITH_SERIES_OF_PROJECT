import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

export default function splash() {
  return (
    <View style={{flex : 1, alignItems: 'center', justifyContent : 'center', backgroundColor : 'black'}}>
        {/* <Stack.Screen options={{headerShown: false}} /> */}
        <LottieView
        // autoPlay        
        style={{
            width: '80%',
            maxWidth:200,
          height: 200,        
        //   backgroundColor: '#eee',
        //   aspectRatio: 2/1
          
        }}
        // Find more Lottie files at 
        source={require('@assets/lottie/animation.json')}   
        
      />
    </View>
  )
}