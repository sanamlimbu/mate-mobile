import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Post: {postId: string};
};

export type PostScreenProps = NativeStackScreenProps<
  StackParamList,
  'Post',
  'PostScreen'
>;

export type HomeScreenProps = NativeStackScreenProps<
  StackParamList,
  'Home',
  'HomeScreen'
>;
