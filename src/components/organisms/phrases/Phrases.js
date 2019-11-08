import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Pictogram from '../../molecules/pictogram/Pictogram';
import { getPhrases } from '../../../redux/actions/phrases'
import { unselectPictogramToPhrase } from '../../../redux/actions/pictograms';
import { connect } from 'react-redux';
import { speak } from 'expo-speech';
import ButtonComponent from '../../atoms/button/ButtonComponent';
class Phrases extends Component {

    componentDidMount() {
        this.props.getPhrases(this.props.user.id);
    }

    reproduceSentence = pictograms => {
        let sentence = '';
        pictograms.forEach(pictogram => {
            sentence += `${pictogram.description} ` 
        });
        speak(sentence, { language: 'es-ES' });
    }

    reproduce = description => {
        speak(description, { language: 'es-ES' });
    }

    unselectedPictogram = index => {
        this.props.unselectPictogramToPhrase(index)
    }

    render() {
        const { phrases, speak, pictogramsSelected } = this.props;
        const sentences = !speak ?
            phrases && phrases !== undefined ? phrases.map( (phrase, index) => {
                return(
                    <View key={index}>
                        <Text style={styles.descriptionPhrase}>{phrase.description !== null ? phrase.description : 'Any description'}</Text>
                        <ScrollView horizontal={true}>
                            <View style={styles.sentences}>
                                {
                                    phrase.pictograms.map((pictogram, index) =>{
                                        return (
                                            <Pictogram key={index} description={pictogram.description} image={pictogram.image} onPress={ () => this.reproduce(pictogram.description)} />
                                        )
                                    })
                                }
                            </View>
                            <View style={styles.centerButton}>
                                <ButtonComponent text='Reproducir' className='primary' onPress={ () => this.reproduceSentence(phrase.pictograms)}/>
                            </View>
                        </ScrollView>
                    </View>
                )
            }) : console.log('error show phrases')
            : 
            pictogramsSelected && pictogramsSelected !== undefined ? pictogramsSelected.map( (pictogram, index) => {
                return(
                    <Pictogram key={index} image={pictogram.image} onPress={() => this.unselectedPictogram(index)} />
                )
            }) : console.log('error show sentence')
        return (
            <View style={speak? styles.container : {}}>
                <View style={speak ? styles.sentence : {}}>
                    <ScrollView horizontal={speak ? true: false}>
                        {sentences}
                    </ScrollView>
                </View>
                {speak &&
                    <View style={styles.buttons}>
                        <ButtonComponent text='Reproducir' className='primary' onPress={ () => this.reproduceSentence(phrase.pictograms)}/>                    
                        <ButtonComponent text='Guardar' className='primary' onPress={ () => this.reproduceSentence(phrase.pictograms)}/>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    buttons: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    sentence: {
        flex: 4
    },
    sentences: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15,
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 10
    },
    centerButton: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    descriptionPhrase: {
        fontSize: 25,
        fontWeight: '500',
        color: '#19A7C4',
        paddingLeft: 10
    }
})

const mapStateToProps = state => {
    return {
        user: state.users.user,
        phrases: state.phrases.phrases,
        pictogramsSelected: state.pictograms.pictogramsSelected
    }
}

const mapDispatchToPros = {
    getPhrases,
    unselectPictogramToPhrase
}



export default connect(mapStateToProps, mapDispatchToPros)(Phrases)
