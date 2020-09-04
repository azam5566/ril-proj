import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import colors from '../utils/colors';
import Screen from '../components/Screen';

export default function SecondScreen({ navigation, route }) {
  const location = route.params;

  return (
    <Screen style={styles.container}>
      <Text style={{ color: 'white' }}>Location : {location}</Text>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonStyle}>Go Back</Text>
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
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonStyle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
