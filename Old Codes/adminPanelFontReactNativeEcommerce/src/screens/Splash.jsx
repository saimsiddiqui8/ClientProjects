import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { logo } from '../constant';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the main screen or perform any other action
      navigation.navigate('Starter');

    }, 2500);

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFBB0E",
  },
  image: {
    width: '50%',
    height: '50%',
  },
});

export default Splash;
