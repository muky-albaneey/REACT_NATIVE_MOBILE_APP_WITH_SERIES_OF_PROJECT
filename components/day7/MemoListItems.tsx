import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AVPlaybackStatus, Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import Animated, {  Extrapolation, interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Memo } from '@/(days)/day7/memos';


export default function MemoListItems({memo} : {memo : Memo}) {

  const [sound, setSound] = React.useState<Sound>();
  const [status, setStatus] = React.useState<AVPlaybackStatus>();

// console.log(memo);
// const lines = memo.metering.slice(0, 10);
let lines =[];

let numLines =3;

for(let i =0; i <numLines; i++){
  
  const meteringIndex = Math.floor(i * memo.metering.length / numLines);

  const nextMeteringIndex = Math.ceil((i + 1) * memo.metering.length / numLines);
  
  const values = memo.metering.slice(meteringIndex, nextMeteringIndex);

  const average = values.reduce((sum, a)=> sum + a ,0) / values.length;

  lines.push(average);
  // lines.push(memo.metering[meteringIndex]);

}

memo.metering.forEach((db, index) =>{

});

  async function loadSound() {

    console.log('Loading Sound');
    // const { sound } = await Audio.Sound.createAsync( require('./assets/Hello.mp3'));
    const { sound } = await Audio.Sound.createAsync( 
      {uri : memo.uri},
       {progressUpdateIntervalMillis : 1000 / 60}, 
      //  undefined, 
       onPlayBackStatusUpdate );
    setSound(sound);

    sound.setOnAudioSampleReceived((sample)=>console.log(JSON.stringify(sample,null,2)));

  }


     const onPlayBackStatusUpdate = React.useCallback( async(newStatus :AVPlaybackStatus) => {
      // console.log(JSON.stringify(status, null, 2));
      setStatus(newStatus);

        if(!newStatus.isLoaded || !sound){
          return;
        }
      
        
        if(newStatus.didJustFinish){
          // console.log("dddddd");
           await sound?.setPositionAsync(0)
          // sound?.setStatusAsync({ positionMillis:0 })
          //  sound?.replayAsync()
        }
      // if(newStatus.isLoaded && sound && newStatus.didJustFinish){
      //    sound?.setPositionAsync(0)
      // }
      },[sound])


      React.useEffect(()=>{
      
        loadSound()
  
      },[memo]);
  

  async function playSound() {
  
      if(!sound){
        return;
      }
    // console.log('Playing Sound');
    if(status?.isLoaded && status.isPlaying){
      await sound.pauseAsync();
    }else{
      await sound.replayAsync();
    }
    
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const formatMills =  (millis :number)=>{

    const minutes = Math.floor(millis / (1000 * 60));
    const seconds = Math.floor((millis % (1000 * 60)) / 100)

    return `${minutes}: ${seconds < 10 ? 0 : ''} ${seconds}`

  }

  const isplaying = status?.isLoaded ? status.isPlaying : false;

  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration = status?.isLoaded ? status.durationMillis : 1;


  const progress = position / duration;

  const animatedIndicatorStyle = useAnimatedStyle(() =>({
    left : `${progress * 100}%`
    //  withTiming(`${progress * 100}%`,{duration:(status?.isLoaded && status.progressUpdateIntervalMillis) || 100,})
  }))
  return (
    <View style={styles.container}>
      <FontAwesome onPress={playSound} name={isplaying ? "pause" : "play"} size={24} color="gray" />
      {/* <Text>{uri}</Text> */}
      <Text>play back</Text>
      
    <View style={styles.playbackCon}>

      {/* <View style={styles.playBackground} /> */}
      <View style={styles.wave}>
        {lines.map(db=><View style={[styles.waveLine, {height: interpolate(db, [-250, 0], [-50, 150], Extrapolation.CLAMP )},  ]} />)}
      </View>
        <Animated.View style={[styles.playBackIndicator, animatedIndicatorStyle]} />
        <Text style={{
          position : 'absolute', right:0, bottom:0, 
          color : 'gray', fontFamily : 'interSemi'}}
        >
            {formatMills(position || 0)} / {formatMills(duration || 0)}
            </Text>
     </View>
    </View>  
  )
}




const styles  = StyleSheet.create({
  container :{
    backgroundColor : 'whitesmoke',
    margin :5,
    shadowColor : '#000',
    flexDirection: 'row',
    alignItems : 'center',
    padding: 15,
    paddingVertical:5,
    borderRadius : 10,
    gap : 10,
    shadowOffset :{
      width: 1,
      height:1,
    },
    shadowOpacity:0.25,
    shadowRadius :0.22,
    elevation : 3,
  },
  playbackCon : {
    // backgroundColor : 'gray',
    flex:1,
    height:53,
    // flexDirection: 'row',
    // alignItems : 'center',
    justifyContent:'center',
  },
  playBackground :{
    height:3,
    backgroundColor : 'gainsboro',
    borderRadius:5,
  },
  playBackIndicator:{
    width:10,
    aspectRatio : 1,
    borderRadius : 10,
    backgroundColor : 'royalblue',
    position: 'absolute'
  },
  wave: {
    flexDirection :'row',
    alignItems:'center',
    gap:6,
  },
  waveLine: {
    flex:1,
    // height:30,
    backgroundColor:'gainsboro',
    borderRadius: 20,
  }
})