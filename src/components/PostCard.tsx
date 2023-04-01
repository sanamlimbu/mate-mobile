import {
  faComment,
  faHeart,
  faShareSquare,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Avatar} from '@rneui/themed';
import {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Post} from '../types';

interface PostCardProps {
  post: Post;
  onPress: () => void;
}

export default function PostCard({post, onPress}: PostCardProps) {
  useEffect(() => {}, []);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <Avatar
              size={36}
              rounded
              source={require('../../assets/logo.png')}
            />
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
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#d2b2d4', '#b2b7df']}
        style={styles.footer}>
        <View style={styles.action}>
          <FontAwesomeIcon icon={faHeart} />
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
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    padding: 16,
    marginBottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    gap: 12,
    alignItems: 'center',
  },
  body: {
    paddingTop: 5,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginTop: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
