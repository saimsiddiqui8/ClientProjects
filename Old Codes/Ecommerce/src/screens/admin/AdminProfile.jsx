import React, { useState, useEffect } from 'react'
import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";
import { adminProfile, galleryIcon, leftArrow } from '../../constant'
import ThemeButton from '../../reusable/ThemeButton';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const AdminProfile = () => {
    const navigation = useNavigation();
    const [galleryphoto, setGalleryphoto] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingForSlider, setLoadingForSlider] = useState(false);

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('AllCategories')
            .onSnapshot((snapshot) => {
                const categoryData = snapshot.docs.map((documentSnapshot) => ({
                    id: documentSnapshot.id,
                    ...documentSnapshot.data(),
                }));
                setCategories(categoryData);
            });

        return () => unsubscribe();
    }, []);
    useEffect(() => {
        if (galleryphoto.length > 0) {
            uploadImage();
        }
    }, [galleryphoto]);

    const [galleryphotoForSlider, setGalleryphotoForSlider] = useState([]);
    // for slider
    useEffect(() => {
        if (galleryphotoForSlider.length > 0) {
            uploadImageForSlider();
        }
    }, [galleryphotoForSlider]);
    const [imgUrl, setImgUrl] = useState();

    // taking input value 
    const [inputValue, setInputValue] = useState();
    const [imgUrlForSlider, setImgUrlForSlider] = useState([]);

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
                setImgUrl(urls[0]);
                const mainTotal = urls.length
                ToastAndroid.show(`${mainTotal} Images uploaded!`, ToastAndroid.LONG);
            } catch (error) {
                ToastAndroid.show(`Image upload failed!`, ToastAndroid.LONG);
                console.log("Image upload failed", error);
                
            } finally {
                setLoading(false); // Stop the loading spinner
            }
        } else {

            ToastAndroid.show(`No gallery photo selected!`, ToastAndroid.LONG);
            console.log("No gallery photos selected");
        }
    };
    // for slider
    const uploadImageForSlider = async () => {
        
        if (galleryphotoForSlider.length > 0) {
            try {
                setLoadingForSlider(true);
                const uploadPromises = galleryphotoForSlider.map(async (photo) => {
                    const referencec = storage().ref(photo.fileName);
                    const pathToFile = photo.uri;
                    await referencec.putFile(pathToFile);
                    const url = await referencec.getDownloadURL();
                    return url;
                });
                const urls = await Promise.all(uploadPromises);
                setImgUrlForSlider(urls);
                const main = urls.length
                ToastAndroid.show(`${main} Images uploaded!`, ToastAndroid.LONG);
                console.log(urls);
            } catch (error) {
                ToastAndroid.show(`Image upload failed!`, ToastAndroid.LONG);
                console.log("Image upload failed", error);
            } finally {
                uploadCategoryForSlider();
                setLoadingForSlider(false); // Stop the loading spinner
            }
        } else {
            ToastAndroid.show(`No gallery photo selected!`, ToastAndroid.LONG);
            console.log("No gallery photos selected");
        }
    };

    const uploadCategory = async () => {
        try {
            const collectionRef = firestore().collection('AllCategories');
            console.log(imgUrl);
            await collectionRef.add({ category: inputValue, img: imgUrl });

            console.log('Item added successfully!');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }
    const uploadCategoryForSlider = async () => {
        try {
            const collectionRef = firestore().collection('Slider');
            const documentId = 'ALXPAE7Q9CR6sBsXX9V1';
          
            await collectionRef.doc(documentId).update({ img: imgUrlForSlider });

            console.log('Item added successfully!');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }
    // add category to database 
    const handleAddCategory = () => {
        uploadCategory()
    }

    // category edit and delete
    const deleteCategory = async (category) => {
        try {
            // Delete the category document from Firestore
            await firestore().collection('AllCategories').doc(category.id).delete();
            handleCloseModal();
            ToastAndroid.show(`Category deleted successfully!`, ToastAndroid.LONG);
            console.log('Item deleted successfully!');
        } catch (error) {
            console.error('Error deleting category:', error);

            ToastAndroid.show(`Error deleting category`, ToastAndroid.LONG);
        }
    }


    const openGallery = async () => {
        const result = await launchImageLibrary({
            saveToPhotos: true,
            mediaType: 'photo'
        });

        if (result.assets && result.assets.length > 0) {
            setGalleryphoto(result.assets);
        }
    };
    const openGalleryForSlider = async () => {
        const result = await launchImageLibrary({
            saveToPhotos: true,
            selectionLimit: 10,
            mediaType: 'photo'
        });

        if (result.assets && result.assets.length > 0) {
            setGalleryphotoForSlider(result.assets);
        }
    };

    const openProductToEdit = (category) => {
        setSelectedCategory(category);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <>
            <Header
                title="Settings"
                icon={leftArrow}
                navigation={navigation} />
            <ScrollView>
                <View>
                    <View style={{ alignItems: "center" }}>
                        <Image source={adminProfile} style={{ width: 125, height: 125, marginTop: 20 }} />
                            {/* <View style={styles.container}>
                            <TextInput
                                style={styles.input}
                                placeholder="Update Full Name"
                                placeholderTextColor="#888"
                            />
                            <Image source={tickIcon} style={styles.icon} />
                        </View> */}
                    </View>
                    <View style={{
                        paddingHorizontal: 30
                    }}>
                        <View style={styles.image}>
                            <TouchableOpacity onPress={openGalleryForSlider}>
                                <Image source={galleryIcon} style={{ width: 60, height: 60 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.image}>
                            <TouchableOpacity onPress={openGallery}>
                                <Image source={galleryIcon} style={{ width: 60, height: 60 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput
                                style={styles.inputField}
                                placeholder="New category name"
                                placeholderTextColor="#000000"
                                onChangeText={text => setInputValue(text)} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <ThemeButton text="Add" click={handleAddCategory} loading={loading} />
                        </View>
                        <View style={styles.allCategory}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>All Categories</Text>
                        </View>
                        {/* singe category */}
                        {categories.map((category, index) => (
                            <TouchableOpacity onLongPress={() => openProductToEdit(category)} key={index}>
                                <View style={styles.singleCategoryContainer} key={index}>
                                    <View style={{ paddingVertical: 5 }}>
                                        <Image source={{ uri: `${category.img}` }} style={{ width: 50, height: 50, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ justifyContent: "center", marginLeft: 35 }}>
                                        <Text style={{ fontSize: 19, fontWeight: "700" }}>{category.category}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {/* <View styles={styles.buttonContainer}>
                    <ThemeButton text="Log Out" click={handleAddCategory} />
                </View> */}
                </View>
            </ScrollView>
            <Modal
                visible={showModal}
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>
                            Are you sure you want to delete {selectedCategory?.category}?
                        </Text>
                        <Button
                            color="#FFBB0E"
                            title="Delete"
                            onPress={() => deleteCategory(selectedCategory)}
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
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 5,
        color: '#333',
    },
    allCategory: {
        marginTop: 70,
        marginBottom: 5,
    },
    inputField: {
        fontSize: 16,
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
})