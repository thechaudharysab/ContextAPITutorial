import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context1 } from '../../App';

import { CommonStyles } from '../Utils/CommonStyles';

function Screen1({ navigation }) {

    const context = useContext(Context1)

    return (
        <View style={CommonStyles.contianer}>
            <Text>Enter your full name</Text>
            <TextInput style={CommonStyles.textField}
                placeholder={'Full Name'} value={context.fullName}
                onChangeText={(name) => {
                    context.setFullName(name)
                }} />
            <Button title={'NEXT'} onPress={() => {
                navigation.navigate('Screen 2')
            }} />
        </View>
    );
}

export default Screen1;