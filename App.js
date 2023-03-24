import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import {Header} from 'react-native-elements';
import elementDB from './db';
import elementData from './elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from 'react-native-elements/dist/helpers';

const copyimg= require("./icons/content_copy_FILL0_wght400_GRAD0_opsz48.png")
export default class App extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            element: '',
            input: '',
            result: ''
        }
    }
    render()
    {
        return(
            <View style={styles.containerStyle}>

                    <Header
                        centerComponent={
                            {
                                text: 'Element Calculator',
                                style: 
                                {

                                    color: '#FFFFFF',
                                    fontSize: 20.2,

                                }
                            }
                        }
                        
                    />
                    <View style={styles.screenBox}>
                            <View style={styles.inputContainer}>
                                <TextInput                         
                                style=
                                {
                                    {
                                        fontSize: 16,
                                        color: '#FFF',
                                        textAlign: 'right',
                                        height: 40,
                                    }
                                }/>
                            <View/>
                            <View style={styles.answerContainer}>
                                <Text style=
                                {
                                    {                                        fontSize: 16,
                                        color: '#FFF',
                                        textAlign: 'right',
                                        height: 20,
                                    }
                                }>
                                d
                                </Text>
                            </View>
                        </View>
                </View>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity>
                        
                        <Image source={require("./icons/content_copy_FILL0_wght400_GRAD0_opsz48.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("./icons/element.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        containerStyle:
        {
            backgroundColor: '#909BA8',
            flex: 1,
        },
        screenBox:
        {
            backgroundColor: '#35393E',
            margin: 10,
            padding: 5,

            width: '80%',
            borderRadius: 25,
            alignSelf: 'center',
    
            
        },
        inputContainer:
        {
            

            fontSize: 16,
            textAlign: 'right',

        },
        answerContainer:
        {
            

            fontSize: 20,
            textAlign: 'right',

        },
        optionsContainer: 
        {
            padding: 10,
            margin: 2,
            alignContent: 'flex-start',
            height: 60,
            flexDirection: 'row',
            flex:1,
            width: '80%',

        }

    }
)