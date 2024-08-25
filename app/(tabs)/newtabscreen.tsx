// screens/NewTabScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewComponent from '@/components/NewComponent'; // Import the new component

const NewTabScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Tab</Text>
      <NewComponent /> {/* Add the new component to the new tab */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NewTabScreen;
