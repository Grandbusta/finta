import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

interface ITransactionCardProps {
  imgUrl: ImageSourcePropType;
  beneficiaryName: String;
  type: String;
  amount: Number;
}

export default function TransactionCard({
  imgUrl,
  beneficiaryName,
  type,
  amount,
}: ITransactionCardProps) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.cardView}>
          <View style={styles.beneficiaryView}>
            <Image source={imgUrl} style={styles.profileImg} />
            <View style={styles.beneficiaryDetailsView}>
              <Text style={styles.beneficiaryName}>{beneficiaryName}</Text>
              <Text style={styles.transactionDate}>10 March 2021</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.amountView,
              backgroundColor: type == 'debit' ? '#f9eaed' : '#e6f2f2',
            }}>
            <Text
              style={{
                ...styles.amount,
                color: type == 'debit' ? 'red' : 'green',
              }}>{`${type == 'debit' ? `-` : `+`}$${amount}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  beneficiaryView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  beneficiaryDetailsView: {
    marginLeft: 10,
  },
  beneficiaryName: {
    fontSize: 18,
    fontWeight: '600',
  },
  transactionDate: {
    color: 'grey',
    marginTop: 5,
  },
  amountView: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  amount: {
    fontWeight: '700',
  },
});
