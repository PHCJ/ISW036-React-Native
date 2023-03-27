import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 30,
  },
  btnStyle: {
    backgroundColor: "#00FF7F",
    borderRadius: 10,
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:10,
  },
  btnText: {
    fontSize: 24,
    color: "#000",
  },
  msg: {
    fontSize: 30,
  },
});
export default styles;
