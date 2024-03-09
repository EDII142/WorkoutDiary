import { TextInput } from "react-native-paper";
import Styles from "../Styles";

const MyTextInput = ({ title, value, setValue }) => {
    return (
        <TextInput style={Styles.textInput}
            label={title}
            value={value}
            mode="outlined"
            keyboardType="numeric"
            maxLength={3}
            onChangeText={value => setValue(value)}
            outlineColor="#80d0ff"
            activeOutlineColor="#ff8090"/>
    )
}

export default MyTextInput;