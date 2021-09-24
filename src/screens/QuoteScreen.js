import React, {useCallback, useEffect, useState} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';
import {MemoQuoteCard} from "../components/QuoteCard";
import {useDispatch, useSelector} from "react-redux";
import {loadQuotes, loadTags} from "../api/quotesApi";
import {Banner, Chip, IconButton} from "react-native-paper";
import Carousel from 'react-native-snap-carousel';
import {setQuotes} from "../app/quotesSlice";
import {StatusBar} from "expo-status-bar";

const PAGE_LIMIT = 5

const dimensions = Dimensions.get('window')

const QuoteScreen = ({navigation}) => {
    const status = useSelector((state) => state['status'])
    const quotes = useSelector((state) => state['quotes'])
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [moreData, setMoreData] = useState(true);
    const [selectedTag, setSelectedTag] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerRight: () => (
                <IconButton
                    icon="filter-variant"
                    size={30}
                    onPress={() =>navigation.navigate("Tag", {selectedTag, setTagFilter})}
                />
            ),
        });
    }, [navigation]);

    useEffect(() => {
        dispatch(setQuotes([]))
        setCurrentPage(0)
        loadQuotes(dispatch, 0, PAGE_LIMIT, selectedTag).then((result) => {
            setMoreData(result)
        })
    }, [selectedTag]);

    useEffect(() => {
        if(quotes && currentIndex===(quotes.length-1) && moreData){
            loadMore()
        }
    }, [currentIndex]);

    const loadMore = () => {
        if (!status['loading'] && moreData) {
            loadQuotes(dispatch, currentPage + 1, PAGE_LIMIT, selectedTag).then((result) => {
                setMoreData(result)
            })
            setCurrentPage(currentPage + 1);
        }
    }

    const renderItem = useCallback(
        ({item}) => <MemoQuoteCard text={item.text} origin={item.origin} tags={item.tags}
                                   setTagFilter={setTagFilter}/>,
        []
    );

    const keyExtractor = useCallback(
        (item) => item.id.toString(),
        []
    );

    const setTagFilter = (id) => {
        if (id === selectedTag) {
            setSelectedTag(null)
        } else {
            setSelectedTag(id)
        }
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={style.container}>
                {quotes && <Carousel
                    layout={"default"}
                    data={quotes}
                    sliderWidth={dimensions.width}
                    itemWidth={dimensions.width}
                    renderItem={renderItem}
                    onSnapToItem={index => setCurrentIndex(index)}/>
                }
            </View>
        </>
    );
};

const style = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        tag: {
            marginHorizontal: 3,
        },
        filters: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }
    }
);

export default QuoteScreen;
