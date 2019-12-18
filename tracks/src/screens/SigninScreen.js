import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as authContext } from '../context/authContext';

const SigninScreen = () => {
    const { state, signin } = useContext(authContext);

    return (
        <View style={styles.container} >
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink
                text="Don't have an account? Sign up instead"
                routeName='Signup'
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;