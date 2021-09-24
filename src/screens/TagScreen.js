import React, {useEffect, useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {loadTags} from "../api/quotesApi";
import {Chip} from "react-native-paper";
import {StatusBar} from "expo-status-bar";


const TagScreen = ({route, navigation}) => {
    const {currentTag, setTagFilter} = route.params;

    const status = useSelector((state) => state['status'])
    const tags = useSelector((state) => state['tags'])
    const dispatch = useDispatch();

    const [selectedTag, setSelectedTag] = useState(currentTag);

    React.useLayoutEffect(() => {
        navigation.setOptions({});
    }, [navigation]);

    useEffect(() => {
        loadTags(dispatch).then()
    }, []);

    useEffect(() => {
        setTagFilter(selectedTag)
    }, [selectedTag]);

    const renderTags = (tags) => {
        return tags.map((tag) => (<>
                <Chip selected={tag.id === selectedTag} onPress={() => setSelectedTag(tag.id)}
                      style={style.tag} key={tag.id}
                      mode={'outlined'}>{tag.name}</Chip>
                {renderTags(tag['childTags'])}
            </>)
        )
    }

    return (
        <>
            <StatusBar style="light"/>
            <View style={style.container}>
                {renderTags(tags)}
            </View>
        </>
    );
};

const style = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            alignContent: 'center',
            justifyContent: "space-around",
            flexWrap: 'wrap',
            margin: 5
        },
        tag: {
            margin: 5
        }
    }
);

export default TagScreen;
