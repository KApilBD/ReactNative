import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/resultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [serachText, setserachText] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResultsByPrice = (price1, price2) => {
    return results.filter(result => {
        return result.restaurant.average_cost_for_two > price1 && result.restaurant.average_cost_for_two <= price2
    })
    }

    return <View>
        <SearchBar
            serachText={serachText}
            onSearchTextChange={(newSearchText) => setserachText(newSearchText)}
            onSearchSubmit={() => searchApi(serachText)}
        />
        {error ? <Text>{error}</Text> : null}
        <Text>We have found {results.length} results...</Text>
        <ResultList results={filterResultsByPrice(0,650)} title="Cost Effective" />
        <ResultList results={filterResultsByPrice(651,1250)} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice(1251,2000)} title="Big Spender" />
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;