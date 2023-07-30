import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { logo } from '../constant';
import { useNavigation } from '@react-navigation/native';
import ThemeButton from '../reusable/ThemeButton';
import ThemeButtonLight from '../reusable/ThemeButtonLight';


const windowHeight = Dimensions.get('window').height;

const Starter = () => {
    const navigation = useNavigation();
    const navigateToLoginScreen = () => {
        navigation.navigate('Login');
    }
    const navigateToSignUpScreen = () => {
        navigation.navigate('Signup');
    }
    const navigateToMain = () => {
        navigation.navigate('Main');
    }
    return (
        <>
            <View>
                <View>
                    <View style={[styles.containerOne, { marginTop: windowHeight * 0.35 }]}>
                        <Image
                            style={styles.tinyLogo}
                            source={logo}
                        />
                    </View>
                </View>
                <View style={styles.containerTwo}>
                    <ThemeButton text="Log In" click={navigateToLoginScreen} />
                </View>
                <View style={styles.containerThree}>
                    <ThemeButtonLight text="Register" click={navigateToSignUpScreen} />
                </View>
            </View>
            <View style={styles.guest}>
                <Text style={styles.continueasaGuest}>Or continue as a <Text style={styles.guestWord} onPress={navigateToMain}>Guest</Text></Text>
            </View>
        </>
    )
}

export default Starter;

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    guest: {
        flex: 1,
        alignItems: "center",
        marginBottom: 20,
        
        justifyContent: 'flex-end',
    },
    guestWord: {
        fontWeight: 800,
    },
    continueasaGuest: {
        color: "#000",
    },
    containerTwo: {
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerThree: {
        marginTop: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        alignSelf: 'center',
    }
})