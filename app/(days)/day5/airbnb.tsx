import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'  //PROVIDER_GOOGLE INCASE WE WANT TO USE APPLE MAP WE CAN CHANGE IT AS A DEFAULT OR PROVIDER_DEFAULT
import { Stack } from 'expo-router'
import apartment from '@assets/data/day5/apartment.json'
import CustomMaker from '@components/day5/CustomMaker'
import ApartmentListItem from '@components/day5/ApartmentListItem'
import BottomSheet, { BottomSheetFlatList, useGestureEventsHandlersDefault } from '@gorhom/bottom-sheet'; 
import { FlatList } from 'react-native-gesture-handler'


export default function AirbnbScreen() {
  // console.log(apartment)
  const [selected, setSelected] = React.useState(null);

  const [region, setRegion] =  React.useState({
    latitude: 9.0820,
          longitude: 8.6753,
          latitudeDelta: 12.0,
          longitudeDelta: 12.0,
  });

  const snapPoints = React.useMemo(() => [70, '50%', '90%'], []);

  // const panGesture = Gesture.Pan().onBegin((event)=>console.log('on begin')).onUpdate((event)=>console.log("on update"));

  const panGesture =() => ({
    handleOnStart: ()=>{
      console.log('on begin')
    },
    handleOnActive: ()=>{},
    handleOnEnv: ()=>{},
   })

  

  return (
    <View>
      <Stack.Screen options={{headerShown: false}} />

      {/* <MapView /> */}
      <MapView style={styles.map}
      provider={PROVIDER_GOOGLE}
        initialRegion={region}
        region={region}
      >
         {apartment.map((marker, index) => <CustomMaker  key={index} marker={marker} onPress={()=> setSelected(marker)}/>)}
      {/* <Marker   <Marker/> */}
      {/* key={index} */}
      {/* coordinate={{ latitude: marker.latitude, longitude: marker.longitude,}} */}
      {/* title={marker.title} */}
      {/* description={marker.description} */}
      {/* > */}
        {/* <View style={styles.mapText}> */}
          {/* <Text style={{fontFamily:'interBold'}}>Naira {marker.price}</Text> */}
        {/* </View> */}
      {/* </Marker> */}
    {/* ))} */}
      </MapView>
      {selected && (        
          <ApartmentListItem apartment={selected} 
          containerStyle={{position: 'absolute',
          bottom: typeof snapPoints[0] == 'number' ? snapPoints[0] + 10 : 100,
          right:10,left:10,
          }}/>        
        )}
      <BottomSheet
        // ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        // enablePanDownToClose
        // onChange={handleSheetChanges}
        onChange={()=>console.log("unchanged!")}
        onAnimate={(from,to)=>console.log("unchanged!" + from)}
        // useGestureEventsHandlersDefault={panGesture}
      >
        <View style={styles.contentContainer}>
          <Text  style={styles.mapText}>Over {apartment.length} houses 🎉</Text>
          <BottomSheetFlatList 
            data={apartment}
            contentContainerStyle={{padding:10, gap:11,}}
            renderItem={({item})=> (
              <ApartmentListItem apartment={item} />
            )}
          />
        </View>
      </BottomSheet>
    </View>
  )
}





const styles = StyleSheet.create({
    map :{
      width : '100%',
      height: '100%',
    },
    mapText:{
      // backgroundColor: 'white',
      // padding:3,
      // paddingHorizontal:5,
      // borderRadius:20,
      // borderColor: 'grey',
      textAlign : 'center',
      fontSize :16,
      marginVertical:5,
      marginBottom:35,
      fontFamily : 'interSemi',
    },
    contentContainer:{
      flex:1,
      padding:10
    }
})