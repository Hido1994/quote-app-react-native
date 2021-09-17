import React, {useCallback, useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {MemoQuoteCard} from "../components/QuoteCard";
import {useDispatch, useSelector} from "react-redux";
import {loadQuotes, loadTags} from "../api/quotesApi";
import {ActivityIndicator, Banner, Chip, IconButton} from "react-native-paper";
import {setQuotes} from "../app/quotesSlice";

const PAGE_LIMIT = 5

const QuoteScreen = ({navigation}) => {
    const status = useSelector((state) => state['status'])
    const quotes = useSelector((state) => state['quotes'])
    const tags = useSelector((state) => state['tags'])
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [moreData, setMoreData] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedTag, setSelectedTag] = useState(null);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon="filter-variant"
                    size={30}
                    onPress={() => setMenuOpen(current => {
                        return !current;
                    })}
                />
            ),
        });
    }, [navigation]);

    useEffect(() => {
        loadTags(dispatch).then()
    }, []);

    useEffect(() => {
        dispatch(setQuotes([]))
        setCurrentPage(0)
        loadQuotes(dispatch, 0, PAGE_LIMIT, selectedTag).then((result) => {
            setMoreData(result)
        })
    }, [selectedTag]);

    const loadMore = () => {
        if (!status['loading'] && moreData) {
            loadQuotes(dispatch, currentPage + 1, PAGE_LIMIT, selectedTag).then((result) => {
                setMoreData(result)
            })
            setCurrentPage(currentPage + 1);
        }
    }

    const renderItem = useCallback(
        ({item}) => <MemoQuoteCard text={item.text} author={item.author} tags={item.tags}
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
        setMenuOpen(false)
    }

    return (
        <>
            <Banner
                visible={menuOpen}
                actions={[
                    {
                        label: 'Hide',
                        onPress: () => {
                            setMenuOpen(false)
                        },
                    },
                ]}
            >
                <View style={style.filters}>
                    {tags['childTags'].map((tag) => <Chip selected={tag.id === selectedTag} onPress={() => setTagFilter(tag.id)}
                                             style={style.tag} key={tag.id}
                                             mode={'outlined'}>{tag.name}</Chip>)}
                </View>
            </Banner>
            <View style={style.container}>
                <FlatList
                    data={quotes}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    onEndReachedThreshold={0.1}
                    onEndReached={loadMore}
                    ListFooterComponent={status['loading'] ?
                        <View style={{padding: 10}}><ActivityIndicator animating={true}/></View> : null}
                />
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
