import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CustomListLayoutProps {
  name: string;
  numeros: number;
}

const CustomListLayout: React.FC<CustomListLayoutProps> = ({ name, numeros }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listText}>{name}</Text>
      <Text style={styles.listNumber}>{numeros}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listText: {
    fontSize: 18,
    color: '#7A4A9E',
  },
  listNumber: {
    fontSize: 18,
    color: '#31C667',
    fontWeight: 'bold',
  },
});

export default CustomListLayout;