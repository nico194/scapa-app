import React from 'react';
import config from '../../../config';
import { StyleSheet, View, Text, Image } from 'react-native';
//import './Pictogram.scss';

const Pictogram = (props) => {
    const {image , description, onPress} = props;
    const img = image.replace(/\\/gi, '/');
    const source = `${config.server}/${img}`;
    return (
        <View onPress={onPress}>
            <Image source={{ uri: source }} style={{ width: 150, height: 150 }}/>
            <Text style={{ textAlign: 'center' }} >{description}</Text>
        </View>
    )
}

export default Pictogram
