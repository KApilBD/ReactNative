import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await zomato.get('/restaurant', {
            params: {
                res_id: id
            }
        });
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style = {styles.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo, index) => {
                    return photo.photo.id
                }}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item.photo.url }} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 200,
        marginLeft: 30,
        marginTop: 10,
        borderRadius:8
    },
    textStyle:{
        alignSelf: 'center',
        marginTop: 10,
        color: 'gray',
        fontSize: 16
    }
});

export default ResultsShowScreen;