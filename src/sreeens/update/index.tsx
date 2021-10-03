import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_UPDATE, DEL_TODO} from '../../redux/actions/add';
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

const Update: React.FC = () => {
  const state = useSelector((state: any) => state.add);
  const [todoName, setTodoName] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [updateIndex, setUpdateIndex] = useState<number>(0);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressAdd = () => {
    if (todoName == '') return;
    setTodoName('');
    toggleModal();
    const oldList: List[] = [...state.data];
    oldList[updateIndex] = {
      name: todoName,
      checked: state.data[updateIndex].checked,
    };
    dispatch({type: ADD_UPDATE, payload: oldList});
  };

  const onPressDel = (index = -1) => {
    if (index == -1) toggleModal();
    var oldList: List[] = [...state.data];
    oldList.splice(index >= 0 ? index : updateIndex, 1);
    dispatch({type: DEL_TODO, payload: oldList});
  };

  const onListPress: ListPress = (item, index) => {
    toggleModal();
    setTodoName(item.name);
    setUpdateIndex(index);
  };

  const renderItem = (value: Render) => {
    const {item, index} = value;
    return (
      <TouchableOpacity onPress={() => onListPress(item, index)}>
        <View style={styles.itemContainer}>
          <View style={styles.itemChildContainer}>
            <Text
              style={[
                styles.itemText,
                {
                  textDecorationLine: item.checked ? 'line-through' : 'none',
                },
              ]}>
              {item.name}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => onPressDel(index)}>
              <AntDesign name="delete" size={20} color={'#e14949'} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state.data.length > 0 ? (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state.data}
              renderItem={renderItem}
            />
          </>
        ) : (
          <View style={styles.noDocumentContainer}>
            <Ionicons name="ios-document-text" size={100} color={'#dbdbdb'} />
            <Text style={styles.noDocumentText}>Document not found</Text>
          </View>
        )}
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modalInput}
            value={todoName}
            onChangeText={setTodoName}
            placeholderTextColor={'grey'}
            placeholder={"Type to add TODO's"}
            multiline={true}
          />
          <TouchableOpacity style={styles.addUpdateButton} onPress={onPressAdd}>
            <Text style={styles.addupdateButtonText}>UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onPressDel(-1)}>
            <Text style={styles.deleteButtonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Update;
