import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { minusSmall, plusSmall, sliderImageTwo, trash } from '../constant';
import ThemeButton from '../reusable/ThemeButton';
import { useState } from 'react';
const Cart = () => {
  const navigation = useNavigation();
  const navigateToCheckout = () => {
    navigation.navigate('Checkout');
  };
  // Use state to track the quantity of each item
  const [quantities, setQuantities] = useState({});

  const increaseQuantity = (itemId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
    }));
  };
  const calculateItemPrice = (item) => {
    const quantity = quantities[item.id] || 0;
    return item.price * quantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    PRODUCTS.forEach((item) => {
      totalPrice += calculateItemPrice(item);
    });
    return totalPrice;
  };
  const PRODUCTS = [
    {
      id: 1,
      name: 'Purani Watch',
      price: 160,
      Image: sliderImageTwo,
    },
    {
      id: 2,
      name: 'orhani Watch',
      price: 365,
      Image: sliderImageTwo,
    },
    {
      id: 3,
      name: 'orhani Watch',
      price: 3000,
      Image: sliderImageTwo,
    },
    {
      id: 4,
      name: 'orhani Watch',
      price: 15000,
      Image: sliderImageTwo,
    },
    {
      id: 5,
      name: 'orhani Watch',
      price: 260,
      Image: sliderImageTwo,
    },
  ];
  return (
    <>
      <Header title="My Cart" />
      <View style={Styles.container}>
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => (
            <View style={Styles.CartItem}>
              <View style={Styles.imageCOntainer}>
                <Image
                  style={Styles.tinyLogo}
                  source={item.Image}
                />
              </View>
              <View style={Styles.productDetails}>
                <Text style={Styles.productDetailsName}>{item.name}</Text>
                <Text style={Styles.productDetailsPrice}>{calculateItemPrice(item)}</Text>
              </View>
              <View style={Styles.Icons}>
                <TouchableOpacity>
                  <Image
                    style={Styles.trash}
                    source={trash}
                  />
                </TouchableOpacity>
                <View style={Styles.twoIcons}>
                  <TouchableOpacity  onPress={() => decreaseQuantity(item.id)}>
                    <Image
                      style={Styles.plus}
                      source={minusSmall}
                    />
                  </TouchableOpacity>
                  <Text style={Styles.cartItems}>{quantities[item.id] || 0}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                    <Image
                      style={Styles.minus}
                      source={plusSmall}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View style={Styles.bottomCart}>
          <View style={Styles.bottomCartLeft}>
            <Text style={Styles.productDetailsName}>iPhone 13 pro</Text>
            <Text style={Styles.productDetailsPrice}>PKR {calculateTotalPrice()}</Text>
          </View>
          <View style={Styles.bottomCartRight}>
            <ThemeButton text="Check Out" w="100%" click={navigateToCheckout} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Cart;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  CartItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    height: 100,
    alignItems: 'center',
    borderColor: '#F1F1F1',
    borderBottomWidth: 2,
    borderRadius: 5,
    width: '100%',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  productDetailsPrice: {
    color: '#FFBB0E',
    fontWeight: '700',
    fontSize: 16,
  },
  productDetailsName: {
    color: '#828282',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
  },
  productDetails: {
    flexDirection: 'column',
  },
  cartItems: {
    color: "#000",
  },

  trash: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: -21,
    right: -2,
  },
  twoIcons: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  Icons: {
    justifyContent: 'center',
    width: '30%',
  },
  minus: {
    height: 22,
    width: 22,
  },
  plus: {
    height: 22,
    width: 22,
  },
  bottomCart: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  bottomCartLeft: { width: '40%' },
  bottomCartRight: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
