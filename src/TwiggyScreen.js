import { FlatList, StyleSheet, Text, View ,Image} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { err } from 'react-native-svg/lib/typescript/xml'


const TwiggyScreen = () => {
    let limit = 10
    let loadmore = true
const [data,setData] = useState([{},{}])
const [skip, setSkip] = useState(0)


useEffect(() => {
fetchData()


}, [])




const fetchData = ()=>{

    let query = `?skip=${skip}&limit=${limit}`
    fetch('https://dummyjson.com/products'+query)
.then(res => res.json())
.then(res=>{
    console.log("api res",res)
    if(res.products.length == 0){
        loadmore =false
    }
    setData(res.products)
    setSkip(skip+10)
}).catch(error=>{
    console.log("error raised during ...",error)
})
}

const renderItem = useCallback(({item})=>{
    return(
        <View>
           <Image source={{uri: item.thumbnail}}
           style={{width:"100%",height:200,borderRadius:8}}
           
           />
           <View>
            <Text>
                {item.brand}
            </Text>
           </View>
        </View>
    )
},[data])

const keyExtractor = useCallback((item)=> `${item.id}`  )

const ItemSeparatorComponent = useCallback((item)=>{
    return(<View style={{height:20}}/>)

},[data])



const onEndReached = ()=>{
if (!loadmore){
    fetchData()
}
}
  return (
    <View style={{flex:1}}>
<FlatList
data={data}
renderItem={renderItem}
keyExtractor={keyExtractor}
ItemSeparatorComponent={ItemSeparatorComponent}
onEndReached={onEndReached}
/>

    </View>
  )
}

export default TwiggyScreen

const styles = StyleSheet.create({})