import React, { useContext }from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({ navigation}) => {
    const {state} = useContext(TrackContext);
    const id = navigation.getParam('id');
    const track = state.find(track => track._id === id);
    const initialCoords = track.locations[0].coords;
    return (
        <View>
            <Text style={{fontSize: 48}}>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)}></Polyline>
            </MapView>
        </View>
    );
};

TrackDetailScreen.navigationOptions = {
    title: 'Track Detail'
}

const styles = StyleSheet.create({
    map: {
        height:350
    }
});

export default TrackDetailScreen;
