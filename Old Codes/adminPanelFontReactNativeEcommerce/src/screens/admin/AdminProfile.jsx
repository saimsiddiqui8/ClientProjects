import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";
import { adminProfile, galleryIcon, leftArrow, tickIcon } from '../../constant'
import ThemeButton from '../../reusable/ThemeButton';
import { singleProduct } from '../../constant';

const AdminProfile = () => {
    const navigation = useNavigation();
    let options = {
        saveToPhotos: true,
        mediaType: 'photo'
    }
    const openGallery = async () => {
        const result = await launchImageLibrary(options);
        let uri = result.assets[0].uri;
        setGalleryphoto(uri)
        console.log(galleryphoto);
    }
    const categories = [
        {
            name: "Shoes",
            image: singleProduct
        },
        {
            name: "Clothing",
            image: singleProduct
        },
        {
            name: "Accessories",
            image: singleProduct
        },
        {
            name: "Watches",
            image: singleProduct
        },
        {
            name: "Bags",
            image: singleProduct
        },
        {
            name: "Brushes",
            image: singleProduct
        },
        {
            name: "Glasses",
            image: singleProduct
        },

    ];
    return (
        <>
            <Header
                title="Settings"
                icon={leftArrow}
                navigation={navigation} />
            <ScrollView>
                <View>
                    <View style={{ alignItems: "center" }}>
                        <Image source={adminProfile} style={{ width: 100, height: 100, marginTop: 20 }} />
                        <View style={styles.container}>
                            <TextInput
                                style={styles.input}
                                placeholder="Update Full Name"
                                placeholderTextColor="#888"
                            />
                            <Image source={tickIcon} style={styles.icon} />
                        </View>
                    </View>
                    <View style={{
                        paddingHorizontal: 30
                    }}>
                        <View style={styles.image}>
                            <TouchableOpacity onPress={openGallery}>
                                <Image source={galleryIcon} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput style={styles.inputField} placeholder="New category name" placeholderTextColor="#000000" />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <ThemeButton text="Add" />
                        </View>
                        <View style={styles.allCategory}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>All Categories</Text>
                        </View>
                        {/* singe category */}
                        {categories.map((category, index) => (
                            <View style={styles.singleCategoryContainer} key={index}>
                                <Image source={category.image} style={{ width: 50, height: 50 }} />
                                <View style={{ justifyContent: "center", marginLeft: 35 }}>
                                    <Text style={{ fontSize: 14, fontWeight: "600" }}>{category.name}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View styles={styles.buttonContainer}>
                        <ThemeButton text="Log Out" />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default AdminProfile;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 80,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        alignItems: 'center',
        marginVertical: 10,
    },
    singleCategoryContainer: {
        marginVertical: 9,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#FFBB0E",
        flexDirection: "row",
        paddingHorizontal: 30,
    },
    input: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 2,
        paddingHorizontal: 5,
        color: '#333',
    },
    allCategory: {
        marginTop: 70,
        marginBottom: 5,
    },
    inputField: {
        fontSize: 14,
        marginTop: 15,
        paddingHorizontal: 16,
        backgroundColor: '#E5E8F2',
        borderRadius: 5,

        color: '#000000',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        marginTop: 20,
        paddingVertical: 25,
        backgroundColor: '#E5E8F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: '#000000',
        paddingHorizontal: 16,
    },
    icon: {
        marginRight: 10,
    },
})