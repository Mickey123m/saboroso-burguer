import { Text, View } from "react-native"
import { styles } from "./styles"
import { Hamburguers } from "../../components/Hamburguers"

export default function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.headerWelcome}>
        Bem vindo ao
      </Text>

      <Text style={styles.headerTitle}>
        Saboroso Burguer
      </Text>

      <Hamburguers/>
    </View>
  )
};