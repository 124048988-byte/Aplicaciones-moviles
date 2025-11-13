import { Text, StyleSheet, View, SectionList} from 'react-native' /* Con esto me sirve para crear un nuevo componente: rncs */
import React, { useState } from 'react'

const houses = [
    {  /* Primer seccción donde se estará guardando la info */
        title: 'DC commics',
        data:[
            'Superman',
            'superman',
            'SUPERMAN',
        ],
    },


    {       /* Segunda seccción donde se estará guardando la info */
        title: 'Marvel commics',
        data:[
            'Superman',
            'superman',
            'SUPERMAN',
        ],
    } 
     
    
];



export default function SectionListScreen() {
  return (
    <View style={styles.container}>
        <SectionList
            sections={houses}
            keyExtractor={(item) => item}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
        />
        
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});


