import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Pictogram from '../../molecules/pictogram/Pictogram';
import Categories from '../categories/Categories';
import { getPictogramsByPatient, selectPictogramToPhrase } from '../../../redux/actions/pictograms';
import { getCategoriesByPatient } from '../../../redux/actions/categories';
import { connect } from 'react-redux'

class Pictograms extends Component {

    componentDidMount(){
        this.props.getCategoriesByPatient(this.props.user.id);
        this.props.getPictogramsByPatient(this.props.user.id);
    }

    selectPictogram = pictogram => {
        this.props.selectPictogramToPhrase(pictogram);
    }

    render() {
        const { loading, pictograms } = this.props;
        const pictogramsInCategory = pictograms && pictograms !== undefined ? pictograms.map((pictogram, index) =>{
            return (
                <Pictogram key={index} description={pictogram.description} image={pictogram.image} onPress={() => this.selectPictogram(pictogram)}/>
            )
        }) : <Text style={{ fontSize: 25, fontWeight: '500', color: '#19A7C4' }}>No hay pictogramas</Text>;
        return (
            <View style={styles.container}>
                <View style={styles.pictogramsContainer}>
                    {loading ?
                        <Text style={{ fontSize: 30 }}>Cargando...</Text>
                        :
                        pictogramsInCategory
                    }
                </View>
                <Categories />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    pictogramsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

const mapStateToProps = (state) => ({
    pictograms: state.pictograms.pictograms,
    loading: state.pictograms.loading,
    user: state.users.user
})

const mapDispatchToProps = {
    getCategoriesByPatient,
    getPictogramsByPatient,
    selectPictogramToPhrase
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictograms)
