import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context2 } from '../../App';

import { CommonStyles } from '../Utils/CommonStyles';

function Screen5({ navigation }) {

    const context = useContext(Context2)

    return (
        <View style={CommonStyles.contianer}>
            <Text>Enter your PNR</Text>
            <TextInput style={CommonStyles.textField}
                placeholder={'PNR Number'} value={context.pnrNumber}
                onChangeText={(pnr) => {
                    context.setPNRNumber(pnr)
                }} />
            <Button title={'NEXT'} onPress={() => {
                navigation.navigate('Screen 6')
            }} />
        </View>
    );
}

export default Screen5;