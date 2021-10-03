import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Local} from '../../utils/multiLanguage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_USER} from '../../redux/actions/user';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

const login: React.FC = ({navigation}) => {
  const state = useSelector((state: any) => state.user);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch();
  const validateEmail = (email: String) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const Add = () => {
    var errors: any = {};
    if (email == '') {
      errors.email = 'Email is required !';
    } else if (!validateEmail(email)) {
      errors.email = 'Enter valid email';
    }
    if (password == '') {
      errors.password = 'Password is required !';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
      setErrors({});
      if (state.email == email && state.password == password) {
        Alert.alert('Message', 'Login Sucessful');
        dispatch({
          type: ADD_USER,
          payload: {isLogin: true},
        });
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'MyTabs'}],
          }),
        );
      } else {
        Alert.alert('Message', 'Login Failed');
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.to}>
            to <Text style={styles.notietic}>Notiestic.</Text>
          </Text>
          <View style={styles.inputMainContainer}>
            <View style={styles.emailContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={33}
                color={'#59b78e'}
              />
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder={Local.ENTER_YOUR_EMAIL}
              />
            </View>
            {errors.email != '' && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <View style={styles.passwordContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={30}
                color={'#59b78e'}
              />
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder={Local.ENTER_YOUR_PASSWORD}
                secureTextEntry={true}
              />
            </View>
            {errors.password != '' && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>
          <View style={styles.updateButtonContainer}>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                Add();
              }}>
              <Text style={styles.updateButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dontHaveAccountContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.dontHaveText}>
                Doesn't have an account yet?{' '}
                <Text style={styles.signUpText}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;
