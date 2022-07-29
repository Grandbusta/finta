import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

interface ITitleProps {
  text: String;
  children?: React.ReactNode;
}

export default function Header({text, children}: ITitleProps) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.text}>{text}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleView: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
