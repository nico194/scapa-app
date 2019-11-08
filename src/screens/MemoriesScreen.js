import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Container from '../Styles/Container';

export class MemoriesScreen extends Component {
    static navigationOptions = {
        title: 'Recuerdos',
        headerStyle: {
            backgroundColor: '#19A7C4',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={Container.screen}>
                <Text> MemoriesScreen </Text>
            </View>
        )
    }
}

export default MemoriesScreen
