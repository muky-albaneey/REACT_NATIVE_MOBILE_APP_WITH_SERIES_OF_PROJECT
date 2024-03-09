import { useState } from 'react';
import { View, StyleSheet, Button, FlatList, Text, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { Recording } from 'expo-av/build/Audio';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import MemoListItems from '@components/day7/MemoListItems';


export type Memo = {
  uri: string,
  metering : number[],
}

export default function Memos() {
//   const [recording, setRecording] = useState<Recording>();
const [recording, setRecording] = useState<Recording>();
const [memos, setMemo] = useState<Memo[]>([]);
const [audioMetering, setAudioMetering] = useState<number[]>([]);

const metering = useSharedValue(-100);

const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {

 
    
    try { 

      if (permissionResponse && permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');

      const { recording } = await Audio.Recording.createAsync(
         Audio.RecordingOptionsPresets.HIGH_QUALITY, 
         undefined,
         100
      );

      setRecording(recording);
      console.log('Recording started');

      recording.setOnRecordingStatusUpdate((status) =>{
        console.log(status.metering)        

        if(status.metering){
          
          metering.value = status.metering
          setAudioMetering((crurrentVal) => [...crurrentVal, metering.value])
          // setAudioMetering((crurrentVal) => [...crurrentVal, metering.value || -100])
        }
        
      });
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {

    if(!recording){
        return;
    }
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync( 
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);

    if(uri){
      setMemo((existingMemos)=>[ {uri, metering: audioMetering},...existingMemos]);
      setAudioMetering([])
    }
  }

  const animatedRedCircle = useAnimatedStyle(()=>({
    width : withTiming(recording ? "50%" : "100%"),
    borderRadius : withTiming(recording ? 5 : 35)
  }))

  // [-375, -60, 0],
      // [0, -30,-30],
  const animatedRecordWave = useAnimatedStyle(()=>{
   const size = withTiming (
    interpolate(
      metering.value, [-175, -90, 0],[0, -10,-30],
      // [-160, -60, 0], // [0, -10,-40],
      ),{ duration:100 }
      );

   return {
     top:size,
    bottom:size,
    left:size,
    right:size,
  }
  });
  
  
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItems memo = {item} />}
      />

      <View style={styles.footer}>   
      <View>
        <Animated.View style={[animatedRecordWave, styles.recordWave]} />
        <Pressable
            style={styles.redBtn} 
            // title={recording ? 'Stop Recording' : 'Start Recording'}
            onPress={recording ? stopRecording : startRecording} 
            >
            
            <Animated.View style={[styles.redOrange, animatedRedCircle]} />
            
          </Pressable>
        </View>      
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },    

  footer :{
    backgroundColor : "white",
    height : 150,
    justifyContent : 'center',
    alignItems : 'center',
  },

  redBtn : {
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 60,
    borderWidth : 3,
    padding :3,
    borderColor : 'gray',
      height : 60,
    width: 60,
    // zIndex:1,
  },

  recordWave:{
    backgroundColor : '#ff000055',
    // ...StyleSheet.absoluteFillObject,
    position:'absolute',
    // width:'150%',
    // top:-20,
    // bottom:-20,
    // left:-20,
    // right:-20,
    // zIndex:-1000,
    borderRadius:1000,
  },

  redOrange :{
    borderRadius : 30,
    // height : 60,
    // width: 60,
    aspectRatio : 1,
    backgroundColor : "orange",
  },
  
});
