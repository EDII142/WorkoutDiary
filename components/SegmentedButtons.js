import { SafeAreaView } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import Styles from "../Styles";

const MySegmentedButtons = ({ value, setValue }) => {
    return (
        <SafeAreaView style={Styles.segmentedButtonsContainer}>
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={[
                { value: "run", label: "Run", icon: "run"},
                { value: "swim", label: "Swim", icon: "swim"},
                { value: "ski", label: "Ski", icon: "ski"}
                ]}
                theme={Styles.segmentedButtonsTheme}/>
        </SafeAreaView>
    )
}

export default MySegmentedButtons;