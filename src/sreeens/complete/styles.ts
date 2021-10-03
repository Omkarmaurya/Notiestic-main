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
  noDocumentTextColor: {color: 'grey'},
});