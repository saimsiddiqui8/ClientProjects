import { View, Text, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Swiper from 'react-native-swiper';
import { leftArrow, sliderImageOne, sliderImageThree, sliderImageTwo } from '../../constant';
import { useState } from 'react';
import Header from '../../components/Header';
import ThemeButton from '../../reusable/ThemeButton';
const SingleProductEdit = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  // const { name, price } = route.params;
  return (
    <>
      <Header
        title="Product Details"
        icon={leftArrow}
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.slider}>
          <Swiper style={styles.wrapper} showsButtons={false} autoplay={false}>
            <Image source={sliderImageOne} style={styles.sliderImage} />
            <Image source={sliderImageTwo} style={styles.sliderImage} />
            <Image source={sliderImageThree} style={styles.sliderImage} />
          </Swiper>
        </View>

        <View style={styles.productDetailsContainer}>
          <Text style={styles.pName}>Work</Text>
          <Text style={styles.pPrice}>150</Text>
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
              width: '55%',
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

export default SingleProductEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
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
    top: 15,
    right: 20,
  },
  favIconFillImage: {
    height: 30,
    width: 30,
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
    objectFit: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
