import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
  Button,
  ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import firestore from '@react-native-firebase/firestore';

const AllProducts = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Products')
      .onSnapshot((snapshot) => {
        const productsData = snapshot.docs.map((documentSnapshot) => ({
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        }));
        setProducts(productsData);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await firestore().collection('Products').doc(productId).delete();
      ToastAndroid.show(`Product Deleted!`, ToastAndroid.LONG);
      console.log('Product deleted successfully!');
      handleCloseModal();
    } catch (error) {

      ToastAndroid.show(`Error deleting product`, ToastAndroid.LONG);
      console.error('Error deleting product:', error);
    }
  };

  const openProductToEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChangeStatus = () => {
    // Handle changing status here
  };

  return (
    <>
      <Header title="All Products" navigation={navigation} />
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color="#FFBB0E" size={55} />
        </View>
      ) : (
        <ScrollView>
          <View style={styles.container}>
            {products.map((product) => (
              <TouchableOpacity
                key={product.id}
                onLongPress={() => openProductToEdit(product)}
              >
                <View style={styles.singleProductContainer}>
                  <Image
                    style={styles.singleProductImage}
                    source={{ uri: `${product.img}` }}
                  />
                  <View style={styles.subHeadingText}>
                    <Text style={{ color: '#FFBB0E', fontSize: 15, fontWeight: '600' }}>
                      {product.name}
                    </Text>
                  </View>
                  <View style={styles.textPKR}>
                    <Text style={{ fontSize: 15, fontWeight: '600', color: '#999999' }}>
                      {product.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete {selectedProduct?.name}?
            </Text>
            <Button
              color="#FFBB0E"
              title="Delete"
              onPress={() => deleteProduct(selectedProduct?.id)}
            />
            <View style={{ marginTop: 10 }}>
              <Button
                color="#000000"
                borderRadius={20}
                borderColor="#000000"
                title="Close"
                onPress={handleCloseModal}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  singleProductContainer: {
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FFBB0E',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    marginLeft: 13,
    marginRight: 13,
  },
  singleProductImage: {
    width: 60,
    height: 60,
    marginVertical: 5,
  },
  subHeadingText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPKR: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
