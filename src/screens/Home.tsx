import React from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import CustomListLayout from './CustomListLayout';
import shopping from '../../src/assets/shopping_list.png'
import { MaterialIcons } from '@expo/vector-icons';

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
            color="#31C667"
            numeros={0}
          />
          <CustomListLayout
            name={"Finalizados"}
            color="#7A4A9E"
            numeros={0}
          />
        </View>

        <Image source={shopping}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  secaoRoxa: {
    flex: 2,
    backgroundColor: "#7A4A9E",
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    height: 54,
    padding: 16,
    fontSize: 18,
    borderRadius: 5,
    marginRight: 16,
    borderWidth: 0.5,
  },
  form: {
    justifyContent: 'center',
    flexDirection: "row",
    height: 54,
    paddingLeft: 24,
    paddingRight: 24,
    top: -30
  },
  secaoBranca: {
    flex: 7,
    backgroundColor: "#FFF"
  },
  containerText: {
    padding: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold"
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#31C667',
    height: 52,
    width: 52,
    marginLeft: -3,
    justifyContent: "center",
    alignItems: "center"
    },
  buttontxt:{
    margin: 'auto'
  }
    
});