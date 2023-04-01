import {SafeAreaView, StyleSheet} from 'react-native';

export default function LoginScreen(): JSX.Element {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
