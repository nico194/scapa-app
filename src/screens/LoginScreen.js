import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, ImageBackground } from 'react-native';
import ButtonComponent from '../components/atoms/button/ButtonComponent';
import TextField from '../Styles/TextField';
import { ScreenOrientation } from 'expo';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/users';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'SCAPA',
        headerStyle: {
            backgroundColor: '#19A7C4',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props)
        this.state= {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
    }

    onChangeField = (text, field) => {
        this.setState({ [field]: text })
    }

    signIn = () =>{
        this.props.signIn(this.state)
            .then( user => user && this.props.navigation.navigate('Home'))
            .catch( err => console.log(err))
    }

    goToSignUp = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={TextField.field} placeholder='Email...' onChangeText={ text => this.onChangeField(text, 'email')}/>
                <TextInput style={TextField.field} placeholder='Password...' onChangeText={ text => this.onChangeField(text, 'password')}/>
                <ButtonComponent text="Login" onPress={this.signIn} className='primary' />
                <Text style={styles.link} onPress={this.goToSignUp} >No tienes cuenta? Registrate aquí </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: "center"
    },
    link: {
        color: '#A84F3D',
        textDecorationLine: 'underline',
        marginTop: 10
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.users.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: user => dispatch(signIn(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
