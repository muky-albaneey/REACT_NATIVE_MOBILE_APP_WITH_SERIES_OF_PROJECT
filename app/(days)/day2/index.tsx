import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';


export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{title: 'Day 2'}} />
      <Text style={{fontFamily: 'amaticBold'}}>Day1</Text>
      <Link href={"/day2/onboarding"} asChild>
        <Button title='go to onboarding' />
      </Link>
    </View>
  )
}
