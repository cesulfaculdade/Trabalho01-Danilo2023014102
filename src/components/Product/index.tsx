import { Text, View } from "react-native";
import { styles } from "./styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';


type Props = {
    nome: string;
    onRemove: ()=>void
}

export function Product({  nome, onRemove}: Props) {
    return (
        <View style={styles.container} >
            <Entypo name="circle" size={24} color="#31C667"/>
            <Text style={styles.text}>
                {nome}
            </Text>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" onPress={onRemove}/>
        </View>

    )
}