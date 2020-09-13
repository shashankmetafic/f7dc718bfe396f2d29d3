import React from 'react';
import {Container, Content, Card, CardItem, Body, Text} from 'native-base';
import Styles from './Styles';

const Json = ({route}) => {
  const {json} = route.params;

  return (
    <Container>
      <Content>
        <Card style={Styles.card}>
          <CardItem>
            <Text>{JSON.stringify(json)}</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Json;
