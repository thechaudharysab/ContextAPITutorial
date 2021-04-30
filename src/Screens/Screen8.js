import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context2 } from '../../App';

import { CommonStyles } from '../Utils/CommonStyles';

function Screen8({ navigation }) {

    const context = useContext(Context2)

    const {
        pnrNumber,
        totalBagsChecked,
        comments,
    } = context

    return (

        <View style={CommonStyles.contianer}>
            <Text style={CommonStyles.title}>PNR Number</Text>
            <Text style={CommonStyles.value}>{pnrNumber}</Text>
            <Text style={CommonStyles.title}>No. of Bags</Text>
            <Text style={CommonStyles.value}>{totalBagsChecked}</Text>
            <Text style={CommonStyles.title}>Comments</Text>
            <Text style={CommonStyles.value}>{comments}</Text>

            <Text>Is the above info correct?</Text>

            <Button title={'YES'} onPress={() => {
                alert("Yay everything worked well!")
                navigation.popToTop()
            }} />

            <Button title={'NO'} onPress={() => {
                alert("It's okay you can enter the information again")
                navigation.popToTop()
            }} />
        </View>

    );
}

export default Screen8;