import {React} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LogoutButton from '../components/Buttons/LogoutButton';
import ProfileContainer from '../components/SettingsScreen/ProfileContainer';
import TextComponent from '../components/Text/TextComponent';
import {settingOptionsData} from '../data/SettingOptionsData';
import Metrics from '../theme/Metrics';

const SettingsScreen = () => {
  const renderSettingOption = ({item}) => (
    <View style={styles.optionContainer}>
      <TextComponent
        text={item.title}
        type="SemiBold"
        size={14}
        color="white"
      />
      <Image source={item.icon} />
    </View>
  );

  // const handleModal = () => setModalVisible(() => !modalVisible);

  return (
    <ScrollView style={styles.rootContainer}>
      <ProfileContainer />

      <FlatList
        data={settingOptionsData}
        keyExtractor={item => item.id}
        renderItem={renderSettingOption}
      />

      <LogoutButton />
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flexGrow: 1,
    padding: Metrics.scale(30),
    marginBottom: Metrics.scale(30),
  },
  optionContainer: {
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.87,
    justifyContent: 'space-between',
    marginVertical: Metrics.scale(13),
    height: Metrics.scale(40),
  },
});
