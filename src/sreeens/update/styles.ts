import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#dbdbdb',
    margin: 8,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  itemChildContainer: {
    flexDirection: 'row',
    flex: 0.95,
    alignItems: 'center',
  },
  itemText: {
    paddingLeft: 5,
    fontSize: 15,
  },
  noDocumentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  noDocumentText: {color: 'grey'},
  modalContainer: {flex: 1, justifyContent: 'center'},
  modalInput: {textAlign: 'center', color: 'white'},
  addUpdateButton: {backgroundColor: '#128C7E', padding: 10, borderRadius: 25},
  addupdateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#e14949',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
  },
  deleteButtonText: {color: 'white', textAlign: 'center', fontWeight: 'bold'},
});