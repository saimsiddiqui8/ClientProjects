import { Image, StyleSheet, View, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { logo } from '../constant';
import ThemeButton from '../reusable/ThemeButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
    const handleSignUp = () => {
        console.log("Sign Up");
        
    }

    const backToLogin = ()=>{
        navigation.navigate('Login')
    } 
    return (
        <View style={styles.containerOne}>
            <View style={styles.logoContainer}>
                <Image style={styles.tinyLogo} source={logo} />
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='Enter your name' placeholderTextColor="#000000" />
                </View>
                <View style={styles.inputContainer2}>
                    <TextInput style={styles.input2} placeholder='Enter Email' placeholderTextColor="#000000" />
                </View>
                <View style={styles.inputContainer3}>
                    <TextInput style={styles.input3} placeholder='Enter password' placeholderTextColor="#000000" />
                </View>
            </View>
            <View style={styles.signUpBtnContainer}>
                <ThemeButton text="Sign Up" click={handleSignUp}/>
            </View>

            <View style={styles.haveAaccountContainer}>
           
                <Text style={styles.haveAaccount}>Already have an account?</Text>
                <TouchableOpacity onPress={backToLogin}>
                <Text style={[{fontWeight: 700, color: "#000" }]}>Log In</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignUp;

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
       color: "#000"
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
    inputContainer2: {
        width: windowWidth * 0.9,
        height: 60,
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input2: {
        backgroundColor: '#DDDDDD',
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
    signUpBtnContainer: {
        marginTop: 30,
    },
    haveAaccountContainer: {
        marginTop: 65,
        flexDirection:'row'
    }
});
