
import React,{useState} from 'react';
import { Text, StyleSheet, View, Button,ScrollView } from 'react-native'


export default function ScrollViewScreen() 
{
  cons [items, setItems] = useState(["Opción 1", "Opción 2", "Opcion 3"]);

  const agregarOpcion = () =>
  {
    const nuevaOpcion = `Opción ${items.length + 1}`; //Esto nos ayudará a agregar una opción 4,5,6... cada que apretemos el botón
    setItems([...items, nuevaOpcion]);
  }
  
    const borrarUltima = () => {//Esto ayudará a borrar una opción, si le damo sne borrar lleagremos hasta la opxión 3 
      if (items.length > 3)     //y ahí mostrará un mensaje de alerta pq llegué a la opcion 3, que es hasta donde estaba definido
      {
        setItems(items.slice(0,items.leg -1));
      } 
      else 
        {
          alert('Solo se agregan las opciones que agregaste.');
      
        }
};
//---------------------
  return(
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView</Text> 

      <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          horizontal={true} //Esto es para que el scroll sea vertical
          showsVerticalScrollIndicator={true} //Esto es para que se vea la barra del scroll
          persistentScrollbar={true} //Esto es para que la barra del scroll siempre esté visible
          scrollEnabled={true} //Esto es para habilitar o deshabilitar el scroll
        >

          
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.Text}>{item}</Text>
            </View>
          ))}

      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Agregar Opción" color={"#4d8a71ff"} onPress={agregarOpcion}/>
        <View style={styles.space}/>
        <Button title="Borrar Última Opción" color={"#d14f4fff"} onPress={borrarUltima}/>
      </View>

    </View>

  );

}



const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    padding: 20,
    backgroundColor: '#EEF2FF',
  },

  title:
  {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  scroll:
  {
    flex:1,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
  },

  contet: 
  {
    paddingVertical: 15,
    alignItems: 'center',
  },

  box:
  {
    backgroundColor: '#82 B6ED',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  
  },

  text:
  {
    fontSize: 18,
    color: '#1F2937',
    textAlign: 'center',
  },

  buttonContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  space:
  {
    width: 10,
  },


})