import {Avatar} from '@rneui/base';
import {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import CommentCard from '../components/CommentCard';
import {API_ADDRESS} from '../config';
import {Post} from '../types';
import {PostScreenProps} from '../types/navigation';

export default function PostScreen({route, navigation}: PostScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(
          `${API_ADDRESS}/api/posts/${route.params.postId}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
            },
          },
        );
        if (res.ok) {
          const data: Post = await res.json();
          setPost(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <ScrollView style={{paddingHorizontal: 10}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View
            style={{
              backgroundColor: 'white',
              marginVertical: 10,
              padding: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
              }}>
              <Avatar
                size={32}
                rounded
                source={require('../../assets/avatar.png')}
              />
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Sanam Limbu</Text>
                <Text>Perth - 4d</Text>
              </View>
            </View>
            <Text>{post?.content}</Text>
          </View>
          {post?.comments?.map(c => (
            <CommentCard key={c.id} comment={c} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}
