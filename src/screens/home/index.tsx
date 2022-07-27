import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.bodyText}>Home page</Text>
      </View>
    </SafeAreaView>
  );
}
