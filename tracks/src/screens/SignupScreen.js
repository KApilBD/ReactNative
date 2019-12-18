import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as authContext } from '../context/authContext';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(authContext);

    return (
        <View style={styles.container} >
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                text="Already have an account? Sign in instead"
                routeName='Signin'
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null,
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 180
    }
});

export default SignupScreen;