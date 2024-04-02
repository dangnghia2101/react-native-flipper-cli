import * as React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';
import PageFlipper from 'react-native-flipper-cli';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const renderItem = (data: string) => (
    <View style={styles.image}>
      <Image source={{ uri: data }} style={styles.image} />
      <Text>DANGAERAASFSFSFSDFSDFSDF {data}</Text>
    </View>
  );
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* <FlipperCliView color="#32a852" style={styles.box} /> */}
        <PageFlipper
          data={[
            'https://up.mangadudes.com/bleach/18/bleach-9340-c1220292956ae4cc1df0676e2d01c2e1.jpg',
            'https://up.mangadudes.com/bleach/18/bleach-9340-c1220292956ae4cc1df0676e2d01c2e1.jpg',
            'https://up.mangadudes.com/bleach/18/bleach-9340-c1220292956ae4cc1df0676e2d01c2e1.jpg',
            'https://up.mangadudes.com/bleach/18/bleach-9340-c1220292956ae4cc1df0676e2d01c2e1.jpg',
            'https://up.mangadudes.com/bleach/18/bleach-9341-159bcbae27446cd1d6c964b4b70af020.jpg',
            'https://up.mangadudes.com/bleach/18/bleach-9342-024e1db41ff0ea6e6bc47574b209fda4.jpg',
            'https://up.mangadudes.com/bleach/18/bleach-9344-b14e956a08b6998dd00a61f89db84238.jpg',
          ]}
          pageSize={{
            height: 334, // the size of the images I plan to render (used simply to calculate ratio)
            width: 210,
          }}
          portrait={true}
          renderPage={renderItem}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
