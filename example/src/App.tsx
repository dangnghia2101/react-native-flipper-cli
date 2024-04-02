import * as React from 'react';

import { Image, StyleSheet, View } from 'react-native';
import PageFlipper from 'react-native-flipper-cli';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* <FlipperCliView color="#32a852" style={styles.box} /> */}
        <PageFlipper
          data={[
            'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/368368411_2024016164657303_3636542511897848791_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DWzRWZJZsQUAX9yfS0p&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDGNUh0PcCfIroYurI1UnFF_X158cmzFQVSpbtJkSewkQ&oe=66118EBA',
            'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/312808641_1817223318669923_7712217663074932882_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cZJq6-1lwmsAX-_pRhq&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCAgJNIJvJN-_pXCubiZrItVpGV_rJvrHoTM1qMpcTtXA&oe=66117B57',
            'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/434275945_1843626049485598_5946991271518565018_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yU25BBezIoMAX95NgYN&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDa6m6qGlUg45ks_3lzdfFXEw-6duw4v518GbE4fkqPRg&oe=66117553',
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
          renderPage={(data) => (
            <View style={{ height: '100%', width: '100%' }}>
              <Image
                source={{ uri: data }}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
          )}
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
});
