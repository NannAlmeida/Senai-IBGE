import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#233958',
        alignItems: 'center',
    },

    textHeader: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: '15%'
    },

    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    input: {
        color: '#fff',
        borderBottomColor: '#fff',
        marginTop: '10%',
        borderBottomWidth: 2,
        width: '53%',
        height: '7%'
    },
    
    buttonText: {
       color: '#fff',
       textTransform: 'uppercase',
       fontWeight: 'bold' 
    },

    button: {
        backgroundColor: '#1e90ff',
        marginTop: '5%',
        width: '30%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});

export default Style;