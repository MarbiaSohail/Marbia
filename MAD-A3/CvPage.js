import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CvPage = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const retrieveFormData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('formData');
        
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setFormData(parsedData);
        }
      } catch (error) {
        console.error('Error retrieving form data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    retrieveFormData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>CV Page</Text>

      {formData ? (
        <>
          <Text style={styles.text}>Name: <Text style={styles.orangeText}>{formData.personalDetails.name}</Text></Text>

          <Text style={styles.text}>Technical Skills: <Text style={styles.orangeText}>{formData.skills.technicalSkills}</Text></Text>
          <Text style={styles.text}>Languages: <Text style={styles.orangeText}>{formData.skills.languages}</Text></Text>
          <Text style={styles.text}>Other Skills: <Text style={styles.orangeText}>{formData.skills.others}</Text></Text>

          <Text style={styles.text}>Matriculation Percentage: <Text style={styles.orangeText}>{formData.educationalDetails.matriculationPercentage}</Text></Text>

          <Text style={styles.text}>Certifications: <Text style={styles.orangeText}>{formData.certifications}</Text></Text>

          <Text style={styles.text}>Extracurriculars: <Text style={styles.orangeText}>{formData.extracurriculars}</Text></Text>
        </>
      ) : (
        <Text style={styles.text}>No data found</Text>
      )}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'orange', 
  },
  text: {
    fontSize: 16,
    color: 'black', 
    marginBottom: 10,
  },
  orangeText: {
    color: 'orange', 
  },
});

export default CvPage;
