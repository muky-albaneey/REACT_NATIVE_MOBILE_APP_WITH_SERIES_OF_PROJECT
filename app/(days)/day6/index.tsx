import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkDownDisplayCom from '@components/day3/markDownDisplayCom';
import { SafeAreaView } from 'react-native-safe-area-context';


const desc  = `
  # Animated splash screen 
`


export default function DayDetailsScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Stack.Screen options={{title: 'Day 5 : Tinder animation'}} />
      <MarkDownDisplayCom>
      {desc}
    </MarkDownDisplayCom>
    <Link href={"/day6/tinder"} asChild>
        <Button title='go to Tinder Page' />
      </Link>
      
      {/* <Link href={"/day4/splash"} asChild>
        <Button title='go to splash' />
      </Link> */}

    </SafeAreaView>
  )
}
