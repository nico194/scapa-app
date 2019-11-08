import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { getPictogramsByCategory, getPictogramsByPatient } from '../../../redux/actions/pictograms';
import { connect } from 'react-redux'
import ButtonComponent from '../../atoms/button/ButtonComponent';

export class Categories extends Component {

    showPictogramsByCategory = id =>{
        this.props.getPictogramsByCategory(id)
    }

    render() {
        const { categories, loading } = this.props;
        const listCategories = categories && categories !== undefined ? categories.map( category => {
            return (
                <ButtonComponent key={category.id} text={category.description} className='category' onPress={() => this.showPictogramsByCategory(category.id)}  />
            )
        }): console.log('error categories');
        return (
            <View style={styles.categoriesContainer}>
                <ButtonComponent text='Todos' className='category' onPress={ () => this.props.getPictogramsByPatient(this.props.user.id)}  />
                {loading ?
                    <Text style={{ fontSize: 30 }}>Cargando...</Text>
                    :
                    listCategories
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    }
})

const mapStateToProps = (state) => ({
    user: state.users.user,
    categories: state.categories.categories,
    loading: state.categories.loading
})

const mapDispatchToProps = {
    getPictogramsByCategory,
    getPictogramsByPatient
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
