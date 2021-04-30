import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context1 } from '../../App';

import { CommonStyles } from '../Utils/CommonStyles';

function Screen3({ navigation }) {

    const context = useContext(Context1)

    return (
        <View style={CommonStyles.contianer}>
            <Text>Enter your departure country</Text>
            <TextInput style={CommonStyles.textField}
                placeholder={'Departure Country'} value={context.departureCountry}
                onChangeText={(depart) => {
                    context.setDepartureCountry(depart)
                }} />
            <Button title={'NEXT'} onPress={() => { navigation.navigate('Screen 4') }} />
        </View>
    );
}

export default Screen3;