import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#85c7bf',
    },
    background: {
      backgroundColor: '#85c7bf',
    },
    itemContainer: {
      flexDirection: 'row',
      margin: 8,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    itemText: {
      paddingLeft: 10,
      paddingRight: 15,
      fontSize: 15,
    },
    blankDocument:{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#85c7bf',
    },
    plusButton:{
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: 'white',
      borderRadius: 100,
    },
    languageButton:{
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 70,
      right: 10,
      backgroundColor: '#075E54',
      borderRadius: 100,
      padding: 10,
    },
    addModalContainer:{flex: 1, justifyContent: 'center'},
    addTODO:{textAlign: 'center', color: 'white'},
    addButton:{backgroundColor: '#128C7E', padding: 10, borderRadius: 25},
    addButtonText:{color: 'white', textAlign: 'center', fontWeight: 'bold'}
  });
  