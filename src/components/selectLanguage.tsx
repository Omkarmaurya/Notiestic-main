import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {THEME} from '../utils/colors';
import {Styles} from './styles';
import {SMALL} from '../utils/globalConfig';

const SelectLanguage = (props: any) => {
  const {onChangeLanguage} = props;
  const [isCountryModalVisible, setCountryModalVisible] =
    useState<boolean>(true);
  const toggleCountryModal = () => {
    setCountryModalVisible(!isCountryModalVisible);
  };
  const [displayLanguage, setDisplayLanguage] = React.useState(true);

  return (
    <Modal
      isVisible={isCountryModalVisible}
      onBackButtonPress={toggleCountryModal}
      onBackdropPress={toggleCountryModal}>
      <View style={Styles.container}>
        {!displayLanguage ? (
          <ActivityIndicator size={SMALL} color={THEME} />
        ) : (
          <>
            <View style={Styles.titleContainer}>
              <Text style={Styles.title}>Select Your Language</Text>
            </View>
            <View style={Styles.backgroundColor}>
              <TouchableOpacity
                style={Styles.languageButton}
                onPress={() => {
                  onChangeLanguage('en');
                }}>
                <View style={Styles.languageView}>
                  <Text style={Styles.languageShort}>E</Text>
                </View>
                <Text style={Styles.languageText}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.languageButton}
                onPress={() => {
                  onChangeLanguage('hi');
                }}>
                <View style={Styles.languageView}>
                  <Text style={Styles.languageShort}>हिं</Text>
                </View>
                <Text style={Styles.languageText}>हिंदी</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.backgroundColor}>
              <TouchableOpacity
                style={Styles.languageButton}
                onPress={() => {
                  onChangeLanguage('gu');
                }}>
                <View style={Styles.languageView}>
                  <Text style={Styles.languageShort}>ગુ</Text>
                </View>
                <Text style={Styles.languageText}>ગુજરાતી</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.languageButton}
                onPress={() => {
                  onChangeLanguage('ma');
                }}>
                <View style={Styles.languageView}>
                  <Text style={Styles.languageShort}>म</Text>
                </View>
                <Text style={Styles.languageText}>मराठी</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

export default SelectLanguage;
