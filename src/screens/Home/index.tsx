import { Text, View } from "react-native"
import { Hamburguers } from "../../components/Hamburguers"
import { styles } from "./styles"

export default function Home(){

  const printButtonLabel = (item) => {
    console.log(item)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerWelcome}>
        Bem vindo ao
      </Text>

      <Text style={styles.headerTitle}>
        Saboroso Burguer
      </Text>

      <Hamburguers
        buttons={["DESTAQUES", "CARDÁPIO"]}
        doSomethingAfterClick={printButtonLabel}
      />
    </View>
  )
};