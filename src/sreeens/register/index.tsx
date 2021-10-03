import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Local} from '../../utils/multiLanguage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {ADD_USER} from '../../redux/actions/user';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

const register: React.FC = ({navigation}) => {
  const [name, setName] = useState<string>('');
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
    if (name == '') {
      errors.name = 'Name is required !';
    }
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
      dispatch({
        type: ADD_USER,
        payload: {name: name, email: email, password: password,isLogin:false},
      });
      Alert.alert('Message','Sucessfully Registered!');
      setName('');
      setEmail('');
      setPassword('');
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={styles.introContainer}>
          <Text
            style={styles.welcometext}>
            Welcome
          </Text>
          <Text style={styles.to}>
            to <Text style={styles.notiestic}>Notiestic.</Text>
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View style={styles.emailContainer}>
              <MaterialCommunityIcons
                name="email-outline"
                size={32}
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
            <View style={styles.emailContainer}>
              <Ionicons
                name="person-circle-outline"
                size={33}
                color={'#59b78e'}
              />
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder={Local.ENTER_YOUR_NAME}
              />
            </View>
            {errors.name != '' && (
              <Text style={styles.error}>{errors.name}</Text>
            )}
            <View
              style={styles.emailContainer}>
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
              <Text style={styles.updateButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alreadyHaveAccountContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.alreadyText}>
                Already have an account?{' '}
                <Text style={styles.loginText}>Log In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default register;
