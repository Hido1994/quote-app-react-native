import React, {useEffect} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import QuoteCard from "../components/QuoteCard";
import {useDispatch, useSelector} from "react-redux";
import {loadQuotes} from "../api/quotesApi";

const QuoteScreen = () => {
    const quotes = useSelector((state) => state['quotes'])
    const dispatch = useDispatch();

    useEffect(() => {
        loadQuotes(dispatch);
    }, []);
    
    return (
        <View style={style.container}>
            <FlatList
                data={quotes}
                keyExtractor={(item) => item.quote}
                renderItem={({item}) => <QuoteCard text={item.quote} author={item.author}/>}
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
