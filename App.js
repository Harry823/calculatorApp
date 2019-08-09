/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from "react";
import {View, Text, StatusBar, Button, StyleSheet,TouchableHighlight} from "react-native";

export class TestState extends Component {
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
  numberPress = number => {
    if (this.state.operatorClicked) {
      this.setState(state => {
        return {
          display: (this.state.display = String(number)),
          equation: (this.state.equation += String(number)),
          operatorClicked: false
        };
      });
    } else {
      this.setState(state => {
        return {
          display: (this.state.display += number),
          equation: (this.state.equation += String(number))
        };
      });
    }
  };
  clearDisplay = () => {
    this.setState(state => {
      return {
        display: (this.state.display = ""),
        operator: "",
        equation: "",
        operatorClicked: false
      };
    });
  };
  operatorPress = operator => {
    if (this.state.operatorClicked == true) {
      console.log("operatorclicked is true");
      return;
    }
    let toDisplay = operator;
    if (this.state.operator != "") {
      toDisplay = this.calculate();
      this.setState(state => {
        return {
          operatorClicked: true
        };
      });
    }
    this.setState(state => {
      return {
        display: String(toDisplay),
        operator: operator,
        equation: (this.state.equation += operator),
        operatorClicked: true
      };
    });
  };
  calculate = () => {
    //console.log(number)
    //let equation = this.state.equation;
    let result = eval(this.state.equation);
    this.setState(state => {
      return {
        display: String(result),
        equation: this.state.equation,
        operator: ""
      };
    });
    console.log(this.state.equation);
    return result;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          nativeID="inputDisplay"
          style={{flex: 1, backgroundColor: "powderblue",justifyContent:"space-around"}}
        >
          <Text style={{fontSize: 70}}>{this.state.display}</Text>
        </View>

        <View nativeID="Buttons" style={{flex: 2,flexDirection:"column"}}>
          <View
            nativeID="buttonRowOne"
            style={styles.buttons}
          >
              <TouchableHighlight style={styles.numButton} onPress=
              {() => this.numberPress(1)}>
                  <Text style={styles.buttonText}> 1 </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.numButton} onPress=
              {() => this.numberPress(2)}>
                  <Text style={styles.buttonText}> 2 </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.numButton} onPress=
              {() => this.numberPress(3)}>
                  <Text style={styles.buttonText}> 3 </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.numButton} onPress=
              {() => this.numberPress("+")}>
                  <Text style={styles.buttonText}> + </Text>
              </TouchableHighlight>
          </View>

          <View
            nativeID="buttonRowTwo"
            style={styles.buttons}
          >
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress(4)}>
                <Text style={styles.buttonText}> 4 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress(5)}>
                <Text style={styles.buttonText}> 5 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress(6)}>
                <Text style={styles.buttonText}> 6 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress("-")}>
                <Text style={styles.buttonText}> - </Text>
            </TouchableHighlight>
          </View>

          <View
            nativeID="buttonRowThree"
            style={styles.buttons}
          >
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress(7)}>
                <Text style={styles.buttonText}> 7 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress(8)}>
                <Text style={styles.buttonText}> 8 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress(9)}>
                <Text style={styles.buttonText}> 9 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress("*")}>
                <Text style={styles.buttonText}> x </Text>
            </TouchableHighlight>
          </View>

          <View
            nativeID="buttonRowFour"
            style={styles.buttons}
          >
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.numberPress(0)}>
                <Text style={styles.buttonText}> 0 </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {this.clearDisplay}>
                <Text style={styles.buttonText}> C </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.operatorPress("/")}>
                <Text style={styles.buttonText}> ÷ </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.numButton} onPress=
            {() => this.calculate(this.display)}>
                <Text style={styles.buttonText}> = </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },
  numButton: {
    alignItems: 'center',
    backgroundColor: 'gray',
    borderWidth: 1,
    paddingTop: 40,
    paddingRight: 10,
    height: 140,
    width: 94
  },
  buttonText: {
    fontSize: 40,
    textAlign:'center'
  }
});

const App = () => {
  //render() {
  return <TestState />;
};

export default App;
