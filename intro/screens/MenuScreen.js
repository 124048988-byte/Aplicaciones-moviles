/* Zona de componentes */

import { Text, StyleSheet, View, Button} from 'react-native' /* Con esto me sirve para crear un nuevo componente: rncs */
import React, { useState } from 'react' 
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import InputAlertScreen from './InputAlertScreen'
import ImageBackgroundScreen from './ImageBackgroundScreen'
import SlapshScreen from './SlapshScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomSheetScreen from './BottomSheetScreen'


import { ImageBackground } from 'react-native-web'





export default function MenuScreen()  { /* Esta linea era para crear componentes, pero ahora creamos una funcion */
 
    const [screen, setScreen] = useState('menu');     /* lo del "menu" significa que por default siempre me abra la pantalla "Menu"  */
    switch(screen)
    {
        case 'contador':
            return <ContadorScreen/>

        case 'botones':
            return <BotonesScreen/>

        case 'input_alert':
            return <InputAlertScreen/>

        case 'image_background':
            return <ImageBackgroundScreen/>

        case 'slapsh_screen':
            return <SlapshScreen/>

        case 'scroll_view':
            return <ScrollViewScreen/>

        case 'activity_indicator':
            return <ActivityIndicatorScreen/>

        case 'flat_list':
            return <FlatListScreen/>

        case 'modal':
            return <ModalScreen/>

        case 'bottom_sheet':
            return <BottomSheetScreen/>

        case 'menu':
            default:
                    return (
                        <View style={styles.EstiloBotones}>
                            <Text>Menu de practicas</Text>
                            <Button color= "orange" title='Pract:Contador' onPress={()=> setScreen('contador')}/>
                            <Button color="orange" title='Pract:Buttons'  onPress={()=> setScreen('botones')}/>
                            <Button color="orange" title='Pract:Input y Alert'  onPress={()=> setScreen('input_alert')}/>
                            <Button color="orange" title='Pract:Image Background'  onPress={()=> setScreen('image_background')}/>
                            <Button color="orange" title='Pract:Slapsh Screen'  onPress={()=> setScreen('slapsh_screen')}/>
                            <Button color="orange" title='Pract:Scroll view'  onPress={()=> setScreen('scroll_view')}/>
                            <Button color="orange" title='Pract:Activity Indicator'  onPress={()=> setScreen('activity_indicator')}/>
                            <Button color="orange" title='Pract:Flat list'  onPress={()=> setScreen('flat_list')}/>
                            <Button color="orange" title='Pract:Modal'  onPress={()=> setScreen('modal')}/>
                            <Button color="orange" title='Pract:Bottom sheet'  onPress={()=> setScreen('bottom_sheet')}/>
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