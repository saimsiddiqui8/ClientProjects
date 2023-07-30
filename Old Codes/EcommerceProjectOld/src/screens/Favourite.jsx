import {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import {sliderImageOne, sliderImageTwo, sliderImageThree} from '../constant';
import  sliderImageTwo  from '../constant/images/sliderImageTwo.jpg';

import ProductCard from '../components/ProductCard';

import Header from '../components/Header';
const Favourite = ({navigation}) => {
  const PRODUCTS = [
    {
      id: 1,
      name: 'Purani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 2,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 3,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 4,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 5,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 6,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 7,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 8,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 9,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 10,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 11,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
    {
      id: 12,
      name: 'orhani Watch',
      price: '16,400',
      Image: sliderImageTwo,
    },
  ];
  return (
    <>
      <Header title="Favourite" />
      <View style={styles.container}>
        <View style={styles.ProductContainer}>
          <FlatList
            numColumns={3}
            data={PRODUCTS}
            renderItem={({item}) => (
              <ProductCard {...item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
};

export default Favourite;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ProductContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 4,
    marginTop:5
  },
});
