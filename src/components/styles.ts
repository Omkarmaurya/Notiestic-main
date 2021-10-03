import { StyleSheet } from "react-native";
import { THEME, WHITE } from '../utils/colors'

export const Styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', height: '80%' },
    titleContainer: {
        backgroundColor: THEME,
        padding: 10,
        borderRadius: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    backgroundColor: {
        backgroundColor: 'rgba(18,140,126, 0.2)',
        flexDirection: 'row',
    },
    languageButton: {
        flexDirection: 'row',
        margin: 10,
        flex: 0.5,
        backgroundColor: 'rgba(100,100,100, 0.3)',
        padding: 5,
        borderRadius: 10,
    },
    languageView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(18,140,126, 0.4)',
        justifyContent: 'center',
    },
    languageShort: { fontSize: 20, textAlign: 'center', color: WHITE },
    languageText: {
        color: WHITE,
        justifyContent: 'center',
        textAlignVertical: 'center',
        paddingLeft: 15,
    }
})