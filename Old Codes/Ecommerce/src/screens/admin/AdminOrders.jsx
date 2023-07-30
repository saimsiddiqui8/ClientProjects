import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    Button,
    ToastAndroid,
} from 'react-native';
import {
    leftArrow,
    pendingIcon,
    successIcon,
} from '../../constant';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/Header';
import EmptyCart from '../../reusable/EmptyCart';
import { useNavigation } from '@react-navigation/native';

const AdminOrders = () => {
    const [userData, setUserData] = useState([]);
    const [isCheck, setIsCheck] = useState(false);
    const [orderItems, setOrderItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const navigation = useNavigation();

    const checkIsLogin = async () => {
        const value = await AsyncStorage.getItem('login');
        if (value !== null) {
            setUserData(JSON.parse(value));
        }
    };
    const handleOpenOrderDetails = (order) => {
        navigation.navigate('AdminOrderDetails', { order });
    };



    useEffect(() => {
        checkIsLogin();
    }, []);

    useEffect(() => {
        const collectionRef = firestore()
            .collection('Orders');

        const unsubscribe = collectionRef.onSnapshot(snapshot => {
            const orderItems = snapshot.docs.map(documentSnapshot => ({
                id: documentSnapshot.id,
                ...documentSnapshot.data(),
            }));
            setOrderItems(orderItems);
        });

        return () => unsubscribe();
    }, [isCheck]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsCheck(!isCheck);
        }, 1500);

        return () => clearTimeout(timeout); // Clean up the timeout on unmount
    }, []);

    const handleStatus = async (order) => {
        try {
            const orderRef = firestore().collection('Orders').doc(order.id);
            await orderRef.update({
                orderStatus: order.orderStatus === 'completed' ? 'pending' : 'completed',
            });

            ToastAndroid.show(`Order status updated successfully!`, ToastAndroid.LONG);
            console.log('Order status updated successfully!');
            
        } catch (error) {
            console.log('Error updating order status: ', error);
            ToastAndroid.show(`Error updating order status!`, ToastAndroid.LONG);
        }
    };

    const handleOpenModal = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleChangeStatus = () => {
        if (selectedOrder) {
            handleStatus(selectedOrder);
            setShowModal(false);
        }
    };

    return (
        <>
            <Header title="Orders" icon={leftArrow} />
            {orderItems?.length === 0 ? (
                <EmptyCart text="Order Tab" />
            ) : (
                <ScrollView>
                    <View style={styles.container}>
                        {orderItems?.map(order => (
                            <TouchableOpacity
                                key={order.orderId}
                                onLongPress={() => handleOpenModal(order)}
                                onPress={() => navigation.navigate('AdminOrderDetails', { order })}
                            >
                                <View style={styles.singleOrderContainer}>
                                    <Image
                                        style={styles.singleOrderImage}
                                        source={
                                            order.orderStatus === 'pending'
                                                ? pendingIcon
                                                : successIcon
                                        }
                                    />
                                    <View style={styles.subHeadingText}>
                                        <Text
                                            style={{
                                                color: '#FFBB0E',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                marginBottom: 5,
                                            }}
                                        >
                                            {order?.orderStatus}
                                        </Text>
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: 600,
                                                    color: '#999999',
                                                }}
                                            >
                                                {order?.orderId}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.textPKR}>
                                        <Text
                                            style={{
                                                color: '#FFBB0E',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                marginBottom: 5,
                                            }}
                                        >
                                            {order?.totalPrice}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: '#999999',
                                            }}
                                        >
                                            {order?.date?.slice(4, 16)}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            )}

            {/* Modal */}
            {/* Modal */}
            <Modal
                visible={showModal}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>
                            Change Order Status Rs:{selectedOrder?.totalPrice} ({selectedOrder?.orderId})
                        </Text>
                        <Button
                            color="#FFBB0E"
                            title={
                                selectedOrder?.orderStatus === 'completed'
                                    ? 'Mark as Pending'
                                    : 'Mark as Completed'
                            }
                            onPress={handleChangeStatus}
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

export default AdminOrders;

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
    },
    singleOrderContainer: {
        marginTop: 20,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFBB0E',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    singleOrderImage: {
        width: 40,
        height: 40,
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
    modalButton: {
        backgroundColor: '#FFBB0E',
        borderRadius: 14,
    },
});
