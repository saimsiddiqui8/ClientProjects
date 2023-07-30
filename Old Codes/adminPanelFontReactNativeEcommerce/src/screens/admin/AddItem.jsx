import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { adminProfile, galleryIcon, leftArrow } from '../../constant'
import React, { useState } from 'react'
import ThemeButton from '../../reusable/ThemeButton'
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../../components/Header';


const AddItem = () => {
    const navigation = useNavigation();
    const [galleryphoto, setGalleryphoto] = useState();
    const handleAddItem = () => {
        navigation.navigate("AllProducts");
    }
    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
        quantity: 1,
    }
    const openGallery = async () => {
        const result = await launchImageLibrary(options);
        let uri = result.assets[0].uri;
        setGalleryphoto(uri)
        console.log(galleryphoto);
    }
    return (
        <>
            <Header
                title="Add Items"
                icon={leftArrow}
                navigation={navigation} />
            <View>

                <View style={styles.container}>
                    {/* <View style={{ alignItems: 'center' }}>
                        <Text style={styles.addItemText}>Add New Item</Text>
                    </View> */}
                    {/* <View style={styles.hr} /> */}
                    <View>
                        <View style={styles.image}>
                            <TouchableOpacity onPress={openGallery}>
                                <Image source={galleryIcon}  />
                            </TouchableOpacity>
                        </View>
                        <Image source={{ uri: galleryphoto }} />
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
                            <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 15, marginRight: 15, marginTop: 5 }}>Unit Size:</Text></View>
                            <View>
                                <TextInput style={styles.input} fontSize={13} placeholder="Inch / Ft. / meters" placeholderTextColor="#000000" />
                            </View>
                        </View>
                        <View style={styles.cont}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 15, marginRight: 15, marginTop: 5 }}>Unit Price:</Text></View>
                            <View>
                                <TextInput style={styles.input} fontSize={13} placeholder="0000 PKR" placeholderTextColor="#000000" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.addProductBtn}>
                <ThemeButton text="Add Product" />
            </View>
        </>
    )
}

export default AddItem

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#333',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    containers: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        backgroundColor: "#ffffff"
    },
    hr: {
        height: 3,
        marginTop: 60,
        marginBottom: 10,
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
    image: {
        width: '100%',
        marginTop: 10,
        paddingVertical: 25,
        backgroundColor: '#E5E8F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: '#000000',
        paddingHorizontal: 16,
    },
    cont: {
        flexDirection: 'row',
    },
    addProductBtn: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 15,
    }
})