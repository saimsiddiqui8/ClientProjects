import {View, Text, StyleSheet, Image,Dimensions} from 'react-native';
import Header from '../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import ThemeButton from '../reusable/ThemeButton';
const SingleProduct = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
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
              borderRadius: 20,
            }}
          />
        </View>

        <View style={styles.productDetails}>
          <Text style={styles.pName}>Nike Air Force</Text>
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
            // disableBorderRadius={true}
            containerStyle={{
              marginTop: 8,
            }}
          />
        </View>
        <View style={styles.btnDiv}>
        <ThemeButton text="Buy Now"/>
        </View>
      </View>
    </>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:50
  },
  imageContainer: {
    height: '30%',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 5,
  },
  productDetails: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  pName: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 21.78,
  },
  pPrice: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 21.78,
    color: '#FFBB0E',
  },
  pDetailsContainer: {
    marginHorizontal: 55,
    height: '40%',
  },
  pDetailsName: {
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18.15,
  },
  pDetailsDescription: {
    marginTop: 10,
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 22,
    width: '90%',
    textAlign: 'justify',
  },
  ProductSize: {
    height: '10%',
    marginHorizontal: 55,
    marginTop: 20,
  },
  ProductSizeHeading: {
    fontSize: 17,
    fontWeight: '700',
  },
  btnDiv:{
    marginTop:30,
    flex:1
  }
});
