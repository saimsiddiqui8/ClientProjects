import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require('../src/images/Home.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require('../src/images/Home.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require('../src/images/Home.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
      <View>HELW</View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    height: 24,
    width: 24,
  },
});
