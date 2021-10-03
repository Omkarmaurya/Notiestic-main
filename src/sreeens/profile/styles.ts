import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 30,
  },
  input: {
    alignSelf: 'center',
    width: '90%',
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 8,
    borderColor: '#85c7bf',
    borderRadius: 20,
  },
  error: {
    color: 'red',
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 10,
  },
  updateButtonContainer: {width: '90%', alignSelf: 'center'},
  updateButton: {
    backgroundColor: '#128C7E',
    padding: 10,
    borderRadius: 25,
    width: '100%',
    marginTop: 20,
  },
  updateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});