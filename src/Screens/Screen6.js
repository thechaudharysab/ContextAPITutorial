import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context2 } from '../../App';

import { CommonStyles } from '../Utils/CommonStyles';

function Screen6({ navigation }) {

    const context = useContext(Context2)

    return (
        <View style={CommonStyles.contianer}>
            <Text>How many bags is the passenger checkign in?</Text>
            <TextInput style={CommonStyles.textField}
                placeholder={'No. of Bags'} value={context.totalBagsChecked}
                onChangeText={(bsgs) => {
                    context.setTotalBagsChecked(bsgs)
                }} />
            <Button title={'NEXT'} onPress={() => {
                navigation.navigate('Screen 7')
            }} />
        </View>
    );
}

export default Screen6;