import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {useState, useEffect} from 'react';

import {emptyCard, Shoes1, trash} from '../constant';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

import firestore from '@react-native-firebase/firestore';
import EmptyCart from '../reusable/EmptyCart';

const Favourite = ({navigation}) => {
  const [fav, setFav] = useState([]);
  const collectionRef = firestore().collection('Favourite');

  // fetch fav from firebase

  useEffect(() => {
    collectionRef.where('userId', '==', 1).where('isfav', '==', true);

    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      const favItems = snapshot.docs.map(documentSnapshot => ({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      }));
      setFav(favItems);
    });

    return () => unsubscribe();
  }, []);

  console.log('fav', fav);
  return (
    <>
      <Header title="Favourites" />
      <View style={styles.container}>
        {fav?.length > 0 ? (
          <>
            <View style={styles.ProductContainer}>
              <FlatList
                numColumns={3}
                data={fav}
                renderItem={({item}) => (
                  <ProductCard {...item} navigation={navigation} />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </>
        ) : (
          <EmptyCart text="Favourite" />
        )}
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
    marginTop: 5,
  },
});
