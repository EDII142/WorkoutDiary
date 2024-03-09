import { PostContext } from "../components/Contexts";
import { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import MySegmentedButtons from "../components/SegmentedButtons";
import MyTextInput from "../components/TextInput";
import MyCalendar from "../components/Calendar";
import MyButton from "../components/Button";
import checked from "../components/RadioButton";

export default function AddWorkoutScreen(){
    const [sport, setSport] = useState("");
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const [selected, setSelected] = useState("");

    const [title, setTitle] = useState("Distance in kilometers");
    const {post, setPost} = useContext(PostContext);

    // Test data
    useEffect(() => {
        setPost([{sport: "ski", date: "2023-12-10", distance: 80, duration: 70},
        {sport: "swim", date: "2024-01-23", distance: 8, duration: 15},
        {sport: "run", date: "2024-01-27", distance: 7, duration: 40},
        {sport: "run", date: "2024-02-01", distance: 20, duration: 120},
        {sport: "swim", date: "2024-02-05", distance: 19, duration: 30}]);
    }, []);

    // Handles changing title to text input if miles are selected from settings, doesn't work
    /* if (checked === "Miles") {
        setTitle("Distance in miles");
    } else if (checked === "Kilometers") {
        setTitle("Distance in kilometers");
    } */

    // Adding workout
    function addWorkout(){
        if (sport === "") {
            Alert.alert("Missing a sport.");
        } else if (distance === "") {
            Alert.alert("Missing distance.");
            // Known bug, you can use , or . alone to bypass this check
        } else if (distance < 0.1) {
            Alert.alert("Distance can't be negative and it needs to be higher than 0.1!")
        } else if (duration === "") {
            Alert.alert("Missing duration.");
        } else if (duration < 0.1) {
            Alert.alert("Duration can't be negative and it needs to be higher than 0.1!")
        } else if (date === "") {
            Alert.alert("Missing a date.");
        } else {
            setPost(prev => [...prev, {sport, date, distance, duration}]);
            setSport("");
            setDistance("");
            setDuration("");
            setDate("");
            setSelected("");
        }
    }   

    return (
        <View>
            <MySegmentedButtons value={sport} setValue={setSport}/>
            <MyTextInput title={title} value={distance} setValue={setDistance}/>
            <MyTextInput title="Duration in minutes" value={duration} setValue={setDuration}/>
            <MyCalendar selected={date} setSelected={setDate}/>
            <MyButton value={addWorkout}></MyButton>
        </View>
    )
}