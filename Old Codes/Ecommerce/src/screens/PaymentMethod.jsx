import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { easypaisa, jazzcash, leftArrow, meezan } from '../constant'

const PaymentMethod = () => {
    return (
        <>
            <Header
                icon={leftArrow}
                title="Payment Method"
            />
            <Text style={styles.paymentText}>Pick a payment option</Text>
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.mainDivision}>
                        <Image source={easypaisa} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.mainDivision}>
                        <Image source={jazzcash} style={{ width: 150, height: 150 }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.mainDivision}>
                        <Image source={meezan} style={{ width: 160, height: 160 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default PaymentMethod

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 60,
        marginTop: 30,
    },
    paymentText: {
        marginTop: 20,
        marginLeft: 40,
        fontSize: 16,
    },
    mainDivision: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 9,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#DDDDDD",
        flexDirection: "row",
    }
})