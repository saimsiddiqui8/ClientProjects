import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = ({title, icon,navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={icon} style={{height: 20, width: 20, marginLeft: 5}} />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          color: '#999999',
          fontWeight: '700',
          fontSize: 20,
          lineHeight: 19,
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
    paddingHorizontal: 6,
    borderWidth: 0,
  },
});
