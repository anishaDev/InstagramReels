import { StyleSheet, Text, View,FlatList,Image, Dimensions ,} from 'react-native'
import React, { useState,useEffect,useCallback,useRef } from 'react'
import { useFocusEffect,useIsFocused } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height
const Reelsscreen = () => {

    const[reels,setReels] = useState([])
    const isFocused = useIsFocused();
    useEffect(() => {
   const getReels = async ()=>{
    const showImages = [
        "https://media.istockphoto.com/id/1452624899/photo/magnifying-glass-looking-at-wooden-figurine.jpg?s=1024x1024&w=is&k=20&c=caJzFPeAicf2CuszM0BuFyoKcbU-htAk5Qej8Z2eEug=",
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      "https://media.istockphoto.com/id/1452624899/photo/magnifying-glass-looking-at-wooden-figurine.jpg?s=1024x1024&w=is&k=20&c=caJzFPeAicf2CuszM0BuFyoKcbU-htAk5Qej8Z2eEug=",
         "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
           "https://media.istockphoto.com/id/1452624899/photo/magnifying-glass-looking-at-wooden-figurine.jpg?s=1024x1024&w=is&k=20&c=caJzFPeAicf2CuszM0BuFyoKcbU-htAk5Qej8Z2eEug=",
      ];
    setReels(showImages);

   }
getReels()
    
     
    }, [isFocused])
  



    useFocusEffect(() => {
      const scrollToTop = () => {
        if (flatListRef.current) {
          flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
        }
      };
  
      scrollToTop();
    });
  
    const flatListRef = React.useRef(null);
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

     <FlatList
      ref={flatListRef}
     data ={reels}
     renderItem={({item})=>(
        <View style={{width:screenWidth,height:screenheight,backgroundColor:'red'}}>
            <Image source = {{uri: item}}
            style={{width:screenWidth,height:screenheight,}}
            />
           {/* <Text style={{fontSize:12,color:'black',textAlign:'center'}}>{item}</Text> */}
        </View>
     )}
     

pagingEnabled
     
     
     />
    </View>
  )
}

export default Reelsscreen

const styles = StyleSheet.create({})