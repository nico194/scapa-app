import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class HomeScreen extends Component {
    render() {
        const { user } = this.props;
        return (
            <View style={styles.container}>
                <Text>Bienvenido {user.name}</Text>
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
