import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { successIconOrdered } from '../constant'; 
import ThemeButton from '../reusable/ThemeButton';
import ThemeButtonLight from '../reusable/ThemeButtonLight';
import { useNavigation } from "@react-navigation/native";

const Completed = () => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    const navigateToBackToHome = () => {
      navigation.navigate("Main");
    };
    const navigateToSignOut = () => {
      navigation.navigate("Login");
    };
    return (
        <View style={[styles.containerOne, { height: windowHeight * 0.9 }]}>

            <View>
                <Image style={styles.successIconOrdered} source={successIconOrdered} />
            </View>
            <View>
                <Text style={styles.awesomeText}>Awesome!</Text>
            </View>
            <View>
                <Text style={styles.awesomeDescription}>Order has been placed successfully</Text>
            </View>
            <View style={styles.backToHome}>
                <ThemeButton text="Back To Home" click={navigateToBackToHome}/>
            </View>
            <View style={styles.signOut}>
                <ThemeButtonLight text="Sign Out" click={navigateToSignOut}/>
            </View>
        </View>
    )
}

export default Completed

const styles = StyleSheet.create({
    containerOne: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    awesomeText:{
        marginTop: 25,
        color: "#FFBB0E",
        fontSize: 32,
        fontWeight: 700,
    },
    awesomeDescription:{
        marginTop: 5,
        fontSize: 18,
        fontWeight: 500,
    },
    backToHome:{
        marginTop: 50,
    },
    signOut:{
        marginTop: 70,
    },
})