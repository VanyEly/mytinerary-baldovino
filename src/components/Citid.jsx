import { StyleSheet, TextInput, ScrollView, View, Dimensions, Text } from 'react-native'
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
//import citiesActions from '../redux/actions/citiesActions';

import CityCard from './CityCard';

export default function Citid({navigation}) {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.filterCities(input))
    }, [input])

    const city = useSelector((store) => store.citiesReducer.filterCity)

    // console.log(city);

    let ScreenHeight = Dimensions.get("window").height
    return (
        <ScrollView>
            <View style={styles.card}>
            <TextInput  onChangeText={text => setInput(text)} placeholder="Search City..." />
            {city.length > 0 ?  city.map(city => <CityCard  city={city}  navigation={navigation} key={city._id}/>) 
                                    : 
            <Text style={{height:ScreenHeight}}>No results</Text>}
            </View>
        </ScrollView>
    )
}
let ScreenHeight = Dimensions.get("window").height
const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#6495ed',
        minHeight:ScreenHeight,
    },
});