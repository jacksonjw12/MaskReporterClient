import React, {Component} from 'react';
import {Text, View,StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../common/Colors';

export default class UnAuthorizedRouter extends Component {
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
                <TouchableOpacity
                    onPress={this.props.authorize}
                    style={styles.authButton}>



                    <Text style={styles.authText}>Authorize</Text>

                </TouchableOpacity>


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
    authButton: {

        backgroundColor:Colors.dark,
        padding:"8%",
        paddingTop:"5%",
        paddingBottom:"5%",
        opacity:1.0,
    },
    authText: {
        color:Colors.lighter
    }

})
