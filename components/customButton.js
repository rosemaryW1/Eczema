import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f28482',  // Button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%', // Adjust the width as needed
    marginTop: 10,
  },
  text: {
    color: '#000000', // Text color
    fontWeight: 'bold',
  },
});

export default CustomButton;
