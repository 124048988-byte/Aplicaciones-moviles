import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TextInput, ImageBackground, Image, StatusBar, Switch, Platform, Alert, Button } from 'react-native';

const ImagenPrueba = require('../assets/Recursos_Expo_guille/PracticaAntesDeExam.jpg');
const ImagenCargando = require('../assets/Recursos_Expo_guille/ImagenCargando.jpg');
const LogoUPQ = require('../assets/Recursos_Expo_guille/LogoUpq.webp');

export default function RepasoExamen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={ImagenCargando}
        resizeMode="cover"
        imageStyle={styles.SplashImageStyle}
        style={styles.splashBackground}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={LogoUPQ} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Mi app</Text>
          <Text style={styles.splashSubtitle}>Cargando Aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }

  const mostrarAlerta = () => {
    if (!aceptaTerminos) {
      if (Platform.OS === 'web') {
        alert('Por favor, acepta los términos y condiciones antes de continuar.');
      } else {
        Alert.alert(
          'Atención',
          'Por favor, acepta los términos y condiciones antes de continuar.',
          [{ text: 'Aceptar' }]
        );
      }
      return;
    }

    if (nombre.trim() === '' || correo.trim() === '') {
      if (Platform.OS === 'web') {
        alert('Por favor, escribe tus datos completos antes de continuar.');
      } else {
        Alert.alert('Atención', 'Por favor, escribe tus datos completos antes de continuar.', [
          { text: 'Aceptar' },
        ]);
      }
      return;
    }

    if (Platform.OS === 'web') {
      alert(`Registro exitoso:\nNombre: ${nombre}\nEmail: ${correo}`);
    } else {
      Alert.alert('Registro exitoso', `Nombre: ${nombre}\nEmail: ${correo}`, [
        { text: 'Aceptar' },
      ]);
    }
  };

  return (
    <View style={styles.fondo}>
      <ImageBackground
        source={ImagenPrueba}
        resizeMode="cover"
        imageStyle={styles.mainImageStyle}
        style={styles.mainBackground}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.mainOverlay}>
          <Text style={styles.welcome}>¡Registro de Usuario!</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre Completo:"
            placeholderTextColor="#000"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico:"
            placeholderTextColor="#000"
            keyboardType={Platform.OS === 'web' ? 'default' : 'email-address'}
            value={correo}
            onChangeText={setCorreo}
          />

          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            trackColor={{ false: '#ccc', true: '#4ade80' }}
            thumbColor={aceptaTerminos ? '#22c55e' : '#f4f3f4'}
          />
          <Text style={styles.welcome}>Aceptar términos y condiciones</Text>

          <Button title="Mostrar alerta" onPress={mostrarAlerta} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: { backgroundColor: '#8fc6d9ff', flex: 1 },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    marginBottom: 30,
  },
  mainImageStyle: { opacity: 0.9 },
  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 20,
    borderRadius: 12,
    pointerEvents: 'box-none',
  },
  welcome: { color: '#fff', fontSize: 22, marginBottom: 20, fontWeight: 'bold' },
  SplashImageStyle: { opacity: 0.5 },
  splashBackground: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 24,
    borderRadius: 12,
  },
  splashTitle: { color: '#fff', fontSize: 26, fontWeight: '700' },
  splashSubtitle: { color: '#dbeafe', marginTop: 8 },
});
