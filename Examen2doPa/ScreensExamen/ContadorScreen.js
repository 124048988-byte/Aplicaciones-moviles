
//1. imports: Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native'; //Aquí agregamos los componentes que tenemos en este archivo
import React,{useState} from 'react'; //Esto es un hook




//2. Main: Zona de componentes
export default function App() {

  const [contador,setContador] = useState(0); //Aquí estamos destructurando un objeto. El 0 lo pongo porque inicialicé el contador en 0. Esto es un componente
  

  return (
    <View style={styles.container}> {/* Atraves del elemento Styles, queremos agregarle todo lo que haya dentro del contenido styles.container */}


          <Text style={styles.texto}>Contador: </Text>              {/* Aquí estoy creando mi propia clase con el objeto styles */}
          <Text style={styles.texto2}>{contador}</Text>             {/* para poder aplicar estilos  */}



        {/* <Button></Button> */} {/* Si vas a declsrar propiedad y agregar algo dentro del botón */}


        <View style={styles.botonesContainer}> {/* Los <view></view> funcionan como un <div></div> en HTML, más o menos */}

              <Button color="red" title="Agregar" onPress={()=>setContador(contador+1)}/>
              <Button color="yellow" title="Quitar" onPress={()=> setContador(contador-1)}/>
              <Button color="blue" title="Reiniciar" onPress={()=>setContador(contador-contador)}/>
          </View>

          <StatusBar style="auto" />

    </View>
  );
}



//3. Estilos: Zona de estetica y posicionamiento 
const styles = StyleSheet.create({ //Esto es un objeto Estilos
  container: {
    flex: 1, //Esto dice: toma todo lo que tenga en pantalla 
    backgroundColor: '#69d1a4ff',
    alignItems: 'center',  //Me lo alinea respecto al eje X. puedo usar: "end", "start" y "center"
    justifyContent: 'center', //Me lo alinea respecto al eje Y. puedo usar: "end", "start" y "center"
  }, 
  
    texto:{                       // Aquí estoy creanod mi propia clase 
      color: "#67a3e0ff",       //Nos cambia de color 
      fontSize: 30,               //Nos cambia el tamaño de la letra
      fontFamily: 'Times New Roman', //Nos cambia el tipo de letra
      fontWeight: 'bold',            //Nos pone la letra en negritas 
      fontStyle: 'italic',            //Nos ayuda a inclinar poquito el texto, como ponerlo tipo 'cursivo'
      textDecorationLine: 'line-through' //Nos cagregar una línea sobre el texto (como tacharlo)
    }
  ,

  texto2:{                       // Aquí estoy creando mi propia clase 
      color: "#e0676fff",       //Nos cambia de color 
      fontSize: 35,               //Nos cambia el tamaño de la letra
      fontFamily: 'Courier', //Nos cambia el tipo de letra
      fontWeight: 700,            //Nos pone la letra en negritas, el numero es qué tan negrita queremos la letra
      fontStyle: 'normal',            //Nos ayuda a inclinar poquito el texto, como ponerlo tipo 'cursivo'
      textDecorationLine: 'underLine' //Nos cagregar una línea sobre el texto (como tacharlo)
    }
  ,

  botonesContainer:{                       // Aquí estoy creando mi propia clase para los BOTONES
      marginTop: 15,        //Ayuda a dejar espacio solamente entre los elementos que haya arriba de este botoón
      flexDirection: 'row', //Para ponerlo en forma de una fila
      alignItems: 'center', 
      justifyContent: 'container',
      gap: 30,              //Esto es para separar cada botón de lado horizontal 
    }
  ,

});