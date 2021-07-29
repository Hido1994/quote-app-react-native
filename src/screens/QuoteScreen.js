import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Button, Text} from "react-native-paper";

const QuoteScreen = () => {
    return (
        <View style={style.container}>
            <Button onPress={() => console.log('Pressed')}>
                Hello World
            </Button>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default QuoteScreen;
