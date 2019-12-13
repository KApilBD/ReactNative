import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text>SignupScreen</Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate("Signin")} />
            <Button title="Go to MainFlow" onPress={() => navigation.navigate("mainFlow")} />
        </>
    );
};

const style = StyleSheet.create({

});

export default SignupScreen;