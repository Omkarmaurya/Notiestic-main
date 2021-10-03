import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {ADD_LANG} from '../../redux/actions/language';
import {Local} from '../../utils/multiLanguage';
import SelectLanguage from '../../components/selectLanguage';
import {useSelector, useDispatch} from 'react-redux';

const MultiLanguage = ({navigation}) => {
  const state = useSelector((state: any) => state.language.data);
  const [isCountryModalVisible, setCountryModalVisible] =
    useState<boolean>(true);
  const toggleCountryModal = () => {
    setCountryModalVisible(!isCountryModalVisible);
  };
  const [displayLanguage, setDisplayLanguage] = React.useState(true);

  React.useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();

  const onChangeLanguage = (selectedLanguage: string) => {
    dispatch({type: ADD_LANG, payload: selectedLanguage});
    Local.setLanguage(selectedLanguage);
    toggleCountryModal();
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Login'}],
      }),
    );
    storeData(false);
  };
  const storeData = async (value: boolean) => {
    try {
      await AsyncStorage.setItem('displayLanguage', value.toString());
    } catch (e) {
      // saving error
    }
  };

  const getData = () => {
    try {
      if (state!='') {
        setDisplayLanguage(false);
        // navigation.navigate('MyTabs');
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Login'}],
          }),
        );
      } else {
        setDisplayLanguage(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {!displayLanguage ? (
        <ActivityIndicator size="small" color="#128C7E" />
      ) : (
        <SelectLanguage onChangeLanguage={onChangeLanguage} />
      )}
    </View>
  );
};

export default MultiLanguage;
