import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextField = (props) => {
    const { label, placeholder , onChange, className } = props;
    let style = {};
    switch (className) {
        case 'error':
            style = styles.primaryButton;
            break;
        case 'field':
            style = styles.field;
            break;
        case 'normal':
            style = styles.secondaryButton;
            break;
        default:
            break;
    }
    return (
        <View styles={styles.container}>
            <Text>{label}</Text>
            <TextInput type='text' id={id} onChange={onChange} placeholder={placeholder} styles={style} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        flexDirection: 'row',
    },
    field: {
        padding: 10,
        color: '#A84F3D',
        borderColor: '#19A7C4',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        marginBottom:10
    },
    error:{
        padding: 10,
        color: '#A84F3D',
        borderColor: '#19A7C4',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        marginBottom:10
    }
})

export default TextField
