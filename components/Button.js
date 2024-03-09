import { Button } from "react-native-paper";
import Styles from "../Styles";

const MyButton = ({ value }) => {
    return (
        <Button style={Styles.button} mode="contained" onPress={value} labelStyle={Styles.buttonText}>Add workout</Button>
    )
}

export default MyButton;