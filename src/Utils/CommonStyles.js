import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
    contianer: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10
    },
    textField: {
        borderRadius: 8, borderWidth: 1, borderColor: '#888',
        margin: 10, padding: 10, backgroundColor: '#fff',
        width: '100%', textAlign: 'center',
    },
    title: {
        fontSize: 12,
        margin: 5,
    },
    value: {
        fontWeight: 'bold',
        margin: 5,
    }
})