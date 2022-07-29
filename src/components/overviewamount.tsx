import React from 'react';
import {Image, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IAvailableBalance {
  amount: String;
  type: String;
}

export default function OverviewAmount({amount, type}: IAvailableBalance) {
  return (
    <View style={styles.background}>
      <View style={styles.iconView}>
        <Ionicons
          name={type == 'spent' ? 'ios-arrow-up' : 'ios-arrow-down'}
          color={type == 'spent' ? '#6666ff' : '#f17909'}
          size={22}
        />
      </View>
      <View style={styles.statView}>
        <Text style={styles.amount}>{`$${amount}`}</Text>
        <Text style={styles.total}>
          {type == 'spent' ? 'Total Spent' : 'Total Recieved'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f4f4ff',
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  total: {
    color: 'grey',
  },
  iconView: {
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  statView: {
    marginLeft: 10,
  },
});
