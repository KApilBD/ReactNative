import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({serachText,onSearchTextChange,onSearchSubmit}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <EvilIcons name = "search" style = {styles.iconStyle} />
            <TextInput 
                style = {styles.inputStyle}
                autoCapitalize = "none"
                autoCorrect = {false}
                placeholder = "Search"
                value = {serachText}
                onChangeText = {newSerachText=>onSearchTextChange(newSerachText)}
                onEndEditing = {() => onSearchSubmit()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle : {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 50,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;