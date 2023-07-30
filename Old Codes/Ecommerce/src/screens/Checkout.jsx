import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ThemeButton from '../reusable/ThemeButton';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import { leftArrow } from '../constant';

const Checkout = () => {
  const navigation = useNavigation();
  const navigateToCompleted = () => {
    navigation.navigate("Completed");
  };
  return (
    <>
      <Header
        title="Check Out"
        icon={leftArrow}
        navigation={navigation}
      />

      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Name</Text>
          <TextInput style={styles.input} fontSize={15} placeholder="Type your name" placeholderTextColor="#000000" />
        </View>
        <View style={styles.cont}>
          <View style={styles.subContainerTwo}>
            <Text style={styles.text}>Country</Text>
            <TextInput style={styles.inputTwo} fontSize={15} placeholder="Type your country" placeholderTextColor="#000000" />
          </View>
          <View style={styles.subContainerThree}>
            <Text style={styles.text}>City</Text>
            <TextInput style={styles.inputThree} fontSize={15} placeholder="Type your City" placeholderTextColor="#000000" />
          </View>
        </View>
        <View style={styles.subContainerFour}>
          <Text style={styles.text}>Phone Number</Text>
          <TextInput style={styles.input} fontSize={15} placeholder="Type your Phone Number" placeholderTextColor="#000000" />
        </View>
        <View style={styles.subContainerFive}>
          <Text style={styles.text}>Email Address</Text>
          <TextInput style={styles.input} fontSize={15} placeholder="Type your Email Address" placeholderTextColor="#000000" />
        </View>
        <View style={styles.subContainerSix}>
          <Text style={styles.text}>Shipping Address</Text>
          <TextInput style={styles.input} fontSize={15} placeholder="Type your Shipping Address" placeholderTextColor="#000000" />
        </View>
        <View style={styles.buttonContainer}>
          <ThemeButton text="Place Order" click={navigateToCompleted} />
        </View>
      </View>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#E5E8F2',
    borderRadius: 5,
    color: '#000000',
    paddingHorizontal: 16,
  },
  cont: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  text: {
    color: '#FFBB0E',
    fontWeight: '500',
    fontSize: 17,
  },
  subContainer: {
    marginTop: 10,
  },
  subContainerTwo: {
    marginTop: 25,
  },
  subContainerThree: {
    marginTop: 25,
  },
  subContainerFour: {
    marginTop: 25,
  },
  subContainerFive: {
    marginTop: 25,
  },
  subContainerSix: {
    marginTop: 25,
  },
  inputTwo: {
    // width: '49%',
    marginTop: 15,
    backgroundColor: '#E5E8F2',
    marginRight: 5,
    borderRadius: 5,
    color: '#000000',
    paddingHorizontal: 16,
  },
  inputThree: {
    width: '111%',
    marginTop: 15,
    backgroundColor: '#E5E8F2',
    borderRadius: 5,
    color: '#000000',
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
});
