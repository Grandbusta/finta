import React from 'react';
import {Image, Text, View, StyleSheet, ImageSourcePropType} from 'react-native';

interface IGreetingProps {
  name: String;
  imgUrl: ImageSourcePropType;
}

export default function Greetings({name, imgUrl}: IGreetingProps) {
  return (
    <View>
      <View style={styles.profileView}>
        <Image source={imgUrl} style={styles.profileImg} />
        <View style={styles.profileIntroView}>
          <Text style={styles.greetingName}>{`Hi, ${name}`}</Text>
          <Text style={styles.greeting}>Good Afternoon</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
  },
  bodyText: {
    fontSize: 18,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIntroView: {
    marginLeft: 10,
  },
  greeting: {
    color: 'grey',
    fontSize: 16,
  },
  greetingName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
