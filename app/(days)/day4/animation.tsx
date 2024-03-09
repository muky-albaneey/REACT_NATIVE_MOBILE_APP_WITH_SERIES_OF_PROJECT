import { View, Text, Button } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function animation() {
    const animation = React.useRef<LottieView>(null);
  return (
    <View  style={{
        flex:1,
        alignItems: 'center',
       
      }}>
        
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,        
          backgroundColor: '#eee',
        //   aspectRatio: 2/1
          
        }}
        // Find more Lottie files at 
        // source={require('@assets/lottie/Animation.lottie')}
        source={require('@assets/lottie/animation.json')}
      />
      <Button
          title="Restart Animation"
          onPress={() => {
            // animation.current?.reset();
            animation.current?.play();
          }}
        />
         <Button
          title="Pause Animation"
          onPress={() => {
            // animation.current?.reset();
            animation.current?.pause();
          }}
        />
       <Button
          title="reset Animation"
          onPress={() => {
            animation.current?.reset();
            // animation.current?.play();
          }}
        />
    </View>
  )
}