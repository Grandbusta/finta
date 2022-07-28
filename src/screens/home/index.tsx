import React from 'react';
import {SafeAreaView, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Greetings from '../../components/greetings';
import AvailableBalance from '../../components/availableBalance';
import TransactionCard from '../../components/transactionCard';
import Title from '../../components/title';
import {transactions} from '../../utils/data';

export default function Home() {
  const profileImg = require('../../assets/images/profile.jpeg');

  const seeAll = () => (
    <TouchableOpacity
      onPress={() => {
        console.log('pressed');
      }}>
      <Text>See all</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={() => (
          <>
            <Greetings name="Busta" imgUrl={profileImg} />
            <AvailableBalance amount="5678.90" />
            <Title text={`Recent Transactions`} children={seeAll()} />
          </>
        )}
        data={transactions}
        renderItem={({item}) => (
          <TransactionCard
            imgUrl={item.beneficiaryImg}
            beneficiaryName={item.beneficiaryName}
            type={item.type}
            amount={item.amount}
          />
        )}
      />
    </SafeAreaView>
  );
}
