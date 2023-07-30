import React, { useState } from 'react';
import { Button, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../../components/Header';
import { crossIcon, singleProduct } from '../../constant';
import ThemeButton from '../../reusable/ThemeButton';

const AllProducts = () => {
    const navigation = useNavigation();
    const openProductToEdit = () => {
        // navigation.navigate('SingleProductEdit');
    }
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const handleEdit = () => {
        // Logic for handling edit action
        closeModal();
    };

    const handleDelete = () => {
        // Logic for handling delete action
        closeModal();
    };
    const products = [
        {
            id: 1,
            name: 'Apple',
            weight: '1 Kg',
            price: 'PKR 1000',
            image: singleProduct,
        },
        {
            id: 2,
            name: 'Mango',
            weight: '4 Kg',
            price: 'PKR 1870',
            image: singleProduct,
        },
        {
            id: 3,
            name: 'Banana',
            weight: '0.5 Kg',
            price: 'PKR 100',
            image: singleProduct,
        },
        {
            id: 4,
            name: 'Pineapple',
            weight: '4 Kg',
            price: 'PKR 4870',
            image: singleProduct,
        },
        {
            id: 5,
            name: 'Grapes',
            weight: '1 Kg',
            price: 'PKR 320',
            image: singleProduct,
        },
        {
            id: 6,
            name: 'Mango',
            weight: '40 Kg',
            price: 'PKR 15000',
            image: singleProduct,
        },
        {
            id: 7,
            name: 'Mango',
            weight: '40 Kg',
            price: 'PKR 15000',
            image: singleProduct,
        },
        {
            id: 8,
            name: 'Mango',
            weight: '40 Kg',
            price: 'PKR 15000',
            image: singleProduct,
        },
    ];
    return (
        <>
            <Header
                title="All Products"
                // icon={leftArrow}
                navigation={navigation} />
            <Modal visible={modalVisible} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Image source={crossIcon} />
                        </TouchableOpacity>

                        <Text style={styles.messageText}>You want to edit your product?</Text>
                        <View style={styles.buttonContainer}>
                            <Button sty title="Edit" onPress={handleEdit} />
                            <Button title="Delete" onPress={handleDelete} />
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        {products.map((product) => (
                            <TouchableOpacity key={product.id} onPress={openModal}>
                                <View style={styles.singleProductContainer}>
                                    <Image style={styles.singleProductImage} source={product.image} />
                                    <View style={styles.subHeadingText}>
                                        <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>{product.name}</Text>
                                        <View>
                                            <Text style={{ fontSize: 13, fontWeight: 600, color: "#999999" }}>{product.weight}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.textPKR}>
                                        <Text style={{ fontSize: 13, fontWeight: 600, color: "#999999" }}>{product.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

export default AllProducts;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: 300,
        padding: 20,
        borderRadius: 8,
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        padding: 5,
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999',
    },
    messageText: {
        fontSize: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    singleProductContainer: {
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#FFBB0E",
        flexDirection: "row",
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
        justifyContent: "center",
        alignItems: "center",
    },
    textPKR: {
        justifyContent: "center",
        alignItems: "center",
    },
});
