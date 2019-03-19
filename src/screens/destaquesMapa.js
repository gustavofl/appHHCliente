import React, {Component} from 'react';
import colors from '../styles/colors';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';

class AreaAnuncio extends Component {
  render() {
    return (
      <View style={{marginHorizontal:9, marginVertical:3, paddingBottom: 5, paddingLeft: 13, backgroundColor: this.props.cor}}>
        <View>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>{this.props.titulo}</Text>
        </View>
        <View>
          <Text style={{fontSize: 23, color: 'black', paddingTop: 14}}>{this.props.texto1}</Text>
          <Text style={{fontSize: 23, color: 'black', paddingTop: 4}}>{this.props.texto2}</Text>
        </View>
      </View>
    );
  }
}

export default class Destaques extends Component {
  render() {
    return (
      <ImageBackground
        style={{flex:1, alignSelf: 'stretch', height: undefined, width: undefined, left:0}}
        source={require('../img/mapa_garanhuns.png')}
      >
        <AreaAnuncio titulo='Tapioca do Matuto' texto1='R. Dantas Barreto, 78-A' texto2='Abre às 17:00' cor={colors.cinzaEscuro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaClaro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaEscuro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaClaro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaEscuro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaClaro} />
      </ImageBackground>
    );
  }
}