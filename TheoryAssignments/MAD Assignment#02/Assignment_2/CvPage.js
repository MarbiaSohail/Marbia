import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CvPage = ({ route }) => {
  // Extract data from the route parameter
  const {
    personalDetails,
    skills,
    educationalDetails,
    certifications,
    extracurriculars,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CV Page</Text>
      
      <Text>Name: {'\n'}{personalDetails.name}</Text>
      
      <Text>Technical Skills: {'\n'} {skills.technicalSkills}</Text>
      <Text>Languages: {'\n'} {skills.languages}</Text>
      <Text>Other Skills: {'\n'} {skills.others}</Text>
      
      <Text>Matriculation Percentage: {'\n'} {educationalDetails.matriculationPercentage}</Text>
      
      <Text>Certifications: {'\n'} {certifications}</Text>

      <Text>Extracurriculars: {'\n'} {extracurriculars}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(236, 244, 239, 1)',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CvPage;
