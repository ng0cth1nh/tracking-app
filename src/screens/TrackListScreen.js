import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';


const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <Button
                title="Go to Track details"
                onPress={() => navigation.navigate("TrackDetail")}
            ></Button>
        </>
    );
};

const styles = StyleSheet.create({

});


export default TrackListScreen;
