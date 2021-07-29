import React from 'react';

import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {Paragraph, Title} from "react-native-paper";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";

const windowHeight = Dimensions.get('window').height;

const Quote = ({text, author}) => {
    return (
        <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2020/02/16/14/10/trees-4853629_960_720.jpg'}}
                         style={style.container}>
            <View style={[style.container, style.overlay]}>
                <Title style={style.text}>{text}</Title>
                <Paragraph style={style.text}>- {author} -</Paragraph>
            </View>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        backgroundColor: rgbaColor(0, 0, 0, 0.8)
    },
    text: {
        marginHorizontal: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default Quote;
