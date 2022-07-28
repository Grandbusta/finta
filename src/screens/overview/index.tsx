import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

export default function Overview() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.bodyText}>Overview</Text>
      </View>
    </SafeAreaView>
  );
}
