import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// import { Container } from './styles';

class Button extends Component {
  state = {
    styles: StyleSheet.create({
      button: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: "#303F9F",
        borderRadius: 25
      },
      btnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      btnText: {
        fontSize: 14,
        color: "#303F9F",
        fontWeight: "bold"
      }
    })
  };
  render() {
    let { styles } = this.state;

    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class BiscoitoDaSorte extends Component {
  state = {
    id: null,
    frase: ""
  };
  handleBreakCook = () => {
    let frases = [
      "´ Siga os bons e aprenda com eles. ´",
      "´ O bom-senso vale mais do que muito conhecimento. ´",
      "´ O riso é a menor distância entre duas pessoas. ´",
      "´ Deixe de lado as preocupações e seja feliz. ´",
      "´ Realize o óbvio, pense no improvável e conquiste o impossível. ´",
      "´ Acredite em milagres, mas não dependa deles. ´",
      "´ A maior barreira para o sucesso é o medo do fracasso. ´"
    ];
    let n = Math.floor(Math.random() * frases.length);
    while (n === this.state.id) {
      n = Math.floor(Math.random() * frases.length);
    }

    this.setState({ id: n, frase: frases[n] });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/biscoito.png")}
          style={styles.logo}
        />

        <Text style={styles.frase}> {this.state.frase} </Text>

        <Button name="Biscoito da Sorte" onPress={this.handleBreakCook} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  frase: {
    //    color: '',
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
