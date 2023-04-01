import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text} from '@rneui/base';
import {StyleSheet, View} from 'react-native';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <FontAwesomeIcon icon={faHome} />
        <Text>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {},
});
