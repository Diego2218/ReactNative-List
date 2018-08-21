import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,  
  TextInput,
  Text,
  ToastAndroid
} from 'react-native';

export default class Form extends React.Component {
    constructor (){
        super();

        this.state = {
            userName: '',
            password: ''
        }
    }

    getUser=(user) => {
        this.setState({userName: user});
    }

    getPass=(pass) => {
        this.setState({passWord: pass});
    }

    login = () => {
        if(this.state.userName == 'Diego' && this.state.passWord == 'gogo123'){               
            this.props.navigation.navigate('lista');
        }
        else{
            ToastAndroid.showWithGravity(
                'Invalid username or password. Try again!',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }        
    }

    render() {      

        return(            
            <View style={styles.MainContainer}>
                <View style={{flex:1, backgroundColor:'transparent', justifyContent:'center'}}>
                    <Text style={styles.Text}> Login </Text>
                    <Text style={styles.Little}>Username:</Text>
                    <TextInput style={styles.TextInput} onChangeText={this.getUser}></TextInput>
                    <Text style={styles.Little}>Password:</Text>
                    <TextInput secureTextEntry={true} style={styles.TextInput} onChangeText={this.getPass}></TextInput>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity = { .5 }
                        onPress={this.login} >
                        <Text style={styles.TextStyle}> Login </Text>  
                    </TouchableOpacity>
                </View>
            </View>                       
        );        
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#000',
      paddingLeft: 20,
      paddingRight: 20,
    },
    SubmitButtonStyle: {
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#00BCD4',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
    formContainer: {
      alignSelf: 'stretch',
      paddingLeft: 40,
      paddingRight: 40,
    },
    TextInput: {
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        color: '#fff',
    },
    Text: {
        marginBottom: 60,
      textAlign: 'center',
      fontSize: 28,
      color: '#fff',
    },
    Little: {
      color: '#fff',
      paddingLeft: 20,
    },
    Button: {
      borderRadius:80,
      borderWidth: 1,
      width: 60,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#00BCD4',
    }
  });