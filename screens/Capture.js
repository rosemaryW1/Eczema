import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import TaskBar from '../components/TaskBar';
import UpperTaskBar from '../components/UpperTaskBar';

const Capture = () => {
  const [imageUri, setImageUri] = useState(null);

  // Function to open the camera
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3], // Define aspect ratio if needed
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri); // Set the URI of the captured image
      }
    } else {
      alert('Camera access is required to take photos.');
    }
  };

  return (
    <View style={styles.container}>
      <UpperTaskBar />
      {/* Capture Button (Circle) */}
      <TouchableOpacity style={styles.circle} onPress={openCamera}>
        <MaterialIcons name="photo-camera" size={80} color="#ffffff" />
      </TouchableOpacity>

      <Text style={styles.title}>Click camera Icon to capture Image😊</Text>

      {/* Display Captured Image Below the Circle */}
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={styles.capturedImage} // Set image dimensions here
        />
      )}

      {/* Upload and View Results Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={() => alert('Uploading photo...')}>
          <Text style={styles.buttonText}>Upload Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resultsButton} onPress={() => alert('Viewing results...')}>
          <Text style={styles.buttonText}>View Results</Text>
        </TouchableOpacity>
      </View>
      <TaskBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150, // Make it a perfect circle
    backgroundColor: '#f28482',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  capturedImage: {
    width: 250,   // Set the desired width
    height: 250,  // Set the desired height
    marginTop: 20, // Add space between the circle and image
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  uploadButton: {
    backgroundColor: '#f28482',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  resultsButton: {
    backgroundColor: '#84a59d',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Capture;
