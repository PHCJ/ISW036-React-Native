import { Button, StyleSheet, View } from "react-native";

export default function Atividade03() {
  return (
    <View style={styles.container}>
      <View style={styles.contente}>
        <View>
          <Button title="/" />
          <Button title="7" />
          <Button title="4" />
          <Button title="1" />
        </View>
        <View>
          <Button title="+" />
          <Button title="8" />
          <Button title="5" />
          <Button title="2" />
        </View>
        <View>
          <Button title="*" />
          <Button title="9" />
          <Button title="6" />
          <Button title="3" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AC9",
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  contente: {
    flex:1,
    flexDirection:'row',
    width: 100,
    justifyContent:'space-between',
    alignItems:'center',
  },
  colunas: {

  },
});



/*
const buttons = [];
  for (let i = 1; i <= 9; i++) {
    buttons.push(<Button key={i} title={i.toString()} />);
  }
  return (
    <View style={styles.container}>
        <>
      <Button title="/" style={styles.buttons} />
      <Button title="+" style={styles.buttons} />
      <Button title="*" style={styles.buttons} />
      {buttons}
      </>
    </View>
  );
*/
