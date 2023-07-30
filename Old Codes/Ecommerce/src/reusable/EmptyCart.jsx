import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import {emptyCard} from '../constant';

export default function EmptyCart({text}) {

  
  return (
    <View style={styles.emptyCardContainer}>
        <Image
        source={emptyCard}
        style={styles.emptyCardIMG}
        />
      <Text style={styles.emptyText}>{`Your ${text} is Empty`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 25,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  emptyCardIMG: {height: '60%', width: '40%', objectFit: 'contain'},
});
