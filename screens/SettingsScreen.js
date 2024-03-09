import { View } from "react-native";
import { Card } from "react-native-paper";
import MyRadioButton from "../components/RadioButton";
import Styles from "../Styles";

export default function SettingsScreen(){
    return (
        <View>
            <Card style={Styles.card}>
                <Card.Title title="Change units" titleStyle={Styles.cardTitle}></Card.Title>
                <MyRadioButton/>
            </Card>
        </View>
    )
}