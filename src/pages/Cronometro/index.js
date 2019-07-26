import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

// import { Container } from './styles';

export default class Cronometro extends Component {
  timeInterval;
  state = {
    time: 0,
    stopTime: true
  };

  handleStart = () => {
    if (this.state.stopTime) {
      this.setState({ stopTime: false });
      this.timeInterval = setInterval(() => {
        this.setState({ time: this.state.time + 0.1 });
      }, 100);
    } else {
      this.setState({ stopTime: true });
      clearInterval(this.timeInterval);
    }
  };

  handleLimpar = () => {
    this.setState({ time: 0 });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00aeef" barStyle="dark-content" />
        <Image
          source={require("../../assets/cronometro.png")}
          style={styles.logoCronometro}
        />
        <Text style={styles.timeText}> {this.state.time.toFixed(1)} </Text>

        <View style={styles.infoArea}>
          <TouchableOpacity style={styles.btnButton} onPress={this.handleStart}>
            <Text style={styles.btnText}>
              {this.state.stopTime ? "Iniciar" : "Parar"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnButton}
            onPress={this.handleLimpar}
          >
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aeef"
  },
  logoCronometro: {
    width: 200,
    height: 250
  },
  timeText: {
    marginTop: -130,
    color: "#ffff",
    fontSize: 40,
    fontWeight: "bold"
  },
  infoArea: {
    marginTop: 100,
    flexDirection: "row"
  },
  btnButton: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderColor: "#ffff",
    borderRadius: 5,
    borderWidth: 2,
    marginHorizontal: 20
  },
  btnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  }
});
