import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput, Image, DatePickerAndroid, DatePickerIOS, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { signUp } from '../redux/actions/users'
import { connect } from 'react-redux'

export class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            image: null,
            imageBase64: '',
            birthday: new Date().getDate(),
            name: '',
            tutorEmail: '',
            register: false,
            message: '',
            file: null,
        }
        this.selectImage = this.selectImage.bind();
        this.dataURItoBlob = this.dataURItoBlob.bind();
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

    onChangeField = (text, field) => {
        this.setState({ [field]: text })
    }

    setDateIOS = date => {
        this.setState({ birthday: date });
    }

    setDateAndroid = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(),
                mode: 'spinner'
            });
            action !== DatePickerAndroid.dismissedAction && this.setState({ birthday: `${year}-${month+1}-${day}`})
        } catch (error) {
            console.log("Error date picker android: ", error.message);
        }
    }

    selectImage = async type => {
        let result = null;
        switch (type) {
            case 'gallery':
                result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    base64: true,
                });
                break;
            case 'camera':
                result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                });
                break;
            default:
                break;
        }

        !result.cancelled && this.setState({ image: result.uri});
    }

    dataURItoBlob = (dataURI, filename) => {
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new File([ia], filename, {type:mimeString});
    }

    signUp = async () => {
        const { email, password, name, birthday, image, tutorEmail } = this.state;

        const user = {
            email,
            password,
            name,
            birthday,
            image,
            tutorEmail
        }

        const result = await this.props.signUp(user);

        if(result.status) {
            this.props.navigation.navigate('Home');
        } else {
            console.log(result)
            this.setState({ register: true, message: result.response[0] })
        }
    }

    dismissError = () => {
        this.setState({ register: false })
    }

    render() {
        const { image, birthday, register, message } = this.state;
        return (
            <ScrollView onPress={this.dismissError}>
                <View style={styles.container}>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>Register screen</Text>
                    <TextInput style={TextField.field} placeholder='Email...' onChangeText={text => this.onChangeField(text, 'email')} />
                    <TextInput style={TextField.field} placeholder='Password...' onChangeText={text => this.onChangeField(text, 'password')} />
                    <TextInput style={TextField.field} placeholder='Nombre...' onChangeText={text => this.onChangeField(text, 'name')} />
                    {Constants.platform.android ?
                        <Button style={{ marginBottom: 10 , marginTop: 10}} title='Seleccionar Fecha de nacimiento' onPress={this.setDateAndroid} />
                        :
                        <DatePickerIOS date={birthday} onDateChange={this.setDateIOS} />
                    }
                    <View style={styles.uploadImage}>
                        {image === null ?
                            <Text>Seleccione una image...</Text>
                            :
                            <Image source={{uri: image}} style={{ width: 200, height: 200, resizeMode: 'contain', }}/>
                        }
                        <View>
                            <Button title='Camara' onPress={() => this.selectImage('camera')} />
                            <Button title='Galeria' onPress={() => this.selectImage('gallery')} />
                        </View>
                    </View>
                    <TextInput style={TextField.field} placeholder='Email del tutor...' onChangeText={text => this.onChangeField(text, 'tutorEmail')} />
                    <Button title="Register" onPress={this.signUp} />
                    {register &&
                        <Text style={{ color: 'red' }}>{{message}}</Text>
                    }
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    signUp
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
        alignItems: 'center',
        marginBottom: 10
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
