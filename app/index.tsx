import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import DayItemsList from '@components/DayItemsList';

const days =[...Array(24)].map((val,index) =>index +1);

export default function HomeScreen() {


  
  // const days = [1,5,8,1,5,8,]
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      contentContainerStyle={styles.content} 
      columnWrapperStyle={styles.outerCon}
        data = {days}
        numColumns={2}
        renderItem={({item})=>(
          <DayItemsList day={item}/>
          // <View style={styles.box}>
          //   <Text>{item}</Text>
          // </View>
        )} 
        // horizontal    
    
    />
    <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex:1,    
    backgroundColor: '#fff',
  },
  content : {
    gap:2,
  },
  outerCon: {
    gap:2
  },
});
