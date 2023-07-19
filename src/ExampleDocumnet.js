import React, {useState} from 'react';
import {View, FlatList, Image, Button,StyleSheet} from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';

const ExampleDocumnet = () => {
  const [images, setImages] = useState([]);

  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument({});
    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

//   useEffect(() => {
//     // call scanDocument on load
//     scanDocument()
//   }, []);
  const captureImage = async () => {
    // Start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument();

    // Get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // Add the new scanned image to the scannedImages array
      setScannedImage([...scannedImage, scannedImages[0]]);
    }
  };

  // const scanImage = async () => {
  //   const imageUri = await DocumentScanner.scanDoc();
  //   if (imageUri) {
  //     const newImages = [...images, { uri: imageUri }];
  //     setImages(newImages);
  //   }
  // };

  const renderImage = ({item}) => {
    return (
      <View>
        <Image style={{width: 100, height: 100}} source={{uri: item}} />
      </View>
    );
  };

  return (
    <View style={{flex:1}}>

      <Button title="Scan Image" onPress={() => scanDocument()} />
      <Button title="Add Image" onPress={captureImage} />
      {/* <Button title="pdf Image" onPress={scanImage} /> */}
      <FlatList
        data={scannedImage}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderImage}
        numColumns={3}
      />
    </View>
  );
};

export default ExampleDocumnet;

const styles = StyleSheet.create({});
