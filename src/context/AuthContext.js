import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { token: action.payload, errorMessage: "" };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        case "signout":
            return { token: null, errorMessage: "" };
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = AsyncStorage.getItem("token");
        if (token) {
            dispatch({ type: "signin", payload: token });
            navigate("TrackList");
        } else {
            navigate("Signup");
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: "clear_error_message" });
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post("/signup", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signin", payload: response.data.token });
            navigate("TrackList");
        } catch (error) {
            dispatch({ type: "add_error", payload: "Something went wrong with sign up" });
        }
    }
}

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signin", payload: response.data.token });
            navigate("TrackList");
        } catch (err) {
            dispatch({ type: "add_error", payload: "Something went wrong with sign in" })
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem("token");
        dispatch({ type: "signout" });
        navigate("loginFlow");
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signout, signin, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: "" }
);