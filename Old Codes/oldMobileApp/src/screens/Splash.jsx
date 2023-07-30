import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { logo } from '../images/ImagesPath'
import ThemeButton from '../reusable/ThemeButton';
import ThemeButtonLight from '../reusable/ThemeButtonLight';

const windowHeight = Dimensions.get('window').height;

const Splash = () => {
    return (
        <View>
            <View>
                <View style={[styles.containerOne, {marginTop: windowHeight * 0.35}]}>
                    <Image
                        style={styles.tinyLogo}
                        source={logo}
                    />
                </View>
            </View>
            <View style={styles.containerTwo}>
                <ThemeButton text="Log In"/>
            </View>
            <View style={styles.containerThree}>
                <ThemeButtonLight text="Register"/>
            </View>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTwo: {
        marginTop: 120,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerThree: {
        marginTop: 80,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        alignSelf: 'center',
    }
})