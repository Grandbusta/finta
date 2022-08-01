import React from 'react';
import {Dimensions, FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/header';
import TransactionCard from '../../components/transactionCard';
import {transactions} from '../../utils/data';
import Title from '../../components/title';
import OverviewAmount from '../../components/overviewamount';
import AvailableBalance from '../../components/availableBalance';
import {BarChart} from 'react-native-chart-kit';

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
              <BarChart
                height={220}
                verticalLabelRotation={30}
                yAxisLabel="$"
                yAxisSuffix=""
                chartConfig={{
                  backgroundColor: 'red',
                  backgroundGradientFrom: 'red',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                width={Dimensions.get('window').width}
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [20, 45, 28, 80, 99, 13],
                    },
                  ],
                }}
              />
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
