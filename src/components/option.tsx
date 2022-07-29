import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IOptionProps {
  text: String;
  icon: React.ReactNode;
}

export default function Option({text, icon}: IOptionProps) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.background}>{icon}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f4f4ff',
    padding: 18,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '500',
  },
  container: {
    marginVertical: 20,
  },
});
