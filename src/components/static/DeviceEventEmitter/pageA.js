import React, { Component } from 'react';
import { Button, Text, View, DeviceEventEmitter } from 'react-native';
import Two from './DeviceEventEmitterB';

export default class One extends Component {
  constructor(props) {
    super(props);
    this.state = { result: '我是默认值' };
  }
  componentDidMount() {
    // 收到监听
    this.listener = DeviceEventEmitter.addListener('changeResult', (message) => {
      // 收到监听后想做的事情 // 监听
      this.setState({ result: message });
    });
  }
  componentWillUnmount() {
    // 移除监听
    if (this.listener) { this.listener.remove(); }
  }

  _onChange = () => {
    const { navigation } = this.props;
    navigation.navigate('Two');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={this._onChange} title="跳转到第二个页面" />
        <Text style={{ fontSize: 20, marginTop: 30 }}>{this.state.result}</Text>
      </View>
    );
  }
}