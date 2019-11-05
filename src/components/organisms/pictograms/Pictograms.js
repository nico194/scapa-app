import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import Categories from '../categories/Categories';
import { ScreenOrientation } from 'expo';
import { getCategoriesByPatient } from '../../../redux/actions/categories';
import { connect } from 'react-redux'

class Pictograms extends Component {

    componentDidMount(){
       this.props.getCategoriesByPatient(this.props.user.id)
    }

    render() {
        const { loadingCategories } = this.props;
        return (
            <View style={styles.container}>
                {loadingCategories ?
                    <Text style={{ fontSize: 30 }}>Cargando...</Text>
                    :
                    <Categories />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    }
})

const mapStateToProps = (state) => ({
    loadingCategories: state.categories.loading,
    pictograms: state.pictograms.pictograms,
    user: state.users.user
})

const mapDispatchToProps = {
    getCategoriesByPatient
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictograms)
