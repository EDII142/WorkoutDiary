import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    barStyle: {
        backgroundColor: "#80d0ff"
    },

    activeIndicatorStyle: {
        backgroundColor: "#ff8090"
    },

    bodyContainer: {
        marginTop: StatusBar.currentHeight + 20,
        padding: 10
    },

    segmentedButtonsContainer: {
        paddingBottom: 10
    }, 

    segmentedButtonsTheme: {
        colors: { secondaryContainer: "#ff8090", outline: "#80d0ff", onSecondaryContainer: "#fff" }
    },

    textInput: {
        margin: 10
    },

    calendar: {
        paddingBottom: 10,
        paddingTop: 10
    },

    button: {
        fontSize: 18,
        margin: 10,
        backgroundColor: "#80d0ff"
    },

    buttonText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center"
    },

    card: {
        marginBottom: 20,
        marginingTop: 20,
        padding: 10,
        paddingBottom: 20,
        backgroundColor: "#80d0ff"
    },

    cardTitle: {
        fontSize: 18,
        color: "#fff"
    },

    cardText: {
        fontSize: 18,
        marginLeft: 15,
        color: "#fff"
    },

    cardIconTheme: {
        colors: { primary: "#ff8090" }
    },

    sideWaysContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 24
    },

    sideWaysCards: {
        flexDirection: "row",
        justifyContent: "center",
        width: 80,
        backgroundColor: "#80d0ff"
    },

    text: {
        fontSize: 18,
        textAlign: "center",
        paddingBottom: 10
    },

    textInContainer: {
        fontSize: 18,
        textAlign: "center",
        paddingBottom: 10,
        color: "#fff"
    },

    flatlistView: {
        marginBottom: 270
    },

    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 34
    },

    radioButtonText: {
        fontSize: 18,
        color: "#fff",
        width: 110
    }
})