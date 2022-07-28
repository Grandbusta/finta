import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/home';
import Navigation from './src/navigation';

function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
