import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Picker,
  TextInput,
  Slider,
  TouchableOpacity
} from "react-native";

export default class Desafio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sexo: 0,
      sexos: [
        { sexoNome: "Masculino", valor: 1 },
        { sexoNome: "Feminino", valor: 2 }
      ],
      limite: 0,
      estudante: false,
      doador: false
    };

    this.nomeForm = this.nomeForm.bind(this);
    this.enviarDados = this.enviarDados.bind(this);
  }

  //Metodo que que recebe o texto digitado no input NOME
  nomeForm(texto) {
    let state = this.state;
    state.nome = texto;
    this.setState(state);
  }

  //Metodo que é chamado quando você clica no botao Abrir Conta
  enviarDados() {
    alert(
      "Conta aberta com sucesso!! \n\n" +
        "Nome: " +
        this.state.nome +
        "\n" +
        "Sexo: " +
        this.state.sexos[this.state.sexo].sexoNome +
        " \n" +
        "Limite Conta: " +
        this.state.limite.toFixed(2) +
        "\n" +
        "Conta Estudante: " +
        (this.state.estudante ? "Ativo" : "Inativo")
    );
  }

  render() {
    //Retorna os items do Picker do sexo M ou F
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome} />;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.bancoLogo}>Banco React</Text>

        <View style={styles.areaTextos}>
          <Text style={styles.textoNome}>Nome:</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputNome}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={this.nomeForm}
          />
        </View>

        <View style={styles.areaTextos}>
          <Text style={styles.textoNome}>Sexo:</Text>
        </View>

        <View style={styles.areaSexo}>
          <Picker
            style={styles.pickerSexo}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ sexo: itemValue })
            }
          >
            {sexoItems}
          </Picker>
        </View>

        <View style={styles.limiteArea}>
          <Text style={styles.textoNome}>Seu Limite:</Text>
          <Text style={styles.limiteTexto}>
            R$ {this.state.limite.toFixed(0)}
          </Text>
        </View>

        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor="#CF0000"
            value={this.state.peso}
            minimumValue={250}
            maximumValue={4000}
            onValueChange={valorSlider =>
              this.setState({ limite: valorSlider })
            }
          />
        </View>

        <View style={styles.areaTextos}>
          <Text style={styles.textoNome}>Estudante:</Text>
        </View>

        <View style={styles.areaEstudante}>
          <Switch
            onTintColor="#00c300"
            value={this.state.estudante}
            onValueChange={valorEstudante =>
              this.setState({ estudante: valorEstudante })
            }
          />
        </View>

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={this.enviarDados}
            underlayColor="#000000"
          >
            <Text style={styles.botaoTexto}>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  bancoLogo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000"
  },
  areaTextos: {
    alignItems: "flex-start",
    paddingTop: 15,
    marginLeft: 20,
    marginBottom: -8
  },
  textoNome: {
    fontSize: 17,
    color: "#000000",
    fontWeight: "bold"
  },
  inputArea: {
    alignSelf: "stretch"
  },
  inputNome: {
    borderWidth: 1,
    borderColor: "#999999",
    backgroundColor: "#EEEEEE",
    color: "#000000",
    height: 38,
    margin: 20,
    padding: 10
  },
  areaSexo: {
    flexDirection: "row"
  },
  pickerSexo: {
    flex: 1,
    width: 150
  },
  areaSlider: {
    paddingTop: 15
  },
  limiteArea: {
    margin: 5,
    flexDirection: "row",
    marginLeft: 19
  },
  limiteTexto: {
    color: "#FF0000",
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 5
  },
  areaEstudante: {
    paddingTop: 15,
    paddingLeft: 20,
    alignItems: "flex-start"
  },
  areaBotao: {
    height: 40,
    marginBottom: 25,
    flexDirection: "row"
  },
  botao: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 150,
    margin: 20
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});
