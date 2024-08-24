import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import CustomListLayout from './CustomListLayout';
import shopping from '../../src/assets/shopping_list.png'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.secaoRoxa}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione um novo produto"
          placeholderTextColor="#BDBABA"
          keyboardType="default"
        />

          <TouchableOpacity style={styles.button}>
              <MaterialIcons style={styles.buttontxt} name="add-circle-outline" size={16} color="white" />
            </TouchableOpacity>
            
        </View>
    
      <View style={styles.secaoBranca}>
        <View style={styles.containerText}>
          <CustomListLayout
            name={"Produtos"}
            numeros={0}
          />
          <CustomListLayout
            name={"Finalizados"}
            numeros={0}
          />
        </View>

        <Image source={shopping}/>
      </View>
    </View>
  );
}
