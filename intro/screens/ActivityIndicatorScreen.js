import React,{useState} from 'react';
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'



export default function ActivityIndicatorScreen() {
  
    const [cargando, setCargando] = useState(false);
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [mensajePrompt, setMensajePrompt] = useState('Presiona acción para comenzar');
    
    const manejarCarga=()=>{
      setCargando(true);
      setMostrarContenido(true);
      setMensajePrompt('Cargando...por favor espere');

      
      setTimeout(()=>{
        setCargando(false);
        setMostrarContenido(false);
        setMensajePrompt('Acción completada');
      }, 5000);

    }

    const cancelarCarga=()=>{
      setCargando(false);
      setMostrarContenido(false);
      setMensajePrompt('Carga cancelada');

    }
    return(


      <View style={styles.contenedor}>
          <Text style={styles.titulo}>Práctica: Activity Inidcator</Text>
          <Text style={styles.prompt}>{mensajePrompt}</Text>
          <View style={styles.botones}>
            <Button color="pink" title="Accion" onPress={manejarCarga}></Button>
            <View style={{width: 10}}></View>
            <Button color="blue" title="Cancelar" onPress={cancelarCarga}></Button>
          </View>


          {/*Esto es para que aparezca como tal el circulito del ActivityIndicator (El circulito que simula que está cargando)*/}
          {cargando &&(
            <ActivityIndicator
            size="large"
            color="#000000ff"
            style={styles.indicator}>
              
            </ActivityIndicator>
          )}

          {/*Esta parte es solo para que te aparezca solo cuando la opción está completada*/}
          {mostrarContenido &&(
            <Text style={styles.contenido}> Accion Completada</Text>
          )}



      </View>
    )

 
}


//-------------ESTILOS----------------
const styles = StyleSheet.create({
contenedor:
  {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:"#e3f485ff"
  },


  titulo:
  {
    fontSize:24,
    marginBottom:20,
    fontWeight: 'bold',
    color:"#00000F",
  },


  prompt:
  {
    fontSize:16,
  },

  botones:
  {
    flexDirection: 'row',
    marginBottom: 20,
  },

  indicator:
  {
    marginVertical:20,
  },

  contenido:
  {
    fontSize: 10,
    color: 'green',
    marginTop: 10,
    fontWeight: '600'
  },


})