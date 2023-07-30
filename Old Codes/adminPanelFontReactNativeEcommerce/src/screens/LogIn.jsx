import { Image, StyleSheet, View, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { logo } from '../constant';
import ThemeButton from '../reusable/ThemeButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email == "admin@gmail.com" && password == "admin123") {
            navigation.navigate('Admin');
        } else {
            navigation.navigate('Main');

        }
    }

    const goToSignUp = () => {
        console.log("Login");
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.containerOne}>
            <View style={styles.logoContainer}>
                <Image style={styles.tinyLogo} source={logo} />
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your name'
                        placeholderTextColor="#000000"
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer3}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input3}
                        placeholder='Enter password'
                        placeholderTextColor="#000000"
                        onChangeText={text => setPassword(text)}
                    />
                </View>
            </View>
            <View style={styles.LogInBtnContainer}>
                <ThemeButton text="Log In" click={handleLogin} />
            </View>
            <View style={styles.haveAaccountContainer}>
                <Text style={styles.haveAaccount}>Don’t have an account?</Text>
                <TouchableOpacity onPress={goToSignUp}>
                    <Text style={[{ fontWeight: 700, color: "#000" }]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogIn;

const styles = StyleSheet.create({
    containerOne: {
        height: windowHeight * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    haveAaccount: {
        color: "#000",
    },
    inputContainer: {
        width: windowWidth * 0.9,
        height: 60,
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#DDDDDD',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        color: '#000000',
        fontSize: 16,
        paddingHorizontal: 16,
        width: '100%',
        height: '100%',
    },
    inputContainer3: {
        width: windowWidth * 0.9,
        height: 60,
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input3: {
        borderRadius: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: '#DDDDDD',
        color: '#000000',
        fontSize: 16,
        paddingHorizontal: 16,
        width: '100%',
        height: '100%',
    },
    LogInBtnContainer: {
        marginTop: 30,
    },
    haveAaccountContainer: {
        marginTop: 65,
        flexDirection: 'row'
    }
});
