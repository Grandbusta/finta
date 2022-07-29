import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/header';
import TransactionCard from '../../components/transactionCard';
import {transactions} from '../../utils/data';
import Title from '../../components/title';
import OverviewAmount from '../../components/overviewamount';
import AvailableBalance from '../../components/availableBalance';

export default function Overview() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <FlatList
          data={transactions}
          style={styles.container}
          ListHeaderComponent={() => (
            <>
              <Header text={`Overview`} />
              <View style={styles.overviewTotal}>
                <OverviewAmount amount={`560.67`} type={`spent`} />
                <OverviewAmount amount={`560.67`} type={`recieved`} />
              </View>
              <Title text={`Transactions`} />
            </>
          )}
          renderItem={({item}) => (
            <TransactionCard
              imgUrl={item.beneficiaryImg}
              beneficiaryName={item.beneficiaryName}
              type={item.type}
              amount={item.amount}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
