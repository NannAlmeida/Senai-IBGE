import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import Style from './style';
import Logo from '../../assets/logo';

export default function Search() {

    const [description, setDescription] = useState('');

    useEffect(() => {
        async function getDescription() {
            setDescription(await AsyncStorage.getItem('description'));
        }

        getDescription();
    }, []);

    return (
        <View style={Style.container}>
            <Logo style={{ fillRule: 'evenodd', width: '75%', height: '25%', alignItems: 'center' }} />
            <Text style={Style.text}>{description}</Text>
        </View>
    );
}