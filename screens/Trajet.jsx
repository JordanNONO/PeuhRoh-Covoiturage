import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const trajet = () => {
  return (
    <View style={styles.container}>
    <Ionicons name="ios-search" size={24} color="gray" style={styles.icon} />
    <TextInput
      style={styles.input}
      placeholder="rechercher"
      placeholderTextColor="gray"

    />
  </View>
  )
}

export default trajet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 10,
    // width: '60%'
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
});