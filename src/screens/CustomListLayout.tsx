import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CustomListLayoutProps {
  name: string;
  color: string;
  numeros: number;
}

const CustomListLayout: React.FC<CustomListLayoutProps> = ({ name, color, numeros }) => {
  return (
    <View style={[styles.listContainer, { backgroundColor: color }]}>
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
    color: '#fff',
  },
  listNumber: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CustomListLayout;