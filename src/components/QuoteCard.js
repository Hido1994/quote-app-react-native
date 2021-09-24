import React, {useRef} from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {MemoQuote} from "./Quote";
import {AntDesign} from '@expo/vector-icons';
import ViewShot, {releaseCapture} from "react-native-view-shot";
import * as Sharing from 'expo-sharing';
import {Button, Chip} from "react-native-paper";

const QuoteCard = ({text, origin, tags, selectedTag, setTagFilter}) => {
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
        <>
            <ViewShot ref={viewShotRef} style={style.cardContent}>
                <MemoQuote text={text} origin={origin}/>
            </ViewShot>
            <View style={style.actions}>
                {tags.map((tag) => <Chip onPress={() => setTagFilter(tag.id)}
                                         style={style.tag} key={tag.id} mode={'outlined'}>{tag.name}</Chip>)}
                <TouchableOpacity
                    onPress={onShare}>
                    <AntDesign name="sharealt" size={40} color={'white'}/>
                </TouchableOpacity>
            </View>
        </>
        /*<Card.Actions>
            {tags.map((tag) => <Chip onPress={() => setTagFilter(tag.id)}
                                     style={style.tag} key={tag.id} mode={'outlined'}>{tag.name}</Chip>)}
            <Button style={{marginLeft: 'auto'}} icon={({size, color}) =>
                <AntDesign name="sharealt" size={size} color={color}/>}
                    onPress={onShare}
            >Share</Button>
        </Card.Actions>*/
    );
};

const style = StyleSheet.create({
    card: {},
    cardContent: {
        height: '100%'
    },
    actions: {
        position: 'absolute',
        width: '100%',
        bottom: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tag:{
        margin: 10,
        backgroundColor: '#00000000'
    }
});

export const MemoQuoteCard = React.memo(QuoteCard);
