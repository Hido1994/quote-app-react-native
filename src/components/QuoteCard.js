import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Button, Card, Chip} from "react-native-paper";
import Quote from "./Quote";
import {AntDesign, Feather} from '@expo/vector-icons';


const QuoteCard = ({text, author, tags}) => {
    return (
        <Card style={style.card}>
            <View style={style.cardContent}>
                <Quote text={text} author={author}/>
            </View>
            <Card.Actions>
                {tags.map((tag)=><Chip key={tag.id} mode={'outlined'}>{tag.name}</Chip>)}

                <Button icon={({size, color}) => <Feather name="heart" size={size} color={color}/>}
                        onPress={() => console.log('Pressed')}
                        size={50}
                >Like</Button>
                <Button icon={({size, color}) =>
                    <AntDesign name="sharealt" size={size} color={color}/>}
                        onPress={() => console.log('Pressed')}
                >Share</Button>
            </Card.Actions>
        </Card>
    );
};

const style = StyleSheet.create({
    card: {
        margin: 10,
    },
    cardContent: {
        paddingTop: 20,
        height: 500
    }
});

export default QuoteCard;
