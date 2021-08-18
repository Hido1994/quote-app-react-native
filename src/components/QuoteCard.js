import React, {useRef} from 'react';

import {StyleSheet} from 'react-native';
import {Button, Card, Chip} from "react-native-paper";
import {MemoQuote} from "./Quote";
import {AntDesign} from '@expo/vector-icons';
import ViewShot, {releaseCapture} from "react-native-view-shot";
import * as Sharing from 'expo-sharing';

const QuoteCard = ({text, author, tags, selectedTag, setTagFilter}) => {
    const viewShotRef = useRef();

    const onShare = () => {
        viewShotRef.current.capture().then(uri => {
            Sharing.shareAsync(uri, {})
                .then(() => {
                    releaseCapture(uri);
                })
        })
    };

    return (
        <Card style={style.card}>
            <ViewShot ref={viewShotRef} style={style.cardContent}>
                <MemoQuote text={text} author={author}/>
            </ViewShot>
            <Card.Actions>
                {tags.map((tag) => <Chip onPress={() => setTagFilter(tag.id)}
                                         style={style.tag} key={tag.id} mode={'outlined'}>{tag.name}</Chip>)}
                <Button style={{marginLeft: 'auto'}} icon={({size, color}) =>
                    <AntDesign name="sharealt" size={size} color={color}/>}
                        onPress={onShare}
                >Share</Button>
            </Card.Actions>
        </Card>
    );
};

const style = StyleSheet.create({
    card: {
        margin: 10,
        maxWidth: 700
    },
    cardContent: {
        paddingTop: 20,
        height: 500
    },
    tag: {
        marginHorizontal: 3,
    }
});

export const MemoQuoteCard = React.memo(QuoteCard);
