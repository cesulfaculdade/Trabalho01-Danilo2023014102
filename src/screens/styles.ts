import { StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        width: '100%'
    },
    purpleContainer: {
        height: 173,
        backgroundColor: '#7A4A9E'
    },
    title: {
        color: '#F2F2F2',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    button: {
        width: 54,
        height: 54,
        backgroundColor: '#31C667',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 4,
        borderWidth: 0.5
    },
    input: {
        backgroundColor: 'white',
        fontSize: 16,
        flex: 1,
        height: 54,
        borderRadius: 5,
        paddingHorizontal: 16,
        borderWidth: 0.5,
        borderColor: '#808080'
    },
    inputContainer: {
        flexDirection: 'row',
        top: -30,
        alignItems: 'center'
    },
    form: {
        paddingHorizontal: 24
    },
    secoundText: {
        color: '#808080',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textSubtitle: {
        color: '#808080',
        fontSize: 14,
        textAlign: "center",
    },
    emptyListContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 56,
        right: 56
    },
    list: {
        justifyContent: 'center'
    }
})