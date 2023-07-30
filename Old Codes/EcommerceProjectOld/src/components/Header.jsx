import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = ({ title, icon, navigation, logoutIcon }) => {

  const goBack = () => {
    if (logoutIcon) {
      navigation.navigate("Login");
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={icon} style={{ height: 21, width: 20, marginLeft: 10 }} />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          justifyContent: "center",
          textAlign: 'center',
          color: '#000000',
          marginRight: 30,
          marginTop: -4,
          fontWeight: '600',
          fontSize: 22,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    backgroundColor: "#ffffff"
  },
});
