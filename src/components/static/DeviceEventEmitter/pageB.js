import React, { Component } from 'react';
import { Button, View, DeviceEventEmitter } from 'react-native';
export default class Two extends Component {
  startEmit = () => {
    // 准备值，发监听
    const message = '监听发出通过，让one页面的值进行改变';
    DeviceEventEmitter.emit('changeResult', message);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={this.startEmit} title="触发第一个页面的监听事件" />
      </View>
    );
  }
}