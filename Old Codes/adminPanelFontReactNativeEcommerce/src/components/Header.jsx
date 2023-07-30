import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = ({ title, icon, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={icon} style={{ height: 21, width: 20, marginLeft: 10 }} />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          justifyContent: "center",
          textAlign: 'center',
          color: '#000000',
          marginRight: 30,
          marginTop: 2,
          fontWeight: '600',
          fontSize: 18,
        }}>
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
