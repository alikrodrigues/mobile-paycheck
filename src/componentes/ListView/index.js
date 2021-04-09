import React from 'react'
import { View, Text } from 'react-native'


export default ListView = () => {
    

    return (
        <View style={{flex:1, padding: 10}}>
            <Text>List View Modulo do contracheque</Text>
            <Text adjustsFontSizeToFit numberOfLines={5} style={{fontSize: 18}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                 but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                 with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <View style={{flex: 1, backgroundColor: 'red'}} />
                    <View style={{flex: 1, backgroundColor: 'black'}} />
                    <View style={{flex: 1, backgroundColor: 'green'}} />
                 </View>
        </View>
    )


}