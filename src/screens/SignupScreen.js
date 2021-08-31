import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { View, StyleSheet } from 'react-native';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            ></NavigationEvents>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            ></AuthForm>
            <NavLink routeName="Signin" text="Already have account? Sign in."></NavLink>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});


export default SignupScreen;
