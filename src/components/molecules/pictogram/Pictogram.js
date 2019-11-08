import React from 'react';
import config from '../../../config';
import { Text, Image, TouchableOpacity } from 'react-native';
//import './Pictogram.scss';

const Pictogram = (props) => {
    const {image , description, onPress} = props;
    const img = image.replace(/\\/gi, '/');
    const source = `${config.server}/${img}`;
    return (
        <TouchableOpacity onPress={onPress} style={{flex : 1, alignItems: 'center'}}>
            <Image source={{ uri: source }} style={{ width: 80, height: 80 }}/>
            {description && <Text style={{ textAlign: 'center' }} >{description}</Text>}
        </TouchableOpacity>
    )
}

export default Pictogram
