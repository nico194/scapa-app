import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux'

export class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ''
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    selectImage = async type => {
        const options = 
    }

    render() {
        const { image } = this.state;
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', marginBottom: 10 }}>Register screen</Text>
                <TextInput style={TextField.field} placeholder='Email...' onChangeText={text => this.onChangeField(text, 'email')} />
                <TextInput style={TextField.field} placeholder='Password...' onChangeText={text => this.onChangeField(text, 'password')} />
                <TextInput style={TextField.field} placeholder='Nombre...' onChangeText={text => this.onChangeField(text, 'name')} />
                <View style={styles.uploadImage}>
                    <Text>{image !== '' ? image : 'Seleccione una image...'}</Text>
                    <Button title='Camara' onPress={() => this.selectImage('camera')} />
                    <Button title='Galeria' onPress={() => this.selectImage('gallery')} />
                </View>
                <Button title="Register" onPress={this.signUp} />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 10
    },
    uploadImage: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:"wrap",
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
