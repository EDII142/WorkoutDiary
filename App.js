import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomNavigation } from "react-native-paper";
import AddWorkoutScreen from './screens/AddWorkoutScreen';
import ListOfWorkoutsScreen from './screens/ListOfWorkoutsScreen';
import SettingsScreen from './screens/SettingsScreen';
import Styles from "./Styles";
import { PostContext } from "./components/Contexts";

export default function App(){
    const [post, setPost] = useState([]);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: "AddWorkout", title: "Add a workout", focusedIcon: "plus-circle-outline", unfocusedIcon: "plus-circle"},
        {key: "ListOfWorkouts", title: "List of workouts", focusedIcon: "clipboard-list-outline", unfocusedIcon: "clipboard-list"},
        {key: "Settings", title: "Settings page", focusedIcon: "cog-outline", unfocusedIcon: "cog"}
    ]);

    const scene = BottomNavigation.SceneMap({
        AddWorkout: AddWorkoutScreen,
        ListOfWorkouts: ListOfWorkoutsScreen,
        Settings: SettingsScreen
    });

    return (
        <PostContext.Provider value={{ post, setPost }}>
            <SafeAreaProvider style={Styles.bodyContainer}>
                <BottomNavigation
                navigationState={{index, routes}}
                onIndexChange={setIndex}
                renderScene={scene}
                barStyle={Styles.barStyle}
                activeIndicatorStyle={Styles.activeIndicatorStyle}/>
            </SafeAreaProvider>
        </PostContext.Provider>
    );
}