import { Text, StyleSheet, View, Button} from 'react-native' /* Con esto me sirve para crear un nuevo componente: rncs */
import React, { useState } from 'react' 

import PrincipalScreenExamen from './PrincipalScreenExamen'


import { ImageBackground } from 'react-native-web'





export default function MenuScreenExamen()  { /* Esta linea era para crear componentes, pero ahora creamos una funcion */
 
    const [screen, setScreen] = useState('menu');     /* lo del "menu" significa que por default siempre me abra la pantalla "Menu"  */
    switch(screen)
    {
        

        case 'PrincipalScreenExamen':
            return <PrincipalScreenExamen/>


        case 'menu':
            default:
                    return (
                        <View style={styles.EstiloBotones}>
                            <Text>Menu de practicas</Text>
                            <Button color= "orange" title='Pract:Screen Principal' onPress={()=> setScreen('PrincipalScreenExamen')}/>
                        </View>
                    )

    }
    
  
}



/* Zona de estilos */
const styles = StyleSheet.create({
    EstiloBotones:
    {
      color: "#67a3e0ff",       //Nos cambia de color 
      fontSize: 30,               //Nos cambia el tamaño de la letra
      fontFamily: 'Times New Roman', //Nos cambia el tipo de letra
      fontWeight: 'bold',            //Nos pone la letra en negritas 
      fontStyle: 'italic',            //Nos ayuda a inclinar poquito el texto, como ponerlo tipo 'cursivo'
      justifyContent:'center',
      alignItems:'center'
    } , 


});  