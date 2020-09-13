import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Content, Card, CardItem, Body, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

const Post = ({post}) => {
  const navigation = useNavigation();
  const createdAt = new Date(post.created_at);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Json', {json: post})}>
      <Card>
        <CardItem header>
          <Text>{post.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{post.url}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>{`Published: ${createdAt.toDateString()}`}</Text>
          <Text>{post.author}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default Post;
