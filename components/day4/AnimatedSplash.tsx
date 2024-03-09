import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import Animated,{FadeOut, FadeIn, ZoomOut} from 'react-native-reanimated';



const AnimatedComponent = Animated.createAnimatedComponent(LottieView)
 const AnimatedSplash = ({
  onAnimationFinish = (isCancelled) =>{},
} : {
  onAnimationFinish?: (isCancelled : boolean) =>void;
})=> {
  return (
    <View 
    // entering={FadeIn} exiting={FadeOut.duration(300)} 
    style={{flex : 1, alignItems: 'center', justifyContent : 'center', backgroundColor : 'black'}}>
        
        <AnimatedComponent   //LottieView HENCE YOU CAN USE (LottieView) WHEN YOU DON'T PANNICK ABOUT THE ANIMATION
        exiting={ZoomOut}
        autoPlay  
        onAnimationFinish={onAnimationFinish}   
        loop={false}   
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

 
  export default AnimatedSplash;