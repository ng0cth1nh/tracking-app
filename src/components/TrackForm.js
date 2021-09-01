import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
    const { state: { name, recording, locations }, changeName, startRecording, stopRecording } = useContext(LocationContext);
    console.log(locations.length);
    return (
        <>
            <Spacer>
                <Input
                    placeholder="Enter name"
                    value={name}
                    onChangeText={changeName}
                ></Input>
            </Spacer>
            {recording ? <Button title="Stop" onPress={stopRecording}></Button>
                : <Button title="Start Recording" onPress={startRecording}></Button>}
        </>
    )
}

export default TrackForm;