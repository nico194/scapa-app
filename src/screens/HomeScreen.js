import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ButtonComponent from '../components/atoms/button/ButtonComponent';
import { connect } from 'react-redux'

class HomeScreen extends Component {
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
    goToMemories = () => {
        this.props.navigation.navigate('Memories');
    }

    goToSpeak = () => {
        this.props.navigation.navigate('Speak');
    }

    goToRoutines = () => {
        this.props.navigation.navigate('Routines');
    }

    render() {
        const { user } = this.props;
        return (
            <View style={styles.container}>
                <Text>Bienvenido {user.name}</Text>
                <Text>El asistente de voz está: {user.voice ? 'Activado' : 'Desactivado'}</Text>
                <ButtonComponent text="Recuerdos" onPress={this.goToMemories} className='primary' />
                <ButtonComponent text="Empecemos a hablar" onPress={this.goToSpeak} className='primary' />
                <ButtonComponent text="Rutinas" onPress={this.goToRoutines} className='primary' />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => ({
    user: state.users.user
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
