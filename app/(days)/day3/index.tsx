import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkDownDisplayCom from '@components/day3/markDownDisplayCom';
import { SafeAreaView } from 'react-native-safe-area-context';

const desc  = `
  # Markdown
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
   -Integrate Markdown content in ** React native **
`


export default function DayDetailsScreen() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Stack.Screen options={{title: 'Day 3 : Markdown'}} />
      <MarkDownDisplayCom>
      {desc}
    </MarkDownDisplayCom>
      <Link href={"/day3/editor"} asChild>
        <Button title='go to editor' />
      </Link>
    </SafeAreaView>
  )
}
