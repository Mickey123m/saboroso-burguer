import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"

export function Hamburguers() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttom1}>
            <Text style={styles.textButton1}>DESTAQUES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttom2}>
            <Text style={styles.textButton2}>CARDÁPIO</Text>
        </TouchableOpacity>
    </View>
  )
}