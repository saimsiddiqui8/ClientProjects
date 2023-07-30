import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

const ProductCard = ({navigation,name,price,image,id}) => {
  return (
    <TouchableOpacity style={styles.ProductItem} onPress={()=>navigation.navigate('SingleProduct')}>
      <Image
        source={{
          uri: 'https://www.nicepng.com/png/detail/249-2491858_cotton-ladies-suit-suit-with-ladies-png.png',
        }}
        style={{
          width: '100%',
          height: '70%',
          backgroundColor: '#F4F6F8',
          // resizeMode: 'contain',
          borderRadius: 16,
        }}
      />
      <View style={styles.favIconFill}>
        <Image
          source={require('../constant/images/favfill.png')}
          style={styles.favIconFillImage}
        />
      </View>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductItem: {
    height: 200,
    width: '30%',
    marginHorizontal: 5,
    marginBottom: 2,
  },
  productName: {
    color: '#FFBB0E',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  productPrice: {
    fontFamily: 'Poppins-SemiBold',
    color: '#828282',
    fontSize: 12,
  },

  favIconFill: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  favIconFillImage: {
    height: 20,
    width: 20,
  },
});
