import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#485563', '#29323c'],
        title: 'На районі іде дощ...',
        subtitle: 'Сиди вдома і хавай борщ...',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#bdc3c7', '#2c3e50'],
        title: 'На вулиці хмарно',
        subtitle: 'А значить прохладно',
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Блискає блискавка',
        subtitle: 'Вимикай телевізор з розетки',
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#003973', '#E5E5BE'],
        title: 'На вулиці дощик?',
        subtitle: 'Візьми парасольку',
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#E6DADA', '#274046'],
        title: 'Падав сніг На поріг,',
        subtitle: 'Кіт зліпив собі періг',
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#BBD2C5', '#536976', '#292E49'],
        title: 'Знову пилявука',
        subtitle: 'Прикривай ...',
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#00416A', '#E4E5E6'],
        title: 'Туманчик',
        subtitle: 'Легенький',
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Дим, дим заховай мене, дим -',
        subtitle: 'Я хотіла танцювати тільки з ним, з ним, з ним.',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#334d50', '#cbcaa5'],
        title: 'Там над травою поднялся туман,',
        subtitle: 'Где-то в прошлом мы, где-то там.',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#B2FEFA', '#0ED2F7'],
        title: 'Світить сонце в вишині',
        subtitle: 'Тобі світить і мені',
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#334d50', '#cbcaa5'],
        title: 'Красі дивуюся, розмитій  вдалині, В туман зануреній, ранковій тишині',
        subtitle: 'Не видно майже сонячного диска, Не чути  ані ластівки, ні плиски.',
    },

    Squall: {
        iconName: 'weather-windy',
        gradient: ['#000046', '#1CB5E0'],
        title: 'різке посилення швидкості вітру',
        subtitle: 'джентельмени тримайте капелюхи, а мадами спідниці',
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Стрімкий вихор великої руйнівної сили',
        subtitle: 'Ховайся!',
    },

}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style = {styles.halfContainer }>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color = "white"/>
                <Text style ={styles.temp}>{temp}°</Text>
            </View>
            <View style = {{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
               
            </View>
            </LinearGradient>
    );
}

Weather.protoTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm","Drizzle", "Rain", "Snow", "Clear", "Clouds", "Mist", "Smoke","Haze", "Dust", "Fog", "Squall", "Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    halfContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,

    },
    subtitle: {
        color: 'white',
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
})