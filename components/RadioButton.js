import { RadioButton } from "react-native-paper";
import { Text, View } from "react-native";
import { useState } from "react";
import Styles from "../Styles";

const MyRadioButton = () => {
    const [checked, setChecked] = useState("Kilometers");

    return (
        <View>
            <View style={Styles.radioButtonContainer}>
                <Text style={Styles.radioButtonText}>Kilometers</Text>
                <RadioButton value="Kilometers"
                    status={ checked === "Kilometers" ? "checked" : "unchecked" }
                    onPress={() => setChecked("Kilometers")}
                    uncheckedColor="#fff"
                    color="#ff8090"/>
            </View>
            <View style={Styles.radioButtonContainer}>
                <Text style={Styles.radioButtonText}>Miles</Text>
                <RadioButton value="Miles"
                    status={ checked === "Miles" ? "checked" : "unchecked" }
                    onPress={() => setChecked("Miles")}
                    uncheckedColor="#fff"
                    color="#ff8090"/>
            </View>
        </View>
    )
}

export default MyRadioButton; 