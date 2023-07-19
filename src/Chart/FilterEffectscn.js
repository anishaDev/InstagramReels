import * as React from "react";
import { GenericImageFilter } from "react-native-image-filter-kit";
import { Image, View, StatusBar, Text, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider';
import { HazeRemovalExtensionConfig, init } from 'react-native-image-filter-kit-haze-removal';
import { HueSaturationWheel, HSV } from 'react-native-reanimated-color-picker';
import chroma from 'chroma-js';


init();

const uri =
  'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg';

const style = { width: 320, height: 320 };

const image = <Image style={style} source={{ uri }} />;

const styles = StyleSheet.create({
  container: { alignItems: 'center', height: '100%' },
  slider: { width: '95%' },
  colorWheel: { width: '100%', flex: 1 },
  info: { position: 'absolute', left: 0, bottom: 0, backgroundColor: '#00000080', padding: 5 },
  text: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});






const ImageWithFilter = () => {
   const [distance, setDistance] = useState(0.2);
  const [color, setColor] = useState('#ff0000');

  const roundedDistance = Math.trunc(distance * 100) / 100;

 
  return (
    <View style={{ flex: 1 }}>
       <StatusBar hidden={true} />
      <GenericImageFilter
        config={{
          name: 'HazeRemoval',
          image: image,
          color,
          distance
        }}
      />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={distance}
        onSlidingComplete={setDistance}
      />
      <HueSaturationWheel style={styles.colorWheel} onColorChangeComplete={setColor} />
      <View pointerEvents={'none'} style={styles.info}>
        <Text style={styles.text}>{`distance: ${roundedDistance}`}</Text>
        <Text style={styles.text}>{`color: ${color}`}</Text>
      </View>
    </View>
  );
};

export default ImageWithFilter;
