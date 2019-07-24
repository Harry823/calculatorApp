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
      //this.inputs = ""
      this.state = {
        display: "",
        equation: "",
        operator: "",
        operatorClicked: false
      };
      //this.textSwitch = this.textSwitch.bind(this);
    }

    /*
    Functions for the buttons
    */
    numberPress = (number) => {
      if(this.state.operatorClicked) {
        this.setState((state) => {
          return {
            display: this.state.display = String(number),
            equation: this.state.equation += String(number),
            operatorClicked: false
          };
        });
      }
      else {
        this.setState((state) => {
          return {
            display: this.state.display += number,
            equation: this.state.equation += String(number)
          };
        });
      }
    }
    clearDisplay = () => {
      this.setState((state) => {
        return {
          display: this.state.display = "",
          operator: "",
          equation: "",
          operatorClicked: false
        };
      });
    }
    operatorPress = (operator) => {
      let toDisplay = operator;
      if(this.state.operator != "") {
        toDisplay = this.calculate();
        this.setState((state) => {
          return {
            operatorClicked: true
          };
        });
      }
      this.setState((state) => {
        return {
          display: String(toDisplay),
          operator: operator,
          equation: this.state.equation += operator,
          operatorClicked: true
        };
      });
    }
    calculate = () => {
      //console.log(number)
      //let equation = this.state.equation;
      let result = eval(this.state.equation)
      this.setState((state) => {
        return {
          display: String(result),
          equation: this.state.equation,
          operator: ""
        };
      });
      console.log(this.state.equation);
      return (result);
    }

    render(){
      return(
        <Fragment>
          <Text>
            {this.state.display}
          </Text>

          <View nativeID="buttonRowOne" style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
            }}>
              <Button
                title = "1"
                onPress = {() => this.numberPress(1)}
              />
              <Button
                title = "2"
                onPress = {() => this.numberPress(2)}
              />
              <Button
                title = "3"
                onPress = {() => this.numberPress(3)}
              />
              <Button
                title = "+"
                onPress = {() => this.operatorPress("+")}
              />
          </View>

          <View nativeID="buttonRowTwo" style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Button
              title = "4"
              onPress = {() => this.numberPress(4)}
            />
            <Button
              title = "5"
              onPress = {() => this.numberPress(5)}
            />
            <Button
              title = "6"
              onPress = {() => this.numberPress(6)}
            />
            <Button
              title = "-"
              onPress = {() => this.operatorPress("-")}
            />
          </View>

          <View nativeID="buttonRowTwo" style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Button
              title = "7"
              onPress = {() => this.numberPress(7)}
            />
            <Button
              title = "8"
              onPress = {() => this.numberPress(8)}
            />
            <Button
              title = "9"
              onPress = {() => this.numberPress(9)}
            />
            <Button
              title = "x"
              onPress = {() => this.operatorPress("*")}
            />
          </View>

          <View nativeID="buttonRowTwo" style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Button
              title = "0"
              onPress = {() => this.numberPress(0)}
            />
            <Button
              title = "C"
              onPress = {this.clearDisplay}
            />

            <Button
              title = "÷"
              onPress = {() => this.operatorPress("/")}
            />
            <Button
              title = "="
              onPress = {() => this.calculate(this.display)}
            />
          </View>

        </Fragment>
      )
    }

}


const App = () => {
  //render() {
    return (
      <View style={{justifyContent:"center",flex:1}}>
        <View style = {{alignItems:"center"}}>
            <TestState/>
        </View>
      </View>
    );
};

export default App;
