import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import colors from '../utils/colors';
import Screen from '../components/Screen';

export default function FirstScreen({ navigation }) {
  const [location, setLocation] = useState();
  function handleLeftClick() {
    navigation.toggleDrawer();
  }

  function findCurrentPos() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        setLocation(location);
        navigation.navigate('SecondScreen', location);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => findCurrentPos()}>
          <Text style={styles.buttonStyle}>Get Current (Lat,Lng)</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
  },
  buttonStyle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
