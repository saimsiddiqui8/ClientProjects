import { Image, StyleSheet, View, Dimensions, TextInput, Text } from 'react-native'
import React from 'react'
import { logo } from '../images/ImagesPath'
import ThemeButton from '../reusable/ThemeButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LogIn = () => {
    return (
        <View style={styles.containerOne}>
            <View style={styles.logoContainer}>
                <Image style={styles.tinyLogo} source={logo} />
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='Enter your name' placeholderTextColor="#000000" />
                </View>
                <View style={styles.inputContainer3}>
                    <TextInput secureTextEntry={true} style={styles.input3} placeholder='Enter password' placeholderTextColor="#000000" />
                    
                </View>
            </View>
            <View style={styles.LogInBtnContainer}>
                <ThemeButton text="Log In" />
            </View>
            <View style={styles.haveAaccountContainer}>
                <Text style={styles.haveAaccount}>Don’t have an account? <Text style={[{ fontWeight: 700, color: "#000" }]}>Sign up</Text></Text>
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
    }
});
