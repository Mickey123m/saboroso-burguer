import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
    },

    button: {
        width: "30%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#5A5858"
    },

    buttonActive: {
        width: "30%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EDD925",
        borderWidth: 2,
        borderColor: "black",
    },

    text: {
        color: "#EDD925"
    },

    textActive: {
        color: "black"
    }
})