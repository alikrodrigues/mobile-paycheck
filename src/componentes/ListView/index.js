import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'


export default ListView = () => {
    const [count, setCount] = useState(0);

    const handleButton = () => {
        setCount(oldValue => oldValue + 1);
    }



    return (
        <View style={{flex:1, padding: 10}}>
            <Text>Modulo do contracheque</Text>
                 <View style={{ margin: 10}}>
                    <Button onPress={handleButton} title="Click aqui" />
                    <Text>{count}</Text>
                 </View>
        </View>
    )


}