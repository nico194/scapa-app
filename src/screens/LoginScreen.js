import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import TextField from '../Styles/TextField';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/users';

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state= {
            email: '',
            password: ''
        }
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
                <Text style={{textAlign: 'center', marginBottom: 10}}>Login screen</Text>
                <TextInput style={TextField.field} placeholder='Email...' onChangeText={ text => this.onChangeField(text, 'email')}/>
                <TextInput style={TextField.field} placeholder='Password...' onChangeText={ text => this.onChangeField(text, 'password')}/>
                <Button title="Login" onPress={this.signIn} />
                <Text style={styles.link} onPress={this.goToSignUp} >No tienes cuanta? Registrate aquí </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    link: {
        color: 'blue',
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
