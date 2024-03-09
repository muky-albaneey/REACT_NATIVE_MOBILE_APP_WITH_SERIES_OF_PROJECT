import { View, Text } from 'react-native'
import React from 'react'
import TinderCard from '@components/day6/TinderCard'
import { Stack } from 'expo-router'
import { interpolate, useDerivedValue, useSharedValue, withDecay, withSpring } from 'react-native-reanimated';


const user =
[
    {
        "id": 1,
        image: "https://th.bing.com/th/id/R.a826fde112894b5b4ae7e3415671df56?rik=O4cs6wmN7FUG%2fA&pid=ImgRaw&r=0",
        "name": "Olumirin Waterfalls, Erin-Ijesha"
    },
    {
        "id": 2,
        "image": "https://th.bing.com/th/id/R.731f2d7b6178de34ae324f85f5b881b0?rik=oz%2bP3pUmeC1qGg&pid=ImgRaw&r=0",
        "name": "Kajuru Castle, Kaduna"
    },
    {
        "id": 3,
        "image": "https://th.bing.com/th/id/OIP.f1uu_XQbJgNm6UjDfJ3VeAHaDt?rs=1&pid=ImgDetMain",
        "name": "Yankari National Park, Bauchi"
    },
    {
        "id": 4,
        "image": "https://th.bing.com/th/id/OIP.BidWkXcqOZI4iOMbBqXZGgHaEq?rs=1&pid=ImgDetMain",
        "name": "Ogbunike Caves, Anambra"
    },
    {
        "id": 5,
        "image": "https://i.pinimg.com/originals/57/a2/30/57a2305a877482b744cd5656baf312db.jpg",
        "name": "Gurara Falls, Niger State"
    },
    {
        "id": 6,
        "image": "https://th.bing.com/th/id/OIP.FKPfsT4HSdZReMqy6gASyQHaF1?w=700&h=551&rs=1&pid=ImgDetMain",
        "name": "Ikogosi Warm Springs, Ekiti"
    },
    {
        "id": 7,
        "image": "https://live.staticflickr.com/7463/15723663306_3e7e2ffaea_b.jpg",
        "name": "Awhum Waterfall, Enugu"
    },
    {
        "id": 8,
        "image": "https://th.bing.com/th/id/R.adc31d1455452f59536b3b4ac5b18b69?rik=iGCkfT3BQBCpng&riu=http%3a%2f%2flawyer24h.net%2fwp-content%2fuploads%2f2015%2f02%2fSet-up-company-in-HCM-City..jpg&ehk=%2bCHd%2fw2UoPVmx0tMQja0R7MSiOMx6OkGYvIAPUUhERU%3d&risl=&pid=ImgRaw&r=0",
        "name": "Zuma Rock, Niger State"
    },
    {
        "id": 9,
        "image": "https://th.bing.com/th/id/R.a826fde112894b5b4ae7e3415671df56?rik=O4cs6wmN7FUG%2fA&pid=ImgRaw&r=0",
        "name": "Ouida House, Benin City"
    },
    {
        "id": 10,
        "image": "https://kadra.kdsg.gov.ng/wp-content/uploads/2022/02/Construction-of-Kawo-Flyover-Bridge.jpg",
        "name": "Olumo Rock, Abeokuta"
    },
    {

        "id":11,
        "image": "https://th.bing.com/th/id/R.2f25be0f15abfe02b240fff7576152d8?rik=P5dutZ9fMMMI5A&riu=http%3a%2f%2fwww.nairaland.com%2fattachments%2f2297568_ap15_jpeg772d2c84c85a72018f527183d5c13dde&ehk=14gWFVuRtNrwtVw9a6uABDgNtSzydEaI%2b%2b5mw%2fAKNbA%3d&risl=&pid=ImgRaw&r=0",
        "name" : "Sheik kabiru gombe"
      
      }
]



export default function tinder() {
    
    const activeIndex = useSharedValue(0);
    

    // useDerivedValue(() => {
    //     activeIndex.value =  interpolate(
    //         Math.abs(translationX.value), 
    //         [0 ,  500],
    //         [0, activeIndex.value + 1]);
    // });

   

  return (
   
    <View style={{flex:1, alignItems: 'center', justifyContent : 'center'}}>
        <Stack.Screen options={{headerShown : false}} />
      {
        user.map((profile, index)=>(
            <TinderCard key={profile.id} 
                profile={profile} numberOfCards = {user.length} 
                index= {index} activeIndex={activeIndex} 
                // translationX={translationX}
                />
        ))
      }
    </View>
    // </GestureDetector>  
  )
}
