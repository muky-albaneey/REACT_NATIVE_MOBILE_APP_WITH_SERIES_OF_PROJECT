import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{title: 'Day 1'}} />
      <Text style={{fontFamily: 'amaticBold'}}>Day1</Text>
    </View>
  )
}