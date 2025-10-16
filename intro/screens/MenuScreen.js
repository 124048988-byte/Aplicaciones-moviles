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
            return <BotonesScreen/>

        case 'bottom_sheet':
            return <BotonesScreen/>

        case 'menu':
            default:
                    return (
                        <View>
                            <Text>Menu de practicas</Text>
                            <Button title='Pract:Contador' onPress={()=> setScreen('contador')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('botones')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('input_alert')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('image_background')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('slapsh_screen')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('scroll_view')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('activity_indicator')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('flat_list')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('modal')}/>
                            <Button title='Pract:Buttons'  onPress={()=> setScreen('bottom_sheet')}/>
                        </View>
                    )

    }


    
  
}



/* Zona de estilos */
const styles = StyleSheet.create({})  