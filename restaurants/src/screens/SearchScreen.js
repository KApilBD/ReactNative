import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [serachText, setserachText] = useState('');

    return <View>
        <SearchBar 
            serachText = {serachText} 
            onSearchTextChange={(newSearchText) => setserachText(newSearchText)}
            onSearchSubmit = {() => console.log("Submitteddddddddddddd")}
        />
        <Text>Search Screen</Text>
        <Text>{serachText}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;