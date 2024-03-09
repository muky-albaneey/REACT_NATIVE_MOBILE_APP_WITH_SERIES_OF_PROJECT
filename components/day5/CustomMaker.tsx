import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'



export default function CustomMaker({marker, onPress } : any) {
  return (
    <Marker   // <Marker/>
      onPress={onPress}
      coordinate={{ latitude: marker.latitude, longitude: marker.longitude,}}
      title={marker.title}
      description={marker.description}
    >
      <View style={styles.mapText}>
        <Text style={{fontFamily:'interBold'}}>Naira {marker.price}</Text>
      </View>
    </Marker>
  )
}



const styles = StyleSheet.create({
    map :{
      width : '100%',
      height: '100%'
    },
    mapText:{
      backgroundColor: 'white',
      padding:3,
      paddingHorizontal:5,
      borderRadius:20,
      borderColor: 'grey',
    }
})