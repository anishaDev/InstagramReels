import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useCallback } from 'react'
import CounterCom from './CounterCom'

const ExamCallScreen = () => {
    const [number,setNumber] = useState(0)
    const[randomNumber,setRandomNumber] = useState(0)


const  onIncrement = useCallback(()=>{
    alert(number)
    setNumber(number+1)
},[number])
  
const  onDecrement = useCallback(()=>{
    alert(number)
    setNumber(number-1)
},[number])

const onRandomNumber = useCallback(()=>{
    setRandomNumber(Math.random())

})

//
    // RNFetchBlob
    // .config({
    //   // add this option that makes response data to be stored as a file,
    //   // this is much more performant.
    //   fileCache : true,
    // })
    // .fetch('GET', 'https://source.unsplash.com/user/c_v_r/1900x800', {
    //   //some headers ..
    // })
    // .then(async (res) => {
    //   // the temp file path
    //   console.log('The file saved to ', res.path())
  
    //   const options = {
    //     imagePaths: ['/storage/emulated/0/Android/data/com.geozone/files/Pictures/DOCUMENT_SCAN_0_20230703_1026431108109466067170862.jpg'],
    //     name: 'PDFName',
    //             maxSize: {
    //       // optional maximum image dimension - larger images will be resized
    //       width: 900,
    //       // height: Math.round(deviceHeight() / deviceWidth() * 900),
    //       height: 600,
    //     },
    //   };
    //   const pdf = await RNImageToPdf.createPDFbyImages(options);
    //   openPDFFile(pdf.filePath);
    //   console.log('hello=>', pdf);
    // })





const handleSelect = item => {
  let data = [...scannedImageFile];
  const findIndex = data.findIndex(e => e.imageUri == item.imageUri);
  if (item.isSelect) {
    data[findIndex]['isSelect'] = false;
  } else {
    data[findIndex]['isSelect'] = true;
  }
  setScannedImageFile(data);
};

const handlesaveBtn = () => {
  let selectData = [];
  scannedImageFile.forEach(item => {
    if (item.isSelect) {
      item.isSelect = false;
      selectData.push(item);
    }
  });
  setselectedData(selectData);
};
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

const calculation = expensiveCalculation(number)


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginHorizontal:20}}>
<Text onPress={onRandomNumber} style={{fontSize:25,fontWeight:'bold'}}>{randomNumber}</Text>
          <TouchableOpacity onPress={onDecrement}>

          <Text  style={{fontSize:25,fontWeight:'bold'}}>memorized value</Text>
          <Text  style={{fontSize:25,fontWeight:'bold'}}>{calculation}</Text>

            <Text  style={{fontSize:25,fontWeight:'bold'}}>-</Text>
          </TouchableOpacity>
        <TouchableOpacity>
            <CounterCom number={number}/>
        {/* <Text style={{fontSize:25,fontWeight:'bold'}}>{number}</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
            <Text  style={{fontSize:25,fontWeight:'bold'}}>+</Text>
          </TouchableOpacity>

              {/* <Text>hiii</Text> */}
                {/* <TouchableOpacity
                onPress={() => handleSelect(item)}
                >
                  <Image
                    resizeMode="contain"
                    style={{width: 100, height: 100}}
                    source={{uri: item.imageUri}}
                  />
                </TouchableOpacity> */}
            {/* <Text>Selected Images</Text> */}
      {/* <View style={{width: '100%', height: 200, marginTop: 10, borderWidth: 1}}>
        <FlatList
          data={selectedData}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: 200,
                  width: 200,
                  borderWidth: 1,
                  borderColor: 'red',
                  marginTop: 10,
                  backgroundColor: item.isSelect ? 'blue' : '#FFF',
                }}>
                <Text>hiii</Text>
                  <Image
                    resizeMode="contain"
                    style={{width: 100, height: 100}}
                    source={{uri: item.imageUri}}
                  />
              </View>
            );
          }}
        />
      </View> */}

      {/* <TouchableOpacity  onPress={() =>  myAsyncPDFFunction()}>

      <Image
      resizeMode="contain"
      style={{ width: '100%', height: '100%' }}
      source={{ uri: scannedImage }}
    />
 </TouchableOpacity> */}
          </View>
    </View>
  )
}

export default ExamCallScreen

const styles = StyleSheet.create({})