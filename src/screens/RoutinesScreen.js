import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Phrases from '../components/organisms/phrases/Phrases';

export class RoutinesScreen extends Component {
    static navigationOptions = {
        title: 'Rutinas',
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
            <View>
                <Phrases/>
            </View>
        )
    }
}

export default RoutinesScreen
