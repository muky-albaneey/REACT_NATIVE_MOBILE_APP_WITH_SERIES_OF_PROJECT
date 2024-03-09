import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack, router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureDetector,Gesture ,Directions} from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut,BounceInRight,BounceInLeft, SlideInLeft, BounceOutLeft, SlideOutRight, SlideOutLeft } from 'react-native-reanimated';

const onBoardingSteps =  [
    {
        icon : 'snowflake',
        title: 'Well come to #Mukhy 💰 trans 🤑  ',
        description: 'Track every transaction" is a robust and intuitive financial management tool ',
    },
    {
        icon : 'save',
        title: 'Learn and grow together 🤲 ',
        description: 'Track every transaction" is a robust and intuitive financial management tool designed to empower individuals and businesses to monitor, analyze, and optimize their financial activities with precision. ',
    },
    {
        icon : 'people-arrows',
        title: 'Track every transaction 🤑  ',
        description: 'Track every transaction" is a robust and intuitive financial management tool designed to empower individuals and businesses to monitor, analyze, and optimize their financial activities with precision. ',
    }
];

export default function Onboarding() {

    const [screenIndex, setScreenIndex] = React.useState(0);

    const data = onBoardingSteps[screenIndex];

const onContinue= ()=>{
    const isScreen = screenIndex === onBoardingSteps.length -1;

    if(isScreen){
        setScreenIndex(0);
        // console.warn('📱 ')
    }else{
        setScreenIndex(screenIndex+1);
    }    
}

const onBack= ()=>{
    const isFirstScreen = screenIndex === 0;

    if(isFirstScreen){
        onBoarding()
        console.warn('📱 ')
    }else{
        setScreenIndex(screenIndex -1);
    }    
}
const onBoarding = ()=>{
    setScreenIndex(0);
    router.back();
}

// const swipeForward = Gesture.Fling().direction(Directions.LEFT)
//     // .onStart((event)=>{
//     //     console.log('fling start' ,event)   
//     // }) 
//     .onEnd((event)=>{
//         onContinue()
//         console.log('fling ends',event)
//     })


const swipeForward = Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
const swipeBackward = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
const unSwipes = Gesture.Simultaneous(swipeBackward, swipeForward);

  return (
    <SafeAreaView style={styles.page}>
        <Stack.Screen options={{headerShown: false}} />
        <StatusBar style='light' />
        <View  style={styles.stepIndicatorContainer}>
            {onBoardingSteps.map((step,index)=>(
                 <View style={[styles.stepIndicator,{backgroundColor: index === screenIndex ? 'goldenrod' : 'grey'}]}  key={index} />   
            ))}
           
        </View>
    <GestureDetector gesture={unSwipes}>
      <View 
        //  entering={FadeIn}
    //    exiting={SlideOutLeft}
       key={screenIndex + 90}
      style={styles.pageContent}>
      <Animated.View entering={FadeIn} exiting={FadeOut}  key={screenIndex}>      
             <FontAwesome6 
             style={styles.image}
             name={data.icon} size={100} color="goldenrod" 
             />
        </Animated.View>
        <View style={styles.footer}>
            <Animated.Text entering={FadeIn.duration(3000)} exiting={SlideInLeft.duration(800)}  key={screenIndex+ 2} style={styles.title}>{data.title}</Animated.Text>
        
            <Animated.Text entering={FadeIn.delay(1000)} exiting={FadeOut.delay(800)}  key={screenIndex +1} style={styles.description}> 
                {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
            <Text onPress={onBoarding}   style={styles.buttonText}>Skip</Text>
            {/* <Link href={'/day2/onboarding2'} asChild>
            <Pressable   style={styles.button}>
                   <Text   style={styles.buttonText}>Continue</Text>
                </Pressable>
            </Link>
            */}                 
                 <Pressable onPress={onContinue}   style={styles.button}>
                    <Text   style={styles.buttonText}>Continue</Text>
                </Pressable>            
            </View>
        </View>
      </View>
    </GestureDetector>      
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({

  page : {
        // alignItems :'center',
        justifyContent :'center',   
        flex : 1,
        backgroundColor : '#15141A',
        
    },
    pageContent :{
        padding: 20,
        flex:1,
        // gap:7
    },
    image : {
        alignSelf : 'center',
        marginTop:64,
    },

    title: {
        color: '#FDFDFD',
        fontSize :20.1,
        fontFamily: 'inter',
        letterSpacing: 1.2,
        alignItems: 'center',
        marginVertical : 18
    },
    description : {
        fontFamily: 'interBold',
        color: 'gray',
        fontSize: 15,
        lineHeight :25
    }, 
    buttonsRow:{
        marginTop:15,
        flexDirection: 'row',
        alignItems: 'center',
        gap:21,
    },   
    button:{
        backgroundColor : '#302E28',
        
        borderRadius:25,
        alignItems:'center',
        flex:1,
    },
    buttonText:{
        color: '#FDFDFD',
        fontFamily: 'interBold',
       fontWeight:'bold',
        fontSize:18,
        padding:17,
        paddingHorizontal:24
    },
    stepIndicatorContainer:{
        flexDirection: 'row',
        gap:5,
        // marginHorizontal:15,
        marginTop:35,
    },
    stepIndicator:{
        flex: 1,
        width:100,height:3,
        backgroundColor: 'grey',
        // margin:10,
    },

    footer: {
        marginTop:'auto',
        
    }
})