import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const resultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.restaurant.id}
                renderItem={({ item, }) => {
                    return <Text>{item.restaurant.name} | </Text>
                }}
            />
            <Text>Results: {results.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default resultsList;