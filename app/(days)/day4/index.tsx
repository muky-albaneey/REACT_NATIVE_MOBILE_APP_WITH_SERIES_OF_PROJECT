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
      <Stack.Screen options={{title: 'Day 4 : Animated'}} />
      <MarkDownDisplayCom>
      {desc}
    </MarkDownDisplayCom>
    <Link href={"/day4/animation"} asChild>
        <Button title='go to animation' />
      </Link>
      
      <Link href={"/day4/splash"} asChild>
        <Button title='go to splash' />
      </Link>

    </SafeAreaView>
  )
}
