import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';

import  Data  from '../artists.json';

export default class Lista extends React.Component {

  state = {
    data: []
  };
  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ data: Data });
    
    /*const response = await fetch("https://randomuser.me/api?results=10");
        const json = await response.json();
        this.setState({ data: json.results });
        console.log(this.props.data);*/
  };

  showData = () =>{
    
    ToastAndroid.showWithGravity(
      'This is an excelent artist!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    this.props.navigation.navigate('information');
  }

  render() {
    //console.log(this.props.data);
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
          <TouchableHighlight 
            style={{marginVertical:25}} 
            onPress={this.showData}> 
            <Text style={styles.Text}>{item.name}</Text>
          </TouchableHighlight> 
                    }/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  formContainer: {
      alignSelf: 'stretch',
      paddingLeft: 20,
      paddingRight: 20,
  },
  Text: {
    textAlign: 'center'
  }
});