import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Button } from 'react-native-paper';
import ImageComponent from './android/app/src/components/ImageComponent';
import CtnComponent from './android/app/src/components/CtnComponent';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <ImageComponent />

          <Button icon="camera" mode="contained" onPress={() => console.log('로그찍어용~')}>
            뽀삐뽀삐
          </Button>
        </View>
        <View style={styles.ctnColumnCenter}>
          <CtnComponent style={{ borderColor: 'orange', width: '25%' }} content={<Text style={styles.highlight}>25 </Text>} />
          <CtnComponent style={{ borderColor: 'blue', width: '50%' }} content={<Text style={styles.highlight}>50 </Text>} />
          <CtnComponent style={{ borderColor: 'green', width: '100%' }} content={<Text style={styles.highlight}>100 </Text>} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontSize: 17,
    fontWeight: '700',
  },
  /** 콘텐츠를 가로로 배치 */
  cntRow: {
    flexDirection: 'row',
  },
  /** 콘텐츠를 세로로 배치 */
  cntColumn: {
    flexDirection: 'column',
  },
  /** 콘텐츠를 세로로 배치 + 가운데 정렬 */
  ctnColumnCenter: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  /** 콘텐츠를 가로로 배치하고 자동으로 줄바꿈 */
  cntWrapRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
