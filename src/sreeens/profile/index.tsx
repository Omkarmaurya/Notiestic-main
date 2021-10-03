import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Local} from '../../utils/multiLanguage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {ADD_USER,LOGOUT} from '../../redux/actions/user';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

const profile: React.FC = ({navigation}) => {
  const state = useSelector((state: any) => state.user);
  const [name, setName] = useState<string>(state.name);
  const [email, setEmail] = useState<string>(state.email);
  const [password, setPassword] = useState<string>(state.password);
  const [errors, setErrors] = useState<any>({});
  const [editable, setEditable] = useState<boolean>(false);
  const dispatch = useDispatch();
  const validateEmail = (email: String) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const Add = () => {
    if (state.name != '' && !editable) {
      setEditable(true);
      return;
    }
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
      setEditable(false);
      setErrors({});
      dispatch({
        type: ADD_USER,
        payload: {name: name, email: email, password: password, isLogin: true},
      });
    }
  };

  const Logout = () => {
    dispatch({
      type: LOGOUT
    });
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
  }

  useEffect(() => {
    if (state.name == '') {
      setEditable(true);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', (e: any) => {
      setName(state.name)
      setEmail(state.email)
      setPassword(state.password)
      setErrors({});
      setEditable(false);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Ionicons
            name="person-circle"
            size={200}
            color={'#85c7bf'}
            style={{alignSelf: 'center'}}
          />
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder={Local.ENTER_YOUR_NAME}
            editable={editable}
          />
          {errors.name != '' && <Text style={styles.error}>{errors.name}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder={Local.ENTER_YOUR_EMAIL}
            editable={editable}
          />
          {errors.email != '' && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder={Local.ENTER_YOUR_PASSWORD}
            editable={editable}
            secureTextEntry={true}
          />
          {errors.password != '' && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <View style={styles.updateButtonContainer}>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                Add();
              }}>
              {state.name == '' ? (
                <Text style={styles.updateButtonText}>{Local.ADD}</Text>
              ) : (
                <Text style={styles.updateButtonText}>
                  {editable ? Local.UPDATE : Local.EDIT}
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.updateButtonContainer}>
            <TouchableOpacity
              style={[styles.updateButton,{backgroundColor:'#ff726f'}]}
              onPress={() => {
                Logout();
              }}>
              <Text style={styles.updateButtonText}>{Local.LOGOUT}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
