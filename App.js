import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react';


const WEATHER_API_KEY = 'd3a89589f5a80565238fe82ff05581b9';
const BASE_WEATHER_URL = 'http://api.openweathermap.org/geo/1.0/reverse?'

export default function App() {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log(status);
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            const location = await Location.getCurrentPositionAsync({});

            const { latitude, longitude } = location.coords
            // alert(`Latitude : ${latitude}, Longitude: ${longitude}`)

            // const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}}&lon=${longitude}}&limit={5}&appid={d3a89589f5a80565238fe82ff05581b9}`
            // const weatherUrl = 'http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid={d3a89589f5a80565238fe82ff05581b9}';


            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=29&lon=21&units=metric&appid=d3a89589f5a80565238fe82ff05581b9`

            const response = await fetch(weatherUrl);

            const result = await response.json();

            if (response.ok) {
                setCurrentWeather(result);
                // const { main: { temp } } = currentWeather;
                console.log(result);
            } else {
                setErrorMsg(result.message);
            }

            setLocation(location);


        })();
    }, []);


    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


    return (

        <div className="wrapper" style={styles.wrapper}>
            <h1>Execute me</h1>
            <div style={styles.weather}>

            </div>
        </div>

    );

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },

    weather: {

    },
});
