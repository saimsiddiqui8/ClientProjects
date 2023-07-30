import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header';
import { leftArrow } from '../../constant';

const AdminOrderDetails = ({ route }) => {
  const { order } = route.params;
  const getStatusColor = () => {
    if (order.orderStatus === 'completed') {
      return '#00FF00'; // green color
    } else if (order.orderStatus === 'pending') {
      return '#FF0000'; // red color
    }
    return '#000000'; // default color
  };

  const formattedDate = order.date.substr(0, 25);
  return (
    <View style={styles.container}>
      <Header title="Order Details"
        icon={leftArrow}
      />
      {/* Display order details */}
      <Text style={styles.orderID}>{order.orderId}</Text>
      <Text style={[styles.orderStatus, { color: getStatusColor() }]}>{order.orderStatus}</Text>
      <View style={{ backgroundColor: "#DDDDDD", marginTop: 25, borderRadius: 5 }}>
        <Text style={{ color: "#FFBB0E", paddingVertical: 10, paddingLeft: 20, fontSize: 23 }}>Order Details:</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.headingText}>Total Price: {order.totalPrice}</Text>
        <Text style={styles.headingText}>Placed On: {formattedDate}</Text>
        <Text style={styles.headingText}>Shipping: {order.shipping}</Text>
      </View>
      <View style={{ backgroundColor: "#DDDDDD", marginTop: 25, borderRadius: 5 }}>
        <Text style={{ color: "#FFBB0E", paddingVertical: 10, paddingLeft: 20, fontSize: 23 }}>Customer Details:</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.headingText}>Name: {order.name}</Text>
        <Text style={styles.headingText}>Email: {order.email}</Text>
        <Text style={styles.headingText}>City: {order.city}</Text>
      </View>
    </View>
  );
};

export default AdminOrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    marginTop:20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FFBB0E',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderID: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: 700,
    color: "#FFBB0E",
    paddingTop: 10
  },
  orderStatus: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFBB0E"
  }
});
