import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Greetings from '../../components/greetings';
import AvailableBalance from '../../components/availableBalance';
import TransactionCard from '../../components/transactionCard';
import Title from '../../components/title';
import {transactions} from '../../utils/data';
import Option from '../../components/option';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';

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

  const options = [
    {
      text: 'Send',
      icon: <FontAwesome name="send" size={30} color={'#6666ff'} />,
    },
    {
      text: 'Receive',
      icon: <MaterialIcon name="monetization-on" size={30} color={'#f17909'} />,
    },
    {
      text: 'Withdraw',
      icon: (
        <MaterialCom name="bank-transfer-out" size={30} color={'#26e790'} />
      ),
    },
    {
      text: 'Deposit',
      icon: <FA5 name="money-bill-alt" size={30} color={'#37c9fd'} />,
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={() => (
          <>
            <Greetings name="Busta" imgUrl={profileImg} />
            <AvailableBalance amount="5678.90" />
            <View style={styles.optionView}>
              {options.map((opt, index) => (
                <Option text={opt.text} icon={opt.icon} key={index} />
              ))}
            </View>
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
