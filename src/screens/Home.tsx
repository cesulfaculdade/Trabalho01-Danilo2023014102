import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import shopping from '../../src/assets/shopping_list.png'
import { useState } from "react";
import { Product } from "../components/Product";

export function Home() {

  const [products, setProducts] = useState<string[]>([]);
  const [productName, setProductName] = useState('');

  function handleProductAdd() {
      if (products.includes(productName)) {
          return Alert.alert("Produto já cadastrado!", "Já existe um produto na lista com este nome.");
      }

      setProducts((prevState) => [...prevState, productName]);
      setProductName('');
    }

  function handleProductRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
            {
              text: 'Sim',
              onPress: () => setProducts(prevState => prevState.filter(product => product != name)) 
            },
            {
              text: 'Não',
              style: 'cancel'
            }
        ]);
    }

    return (
  <View style={styles.container}>

      <View style={styles.purpleContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
              placeholder="Adicione um novo produto"
              placeholderTextColor='#808080'
              keyboardType='default'
              onChangeText={setProductName} 
              value={productName}
                />

        <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
            <MaterialIcons name="add-circle-outline" size={16} color="white" />
              </TouchableOpacity>
        </View>
            
        <FlatList
              data={products}
              keyExtractor={item => item}
                renderItem={({ item }) => (
                <Product nome={item} onRemove={() => handleProductRemove(item)}>
                </Product>
            )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={products.length <= 0 && styles.list}
              ListEmptyComponent={() => (
                <View style={styles.emptyListContainer} >
                    <Image source={shopping}></Image> 
                        <Text style={styles.secoundText}>
                            Você ainda não tem produtos na lista de compra
                        </Text>
                          <Text style={styles.textSubtitle}>
                            Adicione produtos e organize sua lista de compras
                        </Text>
                  </View>
              )}   
          />
      </View>
  </View>
  )
}