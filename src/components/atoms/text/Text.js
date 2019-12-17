import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }
    async componentDidMount(){
        await Fonts.loadAsync({
            'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
            'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
            'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf')
        })

        this.setState({ fontLoaded: true })
    }
    render() {
        const { fontLoaded } = this.state;
        const { label, type } = this.props;
        return (
            <View>
                {fontLoaded &&
                    <Text> {label} </Text>            
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Text
