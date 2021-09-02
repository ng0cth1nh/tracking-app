import React, { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {

    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map></Map>
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm></TrackForm>
        </SafeAreaView>
    );
};

export default withNavigationFocus(TrackCreateScreen);
