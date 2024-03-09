import { View, ScrollView , StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import Markdown from 'react-native-markdown-display';
import MarkDownDisplayCom from '@components/day3/markDownDisplayCom';
import { TextInput } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const copy = `# Markdown editor
  start editing this content
`;


export default function editor() {
  const [saveContent, setSaveContent]= React.useState(copy);
  const [tab, setTab]= React.useState('edit');

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{headerShown: false}} />
      <View style={styles.tabsCon}>
        <Pressable onPress={()=>setTab('edit')} style={[styles.tabs, {borderColor : tab === 'edit' ? '#8a2be2' : 'white'}]}>
        <Text>Edit ✏ </Text>
        </Pressable>
        <Pressable onPress={()=>setTab('preview')} style={[styles.tabs, {borderColor : tab === 'preview' ? '#8a2be2' : 'white'}]}>
        <Text>Preview 🎑 </Text>
        </Pressable>     
      </View>
      {
        tab === 'edit' ? (
          <TextInput 
          value= {saveContent} 
          numberOfLines={50} 
          onChangeText={setSaveContent}
          style={styles.input} 
          multiline
        />      
        ) : (
          <MarkDownDisplayCom>
            {saveContent}
        </MarkDownDisplayCom>
        )
      }
     
      {/* <MarkDownDisplayCom>
       
      </MarkDownDisplayCom> */}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  page:{
    backgroundColor: 'whitesmoke',
    flex:1,
    padding:10,    
    
  },
 
  input :{
    backgroundColor: 'white',
    flex:1,
    padding:20,
    borderRadius:18,
    // justifyContent:'flex-start',
  },

  tabsCon:{
    flexDirection:'row',
    marginVertical: 5,
    gap:10,
  },
  tabs : {
    padding:10,
    flex:1,
    borderRadius:10,
    borderColor:'gray',
    borderWidth:3.5,
    alignItems:'center',
  },
  tabsText:{
    fontFamily: 'interBold',
  }


})