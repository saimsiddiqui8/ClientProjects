import {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {sliderImageOne, sliderImageThree} from '../constant';
import  sliderImageTwo  from '../constant/images/sliderImageTwo.jpg';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Home = ({navigation}) => {
  const [cat, setCat] = useState('Shoes');
  const DATA = [
    {
      id: 1,
      name: 'Shoes',
    },
    {
      id: 2,
      name: 'Pent',
    },
    {
      id: 3,
      name: 'Shirt',
    },
    {
      id: 4,
      name: 'Coat',
    },
    {
      id: 5,
      name: 'Dark',
    },
    {
      id: 6,
      name: 'Watches',
    },
    {
      id: 7,
      name: 'Mobile',
    },
  ];

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
    <Header 
    title="Home"
    icon={require('../constant/images/logoutIcon.png')}
    navigation={navigation}
    logoutIcon={true}
    />
      <ScrollView style={styles.container}>
        <View style={styles.slider}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
            <View style={styles.slide1}>
              <Image source={sliderImageOne} style={styles.sliderImage} />
            </View>
            <View style={styles.slide2}>
              <Image source={sliderImageTwo} style={styles.sliderImage} />
            </View>
            <View style={styles.slide3}>
              <Image source={sliderImageThree} style={styles.sliderImage} />
            </View>
          </Swiper>
        </View>
        <View style={styles.categoriesSection}>
          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            style={{width: '100%', height: '70%'}}
            renderItem={({item}) => (
              <>
                <View
                  style={cat === item.name ? styles.activeCat : styles.catItem}>
                  <TouchableOpacity onPress={() => setCat(item.name)}>
                    <Text
                      style={
                        cat === item.name
                          ? styles.catItemActiveText
                          : styles.catItemText
                      }>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
            keyExtractor={item => item.id}
          />
        </View>
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
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    width: '100%',
    height: 250,
    backgroundColor: '#000',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  sliderImage: {
    height: 300,
    width: '100%',
    objectFit: 'cover',
    opacity: 0.7,
  },
  categoriesSection: {
    height: '7%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeCat: {
    height: '70%',
    width: 100,
    backgroundColor: '#FFBB0E',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  catItem: {
    height: '70%',
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 14,
    justifyContent: 'center',
    borderColor: '#FFBB0E',
    borderWidth: 2,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  catItemText: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  catItemActiveText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  ProductContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
});
