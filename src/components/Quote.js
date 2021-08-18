import React from 'react';

import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {Paragraph, Title} from "react-native-paper";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";

const backgroundImages = [
    require(`../../assets/quote/0_0.jpg`),
    require(`../../assets/quote/0_1.jpg`),
    require(`../../assets/quote/0_2.jpg`),
    require(`../../assets/quote/0_3.jpg`),
    require(`../../assets/quote/0_4.jpg`)
]


const Quote = ({text, author}) => {
    const rand = Math.floor(Math.random()*backgroundImages.length)
    return (
        <ImageBackground source={backgroundImages[rand]}
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
        backgroundColor: rgbaColor(0, 0, 0, 0.6)
    },
    text: {
        marginHorizontal: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export const MemoQuote = React.memo(Quote);
