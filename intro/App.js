
//1. imports: Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native'; //Aquí agregamos los componentes que tenemos en este archivo
import React,{useState} from 'react'; //Esto es un hook




//2. Main: Zona de componentes
export default function App() {

  const [contador,setContador] = useState(0); //Aquí estamos destructurando un objeto. El 0 lo pongo porque inicialicé el contador en 0. Esto es un componente
  

  return (
    <View style={styles.container}>
      <Text>Contador: {contador}</Text>
     {/*  <Button></Button> */} {/* Si vas a declsrar propiedad y agregar algo dentro del botón */}
      <Button  title="Agregar" onPress={()=>setContador(contador+1)}/>
      <Button title="Quitar" onPress={()=> setContador(contador-1)}/>
      <Button title="Reiniciar" onPress={()=>setContador(contador-contador)}/>
      <StatusBar style="auto" />
    </View>
  );
}



//3. Estilos: Zona de estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
