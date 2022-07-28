import React from 'react';
import {Image, SafeAreaView, Text, View, StyleSheet} from 'react-native';

interface IAvailableBalance {
  amount: String;
}

export default function AvailableBalance({amount}: IAvailableBalance) {
  return (
    <View style={styles.background}>
      <Text style={styles.available}>Available balance</Text>
      <Text style={styles.amount}>{`$${amount}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f4f4ff',
    marginVertical: 20,
    padding: 24,
    borderRadius: 20,
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  available: {
    color: 'grey',
  },
});
