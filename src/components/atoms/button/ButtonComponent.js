import React from 'react'
 import { StyleSheet, TouchableHighlight, Text } from 'react-native'

const ButtonComponent = (props) => {
    const { text, onPress, className } = props;
    let style = {};
    switch (className) {
        case 'primary':
            style = styles.primaryButton;
            break;
        case 'category':
            style = styles.categoryButton;
            break;
        case 'normal':
            style = styles.secondaryButton;
            break;
        default:
            break;
    }
    return (
        <TouchableHighlight style={style} onPress={onPress}>
            <Text style={styles.primaryText}>{text}</Text>
        </TouchableHighlight> 
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: '#19A7C4',
        borderRadius: 8,
        padding: 5
    },
    categoryButton: {
        backgroundColor: '#EF721E',
        borderRadius: 8,
        width: 130,
        height: 50
    },
    primaryText: {
        textAlign: "center",
        color: '#fff',
        fontWeight: '600',
        fontSize: 17
    }
})

export default ButtonComponent
