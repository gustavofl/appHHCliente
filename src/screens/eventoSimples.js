import React, {Component} from 'react';
import colors from '../styles/colors';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput, Image, Alert, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    moduloRodape: {
        backgroundColor: "black", 
        width: "25%",
        alignItems: 'center',
    },
    separadorVertical: {
        backgroundColor: "gray", 
        width: 2,
    },
    separadorHorizontal: {
        backgroundColor: "gray", 
        height: 1,
        marginVertical: 5,
    },
    titulo: {
        fontSize: 35,
        color: "black",
    },
    dadosEventos: {
        fontSize: 30,
        color: "black",
    },
    texto: {
        fontSize: 25,
        color: "gray",
    },
    botaoComprar: {
        backgroundColor: colors.verdeClaro,
        padding: 14,
        borderRadius: 27,
    },
    textoBotaoComprar: {
        color: "white",
        fontSize: 20,
    },
  });


class Corpo extends Component {
  _onPressButton() {
    Alert.alert('Você comprou um ingresso!!!');
  }

  render() {
    return (
      <ScrollView style={{margin: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={styles.titulo}>Evento - 1</Text>
                    <Text style={styles.texto}><Icon name="map-marker" size={25} color="black" /> Local</Text>
                    <Text style={styles.texto}><Icon name="clock-o" size={25} color="black" /> Horário</Text>
                </View>

                <View>
                    <Icon name="star" size={40} color="orange" style={{margin: 8}} />
                    <Icon name="share-alt" size={40} color="black" style={{marginHorizontal: 8}} />
                </View>
            </View>

            <View style={styles.separadorHorizontal} />

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.dadosEventos}><Icon name="users" size={35} color="black" /> 210</Text>
                <Text style={styles.dadosEventos}><Icon name="ticket" size={35} color="black" /> 98</Text>
                <Text style={styles.dadosEventos}><Icon name="dollar" size={35} color="black" /> 110,00</Text>
            </View>

            <View style={styles.separadorHorizontal} />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="green">
                    <View style={styles.botaoComprar}>
                        <Text style={styles.textoBotaoComprar}>Comprar</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.separadorHorizontal} />

            <View>
                <Text style={styles.dadosEventos}>Descrição</Text>
                <Text style={styles.texto}>DescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescriçãoDescrição</Text>
                <Text style={styles.dadosEventos}>Patrocinadores</Text>
                <Text style={styles.texto}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
            </View>
      </ScrollView>
    );
  }
}

class Cabecalho extends Component {
  render() {
    return (
      <Image style={{height: '35%', resizeMode: "stretch"}} source={require('../img/img_evento1.jpg')} />
    );
  }
}

class Rodape extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.moduloRodape}>
            <Icon name="star" size={40} color="orange" style={{margin: 8}} />
        </View>

        <View style={styles.separadorVertical}/>
        
        <View style={styles.moduloRodape}>
            <Icon name="ticket" size={40} color="white" style={{margin: 8}} />
        </View>

        <View style={styles.separadorVertical}/>
        
        <View style={styles.moduloRodape}>
            <Icon name="search" size={40} color="white" style={{margin: 8}} />
        </View>

        <View style={styles.separadorVertical}/>
        
        <View style={styles.moduloRodape}>
            <Icon name="home" size={40} color="white" style={{margin: 8}} />
        </View>
      </View>
    );
  }
}

export default class TelaEventoSimples extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <Cabecalho />
        <Corpo />
        <Rodape />
      </View>
    );
  }
}