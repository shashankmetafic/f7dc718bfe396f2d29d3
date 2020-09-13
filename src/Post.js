import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card, CardItem, Body, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Styles from './Styles';

const Post = ({post}) => {
  const navigation = useNavigation();
  const createdAt = new Date(post.created_at);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Json', {json: post})}>
      <Card style={Styles.card}>
        <CardItem header style={Styles.cardContent}>
          <Text style={Styles.title}>{post.title}</Text>
        </CardItem>
        <CardItem style={Styles.cardContent}>
          <Body>
            <Text style={Styles.url}>{post.url ?? 'URL Not Available'}</Text>
          </Body>
        </CardItem>
        <CardItem footer style={Styles.cardContent}>
          <Text style={Styles.author}>{post.author}</Text>
          <Text
            style={
              Styles.date
            }>{`Published: ${createdAt.toDateString()}`}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default Post;
