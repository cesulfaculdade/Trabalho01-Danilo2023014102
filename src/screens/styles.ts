import { StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const styles = StyleSheet.create({
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
          height: 54,
          width: 52,
          marginLeft: -3,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.5
          
          },
        buttontxt:{
          margin: 'auto'
        }  
    
    })
