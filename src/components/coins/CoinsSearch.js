import React from 'react';
import {TextInput, Platform, View, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

export default class CoinsSearch extends React.Component {
  state = {
    query: '',
  };

  handleText = query => {
    this.setState({query});

    if (this.props.onChange) {
      this.props.onChange(query);
    }
  };

  render() {
    const {query} = this.state;

    return (
      <View>
        <TextInput
          onChangeText={this.handleText}
          value={query}
          placeholder="Search coin"
          placeholderTextColor="#fff"
          style={[
            styles.textInput,
            Platform.OS === 'ios'
              ? styles.textInputIos
              : styles.textInputAndroid,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: '#fff',
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8,
  },
});
