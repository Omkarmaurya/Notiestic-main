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
  welcomeText:{
    color: '#aae3cd',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40,
  },
  to:{color: '#aae3cd', fontSize: 40, fontWeight: 'bold'},
  notietic:{color: '#59b78e'},
  inputMainContainer:{marginTop: 80, marginBottom: 50},
  emailContainer:{flexDirection: 'row', alignItems: 'center'},
  passwordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  dontHaveAccountContainer:{alignSelf: 'center', marginTop: 50},
  dontHaveText:{fontSize: 16, color: 'grey'},
  signUpText:{color: '#59b78e'}
});