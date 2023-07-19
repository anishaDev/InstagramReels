import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import DocumentScanner from 'react-native-document-scanner-plugin';
import RNImageToPdf from 'react-native-image-to-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import FileViewer from 'react-native-file-viewer';

const DocumentScannerScreen = () => {
  const [scannedImageFile, setScannedImageFile] = useState([]);
  const [selectedData, setselectedData] = useState([]);
  const [filteredImagePath, setFilteredImagePath] = useState('');



  console.log(scannedImageFile, 'scannedimage===>');
  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument({});
    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImageFile([{imageUri: scannedImages[0], isSelect: false}]);
    }
  };







  const addImage = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument({});
    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImageFile([
        ...scannedImageFile,
        {imageUri: scannedImages[0], isSelect: false},
      ]);
    }
  };

  const myAsyncPDFFunction = async () => {
    try {
      let imagePath = [];
      scannedImageFile.forEach(item => {
        const filePath = decodeURIComponent(
          decodeURI(item.imageUri).replace('file://', ''),
        );
        imagePath.push(filePath);
      });
      console.log('covert IMage Path=>', imagePath);
      const options = {
        imagePaths: imagePath,
        name: 'imagepdf.pdf',

        // maxSize: {
        //   // optional maximum image dimension - larger images will be resized
        //   width: 900,
        //   // height: Math.round(deviceHeight() / deviceWidth() * 900),
        //   height: Math.round(
        //     (Dimensions.get('window').height / Dimensions.get('window').width) *
        //       900,
        //   ),
        // },

        quality: 0.7, // optional compression paramter
      };
      const pdf = await RNImageToPdf.createPDFbyImages(options);
      openPDFFile(pdf.filePath);
      console.log(pdf.filePath);
    } catch (e) {
      console.log(e);
    }
  };
  const openPDFFile = filepath => {
    const path = filepath;
    FileViewer.open(path, {showOpenWithDialog: true})
      .then(() => {
        console.log('sucessfully open pdf');
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  const renderItem = ({ item }) => {
    const imageSource = filteredImagePath ? { uri: filteredImagePath } : { uri: item.imageUri };
    return (
      <View
        style={{
          height: 300,
          width: 300,
          marginTop: 40,
          paddingHorizontal: 15,
          paddingVertical: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: '100%', height: '100%', marginHorizontal: 10 }}
          source={imageSource}
        />
      </View>
    )
  }









  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 100,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
          onPress={() => {
            scanDocument();
          }}>
          <Text style={{color: 'black'}}>scan Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'pink',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
          onPress={() => {
            addImage();
          }}>
          <Text>Add Image </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
          onPress={() => {
            myAsyncPDFFunction();
            // handlesaveBtn();
          }}>
          <Text>convert Image </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black',
        }}>
        Captured Images
      </Text>
      <View
        style={{
          width: '80%',
          height: '60%',
          marginTop: 10,
          borderRadius: 40,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 40,
        }}>
        <FlatList
          data={scannedImageFile}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default DocumentScannerScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e67e22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    width: 120,
  },
});
