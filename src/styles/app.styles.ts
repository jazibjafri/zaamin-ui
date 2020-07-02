import { StyleSheet } from 'react-native';
import { colors } from './constant.styles';

export const globalStyles = StyleSheet.create({
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexFullRow: {
        flex: 1,
        flexDirection: 'row',
    },
    flexFullColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    leftHalfScreen: {
        alignSelf: 'flex-start',
        width: '50%',
    },
    rightHalfScreen: {
        alignSelf: 'flex-end',
        width: '50%',
    },
    defaultButton: {
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: colors.grey,
        padding: '2%',
    },
    defaultButtonTitle: {
        fontSize: 13,
    },
    border: {
        borderWidth: 2,
        borderColor: 'red',
    },
    defaultInput: {
        borderWidth: 2,
        borderColor: colors.black,
        paddingVertical: 0,
        fontFamily: 'Oswald-Medium',
        fontSize: 15,
    },
    defaultError: {
        borderColor: colors.red,
        alignItems: 'center',
        marginBottom: 2,
        paddingHorizontal: 5,
        fontFamily: 'Oswald-ExtraLight',
    },
    defaultErrorText: {
        color: colors.red,
        fontSize: 12,
    },
});
