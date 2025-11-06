import { Text, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, StatusBar } from 'react-native';

const Imagen1 = require('./assets/RecursosExamen2doParcial/Imagen1.jpeg');
const Imagen2 = require('./assets/RecursosExamen2doParcial/Imagen2.png');
//const Imagen3 = require('../assets/RecursosExamen2doParcial/Imagen3.png');


export default function PrincipalScreenExamen() {
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);




  if (isLoading) 
    {
    return (
      <View> 
        <Text>Proximamente 2</Text>
      <ImageBackground
        source={Imagen1}
        resizeMode="cover"
        imageStyle={styles.SplashImageStyle}
        style={styles.splashBackground}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={Imagen2} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Examen</Text>
          <Text style={styles.splashSubtitle}>Cargando Aplicación...</Text>
        </View>
      </ImageBackground>

      </View>
    );
  
}


const styles = StyleSheet.create({
  splashBackground: 
  {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },


  SplashImageStyle: 
  {
    opacity: 0.5,
  },

  splashOverlay: 
  { 
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 24,
    borderRadius: 12,
  },


  logo: 
  {
    width: 100,
    height: 100,
    marginBottom: 12,
  },


  splashTitle: 
  {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },


  splashSubtitle: 
  {
    color: '#dbeafe',
    marginTop: 8,
  },

  mainBackground: 
  {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },


  mainImageStyle: 
  {
    opacity: 0.9,
  },

   mainOverlay: 
  {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: 20,
    borderRadius: 12,
  },


  welcome: 
  {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },


  button: 
  {
    backgroundColor: '#61dafb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonText: 
  {
    color: '#000',
    fontWeight: '700',
  },
});


}