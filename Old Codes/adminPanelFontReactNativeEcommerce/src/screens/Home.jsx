import {useEffect, useState} from 'react';
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
import sliderImageTwo from '../constant/images/sliderImageTwo.jpg';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import DATA from '../Data/DATA';

const Home = ({navigation}) => {
  const [filterCategory, setFilterCategory] = useState([]);
  const [products, SetProducts] = useState(DATA);

  const filterCategoryFUnc = () => {
    const key = 'Category';
    const unique = [...new Map(DATA.map(item => [item[key], item])).values()];
    return setFilterCategory(unique);
  };

  // TODO
  // FILTERATION
  // ADD TO CART

  const filterProductsByCategory = category => {
    console.log('category', category);
    const newVal = DATA.filter(item => item.Category === category);
    filterCategory === 'All' ? SetProducts(DATA) : SetProducts(newVal);
  };

  useEffect(() => {
    filterCategoryFUnc();
  }, []);

  const [cat, setCat] = useState('All');
  return (
    <>
      <Header title="Home" />
      <View style={styles.container}>
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
          {/* <View style={cat === 'All' ? styles.activeCat : styles.catItem}>
            <TouchableOpacity
              onPress={() => {
                setCat('All');
                filterProductsByCategory('All');
              }}>
              <Text
                style={
                  cat === 'All' ? styles.catItemActiveText : styles.catItemText
                }>
                All
              </Text>
            </TouchableOpacity>
          </View> */}

          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={filterCategory}
            style={{width: '100%', height: '75%'}}
            renderItem={({item}) => (
              <View
                style={
                  cat === item.Category ? styles.activeCat : styles.catItem
                }>
                <TouchableOpacity
                  onPress={() => {
                    setCat(item.Category);
                    filterProductsByCategory(item.Category);
                  }}>
                  <Text
                    style={
                      cat === item.Category
                        ? styles.catItemActiveText
                        : styles.catItemText
                    }>
                    {item.Category}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.ProductContainer}>
          <FlatList
            numColumns={2}
            data={products}
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    // marginTop: 10,
    height: '15%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  activeCat: {
    height: '50%',
    width: 100,
    backgroundColor: '#FFBB0E',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  catItem: {
    height: '50%',
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