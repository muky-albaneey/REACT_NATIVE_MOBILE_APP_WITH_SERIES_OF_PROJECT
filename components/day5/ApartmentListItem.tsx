import { View, Text,StyleSheet, Image, ViewStyle } from 'react-native'
import React from 'react'
import apartment from '@assets/data/day5/apartment.json'
type ApartmentListItemType = {
    apartment : (typeof apartment)[0],
     containerStyle?: ViewStyle
}
export default function ApartmentListItem({apartment, containerStyle} : ApartmentListItemType) {
  return (
    <View style={[styles.card, containerStyle]}>
        <Image source={{uri: apartment.image}} style={styles.image} />
        <View style={styles.rightCon}>
            <Text style={styles.title}>{apartment.title}</Text>
            <Text style={styles.description}>{apartment.description}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>N {apartment.price} night 🌃 </Text>
                <Text style={styles.price}>{apartment.rating}({apartment.numberOfStars})</Text>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    card :{
       
        backgroundColor: 'white',        
        padding:10,
        flexDirection: 'row',
        borderRadius:20,
        overflow:'hidden'
        // height:200,
    },

    title: {
        fontFamily:'interBold',
        fontSize : 16,
    },
    description:{
        fontSize: 11,
        color:'grey',
    }
    ,
    price: {
        fontFamily:'interBold',
    }
    ,
    image:{
        width:150,
        aspectRatio:1,
    },

    rightCon: {
        padding:10,
        flex:1,
    },
    footer:{
        flexDirection : 'row',
        justifyContent:'space-around',
        marginTop:'auto',
    },


})