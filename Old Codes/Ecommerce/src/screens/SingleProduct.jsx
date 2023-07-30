import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import { useState } from 'react';

import Header from '../components/Header';
import { leftArrow, favfill } from '../constant';
import ThemeButton from '../reusable/ThemeButton';

import Swiper from 'react-native-swiper';
import firestore from '@react-native-firebase/firestore';
import DropDownPicker from 'react-native-dropdown-picker';

const SingleProduct = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const { name, price, img,  description, id } = route.params;
  // addtoFavourite

  const addToFav = async () => {
    try {
      const collectionRef = firestore().collection('Favourite');
      const querySnapshot = await collectionRef
        .where('isfav', '==', true).get();
      const collectionData = [];
      querySnapshot.forEach(documentSnapshot => {
        const data = documentSnapshot.data();
        collectionData.push(data);
      });

      if (querySnapshot.empty) {
        const favId = Date.now();
        await collectionRef.doc(`${favId}`).set({
          userId: 1,
          favId,
          name,
          price,
          img,
          isfav: true,
          pid: id,
          description
        });
        Alert.alert('Product added to cart');
      } else {
        await collectionRef.doc(`${collectionData[0]?.favId}`).update({
          isfav: false,
        });
      }
    } catch (e) {
      console.log('error while adding a product', e);
    }
  };

  // addProductToCart
  const addProductToCart = async () => {
    try {
      const collectionRef = firestore().collection('Cart');
      const querySnapshot = await collectionRef.where('pid', '==', id).get();
      const collectionData = [];
      querySnapshot.forEach(documentSnapshot => {
        const data = documentSnapshot.data();
        collectionData.push(data);
      });

      if (querySnapshot.empty) {
        const cartId = Date.now();
        await collectionRef.doc(`${cartId}`).set({
          userId: 1,
          cartId,
          name,
          price,
          img,
          pid: id,
          qty: 1,
        });
        Alert.alert('Product added to cart');
      } else {
        await collectionRef.doc(`${collectionData[0]?.cartId}`).update({
          qty: collectionData[0]?.qty + 1,
        });
      }
    } catch (e) {
      console.log('error while adding a product', e);
    }
  };

  const openImageModal = (index) => {
    console.log(index);
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  return (
    <>
      <Header
        title="Product Details"
        icon={leftArrow}
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.slider}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={false} loop={false}>
            {img.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openImageModal(index)}
              >
                <Image
                  source={{ uri: image }}
                  style={styles.sliderImage}
                />
              </TouchableOpacity>
            ))}
          </Swiper>
          <TouchableOpacity onPress={() => addToFav()}>
            <View style={styles.favIconFill}>
              <Image source={favfill} style={styles.favIconFillImage} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.productDetailsContainer}>
          <Text style={styles.pName}>{name}</Text>
          <Text style={styles.pPrice}>{price}</Text>
        </View>

        <View style={styles.pDetailsContainer}>
          <Text style={styles.pDetailsName}>Details</Text>
          <Text style={styles.pDetailsDescription}>
            {description?.slice(0, 300) + '..'}
          </Text>
        </View>
        <View style={styles.ProductSize}>
          <Text style={styles.ProductSizeHeading}>Size:</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            containerStyle={{
              marginTop: 8,
              width: '55%',
            }}
          />
        </View>
        <View style={styles.btnDiv}>
          <ThemeButton text="Buy Now" click={addProductToCart} />
        </View>
        <Modal
          visible={modalVisible}
          transparent={false}
          animationType="slide"
        >
          <ScrollView>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <Swiper
                style={styles.modalSwiper}
                showsButtons={false}
                autoplay={false}
                index={selectedImageIndex}
              >
                {img.map((image, index) => (
                  <View key={index} style={styles.modalImageContainer}>
                    <Image source={{ uri: image }} style={styles.modalImage} />
                  </View>
                ))}
              </Swiper>
            </View>
          </ScrollView>
        </Modal>
      </View>
    </>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 999,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalSwiper: {
    width: '100%',
    height: '100%',
  },
  modalImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageContainer: {
    height: '30%',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 5,
  },
  productDetailsContainer: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 40,
    marginTop: 5,
  },
  pName: {
    fontSize: 19,
    fontWeight: 600,
    lineHeight: 21.78,
    color: 'black',
  },
  pPrice: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 21.78,
    color: '#FFBB0E',
  },
  pDetailsContainer: {
    marginHorizontal: 25,
    // height: '40%',
  },
  pDetailsName: {
    fontWeight: 500,
    fontSize: 16,
    color: 'black',
  },
  pDetailsDescription: {
    marginTop: 10,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
    // width: '90%',
    textAlign: 'justify',
  },
  ProductSize: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  ProductSizeHeading: {
    fontSize: 17,
    fontWeight: '700',
  },
  btnDiv: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  favIconFill: {
    position: 'absolute',
    top: -170,
    right: 30,
  },
  favIconFillImage: {
    height: 40,
    width: 40,
  },
  slider: {
    width: '100%',
    height: '30%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
