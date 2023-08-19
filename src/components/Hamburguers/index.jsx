import React, { useState } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

export const Hamburguers = ({ buttons, doSomethingAfterClick }) => {

    const [clickedId, setClickedId] = useState(0)

    const handleClick = (item, id) => {
        setClickedId(id)
        doSomethingAfterClick(item)
    }

    return (
        <View style={styles.container}>
            {
                buttons.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity
                            onPress={(item) => handleClick(item, index)}
                            key={index}
                        style={[
                            index === clickedId ? styles.buttonActive : styles.button,
                            index === 0? {borderRadius: 10} : "",
                            index === 1? {borderRadius: 10} : ""
                        ]}
                        >
                            <Text 
                                style={index === clickedId ? styles.textActive : styles.text}
                                >
                                    {buttonLabel}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}