import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_TODO, ADD_CHECKED} from '../../redux/actions/add';
import {ADD_LANG} from '../../redux/actions/language';
import {Local} from '../../utils/multiLanguage';
import SelectLanguage from '../../components/selectLanguage';
import {styles} from './styles';

interface List {
  name: string;
  checked: boolean;
}

interface ListPress {
  (item: List, index: number): void;
}

interface Render {
  item: List;
  index: number;
}

const Add: React.FC = () => {
  const state = useSelector((state: any) => state.add);
  const LanguageState = useSelector((state: any) => state.language);
  const [list, setList] = useState(state.data);
  const [todoName, setTodoName] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isLanguageModalVisible, setLanguageModalVisible] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    Local.setLanguage(LanguageState.data);
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleLanguageModal = () => {
    setLanguageModalVisible(!isLanguageModalVisible);
  };
  const onPressAdd = () => {
    if (todoName == '') return;
    setTodoName('');
    toggleModal();
    const oldList: List[] = [...list];
    const newList: List[] = [...oldList, {name: todoName, checked: false}];
    setList(newList);
    dispatch({type: ADD_TODO, payload: {name: todoName, checked: false}});
  };

  const onListPress: ListPress = (item, index) => {
    var oldList = [...state.data];
    item.checked = !item.checked;
    oldList[index] = item;
    setList(oldList);
    dispatch({type: ADD_CHECKED, payload: oldList});
  };
  const onChangeLanguage = (selectedLanguage: string) => {
    dispatch({type: ADD_LANG, payload: selectedLanguage});
    Local.setLanguage(selectedLanguage);
    storeData(false);
  };
  const storeData = async (value: boolean) => {
    try {
      await AsyncStorage.setItem('displayLanguage', value.toString());
    } catch (e) {
      // saving error
    }
  };
  const renderItem=(value:Render) => {
      const {item, index} = value
      return(<TouchableOpacity onPress={() => onListPress(item, index)}>
        <View
          style={[
            styles.itemContainer,
            {backgroundColor: item.checked ? '#dbdbdb' : '#ffffff'},
          ]}>
          <TouchableOpacity onPress={() => onListPress(item, index)}>
            {item.checked ? (
              <AntDesign
                name="checkcircle"
                size={20}
                color={'#128C7E'}
              />
            ) : (
              <Entypo name="circle" size={20} color={'#128C7E'} />
            )}
          </TouchableOpacity>
          <Text
            style={[
              styles.itemText,
              {
                textDecorationLine: item.checked
                  ? 'line-through'
                  : 'none',
              },
            ]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  return (
    <SafeAreaView>
      <StatusBar animated={true} />
      <View style={styles.container}>
        {state.data.length > 0 ? (
          <>
            <FlatList
              style={styles.background}
              showsVerticalScrollIndicator={false}
              data={state.data}
              renderItem={renderItem}
            />
          </>
        ) : (
          <View
            style={styles.blankDocument}>
            <Ionicons name="ios-document-text" size={100} color={'#fff'} />
            <Text style={{color: 'white'}}>{Local.ClickOnPlus}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.plusButton}
          onPress={toggleModal}>
          <AntDesign name="pluscircle" size={50} color={'#075E54'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={toggleLanguageModal}>
          <Entypo name="language" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}>
        <View style={styles.addModalContainer}>
          <TextInput
            style={styles.addTODO}
            value={todoName}
            onChangeText={setTodoName}
            placeholderTextColor={'grey'}
            placeholder={Local.TYPE_TODO}
            multiline={true}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={onPressAdd}>
            <Text
              style={styles.addButtonText}>
              {Local.ADD}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {isLanguageModalVisible ? (
        <SelectLanguage onChangeLanguage={onChangeLanguage} />
      ) : null}
    </SafeAreaView>
  );
};

export default Add;
