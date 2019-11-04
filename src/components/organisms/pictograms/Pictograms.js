import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import Categories from '../categories/Categories';
import { ScreenOrientation } from 'expo';
import { getCategoriesByPatient } from '../../../redux/actions/categories';
import { connect } from 'react-redux'

class Pictograms extends Component {

    componentDidMount(){
       // this.props.getCategoriesByPatient(this.props.user.id)
       ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
    }

    render() {
        const { loadingCategories } = this.props;
        console.log('height', Dimensions.get('screen').height)
        return (
            <View style={styles.container}>
                <Text>Phrase Component</Text>
                <View style={styles.categoriesComponent}>
                    <Categories />
                    <Text>Phrase Component</Text>
                    {/* {loadingCategories ?
                        <Text style={{ fontSize: 30 }}>Cargando...</Text>
                        :
                    } */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    phaseComponent: {
    },
    categoriesComponent: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
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
