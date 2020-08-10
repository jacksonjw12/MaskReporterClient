import React, {Component} from 'react';
import {Text, View,StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../common/Colors';

export default class MainRouter extends Component {
    constructor(props){
        super(props)
        // this.state = {...this.state,
        //
        //
        //
        // }
    }


    render() {
        // if(!this.props.show){
        //     return null
        // }

        return (
            <View style={styles.container}>
                
                    <Text>Main</Text>




            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"transparent",
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
        //paddingBottom:0,marginBottom:0
    },


})
