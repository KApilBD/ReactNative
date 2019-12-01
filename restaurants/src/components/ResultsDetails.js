import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetails = ({ result }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.imageStyles} source={{ uri: result.featured_image }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.user_rating.aggregate_rating} Stars, {result.all_reviews_count} Reviws</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    imageStyles: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultDetails;