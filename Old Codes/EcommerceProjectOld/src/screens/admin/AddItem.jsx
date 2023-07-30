import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ThemeButton from '../../reusable/ThemeButton'

const AddItem = () => {
    return (
        <View>
            <View style={styles.hr} />
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.addItemText}>Add New Item</Text>
                </View>
                <View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput style={styles.input} fontSize={13} numberOfLines={4} placeholder="Image" placeholderTextColor="#000000" />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput style={styles.input} fontSize={13} placeholder="Item Name" placeholderTextColor="#000000" />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput style={styles.input} fontSize={13} placeholder="Select Category" placeholderTextColor="#000000" />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput style={styles.input} textAlignVertical="top" multiline={true} fontSize={13} numberOfLines={4} placeholder="Describe this item" placeholderTextColor="#000000" />
                    </View>
                    <View style={styles.cont}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 15, marginRight: 15, marginTop: 5 }}>Unit Name:</Text></View>
                        <View>
                            <TextInput style={styles.input} fontSize={13} placeholder="Pcs / Kg / dozen" placeholderTextColor="#000000" />
                        </View>
                    </View>
                    <View style={styles.cont}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 15, marginRight: 15, marginTop: 5 }}>Unit Price:</Text></View>
                        <View>
                            <TextInput style={styles.input} fontSize={13} placeholder="0000 PKR" placeholderTextColor="#000000" />
                        </View>
                    </View>
                    <View style={styles.addProductBtn}>
                        <ThemeButton text="Add Product" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    hr: {
        height: 3,
        marginTop: 70,
        backgroundColor: '#D9D9D9'
    },
    addItemText: {
        fontSize: 20,
        fontWeight: 600,
    },
    input: {
        width: '100%',
        marginTop: 10,
        backgroundColor: '#E5E8F2',
        borderRadius: 5,
        color: '#000000',
        paddingHorizontal: 16,
    },
    cont: {
        flexDirection: 'row',
    },
    addProductBtn: {
        marginTop: 40,
    }
})