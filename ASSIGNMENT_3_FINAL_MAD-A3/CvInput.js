import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CvInput = ({ navigation }) => {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    age: '',
    dateOfBirth: '',
    gender: '',
    emailAddress: '',
    city: '',
    country: '',
  });

  const [skills, setSkills] = useState({
    technicalSkills: '',
    languages: '',
    others: '',
  });

  const [educationalDetails, setEducationalDetails] = useState({
    matriculationPercentage: '',
    intermediatePercentage: '',
    currentStudy: '',
  });

  const [certifications, setCertifications] = useState('');
  const [extracurriculars, setExtracurriculars] = useState('');

  const handleSkillChange = (text, field) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [field]: text,
    }));
  };

  const handleCertificationsChange = (text) => {
    setCertifications(text);
  };

  const handleSubmit = async () => {
    try {
      const formData = {
        personalDetails,
        skills,
        educationalDetails,
        certifications,
        extracurriculars,
      };

      const formDataString = JSON.stringify(formData);

      await AsyncStorage.setItem('formData', formDataString);
      
      navigation.navigate('CVPage');
    } catch (error) {
      console.error('Error storing form data:', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      

      {/* Personal Details */}
      <Text style={styles.heading}>Personal Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, age: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="dateOfBirth"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, dateOfBirth: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, gender: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="emailAddress"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, emailAddress: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="city"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, city: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="country"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, country: text })}
      />
      

      {/* Skills */}
      <Text style={styles.heading}>Skills</Text>
      <TextInput
        style={styles.input}
        placeholder="Technical Skills (up to 3, separate with new line)"
        placeholderTextColor={'grey'}
        onChangeText={(text) => handleSkillChange(text, 'technicalSkills')}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Languages (up to 3, separate with new line)"
        placeholderTextColor={'grey'}
        onChangeText={(text) => handleSkillChange(text, 'languages')}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Other Skills (up to 3, separate with new line)"
        placeholderTextColor={'grey'}
        onChangeText={(text) => handleSkillChange(text, 'others')}
        multiline
      />

      {/* Educational Details */}
      <Text style={styles.heading}>Educational Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Matriculation Percentage"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setEducationalDetails({ ...educationalDetails, matriculationPercentage: text })}
      />

      {/* Certifications */}
      <Text style={styles.heading}>Certifications</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Certifications (separate with new lines)"
        placeholderTextColor={'grey'}
        onChangeText={(text) => handleCertificationsChange(text)}
        multiline
      />

      {/* Extracurriculars */}
      <Text style={styles.heading}>Extracurriculars</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Extracurriculars"
        placeholderTextColor={'grey'}
        onChangeText={(text) => setExtracurriculars(text)}
      />

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderColor: 'rgba(236, 244, 239, 1)',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
  },
});

export default CvInput;
