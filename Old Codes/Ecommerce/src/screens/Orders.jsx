import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { leftArrow, singleProduct } from '../constant'

const Orders = () => {
    const [loading, setLoading] = useState(false);
    const orders = [
        {
            id: 1686814921080,
            date: "4 Oct 2022",
            img: singleProduct,
            status: "Pending",
            price: "Rs 320"
        },
        {
            id: 1686763676241,
            date: "23 Aug 2023",
            img: singleProduct,
            status: "Completed",
            price: "Rs 680",
        },
        {
            id: 1686785206802,
            date: "3 Sep 2021",
            img: singleProduct,
            status: "Pending",
            price: "Rs 500"
        },
    ]
    return (
        <>
            <Header
                title="Orders"
                icon={leftArrow}
            />
            {loading ? (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator color="#FFBB0E" size={55} />
                </View>
            ) : (
                <ScrollView>
                    <View style={styles.container}>
                        {orders.map((order) => (
                            <TouchableOpacity key={order.id}>
                                <View style={styles.singleOrderContainer}>
                                    <Image style={styles.singleOrderImage} source={order.img} />
                                    <View style={styles.subHeadingText}>
                                        <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 , marginBottom: 5}}>{order.status}</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>{order.id}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.textPKR}> 
                                    <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 , marginBottom: 5}}>{order.price}</Text>
                                        <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>{order.date}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            )}
        </>
    )
}

export default Orders

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
        borderColor: "#FFBB0E",
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    singleOrderImage: {
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
    activityIndicator: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80%',
    },
})