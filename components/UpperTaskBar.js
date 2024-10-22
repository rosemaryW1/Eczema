import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const UpperTaskBar = ({ title }) => {
  return (
    <View style={styles.container}>
      {/* Left Icon, if needed */}
      {/* <Ionicons name="menu" size={28} color="#fff" style={styles.icon} /> */}
      
      {/* Title in the Center */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icon, if needed */}
      {/* <Ionicons name="notifications" size={28} color="#fff" style={styles.icon} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#f5cac3', // A calm neutral color from your palette
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0, // Stick to the top
  },
  title: {
    color: '#fff',  // White text to contrast the background
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    padding: 10,
  },
});

export default UpperTaskBar;
