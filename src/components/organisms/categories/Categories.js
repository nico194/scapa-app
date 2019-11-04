import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { getPictogramsByCategory } from '../../../redux/actions/pictograms';
import { connect } from 'react-redux'
import ButtonComponent from '../../atoms/button/ButtonComponent';

export class Categories extends Component {

    showPictogramsByCategory = id =>{
        this.props.getPictogramsByCategory(id)
    }

    render() {
        const { categories } = this.props;
        console.log(categories)
        const listCategories = categories && categories !== undefined ? categories.map( category => {
            return (
                <ButtonComponent key={category.id} text={category.description} className='category' onPress={() => this.showPictogramsByCategory(category.id)}  />
            )
        }): console.log('error categories');
        return (
            <SafeAreaView style={styles.categoriesContainer}>
                {listCategories}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => ({
    categories: state.categories.categories
})

const mapDispatchToProps = {
    getPictogramsByCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
