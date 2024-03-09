import { Text, View, ScrollView, FlatList } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { PostContext } from "../components/Contexts";
import { useContext, useEffect, useState } from "react";
import Styles from "../Styles";
import checked from "../components/RadioButton";

export default function ListOfWOrkoutsScreen(){
    const {post} = useContext(PostContext);
    const [metric, setMetric] = useState("km");

    const [runAmount, setRunAmount] = useState(0);
    const [swimAmount, setSwimAmount] = useState(0);
    const [skiAmount, setSkiAmount] = useState(0);

    const iconRun = props => <Avatar.Icon {...props} icon={"run"} color="#fff" theme={Styles.cardIconTheme}/>
    const iconSwim = props => <Avatar.Icon {...props} icon={"swim"} color="#fff"  theme={Styles.cardIconTheme}/>
    const iconSki = props => <Avatar.Icon {...props} icon={"ski"} color="#fff"  theme={Styles.cardIconTheme}/>

    // Calculating sum of activities, doesn't work, stuck on infinite loop and resets values each time loop runs
    /* useEffect(() => {
        post.map((post) => {
            if (post.sport === "run") {
                let run = runAmount + post.distance;
                setRunAmount(run);
            } else if (post.sport === "swim") {
                let swim = swimAmount + post.distance;
                setSwimAmount(swim);
            } else if (post.sport === "ski") {
                let ski = swimAmount + post.distance;
                setSkiAmount(ski);
            }
    });
    }, [post]); */

    // Handling changing from kilometers to miles, doesn't work
    /* useEffect(() => {
        if (checked === "Miles") {
            setMetric("Miles");
            setRunAmount(runAmount * 0.62137).result.toFixed(2);
            setSwimAmount(swimAmount * 0.62137).result.toFixed(2);
            setSkiAmount(skiAmount * 0.62137).result.toFixed(2);
            setDistance(distance * 0.62137).result.toFixed(2);
        } else if (checked === "Kilometers") {
            setMetric("Kilometeres");
            setRunAmount(runAmount * 1.60934).result.toFixed(2);
            setSwimAmount(swimAmount * 1.60934).result.toFixed(2);
            setSkiAmount(skiAmount * 1.60934).result.toFixed(2);
            setDistance(distance * 1.60934).result.toFixed(2);
        } 
    }, [checked]); */

    // Listing workouts
    function Item({ post }){
        // Time formatting
        const time = post.date.substring(5, 7) + "." + post.date.substring(8, 10) + "." + post.date.substring(0, 4);

        // Card icon
        const leftContent = props => <Avatar.Icon {...props} icon={post.sport} color="#fff" theme={Styles.cardIconTheme}/>
        
        const distance = post.distance;

        return(
            <View>
                <ScrollView>
                    <Card style={Styles.card}>
                        <Card.Title title={time} left={leftContent} titleStyle={Styles.cardTitle}/>
                        <Text style={Styles.cardText}>Distance: {distance}{metric}</Text>
                        <Text style={Styles.cardText}>Duration: {post.duration}min</Text>
                    </Card>
                </ScrollView>
            </View>
        )
    }

    return (
        <View>
            <View style={Styles.sideWaysContainer}>
                <Card style={Styles.sideWaysCards} mode="contained">
                    <Card.Title title={post.date} left={iconRun}/>
                    <Text style={Styles.textInContainer}>{runAmount}{metric}</Text>
                </Card>
                <Card style={Styles.sideWaysCards} mode="contained">
                    <Card.Title title={post.date} left={iconSwim}/>
                    <Text style={Styles.textInContainer}>{swimAmount}{metric}</Text>
                </Card>
                <Card style={Styles.sideWaysCards} mode="contained">
                    <Card.Title title={post.date} left={iconSki}/>
                    <Text style={Styles.textInContainer}>{skiAmount}{metric}</Text>
                </Card>
            </View>
            <View style={Styles.flatlistView} >
                <FlatList data={post} renderItem={({ item }) => <Item post={item}/> }/>
            </View>
        </View>
    )
}