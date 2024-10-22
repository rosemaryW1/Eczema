import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Icons from Expo's vector icons

const TaskBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Home Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={30} color="white" />
      </TouchableOpacity>

      {/* Capture Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('Capture')}>
        <Ionicons name="camera-outline" size={30} color="white" />
      </TouchableOpacity>

      {/* Results Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('Results')}>
        <Ionicons name="book-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f5cac3',
    flexDirection: 'row',
    justifyContent: 'space-around', // Evenly space icons
    position: 'absolute', // Fix it to the bottom
    bottom: 0, // Align to the bottom of the screen
    alignItems: 'center',
  },
});

export default TaskBar;
