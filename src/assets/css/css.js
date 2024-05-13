import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    containerMaps: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    image:{
      width: '100%',
      resizeMode: 'contain',
    },
    imageMaps: {
      width: 110,
      resizeMode: 'contain',
      left: '70%',
      bottom: '20%',
    },
    button: {
      backgroundColor: '#3498db',
      borderRadius: 5,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      padding: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    boldText: {
      fontSize: 23,
      fontWeight: 'bold',
      color: 'red',
    },
    text: {
      fontSize: 19,
      color: 'black',
      padding: 5,
    },
  map: {
    position: "relative",
    height: '100%',
    button: 0,
    right: 0,
    left: 0,
  },
  search: {
    position: "absolute",
    height: '50%',
    padding: 10,
    top: 0,
    right: 0,
    left: 0,
  },


  });
  