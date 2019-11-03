import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Categories from '../categories/Categories';
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
                <View style={styles.phaseComponent}>
                    <Text>Phrase Component</Text>
                </View>
                <View style={styles.categoriesComponent} >
                    {loadingCategories ?
                        <Text style={{ fontSize: 30 }}>Cargando...</Text>
                        :
                        <Categories />
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20
    },
    phaseComponent: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    categoriesComponent: {
        flex: 1,
        justifyContent:'flex-end'
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
