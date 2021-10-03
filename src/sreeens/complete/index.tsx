import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {DEL_TODO} from '../../redux/actions/add';
import {styles} from './styles';

interface List {
  name: string;
  checked: boolean;
}
interface Render {
  item: List;
  index: number;
}
const Complete: React.FC = () => {
  const state = useSelector((state: any) => state.add);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [updateIndex, setUpdateIndex] = useState<number>(0);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressDel = (index = -1) => {
    if (index == -1) toggleModal();
    var oldList: List[] = [...state.data];
    oldList.splice(index >= 0 ? index : updateIndex, 1);
    dispatch({type: DEL_TODO, payload: oldList});
  };
  const renderItem=(value:Render) => {
    const {item, index} = value
    if (!item.checked) return null;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemChildContainer}>
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
        <View>
          <TouchableOpacity onPress={() => onPressDel(index)}>
            <AntDesign name="delete" size={20} color={'#e14949'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
            <Text style={styles.noDocumentTextColor}>Document not found</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Complete;
