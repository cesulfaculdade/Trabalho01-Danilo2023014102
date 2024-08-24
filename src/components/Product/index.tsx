import { Text, TouchableOpacity, View } from "react-native"; //TouchableOpacity = botão verde
import { styles } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}


export function Product ({ name, onRemove }: Props) {
    return (
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}> 
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
    )
}