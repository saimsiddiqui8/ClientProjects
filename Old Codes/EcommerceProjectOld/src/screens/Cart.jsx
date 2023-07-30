import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { sliderImageTwo } from '../constant';
import ThemeButton from '../reusable/ThemeButton';
const Cart = () => {
  const navigation = useNavigation();
  const navigateToCheckout = () => {
    navigation.navigate("Checkout");
  }
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
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
              </View>
              <View style={Styles.productDetails}>
                <Text style={Styles.productDetailsName}>iPhone 13 pro</Text>
                <Text style={Styles.productDetailsPrice}>NGN 646,000</Text>
              </View>
              <View style={Styles.Icons}>
                <TouchableOpacity>
                  <Image
                    style={Styles.trash}
                    source={require('../constant/images/trash.png')}
                  />
                </TouchableOpacity>
                <View style={Styles.twoIcons}>
                  <TouchableOpacity>
                    <Image
                      style={Styles.plus}
                      source={require('../constant/images/minus-small.png')}
                    />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity>
                    <Image
                      style={Styles.minus}
                      source={require('../constant/images/plus-small.png')}
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
            <Text style={Styles.productDetailsPrice}>NGN 646,000</Text>
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

  trash: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: -21,
    right: 6,
  },
  twoIcons: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  Icons: {
    justifyContent: 'center',
  },
  minus: {
    height: 20,
    width: 20,
  },
  plus: {
    height: 20,
    width: 20,
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
