import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    width: '80%',
    height: '100%',
    marginTop: 30,
  },
  input: {
    alignSelf: 'center',
    width: '100%',
    height: 40,
    borderWidth: 0,
    paddingLeft: 8,
    borderColor: '#85c7bf',
    borderRadius: 20,
    fontSize:15
  },
  error: {
    color: 'red',
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 10,
    alignSelf:'flex-end'
  },
  updateButtonContainer: {width: '60%', alignSelf: 'center'},
  updateButton: {
    backgroundColor: '#aae3cd',
    padding: 15,
    borderRadius: 35,
    width: '100%',
    marginTop: 20,
  },
  updateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:17
  },
  introContainer:{
    backgroundColor: '#59b78e',
    width: '70%',
    padding: 30,
    borderBottomRightRadius: 50,
  },
  welcometext:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40,
  },
  to:{color: '#fff', fontSize: 40, fontWeight: 'bold'},
  notiestic:{color: '#fff'},
  inputContainer:{marginTop: 20, marginBottom: 50},
  emailContainer:{flexDirection: 'row', alignItems: 'center'},
  alreadyHaveAccountContainer:{alignSelf: 'center', marginTop: 50},
  alreadyText:{fontSize: 16, color: 'grey'},
  loginText:{color: '#59b78e'}
});