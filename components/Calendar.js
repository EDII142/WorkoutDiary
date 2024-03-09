import { Calendar } from "react-native-calendars";
import Styles from "../Styles";

const MyCalendar = ({ selected, setSelected }) => {
    return (
        <Calendar onDayPress={day => {
            setSelected(day.dateString);
            }}
            markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedColor: "#ff8090"}
            }}
            style={Styles.calendar}/>
    )
}

export default MyCalendar;