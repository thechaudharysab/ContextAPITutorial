import React, { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Context2 } from '../../App';

import { CommonStyles } from '../Utils/CommonStyles';

function Screen7({ navigation }) {

    const context = useContext(Context2)

    return (
        <View style={CommonStyles.contianer}>
            <Text>Any more comments?</Text>
            <TextInput style={CommonStyles.textField}
                placeholder={'Comments'} value={context.comments}
                onChangeText={(comments) => {
                    context.setComments(comments)
                }} />
            <Button title={'NEXT'} onPress={() => {
                navigation.navigate('Screen 8')
            }} />
        </View>
    );
}

export default Screen7;