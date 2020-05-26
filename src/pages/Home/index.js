import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Picker } from 'react-native';

import Style from './style';
import Logo from '../../assets/logo';
import SearchController from '../../Controller/SearchController';

// function getYear() {
//     const date = new Date();
//     const array = [];

//     for(let i = 1930; i < date.getFullYear(); i++) {
//         array[i] = (<Picker.Item label={i} value={i} />);
//     }

//     return array;
// }

export default function Home({ navigation }) {

    const [welcome, setWelcome] = useState('');
    
    const [name, setName] = useState('');
    const [year, setYear] = useState(0);

    useEffect(() => {
        (function getHours() {
            let date = new Date();

            if(date.getHours() >= 0 && date.getHours() <= 12) {
                setWelcome('Bom dia');
            }else if(date.getHours() > 12 && date.getHours() <= 17) {
                setWelcome('Boa tarde');
            }else {
                setWelcome('Boa noite');
            }
        })();
    }, []);

    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.body}>
                <Logo style={{ fillRule: 'evenodd', width: '75%', height: '25%', alignItems: 'center' }} />
                <Text style={Style.textHeader}>{welcome}</Text>
            <TextInput placeholder='Digite seu nome (Sem espaço)' onChangeText={(name) => { setName(name); }} placeholderTextColor='#fff' style={Style.input} />
            <TextInput keyboardType='numeric' placeholder='Qual o seu ano de nascimento?' onChangeText={(year) => { setYear(year); }} placeholderTextColor='#fff' style={Style.input} />
            <TouchableOpacity style={Style.button} onPress={() => { SearchController(name, year, navigation); }}><Text style={Style.buttonText}>Exibir</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}