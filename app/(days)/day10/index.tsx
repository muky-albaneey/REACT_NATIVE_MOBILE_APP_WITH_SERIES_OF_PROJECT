import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkDownDisplayCom from '@components/day3/markDownDisplayCom';
import { SafeAreaView } from 'react-native-safe-area-context';

const desc  = `
  # Day 10 Bio metric security***
`


export default function DayDetailsScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Stack.Screen options={{title: 'Day 10 : Bio metric'}} />
      <MarkDownDisplayCom>
      {desc}
    </MarkDownDisplayCom>
      <Link href={"/day10/protected"} asChild>
        <Button title='go to Bio metric' />
      </Link>
    </SafeAreaView>
  )
}
