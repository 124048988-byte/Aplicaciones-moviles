import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Button, Alert, StatusBar } from 'react-native';

const Imagen1 = require('./assets/RecursosExamen2doParcial/Imagen1.jpeg');
const Imagen2 = require('./assets/RecursosExamen2doParcial/Imagen2.png');
const Imagen3 = require('./assets/RecursosExamen2doParcial/Imagen3.png');
const Imagen4 = require('./assets/RecursosExamen2doParcial/Imagen4.png');
const Imagen5 = require('./assets/RecursosExamen2doParcial/Imagen5.png');
const Imagen6 = require('./assets/RecursosExamen2doParcial/Imagen6.png');

export default function RepasoExamen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={Imagen1}
        resizeMode="cover"
        style={styles.splash}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Text style={styles.splashText}>Bienvenido a mi galería TIID 213 </Text>
      </ImageBackground>
    );
  }

  const mostrarDetalles = (titulo, descripcion) => {
    Alert.alert(
      titulo,
      descripcion,
      [{ text: 'Cerrar' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi Galería</Text>
      <ScrollView>
     
        <View style={styles.card}>
          <ImageBackground source={Imagen1} style={styles.image} imageStyle={{ borderRadius: 10 }}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Imagen</Text>
              <Text style={styles.cardDesc}>Describir</Text>
              <Button title="Ver detalles" onPress={() => mostrarDetalles("Atardecer", "Este atardecer fue capturado en la costa, con tonos naranjas y rosas que llenan el cielo.")} />
            </View>
          </ImageBackground>
        </View>

        
        <View style={styles.card}>
          <ImageBackground source={Imagen2} style={styles.image} imageStyle={{ borderRadius: 10 }}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Imagen</Text>
              <Text style={styles.cardDesc}>Describir</Text>
              <Button title="Ver detalles" onPress={() => mostrarDetalles("Montañas", "Una vista impresionante de montañas cubiertas de nieve bajo un cielo azul brillante.")} />
            </View>
          </ImageBackground>
        </View>

        
        <View style={styles.card}>
          <ImageBackground source={Imagen3} style={styles.image} imageStyle={{ borderRadius: 10 }}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Imagen</Text>
              <Text style={styles.cardDesc}>Describir</Text>
              <Button title="Ver detalles" onPress={() => mostrarDetalles("Bosque", "Un bosque verde lleno de paz y naturaleza, ideal para caminar y respirar aire puro.")} />
            </View>
          </ImageBackground>
        </View>

   
        <View style={styles.card}>
          <ImageBackground source={Imagen4} style={styles.image} imageStyle={{ borderRadius: 10 }}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Imagen</Text>
              <Text style={styles.cardDesc}>Describir</Text>
              <Button title="Ver detalles" onPress={() => mostrarDetalles("Ciudad", "Una ciudad llena de vida, luces y movimiento durante la noche.")} />
            </View>
          </ImageBackground>
        </View>

        
        <View style={styles.card}>
          <ImageBackground source={Imagen5} style={styles.image} imageStyle={{ borderRadius: 10 }}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Imagen</Text>
              <Text style={styles.cardDesc}>Describir</Text>
              <Button title="Ver detalles" onPress={() => mostrarDetalles("Lago", "El reflejo del cielo azul en el lago crea una imagen muy relajante y tranquila.")} />
            </View>
          </ImageBackground>
        </View>


        <View style={styles.card}>
          <ImageBackground source={Imagen6} style={styles.image} imageStyle={{ borderRadius: 10 }}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Imagen</Text>
              <Text style={styles.cardDesc}>Describir</Text>
              <Button title="Ver detalles" onPress={() => mostrarDetalles("Campo", "El campo verde y soleado representa la paz de la naturaleza y la vida rural.")} />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fffbe7',
    paddingTop: 40,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2d3748',
  },
  card: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  image: {
    height: 200,
    justifyContent: 'flex-end',
  },
  cardContent: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDesc: {
    color: '#f1f1f1',
    marginBottom: 5,
  },
});
