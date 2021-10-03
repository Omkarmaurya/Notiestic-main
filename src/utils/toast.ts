import Toast from 'react-native-simple-toast';

export const showToast = (msg: string) => {
    setTimeout(() => {
        Toast.show(msg, Toast.LONG);
    }, 400);
};