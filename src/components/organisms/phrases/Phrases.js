import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Pictogram from '../../molecules/pictogram/Pictogram';
import { getPhrases } from '../../../redux/actions/phrases'
import { connect } from 'react-redux';
import { speak } from 'expo-speech';
import ButtonComponent from '../../atoms/button/ButtonComponent';
class Routines extends Component {

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

    render() {
        const { phrases } = this.props;
        const sentences = phrases && phrases !== undefined ? phrases.map( (phrase, index) => {
            return(
                <View key={index}>
                    <Text style={styles.descriptionPhrase}>{phrase.description !== null ? phrase.description : 'Any description'}</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.sentence}>
                            {
                                phrase.pictograms.map((pictogram, index) =>{
                                    return (
                                        <Pictogram key={index} description={pictogram.description} image={pictogram.image} />
                                    )
                                })
                            }
                            <View style={styles.centerButton}>
                                <ButtonComponent text='Reproducir' className='primary' onPress={ () => this.reproduceSentence(phrase.pictograms)}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }) : console.log('error show phrases')
        return (
            <View>
                <ScrollView>
                    {sentences}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sentence: {
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
    }
}

const mapDispatchToPros = {
    getPhrases
}



export default connect(mapStateToProps, mapDispatchToPros)(Routines)
