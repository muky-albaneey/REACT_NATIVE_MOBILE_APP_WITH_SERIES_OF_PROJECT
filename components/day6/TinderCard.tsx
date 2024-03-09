import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{ interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { PanGesture } from 'react-native-gesture-handler';  
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { useDerivedValue, useSharedValue, withDecay, withSpring } from 'react-native-reanimated';


type proType  ={
  profile :{
    id: number
    image : string
    name : string
  },
  numberOfCards : number
  index : number
  activeIndex: SharedValue<number>
  // translationX:SharedValue<number>
}
  
const translationX = useSharedValue(0);
const screenWidth = Dimensions.get('screen').width;

export const widthDimensions  = screenWidth * 0.8 ;
export default function TinderCard({ profile, numberOfCards, index , activeIndex} : proType) {

  // useDerivedValue(() => {
  //       activeIndex.value =  interpolate(
  //           Math.abs(translationX.value), 
  //           [0 ,  500],
  //           [0, activeIndex.value + 1]);
  //   });

  const animatedCard  = useAnimatedStyle(() => ({
    opacity:interpolate(
      activeIndex.value, 
      [index - 1, index, index + 1],
       [1 -1 / 5, 1 , 1]),

    transform : [
      {
      scale : interpolate(
        activeIndex.value, 
        [index - 1, index, index + 1],
        [0.95, 1, 1]
      ) 
    },
    {translateY : interpolate(
      activeIndex.value, 
      [index - 1, index, index + 1],
      [-20, 0, 0]
    )},
    {translateX : translationX.value
      // activeIndex.value <= index ?
      // interpolate(activeIndex.value, 
      //   [index - 1, index, index + 1],
      //   [0, translationX.value,  -screenWidth ]) 
      //   : 0
      // activeIndex.value == index ? translationX.value: 0
    },
    {
      rotateZ : //activeIndex.value == index ? 
        `${interpolate(
            translationX.value, 
            [-screenWidth / 2, 0, screenWidth/2], 
            [-30, 0, 30])}deg` // : '0deg'
    }
  ]  
  }));
  
  const gesture  = Gesture.Pan()
  // .enabled(activeIndex.value != index)
  // .onBegin((event)=>{
  //     console.log("🤹 begin")
  // })
  // .onFinalize((event)=>{
  //     console.log("🤹 finalize")
  // })
  .onChange((event)=>{
      translationX.value = event.translationX
      activeIndex.value =  interpolate(
        Math.abs(translationX.value), 
        [0 ,  500],
        [0, activeIndex.value + 0.8]);
  })

  .onUpdate((event)=>{
      console.log("🤹 onUpdate")
  
  })
  // .onStart((event)=>{
  //     console.log("🤹 start")
  // })
  .onEnd((event)=>{
      
      

      if(Math.abs(event.velocityX) > 400){
          translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
              velocity : event.velocityX
          }, //(finished) => {
              // if(finished){
              //     // activeIndex.value = withSpring(activeIndex.value + 1);
              //     translationX.value = 0;
              // }
         // } 
          );

          // activeIndex.value =  interpolate(
          //     translationX.value, 
          //     [-event.velocityX, 0 , Math.abs(event.velocityX)  * 500],
          //     [activeIndex.value + 1, 0])
      }else{
          translationX.value = withSpring(0);
      }
      
  });

  return (
    <GestureDetector gesture={gesture}> 
    <Animated.View
     style={[
      styles.card, 
      animatedCard,
      {zIndex: numberOfCards - index, 
        // opacity: 1 - currentIndex * .6,
       transform:[
        // {translateY : -index * 30},
        // {scale: 1 - index * 0.05},
        
    ]
     }]}>
      <Image style={[StyleSheet.absoluteFillObject , styles.image]} source={{uri : profile.image}} />
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent','rgba(0,0,0,0.8)', ]}
        style={[StyleSheet.absoluteFillObject, styles.overLay, ]}
      />
      <View style={styles.footer}>
        <Text style={styles.name}>{profile.name}</Text>
      </View>
    </Animated.View>
    </GestureDetector>  
  )
}

const styles =  StyleSheet.create({
  card:{
    width: widthDimensions,
    aspectRatio: 1 / 1.67,
    borderRadius:15,
    justifyContent: 'flex-end',
    // overflow: 'hidden',
    position: 'absolute',
    
    shadowColor: '#000',
    shadowOffset : {
      width:0,
      height:1,
    },
    shadowOpacity: 0.22,
    shadowRadius:2.22,
    elevation:3,
    // flex:1,
  },
  overLay :{top:"50%", borderBottomLeftRadius: 15, borderBottomRightRadius: 15},
  name:{
    // alignSelf: 'flex-end',
    fontSize:24,
    fontFamily:"interBold",
    color:"whitesmoke"
  },
  image:{
    borderRadius:15,
    // ...StyleSheet.absoluteFillOBject,
  },
  footer:{
    padding:10,
  }
})