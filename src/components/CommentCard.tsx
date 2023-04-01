import {Avatar} from '@rneui/base';
import {StyleSheet, Text, View} from 'react-native';
import {Comment} from '../types';

interface CommentCardProps {
  comment: Comment;
}
export default function CommentCard({comment}: CommentCardProps) {
  return (
    <View style={styles.container}>
      <Avatar size={32} rounded source={require('../../assets/avatar.png')} />
      <View style={styles.content}>
        <Text>
          <Text style={{fontWeight: 'bold'}}>{comment.user.name} </Text>- 20min
        </Text>
        <Text>{comment.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
  },
});
