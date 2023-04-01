import {
  faComment,
  faShareSquare,
  faThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Avatar} from '@rneui/themed';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Post} from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({post}: PostCardProps) {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.head}>
          <Avatar size={32} rounded source={require('../../assets/logo.png')} />
          <View>
            <Text style={{fontWeight: 'bold'}}>{post.user.name}</Text>
            <Text style={{fontSize: 12}}>
              {'Perth'} - <Text>37m</Text>
            </Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisV} />
      </View>
      <View style={styles.body}>
        <Text>{post.content}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <Text>Like</Text>
        </View>
        <View style={styles.action}>
          <FontAwesomeIcon icon={faComment} />
          <Text>Comment</Text>
        </View>
        <View style={styles.action}>
          <FontAwesomeIcon icon={faShareSquare} />
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  head: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  body: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
