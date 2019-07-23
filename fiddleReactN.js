/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

class TestState extends Component {
    constructor() {
      super();
      this.state = {helloWorld: true};
      //this.textSwitch = this.textSwitch.bind(this);
    }
    /*
    textSwitch() {
      this.setState({helloWorld:
        !this.state.helloWorld});

      this.setState((state) => {
        return {helloWorld: !this.state.helloWorld};
      });

    }
    */
    textSwitch = () => {
      this.setState((state) => {
        return {helloWorld: !this.state.helloWorld};
        });
    }

    render() {
      if(!this.state.helloWorld) {
        return (
          <Fragment>
            <Text>Bye world</Text>
            <Button
              title="Change State"
              type="outline"
              onPress={this.textSwitch}
            />
          </Fragment>
        )
      }
      else {
        return (
          <Fragment>
            <Text style = {{alignItems:"center"}}>Hello world</Text>
            <Button
              title="Change State"
              onPress={this.textSwitch}
            />
          </Fragment>
        )
      }

    }
}

const App = () => {
  //render() {
    return (
      <View nativeID='helloWorld' style={{justifyContent:"center",flex:1}}>
        <View style = {{alignItems:"center"}}>
            <TestState/>
        </View>

      </View>
    );
};

export default App;
