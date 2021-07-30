import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import QuoteCard from "../components/QuoteCard";
import {useDispatch, useSelector} from "react-redux";
import {loadQuotes} from "../api/quotesApi";

const QuoteScreen = () => {
    const quotes = useSelector((state) => state['quotes'])
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        loadQuotes(dispatch, currentPage);
    }, []);

    const loadMore=()=>{
        console.log('well')
        const nextPage=currentPage+1;
        setCurrentPage(nextPage);
        loadQuotes(dispatch,nextPage)
    }

    return (
        <View style={style.container}>
            <FlatList
                data={quotes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <QuoteCard text={item.text} author={item.author} tags={item.tags}/>}
                //onEndReachedThreshold={0.5}
                //onEndReached={loadMore}
                //TODO
            />
        </View>
    );
};

const style = StyleSheet.create({
        container: {
            flex: 1,
        }
    }
);

export default QuoteScreen;
