import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, ToastAndroid } from 'react-native'
import { galleryIcon, leftArrow } from '../../constant'
import React, { useEffect, useState } from 'react'
import ThemeButton from '../../reusable/ThemeButton'
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../../components/Header';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const AddItem = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        Category: '',
        description: '',
        size: '',
        price: '',
    });
    const [galleryphoto, setGalleryphoto] = useState([]);
    useEffect(() => {
        if (galleryphoto.length > 0) {
            uploadImage();
        }
    }, [galleryphoto]);
    const [imgUrl, setImgUrl] = useState([]);

    useEffect(() => {
        // console.log(formValues.galleryphoto);
    }, [formValues.galleryphoto]);

    const dropdownItems = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
    const handleAddItem = async () => {
        try {
            const collectionRef = firestore().collection('Products');
            // if (imgUrl.length == 3) {
                const mainUrl = {
                    img: imgUrl,
                }
                const data = { ...formValues, ...mainUrl }
                await collectionRef.add(data);                
            ToastAndroid.show(`Item added successfully!`, ToastAndroid.LONG);
                
                //Clearing all the values

                setFormValues({
                    name: '',
                    Category: '',
                    description: '',
                    size: '',
                    price: '',
                });
                setGalleryphoto([]);
                console.log('Item added successfully!');
            // } else {
            // ToastAndroid.show(`Select 3 images!`, ToastAndroid.LONG);
            // }
        } catch (error) {
            ToastAndroid.show(`Error Adding Item!`, ToastAndroid.LONG);

            console.error('Error adding item:', error);
        }
    }


    const openGallery = async () => {
        const result = await launchImageLibrary({
            saveToPhotos: true,
            selectionLimit: 10,
            mediaType: 'photo'
        });

        if (result.assets && result.assets.length > 0) {
            setGalleryphoto(result.assets);
        }
    };


    const handleInputChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    }

    const uploadImage = async () => {
        if (galleryphoto.length > 0) {
            try {
                setLoading(true);
                const uploadPromises = galleryphoto.map(async (photo) => {
                    const reference = storage().ref(photo.fileName);
                    const pathToFile = photo.uri;
                    await reference.putFile(pathToFile);
                    const url = await reference.getDownloadURL();
                    return url;
                });

                const urls = await Promise.all(uploadPromises);
                setImgUrl(urls);
                const mainTotal = urls.length
                ToastAndroid.show(`${mainTotal} Images uploaded`, ToastAndroid.LONG);
            } catch (error) {
                console.log("Image upload failed", error);
            } finally{
                setLoading(false)
            }
        } else {
            ToastAndroid.show(`No gallery photos selected`, ToastAndroid.LONG);
            console.log("No gallery photos selected");
        }
    };


    // download the image from bucket if form of url
    const downloadImgUrl = async () => {
        const url = await storage().ref(galleryphoto.assets[0].fileName).getDownloadURL();
        console.log("IMG URL", url);
        setImgUrl(url)

    }
    return (
        <>
            <Header
                title="Add Items"
                icon={leftArrow}
                navigation={navigation}
            />
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={styles.image}>
                            <TouchableOpacity onPress={openGallery}>
                                <Image style={{ width: 70, height: 70 }} source={galleryIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={styles.input}
                                fontSize={13}
                                placeholder="Item Name"
                                placeholderTextColor="#000000"
                                value={formValues.name}
                                onChangeText={(text) => handleInputChange('name', text)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={styles.input}
                                textAlignVertical="top"
                                multiline={true}
                                fontSize={13}
                                numberOfLines={4}
                                placeholder="Describe this item"
                                placeholderTextColor="#000000"
                                value={formValues.description}
                                onChangeText={(text) => handleInputChange('description', text)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={styles.input}
                                fontSize={13}
                                placeholder="Select Category"
                                placeholderTextColor="#000000"
                                value={formValues.Category}
                                onChangeText={(text) => handleInputChange('Category', text)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={styles.input}
                                fontSize={13}
                                placeholder="sm / md / lg / xl"
                                placeholderTextColor="#000000"
                                value={formValues.size}
                                onChangeText={(text) => handleInputChange('size', text)}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                style={styles.input}
                                fontSize={13}
                                placeholder="0000 PKR"
                                placeholderTextColor="#000000"
                                value={formValues.price}
                                onChangeText={(text) => handleInputChange('price', text)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.addProductBtn}>
                <ThemeButton text="Add Product" click={handleAddItem} loading={loading} />
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
        paddingVertical: 10,
        marginTop: 10,
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
});
