import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Header from '../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import ThemeButton from '../reusable/ThemeButton';
const SingleProduct = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  return (
    <>
      <Header
        title="Product Details"
        icon={require('../constant/images/left-arrow.png')}
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../constant/images/ProductTwo.png')}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#DDD5D5',
              resizeMode: 'contain',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
          <View style={styles.favIconFill}>
            <Image
              source={require('../constant/images/favfill.png')}
              style={styles.favIconFillImage}
            />
          </View>
        </View>

        <View style={styles.productDetailsContainer}>
          <Text style={styles.pName}>Nike Air Force Watch D1</Text>
          <Text style={styles.pPrice}>$199.00</Text>
        </View>

        <View style={styles.pDetailsContainer}>
          <Text style={styles.pDetailsName}>Details</Text>
          <Text style={styles.pDetailsDescription}>
            Nike Dri-Fit is a polyester fabric designed to help you keep dry so
            you can more comfortably work harder, longer. Nike Dri-Fit is a
            polyester fabric designed to help you keep dry so you can more
            comfortably work harder, longer. Nike Dri-Fit is a polyester fabric
            designed
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
              width: "45%"


            }}
          />
        </View>
        <View style={styles.btnDiv}>
          <ThemeButton text="Buy Now" />
        </View>
      </View>
    </>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15
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
    color: "black",

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
    color: "black",

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
    justifyContent: "flex-end",
  },
  favIconFill: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  favIconFillImage: {
    height: 30,
    width: 30,
  },
});
