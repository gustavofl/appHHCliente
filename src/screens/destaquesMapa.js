import React, {Component} from 'react';
import colors from '../styles/colors';
import {Platform, StyleSheet, Text, View, ImageBackground, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class AreaAnuncio extends Component {
  render() {
    return (
      <View style={{marginHorizontal:9, marginVertical:5, paddingBottom: 5, paddingLeft: 13, backgroundColor: this.props.cor}}>
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

class Destaques extends Component {
  render() {
    return (
      <ScrollView>
        <AreaAnuncio titulo='Tapioca do Matuto' texto1='R. Dantas Barreto, 78-A' texto2='Abre às 17:00' cor={colors.cinzaEscuro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaClaro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaEscuro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaClaro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaEscuro} />
        <AreaAnuncio titulo='Coração sertanejo' texto1='R. Ari Barroso, 1-27' texto2='Abre às 11:00' cor={colors.cinzaClaro} />
      </ScrollView>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Icon name="bars" size={38} color="black" style={{margin: 8}} />
        <TextInput style={{
                          height:'80%', 
                          width: '85%', 
                          borderWidth:2, 
                          margin:3, 
                          borderColor: colors.bordaTextInput,
                          borderRadius: 18,
                          fontSize: 22,
                          paddingLeft: 10,
                          color: "black"}} placeholder="RESTAURANTES, BARES, SHOWS, WORKSHOPS..." />
      </View>
    );
  }
}

export default class TelaDestaquesMapa extends Component {
  render() {
    return (
      <ImageBackground
        style={{flex:1, alignSelf: 'stretch', height: undefined, width: undefined, left:0}}
        source={require('../img/mapa_garanhuns.png')}
      >
        <Header />
        <Destaques />
      </ImageBackground>
    );
  }
}