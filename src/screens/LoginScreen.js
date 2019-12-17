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
            password: '',
            message: '',
            error: ''
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
            .then( user => {
                if(!user) {

                } 
            })
            .catch( err => console.log(err))
    }

    goToSignUp = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        const { error } = this.state
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: "center"
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
