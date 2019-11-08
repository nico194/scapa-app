import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
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
            <View style={styles.container}>
                <View style={styles.phrases}>
                    <Phrases speak={true} style={styles.phrases} />
                </View>
                <View style={styles.pictograms}>
                    <Pictograms style={styles.pictograms} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    phrases: {
        flex: 1.5,
    },
    pictograms: {
        flex: 4.5,
    }
})

export default SpeakScreen
