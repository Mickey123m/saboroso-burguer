import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-around",
    },

    buttom1: {
        width: "40%",
        backgroundColor: "#EDD925",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 10
    },

    buttom2: {
        width: "40%",
        backgroundColor: "#232222",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 2,
    },

    textButton1: {
        color: "#000000"
    },

    textButton2: {
        color: "#ffffff"
    }
});