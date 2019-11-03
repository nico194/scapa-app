import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Phrases from '../components/organisms/phrases/Phrases';
import Pictograms from '../components/organisms/pictograms/Pictograms';

export class SpeakScreen extends Component {
    static navigationOptions = {
        title: 'Empecemos a Hablar',
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
                <Pictograms />
            </View>
        )
    }
}

export default SpeakScreen
