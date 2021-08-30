import React, { useState, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';


const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            ></Input>
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            ></Input>          
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer/>
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signup({ email, password })}
                ></Button>
            </Spacer>
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
        marginBottom: 250
    },
    errorMessage:{
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});


export default SignupScreen;
