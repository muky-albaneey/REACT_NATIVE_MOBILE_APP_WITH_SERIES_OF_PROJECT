import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
type daysTypes = {
    day :number
}
export default function DayItemsList({day} : daysTypes) {
  // console.log(day)
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
            <Text style={styles.text}>{day}</Text>
    </Pressable>  
    </Link>
    
  )
}


const styles = StyleSheet.create({
   
    box: {
      backgroundColor : 'goldenrod',
      // height:100,
      // width:130,
      flex:1,
      // alignItems: 'center',
      // justifyContent: 'center',
      // margin: 12,  
      borderColor :'gold'  ,
      borderWidth: StyleSheet.hairlineWidth,
      aspectRatio: 1/1,
      gap:22,
      justifyContent: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    text:{
        color: 'whitesmoke',
        textAlign:'center',
        // fontWeight : 'bold', 
        fontFamily: 'amaticBold',
        fontSize: 62   
        // alignItems:'center',
        
       
    }
  
  });
  